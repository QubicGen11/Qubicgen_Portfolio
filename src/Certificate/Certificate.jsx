import React from "react";

const Certificate = () => {
  // Add date formatting function
  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div
        className="relative w-[800px] h-[560px] bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/devewerw3/image/upload/v1746609944/Upscaled_Sharpened_Certificate_yoewvr.png')",
        }}
      >
        {/* Top Logos */}
        <img
          src="https://res.cloudinary.com/devewerw3/image/upload/v1730703051/1_gk8wxj.png"
          alt="QubicGen Logo"
          className="absolute -top-3 left-8 h-40"
        />
        <img
          src="https://res.cloudinary.com/devewerw3/image/upload/v1746012285/InspireLeap_Logo_3_rknd2i.png"
          alt="InspireLeap Logo"
          className="absolute top-8 right-8 h-12"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center text-center text-black px-8">
          {/* Title */}
          <h1 className="mt-24 text-5xl font-[cursive] font-bold text-gray-800"
          style={{fontFamily: "Alex Brush", cursive: true}}>
            Certificate of Appreciation
          </h1>
          <p className="text-sm mt-2 tracking-widest uppercase text-gray-700" style={{fontFamily: "Plus Jakarta Sans"}}>
            This certificate is proudly presented to
          </p>

          {/* Name */}
          <h2 className="mt-4 text-5xl font-semibold border-b border-gray-500 px-6 pb-1"  style={{fontFamily: "Alex Brush", cursive: true}}>
            Name & Surname
          </h2>

          {/* Body Text */}
          <p className="mt-8 max-w-2xl  leading-relaxed text-gray-900 text-xs font-[400] " style={{fontFamily: "Plus Jakarta Sans"}}>
            Has successfully completed an Internship with <strong>QubicGen</strong> from{" "}
            <strong>Start Date</strong> to <strong>End Date</strong> in the Domain of{" "}
            <strong>Course Name</strong>. He/She consistently demonstrated strong problem-solving abilities,
            excellent communication skills, a strong work ethic, and a desire to learn and grow.
          </p>

          {/* Footer Labels (Date / Signature) */}
          <div className="absolute bottom-20 left-16 text-sm text-gray-800 text-left">
            <div className="border-t w-32 border-yellow-900 mb-1"></div>
            <span>Date</span>
            <div className="text-sm font-normal mt-1">{getCurrentDate()}</div>
          </div>
          <div className="absolute bottom-20 right-16 text-sm text-gray-800 text-right">
            <div className="border-t w-32 border-yellow-900 mb-1 ml-auto"></div>
            <span>SIGNATURE</span>
          </div>

          {/* Certificate ID moved to bottom left */}
          <div className="absolute bottom-2 text-md left-2 text-xs font-semibold text-gray-800">
            Certificate ID : 9876543
          </div>

          {/* Center Bottom Logo + QR */}
          <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center">
            <img
              src="https://res.cloudinary.com/devewerw3/image/upload/v1746608245/qubicgen_Logo_fkoi11.png"
              alt="Center Logo"
              className="h-16"
            />
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=https://qubicgen.com&size=80x80"
              alt="QR Code"
              className="h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
