import React, { useEffect, useRef } from 'react';
import './Carausel.css';
import { Carousel } from 'bootstrap'; // import Carousel from Bootstrap
import { Link } from 'react-router-dom';

const Carausel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselInstance = new Carousel(carouselRef.current, {
      interval: 3000, // Set autoplay interval to 5 seconds
      pause: false, // Disable pause on hover
    });

    // Start autoplay
    carouselInstance.cycle();

    // Handle mouse enter and leave events for the carousel caption
    const carouselCaption = carouselRef.current.querySelector('#captiontrust');
    const carouselCaption1 = carouselRef.current.querySelector('#captiontrust1');
    const carouselCaption2 = carouselRef.current.querySelector('#captiontrust2');
    const carouselCaption3 = carouselRef.current.querySelector('#captiontrust3');
    carouselCaption.addEventListener('mouseenter', () => {
      carouselInstance.pause();
    });
    carouselCaption.addEventListener('mouseleave', () => {
      carouselInstance.cycle();
    });
    carouselCaption1.addEventListener('mouseenter', () => {
      carouselInstance.pause();
    });
    carouselCaption1.addEventListener('mouseleave', () => {
      carouselInstance.cycle();
    });
    carouselCaption2.addEventListener('mouseenter', () => {
      carouselInstance.pause();
    });
    carouselCaption2.addEventListener('mouseleave', () => {
      carouselInstance.cycle();
    });
    carouselCaption3.addEventListener('mouseenter', () => {
      carouselInstance.pause();
    });
    carouselCaption3.addEventListener('mouseleave', () => {
      carouselInstance.cycle();
    });

    return () => {
      // Cleanup event listeners and carousel instance when the component unmounts
      carouselCaption.removeEventListener('mouseenter', () => {
        carouselInstance.pause();
      });
      carouselCaption.removeEventListener('mouseleave', () => {
        carouselInstance.cycle();
      });
      carouselCaption1.removeEventListener('mouseenter', () => {
        carouselInstance.pause();
      });
      carouselCaption1.removeEventListener('mouseleave', () => {
        carouselInstance.cycle();
      });
      carouselCaption2.removeEventListener('mouseenter', () => {
        carouselInstance.pause();
      });
      carouselCaption2.removeEventListener('mouseleave', () => {
        carouselInstance.cycle();
      });
      carouselCaption3.removeEventListener('mouseenter', () => {
        carouselInstance.pause();
      });
      carouselCaption3.removeEventListener('mouseleave', () => {
        carouselInstance.cycle();
      });
      carouselInstance.dispose();
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        ref={carouselRef}
        tabIndex="0" // Make the carousel focusable to handle focus and blur events
      >
        <div className="carousel-indicators" id='btnsofcarausel'>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
        </div>
      <div className="carousel-inner">
        <div className="carousel-item active"  >
          <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709803237/QubicGen/Home%20Page/Corossal/Slide1_1_ejspvq_e2vp5u_1_1_afehbj.jpg" id='slide1img' className="d-block w-100" alt="Image is still loading" loading="lazy" />
          <div className="carousel-caption" id='captiontrust'>
            <h1 style={{ color: 'white' }}>Unlock</h1>
            <h1 style={{ color: 'white' }}>Your </h1>
            <h1>Thoughts.</h1>
            <a href="https://qubic-gen.blogspot.com/2024/04/unlock-your-thoughts-empowering-minds.html" target='_blank'>
            <div className="w-full flex  cursor-pointer text-xs mt-2 rounded-lg ">
  <div
    className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
    style={{border:'solid 2px white'}}>
    <span
      className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"
    ></span>
    <span
      className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-yellow-500"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-yellow-500"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200 font-bolder text-xs"
      >Know more</span
    >
  </div>
</div>

            </a>
            
          </div>
        </div>
        <div className="carousel-item" >
          <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709803508/QubicGen/Home%20Page/Corossal/Slidethree_1_oyauhe_rsbljp_1_1_1_1_deornf.jpg" id='slide3img' className="d-block w-100" alt="..." loading="lazy" />
          <div className="carousel-caption" id='captiontrust1' >
            <h1 style={{ color: 'white' }}>your trusted it partner </h1>
            <h1>for reliability and excellence.</h1>
            
            <a
  href="https://qubic-gen.blogspot.com/2024/04/your-trusted-it-partner-delivering.html"
  target="_blank"
>
  <div className="w-full flex cursor-pointer text-xs mt-2 rounded-lg">
    <div
      className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 dark:text-white dark:hover:text-gray-200 dark:shadow-none group animate-fade-in-left"
      style={{ border: 'solid 2px white' }}
    >
      <span
        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"
      ></span>
      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          className="w-5 h-5 text-yellow-500"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </span>
      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          className="w-5 h-5 text-yellow-500"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </span>
      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200 font-bolder text-xs">
        Know more
      </span>
    </div>
  </div>
</a>


    


          </div>
        </div>
        <div className="carousel-item" >
          <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709803609/QubicGen/Home%20Page/Corossal/Slidetwo_v2l3e3_kunfm5_2_lswsgi.jpg" id='slide2img' className="d-block w-100" alt="..." loading="lazy" />
          <div className="carousel-caption" id='captiontrust2'>
            <h1 style={{ color: 'white' }}>one stop solution </h1>
            <h1>for all your business ideas. </h1>
            <Link to="/businessconsulting">

            <div className="w-full flex  cursor-pointer text-xs mt-2 rounded-lg ">
  <div
    className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
    style={{border:'solid 2px white'}}>
    <span
      className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"
    ></span>
    <span
      className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-yellow-500"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-yellow-500"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200 font-bolder text-xs"
      >Know more</span
    >
  </div>
</div>
           </Link>


          </div>
        </div>

        <div className="carousel-item" >
          <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1711617993/QubicGen/Home%20Page/Corossal/futuristic-5g-wireless-network-ai-robot-hand-tap-wifi-icon_1_nknhjd.jpg" id='slide4img' className="d-block w-100" alt="..." loading="lazy" />
          <div className="carousel-caption" id='captiontrust3'>
            <h1 style={{ color: 'white' }}>Automate.</h1>
            <h1>Operate.</h1> 
            <h1>Excel...</h1>
            <Link to="/rpa">

            <div className="w-full flex  cursor-pointer text-xs mt-2 rounded-lg ">
  <div
    className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
    style={{border:'solid 2px white'}}>
    <span
      className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out group-hover:h-full"
    ></span>
    <span
      className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-yellow-500"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5 text-yellow-500"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200 font-bolder text-xs"
      >Know more</span
    >
  </div>
</div>
       </Link>

          </div>
        </div>
      </div>

<div className="carauselbtnss ">
<button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

</div>

   
    </div>
    </div>  )
}

export default Carausel