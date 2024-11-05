import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

const tableStyles = {
  container: "overflow-auto max-h-[600px] shadow-md rounded-lg",
  tableWrapper: "min-w-full divide-y divide-gray-200",
  stickyHeader: "bg-gray-50 sticky top-0 z-10",
  messageCell: "px-6 py-4 max-w-[100px] overflow-y-auto whitespace-pre-wrap",
  cell: "px-6 py-4 whitespace-nowrap"
};

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('queries');
  const navigate = useNavigate();
  const [downloadError, setDownloadError] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = cookies.get('TOKEN');
      const response = await axios.get('http://localhost:3000/api/fetchData', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response?.status === 401) {
        navigate('/admin/login');
      }
    }
  };

  const handleLogout = () => {
    cookies.remove('TOKEN', { path: '/' });
    navigate('/admin/login');
  };

  const handleDownload = async (filename, jobId) => {
    try {
      setDownloadStatus(prev => ({ ...prev, [jobId]: 'downloading' }));
      
      const response = await fetch(
        `http://localhost:3000/api/newjob/resume/${encodeURIComponent(filename)}`,
        {
          headers: {
            'Authorization': `Bearer ${cookies.get('TOKEN')}`
          }
        }
      );

      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setDownloadStatus(prev => ({ ...prev, [jobId]: 'success' }));
    } catch (error) {
      console.error('Download error:', error);
      setDownloadStatus(prev => ({ ...prev, [jobId]: 'error' }));
    }
  };

  if (!data) return <div>Loading...</div>;

  const renderContent = () => {
    switch (activeTab) {
      case 'queries':
        return (
          <div className={tableStyles.container}>
            <table className={tableStyles.tableWrapper}>
              <thead className={tableStyles.stickyHeader}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.queries.map((query) => (
                  <tr key={query._id} className="hover:bg-gray-50">
                    <td className={tableStyles.cell}>{query.firstName} {query.lastName}</td>
                    <td className={tableStyles.cell}>{query.email}</td>
                    <td className={tableStyles.messageCell}>{query.message}</td>
                    <td className={tableStyles.cell}>
                      {new Date(query.date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'projects':
        return (
          <div className={tableStyles.container}>
            <table className={tableStyles.tableWrapper}>
              <thead className={tableStyles.stickyHeader}>
                <tr>
                  {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th> */}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.projects.map((project) => (
                  <tr key={project._id} className="hover:bg-gray-50">
                    {/* <td className={tableStyles.cell}>{project._id}</td> */}
                    <td className={tableStyles.cell}>{project.name}</td>
                    <td className={tableStyles.cell}>{project.email}</td>
                    <td className={tableStyles.cell}>{project.phone}</td>
                    <td className={tableStyles.cell}>{project.jobTitle}</td>
                    <td className={tableStyles.cell}>{project.company}</td>
                    <td className={tableStyles.messageCell}>{project.message}</td>
                    <td className={tableStyles.cell}>
                      {new Date(project.date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'students':
        return (
          <div className={tableStyles.container}>
            <table className={tableStyles.tableWrapper}>
              <thead className={tableStyles.stickyHeader}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stream</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.students.map((student) => (
                  <tr key={student._id} className="hover:bg-gray-50">
                    <td className={tableStyles.cell}>{student.name}</td>
                    <td className={tableStyles.cell}>{student.email}</td>
                    <td className={tableStyles.cell}>{student.phone}</td>
                    <td className={tableStyles.cell}>{student.course}</td>
                    <td className={tableStyles.cell}>{student.stream}</td>
                    <td className={tableStyles.cell}>{student.college}</td>
                    <td className={tableStyles.messageCell}>{student.message}</td>
                    <td className={tableStyles.cell}>
                      {new Date(student.date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'getInTouches':
        return (
          <div className={tableStyles.container}>
            <table className={tableStyles.tableWrapper}>
              <thead className={tableStyles.stickyHeader}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th> */}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.getInTouches.map((touch) => (
                  <tr key={touch._id} className="hover:bg-gray-50">
                    <td className={tableStyles.cell}>{touch.fullName}</td>
                    <td className={tableStyles.cell}>{touch.email}</td>
                    {/* <td className={tableStyles.cell}>{touch.phone}</td> */}
                    <td className={tableStyles.messageCell}>{touch.message}</td>
                    <td className={tableStyles.cell}>
                      {new Date(touch.date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'jobApplications':
        return (
          <div className={tableStyles.container}>
            <table className={tableStyles.tableWrapper}>
              <thead className={tableStyles.stickyHeader}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.jobApplications.map((job) => (
                  <tr key={job._id} className="hover:bg-gray-50">
                    <td className={tableStyles.cell}>{job.fullName}</td>
                    <td className={tableStyles.cell}>{job.email}</td>
                    <td className={tableStyles.cell}>{job.phone}</td>
                    <td className={tableStyles.cell}>{job.selectedJobRole}</td>
                    <td className={tableStyles.cell}>{job.experience}</td>
                    <td className={tableStyles.cell}>
                      {job.resume && (
                        <div>
                          <button
                            onClick={() => handleDownload(job.resume, job._id)}
                            disabled={downloadStatus[job._id] === 'downloading'}
                            className={`text-indigo-600 hover:text-indigo-900 flex items-center gap-1 ${
                              downloadStatus[job._id] === 'downloading' ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                          >
                            {downloadStatus[job._id] === 'downloading' ? (
                              <span>Downloading...</span>
                            ) : downloadStatus[job._id] === 'error' ? (
                              <span className="text-red-500">Download failed. Try again</span>
                            ) : (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </td>
                    <td className={tableStyles.messageCell}>{job.message}</td>
                    <td className={tableStyles.cell}>
                      {new Date(job.date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'newJobs':
        return (
          <div className={tableStyles.container}>
            <table className={tableStyles.tableWrapper}>
              <thead className={tableStyles.stickyHeader}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WhatsApp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Personal Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Official Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passed Out Year</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.newJobs?.map((job) => (
                  <tr key={job._id} className="hover:bg-gray-50">
                    <td className={tableStyles.cell}>{job.fullName}</td>
                    <td className={tableStyles.cell}>{job.gender}</td>
                    <td className={tableStyles.cell}>{job.phoneNumber}</td>
                    <td className={tableStyles.cell}>{job.whatsappNumber}</td>
                    <td className={tableStyles.cell}>{job.personalEmail}</td>
                    <td className={tableStyles.cell}>{job.officialMail}</td>
                    <td className={tableStyles.cell}>{job.course}</td>
                    <td className={tableStyles.cell}>{job.branch}</td>
                    <td className={tableStyles.cell}>{job.collegeName}</td>
                    <td className={tableStyles.cell}>{job.passedOutYear}</td>
                    <td className={tableStyles.cell}>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${job.applicationStatus === 'accepted' ? 'bg-green-100 text-green-800' : 
                          job.applicationStatus === 'rejected' ? 'bg-red-100 text-red-800' : 
                          job.applicationStatus === 'under_review' ? 'bg-yellow-100 text-yellow-800' :
                          job.applicationStatus === 'shortlisted' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'}`}>
                        {job.applicationStatus.replace('_', ' ').toUpperCase()}
                      </span>
                    </td>
                    <td className={tableStyles.cell}>
                      {job.resume && (
                        <div>
                          <button
                            onClick={() => handleDownload(job.resume, job._id)}
                            disabled={downloadStatus[job._id] === 'downloading'}
                            className={`text-indigo-600 hover:text-indigo-900 flex items-center gap-1 ${
                              downloadStatus[job._id] === 'downloading' ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                          >
                            {downloadStatus[job._id] === 'downloading' ? (
                              <span>Downloading...</span>
                            ) : downloadStatus[job._id] === 'error' ? (
                              <span className="text-red-500">Download failed. Try again</span>
                            ) : (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </td>
                    <td className={tableStyles.cell}>
                      {new Date(job.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{data.queries.length}</div>
                  <div className="mt-1 text-sm text-gray-500">Queries</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{data.getInTouches.length}</div>
                  <div className="mt-1 text-sm text-gray-500">Get In Touch</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{data.jobApplications.length}</div>
                  <div className="mt-1 text-sm text-gray-500">Job Applications</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{data.projects.length}</div>
                  <div className="mt-1 text-sm text-gray-500">Projects</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{data.students.length}</div>
                  <div className="mt-1 text-sm text-gray-500">Students</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-900">{data.newJobs?.length || 0}</div>
                  <div className="mt-1 text-sm text-gray-500">New Job Applications</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="sm:hidden">
            <select
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="queries">Queries</option>
              <option value="projects">Projects</option>
              <option value="students">Students</option>
              <option value="getInTouches">Get In Touches</option>
              <option value="jobApplications">Job Applications</option>
              <option value="newJobs">New Jobs</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {[
                  'queries',
                  'getInTouches',
                  'jobApplications',
                  'projects',
                  'students',
                  'newJobs'
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      ${activeTab === tab
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }
                      whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize
                    `}
                  >
                    {tab.replace(/([A-Z])/g, ' $1').trim()}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="bg-white rounded-lg shadow p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
