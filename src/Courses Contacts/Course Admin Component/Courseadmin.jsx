import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../Admin/Dashboard";
 
// New CourseList component
const CourseList = () => {
  const [courses, setCourses] = useState([]);
 
  useEffect(() => {
    const savedCourses = localStorage.getItem("courses");
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-bold mb-2">{course.courseName}</h3>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{course.courseType}</span>
            <span className="text-sm text-gray-500">Rating: {course.rating || 'N/A'}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
 
// New EditCourses component
const EditCourses = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:9098/qubicgen/allCourses');
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
    try {
      // Get token from cookie
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('TOKEN='))
        ?.split('=')[1];

      if (!token) {
        throw new Error('Authentication token not found');
      }

      const response = await fetch(`http://localhost:9098/qubicgen/courses/${courseId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch course details');
      }
      
      const courseData = await response.json();
      setEditingCourse(courseData);
    } catch (error) {
      console.error("Error fetching course details:", error);
      toast.error(error.message || "Error fetching course details. Please try again.");
    }
  };
 
  const handleUpdate = async (updatedCourse) => {
    try {
      // Get token from cookie
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('TOKEN='))
        ?.split('=')[1];

      if (!token) {
        throw new Error('Authentication token not found');
      }

      const formData = new FormData();
      
      // Append basic fields
      Object.keys(updatedCourse).forEach(key => {
        if (!['courseImage', 'brochure', 'certificate', 'courseLessons', 'courseFaqs', 'courseBrands'].includes(key)) {
          formData.append(key, updatedCourse[key]);
        }
      });

      // Append files if they exist
      if (updatedCourse.courseImage) formData.append('courseImage', updatedCourse.courseImage);
      if (updatedCourse.brochure) formData.append('brochure', updatedCourse.brochure);
      if (updatedCourse.certificate) formData.append('certificate', updatedCourse.certificate);

      // Append arrays as JSON strings
      formData.append('courseLessons', JSON.stringify(updatedCourse.courseLessons));
      formData.append('courseFaqs', JSON.stringify(updatedCourse.courseFaqs));
      formData.append('courseBrands', JSON.stringify(updatedCourse.courseBrands));

      const response = await fetch(`http://localhost:9098/qubicgen/updateCourse/${updatedCourse.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to update course');
      }

      // Refresh the courses list
      const refreshResponse = await fetch('http://localhost:9098/qubicgen/allCourses');
      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        setCourses(data);
      }

      setEditingCourse(null);
      toast.success("Course updated successfully!");
    } catch (error) {
      toast.error(error.message || "Error updating course. Please try again.");
      console.error("Error updating course:", error);
    }
  };
 
  if (loading) {
    return (
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
        <div className="text-white text-xl">Loading courses...</div>
      </div>
    );
  }
 
  if (editingCourse) {
    return (
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="bg-black bg-opacity-50 min-h-screen p-8">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">Edit Course</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label className="block text-yellow-500 mb-2">Course Type *</label>
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
              </div>

              <div>
                <label className="block text-yellow-500 mb-2">Course Description *</label>
                <textarea
                  value={editingCourse.courseDescription || ''}
                  onChange={(e) => setEditingCourse({...editingCourse, courseDescription: e.target.value})}
                  rows="4"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-yellow-500 mb-2">Course Image</label>
                <input
                  type="file"
                  onChange={(e) => setEditingCourse({...editingCourse, courseImage: e.target.files[0]})}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                />
                {editingCourse.courseImage && <p className="text-gray-400 mt-2">Current: {editingCourse.courseImage}</p>}
              </div>

              <div>
                <label className="block text-yellow-500 mb-2">Brochure (PDF)</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setEditingCourse({...editingCourse, brochure: e.target.files[0]})}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                />
                {editingCourse.brochure && <p className="text-gray-400 mt-2">Current: {editingCourse.brochure}</p>}
              </div>

              <div>
                <label className="block text-yellow-500 mb-2">Certificate</label>
                <input
                  type="file"
                  onChange={(e) => setEditingCourse({...editingCourse, certificate: e.target.files[0]})}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                />
                {editingCourse.certificate && <p className="text-gray-400 mt-2">Current: {editingCourse.certificate}</p>}
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
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="bg-black bg-opacity-50 min-h-screen p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
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
              <button
                onClick={() => handleEdit(course.id)}
                className="mt-4 w-full bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
              >
                Edit Course
              </button>
            </div>
          ))}
        </div>
      </div>
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
    endDate: "",
    courseDescription: "",
    courseImage: null,
    brochure: null,
    certificate: null,
    courseLessons: [{ lessonTitle: "", content: "" }],
    courseFaqs: [{ question: "", answer: "" }],
    courseBrands: [{ brandName: "", logo: null }]
  });
 
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: Array.from(files),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
 
  const handleLessonChange = (index, field, value) => {
    const updatedLessons = [...formData.courseLessons];
    updatedLessons[index][field] = value;
    setFormData((prev) => ({ ...prev, courseLessons: updatedLessons }));
  };
 
  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...formData.courseFaqs];
    updatedFaqs[index][field] = value;
    setFormData((prev) => ({ ...prev, courseFaqs: updatedFaqs }));
  };
 
  const addLesson = () => {
    setFormData((prev) => ({
      ...prev,
      courseLessons: [...prev.courseLessons, { lessonTitle: "", content: "" }],
    }));
  };
 
  const removeLesson = (index) => {
    const updatedLessons = [...formData.courseLessons];
    updatedLessons.splice(index, 1);
    setFormData((prev) => ({ ...prev, courseLessons: updatedLessons }));
  };
 
  const addFaq = () => {
    setFormData((prev) => ({
      ...prev,
      courseFaqs: [...prev.courseFaqs, { question: "", answer: "" }],
    }));
  };
 
  const removeFaq = (index) => {
    const updatedFaqs = [...formData.courseFaqs];
    updatedFaqs.splice(index, 1);
    setFormData((prev) => ({ ...prev, courseFaqs: updatedFaqs }));
  };
 
  const handleBrandChange = (index, field, value) => {
    const updatedBrands = [...formData.courseBrands];
    updatedBrands[index][field] = value;
    setFormData(prev => ({ ...prev, courseBrands: updatedBrands }));
  };
 
  const addBrand = () => {
    setFormData(prev => ({
      ...prev,
      courseBrands: [...prev.courseBrands, { brandName: "", logo: null }]
    }));
  };
 
  const removeBrand = (index) => {
    const updatedBrands = [...formData.courseBrands];
    updatedBrands.splice(index, 1);
    setFormData(prev => ({ ...prev, courseBrands: updatedBrands }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      
      // Get token from cookie
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('TOKEN='))
        ?.split('=')[1];

      if (!token) {
        throw new Error('Authentication token not found');
      }

      // Append basic fields
      Object.keys(formData).forEach(key => {
        if (!['courseImage', 'brochure', 'certificate', 'courseLessons', 'courseFaqs', 'courseBrands'].includes(key)) {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Append files
      if (formData.courseImage) formDataToSend.append('courseImage', formData.courseImage);
      if (formData.brochure) formDataToSend.append('brochure', formData.brochure);
      if (formData.certificate) formDataToSend.append('certificate', formData.certificate);

      // Append arrays as JSON strings
      formDataToSend.append('courseLessons', JSON.stringify(formData.courseLessons));
      formDataToSend.append('courseFaqs', JSON.stringify(formData.courseFaqs));
      formDataToSend.append('courseBrands', JSON.stringify(formData.courseBrands));

      const response = await fetch('http://localhost:9098/qubicgen/newCourse', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Failed to create course');
      }

      toast.success("Course created successfully!");
      // Reset form
      setFormData({
        courseName: "",
        courseType: "",
        duration: "",
        maxMentees: "",
        technologies: "",
        rating: "",
        startDate: "",
        endDate: "",
        courseDescription: "",
        courseImage: null,
        brochure: null,
        certificate: null,
        courseLessons: [{ lessonTitle: "", content: "" }],
        courseFaqs: [{ question: "", answer: "" }],
        courseBrands: [{ brandName: "", logo: null }]
      });
    } catch (error) {
      toast.error(error.message || "Error creating course. Please try again.");
      console.error("Error creating course:", error);
    }
  };
 
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="bg-black bg-opacity-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-4xl ">
          <h2 className="text-white text-2xl mb-4">Create a New Course</h2>
          <form onSubmit={handleSubmit} className="space-y-6 ">
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
                <label className="block text-yellow-500 mb-2">Course Type *</label>
                <select
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Technology">Technology</option>
                  <option value="AI & ML">AI & ML</option>
                  <option value="Data Science">Data Science</option>
                  {/* Add other options */}
                </select>
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
                name="courseImage"
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                required
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
              <label className="block text-yellow-500 mb-2">Course Brands *</label>
              {formData.courseBrands.map((brand, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-800 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-yellow-500 mb-2">Brand Name *</label>
                      <input
                        type="text"
                        value={brand.brandName}
                        onChange={(e) => handleBrandChange(index, "brandName", e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-yellow-500 mb-2">Brand Logo *</label>
                      <input
                        type="file"
                        onChange={(e) => handleBrandChange(index, "logo", e.target.files[0])}
                        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                        accept="image/*"
                        required
                      />
                    </div>
                  </div>
                  {formData.courseBrands.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeBrand(index)}
                      className="mt-2 text-red-400 hover:text-red-300 text-sm"
                    >
                      Remove Brand
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addBrand}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
              >
                Add Brand
              </button>
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">Lessons *</label>
              {formData.courseLessons.map((lesson, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    value={lesson.lessonTitle}
                    onChange={(e) => {
                      const updatedLessons = [...formData.courseLessons];
                      updatedLessons[index].lessonTitle = e.target.value;
                      setFormData({...formData, courseLessons: updatedLessons});
                    }}
                    placeholder="Lesson Title"
                    className="w-full p-2 rounded bg-gray-800 text-white mb-2"
                    required
                  />
                  <textarea
                    value={lesson.content}
                    onChange={(e) => {
                      const updatedLessons = [...formData.courseLessons];
                      updatedLessons[index].content = e.target.value;
                      setFormData({...formData, courseLessons: updatedLessons});
                    }}
                    placeholder="Lesson Content"
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    rows="3"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => removeLesson(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove Lesson
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addLesson}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Add Lesson
              </button>
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">FAQs *</label>
              {formData.courseFaqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 mb-2"
                    required
                  />
                  <textarea
                    value={faq.answer}
                    onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 mb-2"
                    rows="3"
                    required
                  ></textarea>
                  <button
                    type="button"
                    onClick={() => removeFaq(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove FAQ
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addFaq}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Add FAQ
              </button>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Create Course
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

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:9098/qubicgen/allCourses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        toast.error("Error fetching courses. Please try again.");
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="bg-black bg-opacity-50 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
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
        <Toaster position="top-right" />
        {renderView()}
      </div>
    </div>
  );
};
 
export default AdminPage;
 
