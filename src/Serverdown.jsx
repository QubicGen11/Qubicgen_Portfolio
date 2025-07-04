import React, { useEffect, useRef } from 'react';
import './Serverdown.css';

const Serverdown = () => {
  // For animated terminal effect
  const terminalRef = useRef(null);
  useEffect(() => {
    const terminal = terminalRef.current;
    let dots = 0;
    const interval = setInterval(() => {
      if (terminal) {
        dots = (dots + 1) % 4;
        terminal.textContent = `updating${'.'.repeat(dots)}`;
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="serverdown-container flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white text-center p-6 overflow-hidden">
      {/* Floating background shapes */}
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>
      {/* Subtle turning gear in background */}
      <div className="background-gear"></div>
      {/* Swinging Under Maintenance banner */}
      <div className="maintenance-banner z-20">
        <span className="banner-text">Server Under Maintenance</span>
      </div>
      {/* Animated tools */}
      <div className="tools-animation z-20">
        <div className="wrench"></div>
        <div className="screwdriver"></div>
      </div>
      {/* Robot with sparks and welding effect */}
      <div className="serverdown-robot mb-8 relative z-10">
        <div className="robot-body">
          <div className="robot-head">
            <div className="robot-eye left-eye"></div>
            <div className="robot-eye right-eye"></div>
            <div className="robot-antenna">
              <div className="antenna-light"></div>
            </div>
          </div>
          <div className="robot-arms">
            <div className="robot-arm left-arm animated-arm welding-arm">
              <div className="welding-spark"></div>
            </div>
            <div className="robot-arm right-arm animated-arm"></div>
          </div>
          <div className="robot-legs">
            <div className="robot-leg left-leg"></div>
            <div className="robot-leg right-leg"></div>
          </div>
          {/* Sparks */}
          <div className="robot-spark spark1"></div>
          <div className="robot-spark spark2"></div>
          <div className="robot-spark spark3"></div>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-2 animate-pulse z-10">We&apos;re Upgrading Our Server!</h1>
      <p className="mb-6 text-lg opacity-90 z-10">Our engineers are working hard to bring things back online.<br/>Thank you for your patience while we make improvements!</p>
      <div className="serverdown-progress w-full max-w-xs mx-auto mb-2 z-10">
        <div className="progress-bar">
          <div className="progress-bar-inner"></div>
        </div>
      </div>
      {/* Animated terminal */}
      <div className="serverdown-terminal bg-black bg-opacity-60 rounded-md px-4 py-2 mt-4 mb-2 w-full max-w-xs mx-auto z-10">
        <span ref={terminalRef} className="terminal-text text-green-400 font-mono text-base"></span>
      </div>
      <span className="text-sm text-gray-300 z-10">Estimated time: a few moments...</span>
    </div>
  );
}

export default Serverdown;
