import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing Portfolio...",
    "Loading Creative Content...",
    "Preparing Amazing Experience...",
    "Almost Ready...",
  ];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Cycle through loading texts
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <>
      {/* FIXED: Enhanced Custom CSS with Full Page Coverage */}
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spinPulse {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: rotate(180deg) scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes orbitSpin {
          0% {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(0, 245, 255, 0.5),
              0 0 40px rgba(255, 20, 147, 0.3), 0 0 60px rgba(138, 43, 226, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 245, 255, 0.8),
              0 0 80px rgba(255, 20, 147, 0.6),
              0 0 120px rgba(138, 43, 226, 0.4);
          }
        }

        @keyframes floatingParticle {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-30px) translateX(15px) rotate(90deg)
              scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) translateX(-10px) rotate(180deg)
              scale(0.8);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-40px) translateX(20px) rotate(270deg)
              scale(1.1);
            opacity: 0.9;
          }
        }

        @keyframes textGlow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(0, 245, 255, 0.8),
              0 0 20px rgba(255, 20, 147, 0.6);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 245, 255, 1),
              0 0 40px rgba(255, 20, 147, 0.8), 0 0 60px rgba(138, 43, 226, 0.6);
          }
        }

        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-180deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes progressFill {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes rippleEffect {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes particleOrbit {
          0% {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }

        @keyframes morphShape {
          0%,
          100% {
            border-radius: 50%;
            transform: rotate(0deg);
          }
          25% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: rotate(90deg);
          }
          50% {
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
            transform: rotate(180deg);
          }
          75% {
            border-radius: 30% 70% 30% 70% / 70% 30% 70% 30%;
            transform: rotate(270deg);
          }
        }

        /* FIXED: Enhanced Loader Container - Full Page Coverage */
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          min-height: 100vh;
          max-width: 100vw;
          z-index: 99999;
          background: linear-gradient(
            135deg,
            #050414 0%,
            #0a0820 25%,
            #1a0f2e 50%,
            #2a1b3d 75%,
            #050414 100%
          );
          background-size: 400% 400%;
          animation: gradientShift 8s ease-in-out infinite;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .loader-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at 30% 20%,
              rgba(0, 245, 255, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 70% 80%,
              rgba(255, 20, 147, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 40% 60%,
              rgba(138, 43, 226, 0.08) 0%,
              transparent 50%
            );
          animation: gradientShift 12s ease-in-out infinite;
          pointer-events: none;
        }

        /* FIXED: Content Wrapper for Proper Centering */
        .loader-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 2rem;
          box-sizing: border-box;
        }

        /* Central Loading Animation */
        .central-loader {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        /* Main Spinning Ring */
        .main-spinner {
          width: 120px;
          height: 120px;
          border: 6px solid rgba(255, 255, 255, 0.1);
          border-top: 6px solid;
          border-image: linear-gradient(
              45deg,
              #00f5ff,
              #ff1493,
              #8a2be2,
              #ffd700
            )
            1;
          border-radius: 50%;
          animation: spinPulse 2s linear infinite,
            pulseGlow 3s ease-in-out infinite;
          position: relative;
        }

        .main-spinner::before {
          content: "";
          position: absolute;
          inset: -10px;
          border: 2px solid rgba(0, 245, 255, 0.3);
          border-radius: 50%;
          animation: spinPulse 3s linear infinite reverse;
        }

        .main-spinner::after {
          content: "";
          position: absolute;
          inset: 15px;
          border: 3px solid rgba(255, 20, 147, 0.4);
          border-top-color: transparent;
          border-radius: 50%;
          animation: spinPulse 1.5s linear infinite;
        }

        /* Orbiting Elements */
        .orbit-container {
          position: absolute;
          width: 200px;
          height: 200px;
          animation: spinPulse 8s linear infinite reverse;
        }

        .orbit-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00f5ff, #ff1493);
          box-shadow: 0 0 20px currentColor;
          animation: orbitSpin 4s linear infinite;
        }

        .orbit-dot:nth-child(1) {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #00f5ff, #ffffff);
          animation-delay: 0s;
        }

        .orbit-dot:nth-child(2) {
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          background: linear-gradient(135deg, #ff1493, #8a2be2);
          animation-delay: 1s;
        }

        .orbit-dot:nth-child(3) {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #8a2be2, #ffd700);
          animation-delay: 2s;
        }

        .orbit-dot:nth-child(4) {
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          background: linear-gradient(135deg, #ffd700, #00ff7f);
          animation-delay: 3s;
        }

        /* Floating Particles */
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #00f5ff, #ff1493);
          border-radius: 50%;
          animation: floatingParticle 8s ease-in-out infinite;
        }

        .particle:nth-child(1) {
          top: 20%;
          left: 15%;
          animation-delay: 0s;
          background: linear-gradient(45deg, #00f5ff, #ffffff);
        }

        .particle:nth-child(2) {
          top: 30%;
          right: 20%;
          animation-delay: 1s;
          background: linear-gradient(45deg, #ff1493, #8a2be2);
        }

        .particle:nth-child(3) {
          bottom: 25%;
          left: 25%;
          animation-delay: 2s;
          background: linear-gradient(45deg, #8a2be2, #ffd700);
        }

        .particle:nth-child(4) {
          bottom: 35%;
          right: 15%;
          animation-delay: 3s;
          background: linear-gradient(45deg, #ffd700, #00ff7f);
        }

        .particle:nth-child(5) {
          top: 60%;
          left: 10%;
          animation-delay: 4s;
          background: linear-gradient(45deg, #00ff7f, #00f5ff);
        }

        .particle:nth-child(6) {
          top: 15%;
          right: 30%;
          animation-delay: 5s;
          background: linear-gradient(45deg, #ff6b35, #ff1493);
        }

        /* Logo */
        .loader-logo {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 900;
          animation: logoReveal 2s ease-out, textGlow 3s ease-in-out infinite;
        }

        .logo-bracket {
          background: linear-gradient(135deg, #00f5ff, #ff1493, #8a2be2);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .logo-text {
          color: #ffffff;
          margin: 0 4px;
        }

        /* Loading Text */
        .loading-text {
          font-size: 1.2rem;
          font-weight: 600;
          background: linear-gradient(135deg, #ffffff, #00f5ff, #ff1493);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 4s ease-in-out infinite,
            textGlow 2s ease-in-out infinite;
          text-align: center;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        /* Progress Bar */
        .progress-container {
          width: 100%;
          max-width: 300px;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          margin-bottom: 1rem;
        }

        .progress-container::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            90deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700
          );
          border-radius: inherit;
          opacity: 0.3;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(
            90deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700
          );
          background-size: 200% 100%;
          border-radius: inherit;
          transition: width 0.3s ease;
          animation: gradientShift 2s ease-in-out infinite;
          position: relative;
          z-index: 2;
        }

        .progress-bar::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4)
          );
          animation: progressFill 1s ease-in-out infinite;
        }

        /* Progress Text */
        .progress-text {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          opacity: 0.8;
          animation: textGlow 4s ease-in-out infinite;
          text-align: center;
        }

        /* Ripple Effects */
        .ripple-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .ripple {
          position: absolute;
          border: 2px solid rgba(0, 245, 255, 0.4);
          border-radius: 50%;
          animation: rippleEffect 3s ease-out infinite;
        }

        .ripple:nth-child(1) {
          top: 50%;
          left: 50%;
          margin: -60px 0 0 -60px;
          width: 120px;
          height: 120px;
          animation-delay: 0s;
        }

        .ripple:nth-child(2) {
          top: 50%;
          left: 50%;
          margin: -60px 0 0 -60px;
          width: 120px;
          height: 120px;
          border-color: rgba(255, 20, 147, 0.4);
          animation-delay: 1s;
        }

        .ripple:nth-child(3) {
          top: 50%;
          left: 50%;
          margin: -60px 0 0 -60px;
          width: 120px;
          height: 120px;
          border-color: rgba(138, 43, 226, 0.4);
          animation-delay: 2s;
        }

        /* Morphing Shapes */
        .morph-shape {
          position: absolute;
          width: 40px;
          height: 40px;
          background: linear-gradient(
            45deg,
            rgba(0, 245, 255, 0.2),
            rgba(255, 20, 147, 0.2)
          );
          animation: morphShape 6s ease-in-out infinite,
            particleOrbit 12s linear infinite;
        }

        .morph-shape:nth-child(1) {
          animation-delay: 0s;
        }

        .morph-shape:nth-child(2) {
          animation-delay: 2s;
          background: linear-gradient(
            45deg,
            rgba(255, 20, 147, 0.2),
            rgba(138, 43, 226, 0.2)
          );
        }

        .morph-shape:nth-child(3) {
          animation-delay: 4s;
          background: linear-gradient(
            45deg,
            rgba(138, 43, 226, 0.2),
            rgba(255, 215, 0, 0.2)
          );
        }

        /* FIXED: Responsive Design with Full Coverage */
        @media (max-width: 768px) {
          .loader-content {
            padding: 1.5rem;
          }

          .main-spinner {
            width: 100px;
            height: 100px;
          }

          .orbit-container {
            width: 160px;
            height: 160px;
          }

          .loader-logo {
            font-size: 1.4rem;
          }

          .loading-text {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .progress-container {
            max-width: 250px;
          }

          .particle {
            width: 4px;
            height: 4px;
          }
        }

        @media (max-width: 480px) {
          .loader-content {
            padding: 1rem;
          }

          .main-spinner {
            width: 80px;
            height: 80px;
          }

          .orbit-container {
            width: 140px;
            height: 140px;
          }

          .loader-logo {
            font-size: 1.2rem;
          }

          .loading-text {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }

          .progress-container {
            max-width: 200px;
          }

          .orbit-dot {
            width: 8px;
            height: 8px;
          }

          .progress-text {
            font-size: 0.9rem;
          }
        }

        /* FIXED: Ensure no scrollbars */
        html,
        body {
          overflow: hidden;
        }

        .loader-container.active {
          overflow: hidden;
        }
      `}</style>

      {/* FIXED: Ultra-Enhanced Loader with Full Page Coverage */}
      <div className="loader-container active">
        <div className="loader-content">
          {/* Floating Particles */}
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>

          {/* Morphing Shapes */}
          <div className="morph-shape"></div>
          <div className="morph-shape"></div>
          <div className="morph-shape"></div>

          {/* Ripple Effects */}
          <div className="ripple-container">
            <div className="ripple"></div>
            <div className="ripple"></div>
            <div className="ripple"></div>
          </div>

          {/* Central Loading Animation */}
          <div className="central-loader">
            {/* Orbiting Elements */}
            <div className="orbit-container">
              <div className="orbit-dot"></div>
              <div className="orbit-dot"></div>
              <div className="orbit-dot"></div>
              <div className="orbit-dot"></div>
            </div>

            {/* Main Spinner */}
            <div className="main-spinner">
              {/* Logo in Center */}
              <div className="loader-logo">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-text">S</span>
                <span className="logo-bracket">/</span>
                <span className="logo-text">G</span>
                <span className="logo-bracket">&gt;</span>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="loading-text">{loadingTexts[currentText]}</div>

          {/* Progress Bar */}
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${Math.min(loadingProgress, 100)}%` }}
            ></div>
          </div>

          {/* Progress Percentage */}
          <div className="progress-text">
            {Math.round(Math.min(loadingProgress, 100))}%
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
