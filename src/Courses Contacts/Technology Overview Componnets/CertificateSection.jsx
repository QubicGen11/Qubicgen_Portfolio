import React from 'react';

const CertificateShowcase = () => {
  const certificates = [
    {
      id: 1,
      image: 'https://corizo.in/wp-content/uploads/2024/09/c11.jpg', // Replace with actual image path
      alt: 'Certificate of Excellence',
    },
    {
      id: 2,
      image: 'https://corizo.in/wp-content/uploads/2024/09/c22.jpg', // Replace with actual image path
      alt: 'Certificate of Internship',
    },
  ];

  return (
    <div className=" py-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-8">
          Certify your Success
        </h2>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="relative group rounded-lg overflow-hidden   hover:scale-105 transition-transform duration-300 flex justify-center"
            >
              <img
                src={certificate.image}
                alt={certificate.alt}
                className="w-1/2 h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateShowcase;
