import React, { useState } from 'react';

const syllabusData = [
  { id: 1, title: 'Web Development Basics', content: 'Introduction to web development, tools, and workflows.' },
  { id: 2, title: 'Hyper Text Markup Language (HTML)', content: 'Detailed overview of HTML5, semantic tags, and best practices.' },
  { id: 3, title: 'Web Design Basics', content: 'Foundations of web design, wireframes, and prototyping.' },
  { id: 4, title: 'Cascading Style Sheets (CSS)', content: 'Styling with CSS3, animations, and responsive design.' },
  { id: 5, title: 'Node.js', content: 'Introduction to Node.js, NPM, and building server-side applications.' },
  { id: 6, title: 'Object-Oriented Programming', content: 'Learn OOP concepts with JavaScript and modern frameworks.' },
  { id: 7, title: 'jQuery', content: 'DOM manipulation, animations, and AJAX with jQuery.' },
  { id: 8, title: 'Database Management', content: 'Relational databases, MySQL, and database design principles.' },
  { id: 9, title: 'JavaScript Programming', content: 'Deep dive into JavaScript, ES6+ features, and best practices.' },
  { id: 10, title: 'Database with MongoDB', content: 'NoSQL databases, MongoDB CRUD operations, and schema design.' },
];

const SyllabusSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-[#1a1a1a] py-16 px-6 font-sans">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Syllabus</h2>
        <div className="space-y-4">
          {syllabusData.map((item) => (
            <div key={item.id} className="bg-[#242424] rounded-lg shadow-md">
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium text-white focus:outline-none hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] rounded-lg"
              >
                <span>{item.id}. {item.title}</span>
                <span className="text-gray-300">
                  {expandedId === item.id ? '-' : '+'}
                </span>
              </button>
              {expandedId === item.id && (
                <div className="px-6 py-4 text-gray-300 text-lg bg-[#1a1a1a]">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusSection;
