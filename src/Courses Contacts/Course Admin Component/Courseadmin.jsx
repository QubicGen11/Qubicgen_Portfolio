import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
 
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
 
  useEffect(() => {
    const savedCourses = localStorage.getItem("courses");
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);
 
  const handleEdit = (course) => {
    setEditingCourse(course);
  };
 
  const handleUpdate = (updatedCourse) => {
    const updatedCourses = courses.map(course => 
      course.id === updatedCourse.id ? updatedCourse : course
    );
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setEditingCourse(null);
    toast.success("Course updated successfully!");
  };
 
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
                    value={editingCourse.courseName}
                    onChange={(e) => setEditingCourse({...editingCourse, courseName: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Course Type *</label>
                  <select
                    value={editingCourse.courseType}
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
                    type="text"
                    value={editingCourse.duration}
                    onChange={(e) => setEditingCourse({...editingCourse, duration: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Max Mentees *</label>
                  <input
                    type="number"
                    value={editingCourse.mentees}
                    onChange={(e) => setEditingCourse({...editingCourse, mentees: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Technologies *</label>
                  <input
                    type="text"
                    value={editingCourse.technologies}
                    onChange={(e) => setEditingCourse({...editingCourse, technologies: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">Rating (0-5)</label>
                  <input
                    type="number"
                    value={editingCourse.rating}
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
                    value={editingCourse.startDate}
                    onChange={(e) => setEditingCourse({...editingCourse, startDate: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-500 mb-2">End Date *</label>
                  <input
                    type="date"
                    value={editingCourse.endDate}
                    onChange={(e) => setEditingCourse({...editingCourse, endDate: e.target.value})}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-yellow-500 mb-2">Course Description *</label>
                <textarea
                  value={editingCourse.description}
                  onChange={(e) => setEditingCourse({...editingCourse, description: e.target.value})}
                  rows="4"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-yellow-500 mb-2">Course Image *</label>
                <input
                  type="file"
                  onChange={(e) => setEditingCourse({...editingCourse, courseImage: e.target.files[0]})}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                />
              </div>

              <div>
                <label className="block text-yellow-500 mb-2">Brochure (PDF)</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setEditingCourse({...editingCourse, brochure: e.target.files[0]})}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                />
              </div>

              <div>
                <label className="block text-yellow-500 mb-2">Certificate *</label>
                <input
                  type="file"
                  onChange={(e) => setEditingCourse({...editingCourse, certificateImage: e.target.files[0]})}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                />
              </div>

              <div>
                <label className="block text-yellow-500 mb-2">Lessons *</label>
                {editingCourse.lessons.map((lesson, index) => (
                  <div key={index} className="mb-4">
                    <input
                      type="text"
                      value={lesson.name}
                      onChange={(e) => {
                        const updatedLessons = [...editingCourse.lessons];
                        updatedLessons[index].name = e.target.value;
                        setEditingCourse({...editingCourse, lessons: updatedLessons});
                      }}
                      placeholder="Lesson name"
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 mb-2"
                      required
                    />
                    <textarea
                      value={lesson.description}
                      onChange={(e) => {
                        const updatedLessons = [...editingCourse.lessons];
                        updatedLessons[index].description = e.target.value;
                        setEditingCourse({...editingCourse, lessons: updatedLessons});
                      }}
                      placeholder="Lesson description"
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 mb-2"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-yellow-500 mb-2">FAQs *</label>
                {editingCourse.faqs.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <input
                      type="text"
                      value={faq.question}
                      onChange={(e) => {
                        const updatedFaqs = [...editingCourse.faqs];
                        updatedFaqs[index].question = e.target.value;
                        setEditingCourse({...editingCourse, faqs: updatedFaqs});
                      }}
                      placeholder="Question"
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 mb-2"
                      required
                    />
                    <textarea
                      value={faq.answer}
                      onChange={(e) => {
                        const updatedFaqs = [...editingCourse.faqs];
                        updatedFaqs[index].answer = e.target.value;
                        setEditingCourse({...editingCourse, faqs: updatedFaqs});
                      }}
                      placeholder="Answer"
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 mb-2"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                ))}
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
              <p className="text-gray-400 mb-4">{course.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-yellow-500">{course.courseType}</span>
                <span className="text-gray-400">Rating: {course.rating || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Duration: {course.duration}</span>
                <span className="text-gray-400">Mentees: {course.mentees}</span>
              </div>
              <button
                onClick={() => handleEdit(course)}
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
    description: "",
    duration: "",
    mentees: "",
    startDate: "",
    endDate: "",
    rating: "",
    courseImage: null,
    brochure: null,
    certificateImage: null,
    technologies: "",
    lessons: [{ name: "", description: "" }],
    faqs: [{ question: "", answer: "" }],
    brands: [],
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
    const updatedLessons = [...formData.lessons];
    updatedLessons[index][field] = value;
    setFormData((prev) => ({ ...prev, lessons: updatedLessons }));
  };
 
  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...formData.faqs];
    updatedFaqs[index][field] = value;
    setFormData((prev) => ({ ...prev, faqs: updatedFaqs }));
  };
 
  const addLesson = () => {
    setFormData((prev) => ({
      ...prev,
      lessons: [...prev.lessons, { name: "", description: "" }],
    }));
  };
 
  const removeLesson = (index) => {
    const updatedLessons = [...formData.lessons];
    updatedLessons.splice(index, 1);
    setFormData((prev) => ({ ...prev, lessons: updatedLessons }));
  };
 
  const addFaq = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  };
 
  const removeFaq = (index) => {
    const updatedFaqs = [...formData.faqs];
    updatedFaqs.splice(index, 1);
    setFormData((prev) => ({ ...prev, faqs: updatedFaqs }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newCourse = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
 
      const existingCourses = JSON.parse(localStorage.getItem("courses") || "[]");
      const updatedCourses = [...existingCourses, newCourse];
      localStorage.setItem("courses", JSON.stringify(updatedCourses));
 
      toast.success("Course created successfully!");
      setFormData({
        courseName: "",
        courseType: "",
        description: "",
        duration: "",
        mentees: "",
        startDate: "",
        endDate: "",
        rating: "",
        courseImage: null,
        brochure: null,
        certificateImage: null,
        technologies: "",
        lessons: [{ name: "", description: "" }],
        faqs: [{ question: "", answer: "" }],
        brands: [],
      });
    } catch (error) {
      toast.error("Error creating course. Please try again.");
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
                <label className="block text-yellow-500 mb-2">Duration *</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-500 mb-2">Max Mentees *</label>
                <input
                  type="number"
                  name="mentees"
                  value={formData.mentees}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
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
                name="description"
                value={formData.description}
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
                name="certificateImage"
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
              />
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">Brands *</label>
              <input
                type="file"
                name="brands"
                multiple
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
              />
            </div>
            <div>
              <label className="block text-yellow-500 mb-2">Lessons *</label>
              {formData.lessons.map((lesson, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    value={lesson.name}
                    onChange={(e) => handleLessonChange(index, "name", e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 mb-2"
                    required
                  />
                  <textarea
                    value={lesson.description}
                    onChange={(e) => handleLessonChange(index, "description", e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 mb-2"
                    rows="3"
                    required
                  ></textarea>
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
              {formData.faqs.map((faq, index) => (
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
    const savedCourses = localStorage.getItem("courses");
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
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
                <p className="text-gray-400 mb-4">{course.description}</p>
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
                <span>Dashboard</span>
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
 
