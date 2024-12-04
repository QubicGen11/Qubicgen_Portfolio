import React from 'react';

const testimonials = [
  {
    name: 'Parthiv Kumar',
    course: 'Cybersecurity',
    university: 'Amrita Vishwa Vidyapeetham',
    title: 'I am grateful to Corizo for this wonderful opportunity',
    description:
      'During this intensive program, I gained valuable knowledge and hands-on experience in various aspects of cybersecurity...',
    image: 'path-to-parthiv-image',
  },
  {
    name: 'Ashi Dabhade',
    course: 'Psychology',
    university: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya',
    title: 'I got deep insights into psychological theories and practical skills',
    description:
      'This experience has been incredibly enriching, providing me with deep insights into psychological theories...',
    image: 'path-to-ashi-image',
  },
  {
    name: 'Pavan R V',
    course: 'Data Science',
    university: 'Amrita Vishwa Vidyapeetham',
    title: 'Guidance and expertise were instrumental in my learning journey',
    description:
      'Thank you, Corizo, for providing such a valuable opportunity...',
    image: 'path-to-pavan-image',
  },
  {
    name: 'Prabash Tankala',
    course: 'Web Development',
    university: 'GITAM Deemed University',
    title: 'This experience allowed me to enhance my technical skills',
    description:
      'I recently completed a rewarding internship at Corizo, where I had the opportunity to delve deeply into the field of Machine Learning...',
    image: 'path-to-prabash-image',
  },
  {
    name: 'Simran Yaseen',
    course: 'Nanoscience & Technology',
    university: 'GD Goenka University',
    title: 'This journey has been rewarding',
    description:
      'This journey has been rewarding, providing me with invaluable skills and insights that I am eager to apply in my professional endeavors...',
    image: 'path-to-simran-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#1a1a1a] text-white py-10 ">
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-200">
        Testimonials
      </h1>
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll space-x-4 mx-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#2e2e2e] rounded-lg shadow-md p-6 flex flex-col items-start w-[300px] min-w-[300px] transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                /> */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-100">
                    {testimonial.name}
                  </h2>
                  <p className="text-sm text-gray-400">{testimonial.course}</p>
                  <p className="text-sm text-purple-400">{testimonial.university}</p>
                </div>
              </div>
              <h3 className="text-gray-100 font-bold mb-2">{testimonial.title}</h3>
              <p className="text-gray-400 text-sm">{testimonial.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
