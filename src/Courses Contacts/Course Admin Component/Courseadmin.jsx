import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../Admin/Dashboard";
import Cookies from 'universal-cookie';
import AdminNavbar from "../../Admin/AdminNavbar";
import { Modal, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const cookies = new Cookies();

const checkTokenValidity = () => {
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('TOKEN='))
    ?.split('=')[1];

  if (!token) {
    toast.error("Please login to continue");
    return null;
  }
  return token;
};

// New CourseList component

// New EditCourses component
const EditCourses = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [editLoading, setEditLoading] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        // const response = await fetch('https://qg.vidyantra-dev.com/qubicgen/allCourses');
        const response = await fetch('https://qg.vidyantra-dev.com/qubicgen/allCourses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
        toast.error("Error fetching courses. Please try again.");
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleEdit = async (courseId) => {
    const token = checkTokenValidity();
    if (!token) {
      navigate('/admin/login');
      return;
    }

    try {
      setEditLoading(courseId);
      const response = await fetch(`https://qg.vidyantra-dev.com/qubicgen/courses/${courseId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.status === 401) {
        toast.error("Session expired. Please login again");
        navigate('/admin/login');
        return;
      }
      
      if (!response.ok) {
        throw new Error('Failed to fetch course details');
      }
      
      const courseData = await response.json();
      setEditingCourse(courseData);
    } catch (error) {
      console.error("Error fetching course details:", error);
      toast.error(error.message || "Error fetching course details. Please try again.");
    } finally {
      setEditLoading(null);
    }
  };

  const handleDelete = async () => {
    const token = checkTokenValidity();
    if (!token) {
      navigate('/admin/login');
      return;
    }

    try {
      const response = await fetch(`https://qg.vidyantra-dev.com/qubicgen/deleteCourse/${courseToDelete}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }); 
      
      if (response.status === 401) {
        toast.error("Session expired. Please login again");
        navigate('/admin/login');
        return;
      }
      
      if (!response.ok) {
        throw new Error('Failed to delete course');
      }
      
      toast.success("Course deleted successfully!");
      setCourses(courses.filter(course => course.id !== courseToDelete));
    } catch (error) {
      toast.error(error.message || "Error deleting course. Please try again.");
    } finally {
      closeDeleteModal();
    }
  };

  const openDeleteModal = (courseId) => {
    setCourseToDelete(courseId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setCourseToDelete(null);
  };

  const handleUpdate = async (updatedCourse) => {
    try {
        setUpdating(true);
        const token = checkTokenValidity();
        if (!token) {
            navigate('/admin/login');
            return;
        }

        // Initialize payload with basic data
        const payload = {
            id: updatedCourse.id,
            courseName: updatedCourse.courseName,
            courseType: updatedCourse.courseType,
            duration: parseInt(updatedCourse.duration),
            maxMentees: parseInt(updatedCourse.maxMentees),
            technologies: updatedCourse.technologies,
            rating: parseFloat(updatedCourse.rating),
            startDate: updatedCourse.startDate,
            endDate: updatedCourse.endDate,
            courseDescription: updatedCourse.courseDescription,
            courseImg: updatedCourse.courseImg,
            courseBanner: updatedCourse.courseBanner,
            brochure: updatedCourse.brochure || null,
            certificate: updatedCourse.certificate,
            certificate2: updatedCourse.certificate2,
            lessons: updatedCourse.courseLessons?.map(lesson => ({
                lessonTitle: lesson.lessonTitle || '',
                lessonDescription: lesson.lessonDescription || ''
            })) || [],
            faqs: updatedCourse.courseFaqs?.map(faq => ({
                question: faq.question || '',
                answer: faq.answer || ''
            })) || [],
            brands: updatedCourse.courseBrands?.map(brand => ({
                brandLogo: typeof brand.brandLogo === 'string' ? brand.brandLogo : null
            })) || [],
            selfPaced: parseInt(updatedCourse.selfPaced) || 0,
            mentorship: parseInt(updatedCourse.mentorship) || 0,
            dualPath: parseInt(updatedCourse.dualPath) || 0
        };

        // Handle file uploads
        const uploadFile = async (file) => {
            if (!file || typeof file === 'string') return file;
            const formData = new FormData();
            formData.append('file', file);
            const response = await fetch('https://image.qubinest.com/upload', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) throw new Error('File upload failed');
            const data = await response.json();
            return data.url;
        };

        // Upload all files in parallel
        const [courseImgUrl, courseBannerUrl, certificateUrl, certificate2Url] = await Promise.all([
            uploadFile(updatedCourse.courseImg),
            uploadFile(updatedCourse.courseBanner),
            uploadFile(updatedCourse.certificate),
            uploadFile(updatedCourse.certificate2)
        ]);

        // Update payload with uploaded file URLs
        payload.courseImg = courseImgUrl || payload.courseImg;
        payload.courseBanner = courseBannerUrl || payload.courseBanner;
        payload.certificate = certificateUrl || payload.certificate;
        payload.certificate2 = certificate2Url || payload.certificate2;

        // Make the update request
        const response = await fetch(`https://qg.vidyantra-dev.com/qubicgen/updateCourse/${updatedCourse.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update course');
        }

        const responseData = await response.json();
        setEditingCourse(null);
        toast.success("Course updated successfully!");
        
    } catch (error) {
        console.error("Error updating course:", error);
        toast.error(error.message || "Error updating course. Please try again.");
    } finally {
        setUpdating(false);
    }
};

 
  const addBrand = () => {
    const newBrand = { id: Date.now(), brandLogo: null };
    setEditingCourse((prev) => ({
      ...prev,
      courseBrands: [...(prev.courseBrands || []), newBrand],
    }));
  };
 
  const removeBrand = (index) => {
    setEditingCourse((prev) => ({
      ...prev,
      courseBrands: prev.courseBrands.filter((_, i) => i !== index),
    }));
  };
 
  const addLesson = () => {
    const newLesson = { id: Date.now(), lessonTitle: "", lessonDescription: "" };
    setEditingCourse((prev) => ({
      ...prev,
      courseLessons: [...(prev.courseLessons || []), newLesson],
    }));
  };
 
  const removeLesson = (index) => {
    setEditingCourse((prev) => ({
      ...prev,
      courseLessons: prev.courseLessons.filter((_, i) => i !== index),
    }));
  };
 
  const addFAQ = () => {
    const newFAQ = { id: Date.now(), question: "", answer: "" };
    setEditingCourse((prev) => ({
      ...prev,
      courseFaqs: [...(prev.courseFaqs || []), newFAQ],
    }));
  };
 
  const removeFAQ = (index) => {
    setEditingCourse((prev) => ({
      ...prev,
      courseFaqs: prev.courseFaqs.filter((_, i) => i !== index),
    }));
  };
 
  const handleCertificateChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setEditingCourse((prev) => ({
            ...prev,
            certificate: file, // Store the file object
        }));
    } else {
        setEditingCourse((prev) => ({
            ...prev,
            certificate: null,
        }));
    }
};
  const handleCertificateChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
        setEditingCourse((prev) => ({
            ...prev,
            certificate2: file, // Store the file object
        }));
    } else {
        setEditingCourse((prev) => ({
            ...prev,
            certificate2: null,
        }));
    }
};
 
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 mx-auto mb-4 text-yellow-500" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-xl text-white">Loading Courses...</p>
          <p className="text-gray-400 mt-2">Please wait while we fetch the course data</p>
        </div>
      </div>
    );
  }
 
  if (editingCourse) {
    return (
      <div className="min-h-screen bg-cover bg-center bg-gray-900"  >
        <div className="bg-black bg-opacity-50 min-h-screen p-8">
          <div className="bg-[#192230] p-8 rounded-lg shadow-2xl max-w-4xl mx-auto bg-gray-800"  style={{
    boxShadow: "0px 4px 20px 2px rgba(113, 181, 241, 0.5), 0px 6px 15px 4px rgba(126, 24, 145, 0.4)",
  }}>
            <h2 className="text-3xl font-bold mb-8 text-white">Edit Course</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-yellow-500 mb-2">Course Description *</label>
                  <textarea
                    value={editingCourse.courseDescription || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, courseDescription: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Course Name *</label>
                  <input
                    type="text"
                    value={editingCourse.courseName || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, courseName: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Course Category *</label>
                  <select
                    value={editingCourse.courseType || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, courseType: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  >
                    <option value="Tech Data">Tech Data</option>
                    <option value="AI & ML">AI & ML</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Design">Design</option>
                    <option value="Bootcamp">Bootcamp</option>
                    <option value="Business">Business</option>
                    <option value="Medical">Medical</option>
                    <option value="Mechanics">Mechanics</option>
                    <option value="Technology">Technology</option>
                    <option value="Management">Management</option>
                  </select>
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Duration *</label>
                  <input
                    type="number"
                    value={editingCourse.duration || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, duration: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Max Mentees *</label>
                  <input
                    type="number"
                    value={editingCourse.maxMentees || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, maxMentees: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Technologies *</label>
                  <input
                    type="text"
                    value={editingCourse.technologies || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, technologies: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Rating (0-5)</label>
                  <input
                    type="number"
                    value={editingCourse.rating || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, rating: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    min="0"
                    max="5"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Start Date *</label>
                  <input
                    type="date"
                    value={editingCourse.startDate ? editingCourse.startDate.split('T')[0] : ''}
                    onChange={(e) => setEditingCourse({...editingCourse, startDate: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">End Date *</label>
                  <input
                    type="date"
                    value={editingCourse.endDate ? editingCourse.endDate.split('T')[0] : ''}
                    onChange={(e) => setEditingCourse({...editingCourse, endDate: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Course Banner</label>
                  <input
                    type="file"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            setEditingCourse((prev) => ({
                                ...prev,
                                courseBanner: file,
                            }));
                        } else {
                            setEditingCourse((prev) => ({
                                ...prev,
                                courseBanner: null,
                            }));
                        }
                    }}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                  />
                  {editingCourse.courseBanner && <p className="text-gray-400 mt-2">Current: {editingCourse.courseBanner.name}</p>}
                </div>
                <div>
                  <h3 className="text-yellow-500 mb-2">Course Brands</h3>
                  {editingCourse.courseBrands?.map((brand, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <input
                        type="file"
                        onChange={(e) => {
                          const updatedBrands = [...editingCourse.courseBrands];
                          updatedBrands[index].brandLogo = e.target.files[0];
                          setEditingCourse({...editingCourse, courseBrands: updatedBrands});
                        }}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                      <button
                        type="button"
                        onClick={() => removeBrand(index)}
                        className="ml-2 text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addBrand}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    + Add Brand
                  </button>
                </div>
                <div>
                  <h3 className="text-yellow-500 mb-2">Course Lessons</h3>
                  {editingCourse.courseLessons?.map((lesson, index) => (
                    <div key={index} className="mb-4">
                      <input
                        type="text"
                        value={lesson.lessonTitle}
                        onChange={(e) => {
                          const updatedLessons = [...editingCourse.courseLessons];
                          updatedLessons[index].lessonTitle = e.target.value;
                          setEditingCourse({...editingCourse, courseLessons: updatedLessons});
                        }}
                        placeholder="Lesson Title"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                      />
                      <textarea
                        value={lesson.lessonDescription}
                        onChange={(e) => {
                          const updatedLessons = [...editingCourse.courseLessons];
                          updatedLessons[index].lessonDescription = e.target.value;
                          setEditingCourse({...editingCourse, courseLessons: updatedLessons});
                        }}
                        placeholder="Lesson Description"
                        className="w-full p-2 border border-gray-300 rounded"
                      ></textarea>
                      <button
                        type="button"
                        onClick={() => removeLesson(index)}
                        className="text-red-500"
                      >
                        Remove Lesson
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addLesson}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    + Add Lesson
                  </button>
                </div>
                <div>
                  <h3 className="text-yellow-500 mb-2">Course FAQs</h3>
                  {editingCourse.courseFaqs?.map((faq, index) => (
                    <div key={index} className="mb-4">
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => {
                          const updatedFaqs = [...editingCourse.courseFaqs];
                          updatedFaqs[index].question = e.target.value;
                          setEditingCourse({...editingCourse, courseFaqs: updatedFaqs});
                        }}
                        placeholder="FAQ Question"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                      />
                      <textarea
                        value={faq.answer}
                        onChange={(e) => {
                          const updatedFaqs = [...editingCourse.courseFaqs];
                          updatedFaqs[index].answer = e.target.value;
                          setEditingCourse({...editingCourse, courseFaqs: updatedFaqs});
                        }}
                        placeholder="FAQ Answer"
                        className="w-full p-2 border border-gray-300 rounded"
                      ></textarea>
                      <button
                        type="button"
                        onClick={() => removeFAQ(index)}
                        className="text-red-500"
                      >
                        Remove FAQ
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFAQ}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    + Add FAQ
                  </button>
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Certificate *</label>
                  <input
                    type="file"
                    onChange={handleCertificateChange}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                  />
                </div>

                <div>
  <label className="block text-yellow-500 mb-2">Course Image *</label>
  <input
    type="file"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        setEditingCourse((prev) => ({
          ...prev,
          courseImg: file,
        }));
      }
    }}
    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
    accept="image/*"
  />
  {editingCourse.courseImg && (
    <div className="mt-2">
      {typeof editingCourse.courseImg === 'string' ? (
        <img
          src={editingCourse.courseImg}
          alt="Course"
          className="w-full h-48 object-cover rounded-lg"
        />
      ) : (
        <p className="text-gray-400">New image selected: {editingCourse.courseImg.name}</p>
      )}
    </div>
  )}
</div>

                <div>

  <label className="block text-yellow-500 mb-2">Certificate2 *</label>
  <input
    type="file"
    name="certificate2" // Ensure the name matches your state key
    onChange={handleCertificateChange2} // Use the appropriate handler for file inputs
    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"

  />
</div>

                <div>
                  <label className="block text-yellow-500 mb-2">Self Paced Price *</label>
                  <input
                    type="number"
                    value={editingCourse.selfPaced || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, selfPaced: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Mentorship Price *</label>
                  <input
                    type="number"
                    value={editingCourse.mentorship || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, mentorship: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Dual Path Price *</label>
                  <input
                    type="number"
                    value={editingCourse.dualPath || ''}
                    onChange={(e) => setEditingCourse({...editingCourse, dualPath: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setEditingCourse(null)}
                  className="px-6 py-2 text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleUpdate(editingCourse)}
                  className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400"
                  disabled={updating}
                >
                  {updating ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-cover bg-center bg-gray-900">
      <div className="bg-black bg-opacity-50 min-h-screen p-8">
        <h2 className="text-3xl font-bold mb-8 text-white">Manage Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{course.courseName}</h3>
              <p className="text-gray-400 mb-4">{course.courseDescription}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-yellow-500">{course.courseType}</span>
                <span className="text-gray-400">Rating: {course.rating || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Duration: {course.duration}</span>
                <span className="text-gray-400">Mentees: {course.maxMentees}</span>
              </div>
              <div className="absolute top-2 right-2">
                <IconButton onClick={() => openDeleteModal(course.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </div>
              <button
                onClick={() => handleEdit(course.id)}
                className={`mt-4 w-full px-4 py-2 rounded-lg ${
                  editLoading === course.id 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-yellow-500 hover:bg-yellow-400'
                } text-black`}
                disabled={editLoading === course.id}
              >
                {editLoading === course.id ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Loading...
                  </div>
                ) : (
                  'Edit Course'
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal open={isDeleteModalOpen} onClose={closeDeleteModal}>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete this course?</p>
          <div className="flex justify-end space-x-4 mt-4">
            <Button onClick={closeDeleteModal} variant="outlined">Cancel</Button>
            <Button onClick={handleDelete} variant="contained" color="error">Delete</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    courseType: "",
    duration: "",
    maxMentees: "",
    technologies: "",
    rating: "",
    startDate: "",
    selfPaced:"",
    mentorship:"",
    dualPath:"",
    endDate: "",
    courseDescription: "",
    courseImage: null,
    brochure: null,
    certificate: null,
    certificate2: null, // New field
    lessons: [{ lessonTitle: "", lessonDescription: "" }],
    faqs: [{ question: "", answer: "" }],
    brands: [{ brandLogo: null }]
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) { // Check if file size exceeds 5 MB
          alert("File size exceeds 5 MB. Please select a smaller file.");
          return; // Exit the function if the file is too large
        }
        setFormData((prev) => ({
          ...prev,
          [name]: file, // Set the courseBanner to the file object
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: null, // Reset to null if no file is selected
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.value,
      }));
    }
  };

  const handleLessonChange = (index, field, value) => {
    const updatedLessons = [...formData.lessons];
    updatedLessons[index][field] = value;
    setFormData(prev => ({ ...prev, lessons: updatedLessons }));
  };

  const addLesson = () => {
    setFormData(prev => ({
      ...prev,
      lessons: [...prev.lessons, { lessonTitle: "", lessonDescription: "" }]
    }));
  };

  const removeLesson = (index) => {
    const updatedLessons = [...formData.lessons];
    updatedLessons.splice(index, 1);
    setFormData(prev => ({ ...prev, lessons: updatedLessons }));
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...formData.faqs];
    updatedFaqs[index][field] = value;
    setFormData(prev => ({ ...prev, faqs: updatedFaqs }));
  };

  const addFaq = () => {
    setFormData(prev => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }]
    }));
  };

  const removeFaq = (index) => {
    const updatedFaqs = [...formData.faqs];
    updatedFaqs.splice(index, 1);
    setFormData(prev => ({ ...prev, faqs: updatedFaqs }));
  };

  const handleBrandChange = (index, files) => {
    if (files && files[0]) {
      const updatedBrands = [...formData.brands];
      updatedBrands[index] = { brandLogo: files[0] };
      setFormData(prev => ({ ...prev, brands: updatedBrands }));
    }
  };



  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('https://image.qubinest.com/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            // Check if the response status is 413
            if (response.status === 413) {
                alert("File size exceeds the server limit. Please select a smaller file.");
                throw new Error('File size exceeds the server limit.');
            }
            throw new Error('Failed to upload file');
        }

        const data = await response.json();
        return data.url; // Assuming the response contains the URL of the uploaded file
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error; // Re-throw the error to be handled in handleSubmit
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = checkTokenValidity();
    if (!token) {
      navigate('/admin/login');
      return;
    }

    setLoading(true);
    try {
      // Prepare the request body with both courseImage and courseBanner
      const requestBody = {
        courseName: formData.courseName,
        courseType: formData.courseType,
        courseImage: null,        // Include courseImage
        courseBanner: null,       // Include courseBanner
        duration: parseInt(formData.duration),
        maxMentees: parseInt(formData.maxMentees),
        technologies: formData.technologies,
        rating: parseFloat(formData.rating),
        brochure: null,
        certificate: null,
        certificate2: null,
        startDate: formData.startDate,
        endDate: formData.endDate,
        courseDescription: formData.courseDescription,
        lessons: formData.lessons,
        selfPaced: parseInt(formData.selfPaced), // Convert to number
        mentorship: parseInt(formData.mentorship), // Convert to number
        dualPath: parseInt(formData.dualPath), // Convert to number
        faqs: formData.faqs,
        brands: []
      };

      // Handle file uploads
      if (formData.courseImg) {
        const courseImgUrl = await uploadFile(formData.courseImg);
        requestBody.courseImg = courseImgUrl;
      }

      
      if (formData.courseBanner) {
        const courseBannerUrl = await uploadFile(formData.courseBanner);
        requestBody.courseBanner = courseBannerUrl;
      }

      if (formData.brochure) {
        const brochureUrl = await uploadFile(formData.brochure); // Don't compress PDFs
        requestBody.brochure = brochureUrl;
      }

      if (formData.certificate) {
        const certificateUrl = await uploadFile(formData.certificate); // Don't compress PDFs
        requestBody.certificate = certificateUrl;
      }

      if (formData.certificate2) {
        const certificate2Url = await uploadFile(formData.certificate2); // Upload `certificate2`
        requestBody.certificate2 = certificate2Url;
      }
      // Handle brand logos
      if (formData.brands?.length) {
        requestBody.brands = await Promise.all(formData.brands.map(async (brand) => {
          if (brand.brandLogo) {
            const brandLogoUrl = await uploadFile(brand.brandLogo);
            return { brandLogo: brandLogoUrl };
          }
          return { brandLogo: null };
        }));
      }

      // Create course
      const response = await fetch('https://qg.vidyantra-dev.com/qubicgen/newCourse', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create course');
      }

      toast.success("Course created successfully!");
      setFormData({
        courseName: "",
        courseType: "",
        courseImg: null,
        courseBanner: null,
        duration: "",
        maxMentees: "",
        technologies: "",
        rating: "",
        startDate: "",
        endDate: "",
        courseDescription: "",
        selfPaced: "", // Reset to empty string
        mentorship: "", // Reset to empty string
        dualPath: "", // Reset to empty string
        brochure: null,
        certificate: null,
        certificate2: null,
        lessons: [{ lessonTitle: "", lessonDescription: "" }],
        faqs: [{ question: "", answer: "" }],
        brands: [{ brandLogo: null }]
      });
    } catch (error) {
      toast.error(error.message || "Error creating course. Please try again.");
      console.error("Error creating course:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-gray-900" >
      <div className="bg-black bg-opacity-50 min-h-screen p-8">
      <div className="bg-[#192230] p-8 rounded-lg shadow-2xl max-w-4xl mx-auto bg-gray-800"  style={{
    boxShadow: "0px 4px 20px 2px rgba(113, 181, 241, 0.5), 0px 6px 15px 4px rgba(126, 24, 145, 0.4)",
  }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-yellow-500 mb-2">Course Name *</label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-500 mb-2">Course Category *</label>
                <input
                  type="text"
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-500 mb-2">Duration (hours) *</label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-500 mb-2">Max Mentees *</label>
                <input
                  type="number"
                  name="maxMentees"
                  value={formData.maxMentees}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-500 mb-2">Technologies *</label>
                <input
                  type="text"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-500 mb-2">Rating (0-5)</label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                  min="0"
                  max="5"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-yellow-500 mb-2">Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-500 mb-2">End Date *</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">Course Description *</label>
              <textarea
                name="courseDescription"
                value={formData.courseDescription}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">Course Image *</label>
              <input
                type="file"
                name="courseImg"
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                accept="image/*"
              />
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">Course Banner *</label>
              <input
                type="file"
                name="courseBanner"
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                accept="image/*"
              />
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">Brochure (PDF)</label>
              <input
                type="file"
                name="brochure"
                onChange={handleInputChange}
                accept=".pdf"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
              />
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">Certificate *</label>
              <input
                type="file"
                name="certificate"
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
              />
            </div>

            <div>
  <label className="block text-yellow-500 mb-2">Certificate 2 *</label>
  <input
    type="file"
    name="certificate2"
    onChange={handleInputChange}
    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
    
  />
</div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-500">Course Lessons</h3>
              {formData.lessons.map((lesson, index) => (
                <div key={index} className="p-4 bg-gray-800 rounded-lg space-y-3">
                  <input
                    type="text"
                    value={lesson.lessonTitle}
                    onChange={(e) => handleLessonChange(index, "lessonTitle", e.target.value)}
                    placeholder="Lesson Title"
                    className="w-full p-2 bg-gray-700 rounded text-white"
                  />
                  <textarea
                    value={lesson.lessonDescription}
                    onChange={(e) => handleLessonChange(index, "lessonDescription", e.target.value)}
                    placeholder="Lesson Description"
                    className="w-full p-2 bg-gray-700 rounded text-white"
                    rows="3"
                  />
                  {formData.lessons.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLesson(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Remove Lesson
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addLesson}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Lesson
              </button>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-500">Course FAQs</h3>
              {formData.faqs.map((faq, index) => (
                <div key={index} className="p-4 bg-gray-800 rounded-lg space-y-3">
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                    placeholder="Question"
                    className="w-full p-2 bg-gray-700 rounded text-white"
                  />
                  <textarea
                    value={faq.answer}
                    onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                    placeholder="Answer"
                    className="w-full p-2 bg-gray-700 rounded text-white"
                    rows="3"
                  />
                  {formData.faqs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFaq(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Remove FAQ
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addFaq}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add FAQ
              </button>
            </div>
   
            <div>
              <label className="block text-yellow-500 mb-2">Self Paced Price*</label>
              <input
                type="number"
                name="selfPaced"
                value={formData.selfPaced}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">Mentorship Price *</label>
              <input
                type="number"
                name="mentorship"
                value={formData.mentorship}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">Dual Path Price*</label>
              <input
                type="number"
                name="dualPath"
                value={formData.dualPath}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-500">Brand Logo</h3>
              <div className="p-4 bg-gray-800 rounded-lg space-y-3">
                <input
                  type="file"
                  onChange={(e) => handleBrandChange(0, e.target.files)}
                  accept="image/*"
                  className="w-full p-2 bg-gray-700 rounded text-white"
                />
                {formData.brands[0]?.brandLogo && (
                  <p className="text-sm text-gray-400">
                    Selected file: {formData.brands[0].brandLogo.name}
                  </p>
                )}
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Create Course"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const token = checkTokenValidity();
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        setLoading(true);
        const response = await fetch('https://qg.vidyantra-dev.com/qubicgen/allCourses', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 401) {
          toast.error("Session expired. Please login again");
          navigate('/admin/login');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }

        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        toast.error("Error fetching courses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 mx-auto mb-4 text-yellow-500" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-xl text-white">Loading Courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-gray-900" >
      <div className="bg-black bg-opacity-50 min-h-screen p-8">
      <div className="bg-[#192230] p-8 rounded-lg shadow-2xl max-w-8xl mx-auto bg-gray-800"  style={{
    boxShadow: "0px 4px 20px 2px rgba(113, 181, 241, 0.5), 0px 6px 15px 4px rgba(126, 24, 145, 0.4)",
  }}>
          <h2 className="text-3xl font-bold mb-8 text-white">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{course.courseName}</h3>
                <p className="text-gray-400 mb-4">{course.courseDescription}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500">{course.courseType}</span>
                  <span className="text-gray-400">{course.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminPage = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get('TOKEN');
    if (!token) {
      console.log('No token found, redirecting to login');
      navigate('/admin/login'); // Redirect to login if no token
    }
  }, [navigate]);
  
  const renderView = () => {
    switch(currentView) {
      case 'my-courses':
        return <MyCourses />;
      case 'edit-courses':
        return <EditCourses />;
      case 'admin-dashboard':
        return <Dashboard />;
      default:
        return <CreateCourse />;
    }
  };
 
  return (
    <div className="flex min-h-screen">
      
      <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 h-screen fixed left-0 top-0 shadow-xl">
      
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-4">Menu</h2>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:text-white w-full ${currentView === 'dashboard' ? 'bg-gray-700' : ''}`}
              >
                <span>Add New Course</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentView('my-courses')}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:text-white w-full ${currentView === 'my-courses' ? 'bg-gray-700' : ''}`}
              >
                <span>My Courses</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentView('edit-courses')}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:text-white w-full ${currentView === 'edit-courses' ? 'bg-gray-700' : ''}`}
              >
                <span>Edit Courses</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentView('admin-dashboard')}
                className="flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:text-white w-full"
              >
                <span>Admin Dashboard</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 ml-64 bg-gray-100">
          <AdminNavbar/>
        <Toaster position="top-right" />
        {renderView()}
      </div>
    </div>
  );
};
 
export default AdminPage;
 
