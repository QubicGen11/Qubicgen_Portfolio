import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../HomeComponents/Navbar";
import { FaSearch } from "react-icons/fa";

const Certificate = () => {
  const { id } = useParams();

  // Certificate data state
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verification animation state
  const [verified, setVerified] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Fetch certificate data
    const fetchCertificate = async () => {
      try {
        const res = await fetch(`http://localhost:3000/inspireleap/getCertificateByEnrollmentId/${id}`);
        const data = await res.json();
        if (data.success && data.certificate) {
          setCertificate(data.certificate);
        }
      } catch (e) {
        // handle error (optional)
      } finally {
        setLoading(false);
      }
    };
    fetchCertificate();
  }, [id]);

  useEffect(() => {
    // Show overlay, then show verified after 2s, then stay until user clicks OK
    if (!loading) {
      const timer = setTimeout(() => {
        setVerified(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Helper for date formatting
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[50vw] flex items-center justify-center  p-4 relative" style={{background:"URL('https://res.cloudinary.com/devewerw3/image/upload/v1746647829/ChatGPT_Image_May_8_2025_01_19_56_AM_j1tan5.png')", backgroundSize:"cover", backgroundPosition:"center"}}>  
        <div>
          {/* Loader/Verification Overlay */}
          {showOverlay && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 bg-opacity-40"  style={{background:"URL('https://res.cloudinary.com/devewerw3/image/upload/v1746647829/ChatGPT_Image_May_8_2025_01_19_56_AM_j1tan5.png')", backgroundSize:"cover", backgroundPosition:"center"}}>
              {!verified || loading ? (
                <div className="flex flex-col items-center bg-white rounded-lg shadow-lg px-8 py-6 min-w-[320px]">
                  <span className="inline-block mb-4" style={{height: "48px", width: "48px", position: "relative"}}>
                    <span
                      style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // The icon will move in a circular path
                        animation: "moveCircle 1.2s linear infinite"
                      }}
                    >
                      <FaSearch className="text-green-700 text-3xl" />
                    </span>
                  </span>
                  <span className="text-green-700 text-xl font-bold mb-2 text-center">
                    Verifying...
                  </span>
                  <div className="text-xs text-gray-500 mb-4 text-center">
                    Powered By <span className="font-semibold text-gray-700">QubicGen Private Limited</span>
                  </div>
                  <style>
                    {`
                      @keyframes moveCircle {
                        0%   { transform: translate(0px, 0px);}
                        12.5% { transform: translate(12px, 0px);}
                        25%  { transform: translate(17px, 12px);}
                        37.5% { transform: translate(12px, 24px);}
                        50%  { transform: translate(0px, 34px);}
                        62.5% { transform: translate(-12px, 24px);}
                        75%  { transform: translate(-17px, 12px);}
                        87.5% { transform: translate(-12px, 0px);}
                        100% { transform: translate(0px, 0px);}
                      }
                    `}
                  </style>
                </div>
              ) : (
                <div className="flex flex-col items-center bg-white rounded-lg shadow-lg px-8 py-6 min-w-[320px]">
                  <svg
                    className="h-16 w-16 text-green-600 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-green-700 text-xl font-bold mb-2 text-center">
                    Successfully Verified the Credential
                  </span>
                  <div className="text-xs text-gray-500 mb-4 text-center">
                    Powered By <span className="font-semibold text-gray-700">QubicGen Private Limited</span>
                  </div>
                  {/* OK button only shown after verified */}
                  <button
                    className="mt-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    onClick={() => setShowOverlay(false)}
                  >
                    OK
                  </button>
                </div>
              )}
            </div>
          )}

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
                style={{ fontFamily: "Alex Brush", cursive: true }}>
                Certificate of Appreciation
              </h1>
              <p className="text-sm mt-2 tracking-widest uppercase text-gray-700" style={{ fontFamily: "Plus Jakarta Sans" }}>
                This certificate is proudly presented to
              </p>

              {/* Name */}
              <h2 className="mt-4 text-5xl font-semibold border-b border-gray-500 px-6 pb-1" style={{ fontFamily: "Alex Brush", cursive: true }}>
                {certificate?.recipientName || certificate?.enrollment?.name || "Name & Surname"}
              </h2>

              {/* Body Text */}
              <p className="mt-8 max-w-2xl leading-relaxed text-gray-900 text-xs font-[400]" style={{ fontFamily: "Plus Jakarta Sans" }}>
                Has successfully completed an Internship with <strong>{certificate?.issuedByName || "QubicGen"}</strong> from{" "}
                <strong>{formatDate(certificate?.startDate) || "Start Date"}</strong> to <strong>{formatDate(certificate?.endDate) || "End Date"}</strong> in the Domain of{" "}
                <strong>{certificate?.domain || certificate?.enrollment?.course?.courseName || "Course Name"}</strong>. He/She consistently demonstrated strong problem-solving abilities,
                excellent communication skills, a strong work ethic, and a desire to learn and grow.
              </p>

              {/* Footer Labels (Date / Signature) */}
              <div className="absolute bottom-20 left-16 text-sm text-gray-800 text-left">
                <span>Date</span>
                <div className="border-t w-32 border-yellow-900 mb-1"></div>
                <div className="text-sm font-normal mt-1">{formatDate(certificate?.issueDate) || formatDate(new Date())}</div>
              </div>
              <div className="absolute bottom-20 right-16 text-sm text-gray-800 text-right">
                <div className=" font-normal mt-1 text-xl"  style={{ fontFamily: "Alex Brush", cursive: true }}>shaiksajidhussain</div>
                <div className="border-t w-32 border-yellow-900 mb-1 ml-auto"></div>
                <div className="text-left">SIGNATURE</div>
              </div>

              {/* Certificate ID moved to bottom left */}
              <div className="absolute bottom-2 text-md left-2 text-xs font-semibold text-gray-800">
                Certificate ID : {certificate?.certificateNumber || certificate?.verificationCode || "9876543"}
              </div>

              {/* Center Bottom Logo + QR */}
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center">
                <img
                  src="https://res.cloudinary.com/devewerw3/image/upload/v1746608245/qubicgen_Logo_fkoi11.png"
                  alt="Center Logo"
                  className="h-16"
                />
                {/* <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(window.location.href)}&size=80x80`}
                  alt="QR Code"
                  className="h-12"
                /> */}
              </div>
            </div>
          </div>
          {/* Add keyframes for spin animation */}
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg);}
                100% { transform: rotate(360deg);}
              }
            `}
          </style>
        </div>
      </div>
    </>
  );
};

export default Certificate;
