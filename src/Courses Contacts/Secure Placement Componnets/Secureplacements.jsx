import React from 'react'

const Secureplacements = () => {
  const topLogos = [
    { id: 1, src: "https://zerodha.com/static/images/logo.svg", alt: "Zerodha" },
    { id: 2, src: "https://corizo.in/wp-content/themes/techglobiz/images/brand-logo202.png", alt: "Khatabook" },
    { id: 3, src: "https://corizo.in/wp-content/themes/techglobiz/images/brand-logo204.png", alt: "Expedia" },
    { id: 4, src: "https://corizo.in/wp-content/themes/techglobiz/images/brand-logo201.png", alt: "NoBroker" },
  ]

  const bottomLogos = [
    { id: 1, src: "https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_1.svg?v=1732879309", alt: "Boat" },
    { id: 2, src: "https://www.ultratechcement.com/content/experience-fragments/ultratechcement/in/ihb/header/master1/_jcr_content/root/container_copy_86747432/container/image_copy.coreimg.png/1727338314222/ultratech-cement-logo.png", alt: "Speedcheck" },
    { id: 3, src: "https://fastly-production.24c.in/cars24/seo/static/1_20230830_1693395013.png", alt: "Cars24" },
    { id: 4, src: "https://corizo.in/wp-content/themes/techglobiz/images/brand-logo205.png", alt: "Razorpay" },
  ]

  return (
    <div className="py-12 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Secure Placements with Top Brands
        </h2>
        
        <div className="relative overflow-hidden py-8">
          {/* First Slider */}
          <div className="flex animate-scroll-left">
            <div className="flex space-x-8 whitespace-nowrap">
              {[...topLogos, ...topLogos].map((logo, idx) => (
                <div 
                  key={`${logo.id}-${idx}`} 
                  className="flex items-center justify-center rounded-lg p-6 w-48 h-24"
                  style={{backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(100px)"}}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-h-12 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Slider */}
          <div className="flex animate-scroll-right mt-8">
            <div className="flex space-x-8 whitespace-nowrap">
              {[...bottomLogos, ...bottomLogos].map((logo, idx) => (
                <div 
                  key={`${logo.id}-${idx}`}
                  className="flex items-center justify-center rounded-lg p-6 w-48 h-24"
                  style={{backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(100px)"}}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-h-12 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secureplacements
