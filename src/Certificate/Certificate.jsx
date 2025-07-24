import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Certificate = () => {
  const { id } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  // Force desktop mode for mobile devices
  useEffect(() => {
    const forceDesktopMode = () => {
      // Force desktop mode for screens smaller than 768px
      if (window.innerWidth < 768) {
        // Remove existing viewport meta tag
        const existingViewport = document.querySelector('meta[name="viewport"]');
        if (existingViewport) {
          existingViewport.remove();
        }
        
        // Create new viewport meta tag for desktop mode
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=1200, initial-scale=0.5, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(viewport);
        
        // Force body to have desktop-like styling
        document.body.style.minWidth = '1200px';
        document.body.style.overflowX = 'auto';
        
        // Add CSS to force desktop layout
        const style = document.createElement('style');
        style.id = 'desktop-mode-style';
        style.textContent = `
          @media screen and (max-width: 767px) {
            body {
              min-width: 1200px !important;
              overflow-x: auto !important;
            }
            .certificate {
              transform: scale(0.8) !important;
              transform-origin: top center !important;
            }
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Apply immediately
    forceDesktopMode();

    // Apply on window resize
    window.addEventListener('resize', forceDesktopMode);

    // Cleanup function
    return () => {
      // Remove the desktop mode style
      const desktopStyle = document.getElementById('desktop-mode-style');
      if (desktopStyle) {
        desktopStyle.remove();
      }
      
      // Restore original viewport
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.remove();
      }
      
      // Create default viewport
      const defaultViewport = document.createElement('meta');
      defaultViewport.name = 'viewport';
      defaultViewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(defaultViewport);
      
      // Restore body styles
      document.body.style.minWidth = '';
      document.body.style.overflowX = '';
      
      window.removeEventListener('resize', forceDesktopMode);
    };
  }, []);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const res = await fetch(`https://be.inspireleap.org/inspireleap/getCertificateByEnrollmentId/${id}`);
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
    if (!loading) {
      const timer = setTimeout(() => {
        setVerified(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

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
      {/* QubicGen Logo */}
      <div className="absolute top-4 left-4 z-10">
        <a href="/">
          <img 
            src="https://www.qubicgen.com/assets/og-CWlc-vx7.png" 
            alt="QubicGen Logo" 
            className="w-32 md:w-40 lg:w-48" 
          />
        </a>
      </div>

      <div 
        className="min-h-[100vh] w-full flex items-center justify-center p-2 sm:p-4 relative" 
        style={{
          background: "url('https://res.cloudinary.com/devewerw3/image/upload/v1746647829/ChatGPT_Image_May_8_2025_01_19_56_AM_j1tan5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="w-full flex justify-center">
          {/* Loader/Verification Overlay */}
          {showOverlay && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 bg-opacity-40"
              style={{background:"URL('https://res.cloudinary.com/devewerw3/image/upload/v1746647829/ChatGPT_Image_May_8_2025_01_19_56_AM_j1tan5.png')", backgroundSize:"cover", backgroundPosition:"center"}}>
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

          {/* New Certificate Design */}
          <div className="certificate" style={{
            position: 'relative',
            width: '800px',
            height: '565px',
            backgroundImage: "url('https://res.cloudinary.com/devewerw3/image/upload/v1746609944/Upscaled_Sharpened_Certificate_yoewvr.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'none',
            margin: 0,
            padding: 0
          }}>
            {/* Top Logos */}
            <img 
              src="https://res.cloudinary.com/dywmrbegq/image/upload/v1746686967/Qubicgen_Full_Logo_1_2_fg7igv.png" 
              alt="QubicGen Logo" 
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                height: '70px'
              }}
            />
            <img 
              src="https://res.cloudinary.com/devewerw3/image/upload/v1746012285/InspireLeap_Logo_3_rknd2i.png" 
              alt="InspireLeap Logo" 
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                height: '60px'
              }}
            />

            {/* Watermark Logo */}
            <img 
              src="https://res.cloudinary.com/devewerw3/image/upload/v1746608245/qubicgen_Logo_fkoi11.png" 
              alt="Center Watermark Logo" 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.08,
                width: '240px',
                height: 'auto',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />

            {/* Content */}
            <div className="content" style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              color: 'black',
              padding: '0 32px',
              zIndex: 1
            }}>
              <h1 className="title" style={{
                marginTop: '100px',
                fontSize: '3.5rem',
                fontFamily: "'Alex Brush', cursive",
                fontWeight: 'bold',
                color: 'rgb(31 41 55)'
              }}>{certificate?.type || "Certificate of Appreciation"}</h1>
              
              <p className="subtitle" style={{
                fontSize: '0.875rem',
                marginTop: '-1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgb(55 65 81)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 'bold'
              }}>This certificate is proudly presented to</p>
              
              <h2 className="name" style={{
                marginTop: '1rem',
                fontSize: '2.5rem',
                fontWeight: 400,
                borderBottom: '1px solid rgb(107 114 128)',
                padding: '0 1.5rem 0.25rem',
                fontFamily: "'Alex Brush', cursive"
              }}>{certificate?.recipientName || certificate?.enrollment?.name || "Name & Surname"}</h2>
              
              <p className="description" style={{
                marginTop: '1px',
                marginBottom: 0,
                maxWidth: '36rem',
                lineHeight: 1.75,
                color: 'rgb(17 24 39)',
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Has successfully completed an Internship with <strong>{certificate?.issuedByName || certificate?.enrollment?.course?.institution || "QubicGen"}</strong> from{" "}
                <strong>{formatDate(certificate?.startDate) || formatDate(certificate?.enrollment?.startDate) || "Start Date"}</strong> to <strong>{formatDate(certificate?.endDate) || formatDate(certificate?.enrollment?.endDate) || "End Date"}</strong> in the Domain of{" "}
                <strong>{certificate?.domain || certificate?.enrollment?.course?.courseName || "Course Name"}</strong>. He/She consistently demonstrated strong problem-solving abilities,
                excellent communication skills, a strong work ethic, and a desire to learn and grow.
              </p>

              {/* Footer */}
              <div className="date-signature-row" style={{
                position: 'absolute',
                bottom: '70px',
                left: '45px',
                right: '45px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                width: 'calc(100% - 90px)'
              }}>
                <div className="date-section" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: '16px',
                  color: 'rgb(31 41 55)',
                  flex: 1
                }}>
                  <span className="date-value">{formatDate(certificate?.issueDate) || formatDate(certificate?.enrollment?.completionDate) || formatDate(new Date())}</span>
                  <span className="date-label">Date</span>
                </div>

                <div className="qr-section" style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  flex: 1
                }}>
                  <div className="qr-section-content" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    flex: 1
                  }}>
                    <span className="qr-label" style={{
                      fontSize: '0.9rem',
                      color: '#555',
                      marginBottom: '2px',
                      marginTop: '20px'
                    }}>Scan here to verify</span>
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(window.location.href)}&size=80x80`}
                      alt="QR Code"
                      style={{
                        height: '80px',
                        width: '80px'
                      }}
                    />
                  </div>

                  <div className="aicte-section" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '20px'
                  }}>
                    <img 
                      src="https://res.cloudinary.com/devewerw3/image/upload/v1747205750/AICTE_v0zola.png" 
                      alt="AICTE Logo"
                      style={{
                        height: '60px'
                      }}
                    />
                  </div>
                </div>

                <div className="signature-section" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: '16px',
                  color: 'rgb(31 41 55)',
                  flex: 1
                }}>
                  <img 
                    src={certificate?.signatureImage || "https://res.cloudinary.com/devewerw3/image/upload/v1748447550/harisign_tf5pyb.png"} 
                    alt="Signature" 
                    style={{
                      height: '40px',
                      marginBottom: '8px',
                      transform: 'rotate(-20deg)'
                    }}
                  />
                  <span className="signature-value">{certificate?.signatoryName || "Director, QubicGen"}</span>
                  <span className="signature-label">SIGNATURE</span>
                </div>
              </div>

              <div className="certificate-id" style={{
                position: 'absolute',
                bottom: '20px',
                left: '8px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'rgb(31 41 55)'
              }}>
                Certificate ID: {certificate?.certificateNumber || certificate?.verificationCode || certificate?.enrollment?.certificateId || "9876543"}
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
};

export default Certificate;

