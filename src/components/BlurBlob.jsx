import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BlurBlob = ({
  position,
  size,
  colorScheme = "primary",
  animationType = "float",
  intensity = "medium",
  interactive = false,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Destructure position and size with default values
  const { top = "50%", left = "50%" } = position || {};
  const { width = "300px", height = "300px" } = size || {};

  // Color schemes
  const colorSchemes = {
    primary: "from-cyan-400 via-purple-500 to-pink-500",
    secondary: "from-emerald-400 via-blue-500 to-indigo-600",
    warm: "from-orange-400 via-red-500 to-pink-600",
    cool: "from-blue-400 via-indigo-500 to-purple-600",
    neon: "from-green-400 via-cyan-500 to-blue-500",
    sunset: "from-yellow-400 via-orange-500 to-red-600",
    ocean: "from-teal-400 via-blue-500 to-indigo-700",
    forest: "from-green-500 via-emerald-600 to-teal-700",
    cosmic: "from-purple-600 via-pink-500 to-red-500",
    aurora: "from-green-300 via-blue-500 to-purple-600",
  };

  // Animation types
  const animations = {
    float: "animate-float-gentle",
    morph: "animate-morph-blob",
    pulse: "animate-pulse-glow",
    rotate: "animate-rotate-slow",
    bounce: "animate-bounce-soft",
    wave: "animate-wave-motion",
    spiral: "animate-spiral-dance",
    breathe: "animate-breathe-soft",
  };

  // Intensity levels
  const intensityLevels = {
    low: { opacity: "opacity-10", blur: "blur-2xl", scale: "scale-90" },
    medium: { opacity: "opacity-20", blur: "blur-3xl", scale: "scale-100" },
    high: { opacity: "opacity-30", blur: "blur-4xl", scale: "scale-110" },
    extreme: {
      opacity: "opacity-40",
      blur: "blur-[100px]",
      scale: "scale-125",
    },
  };

  useEffect(() => {
    if (interactive) {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [interactive]);

  return (
    <>
      {/* Enhanced Custom CSS */}
      <style jsx>{`
        @keyframes float-gentle {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px) rotate(5deg);
          }
        }

        @keyframes morph-blob {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          25% {
            border-radius: 30% 70% 70% 30% / 30% 60% 40% 70%;
            transform: translate(-50%, -50%) rotate(90deg) scale(1.1);
          }
          50% {
            border-radius: 70% 30% 40% 60% / 70% 40% 60% 30%;
            transform: translate(-50%, -50%) rotate(180deg) scale(0.9);
          }
          75% {
            border-radius: 40% 60% 30% 70% / 40% 70% 30% 60%;
            transform: translate(-50%, -50%) rotate(270deg) scale(1.05);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            filter: blur(60px) brightness(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            filter: blur(80px) brightness(1.5);
          }
        }

        @keyframes rotate-slow {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes bounce-soft {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px) scale(1);
          }
          25% {
            transform: translate(-50%, -50%) translateY(-15px) scale(1.05);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-25px) scale(1.1);
          }
          75% {
            transform: translate(-50%, -50%) translateY(-10px) scale(1.05);
          }
        }

        @keyframes wave-motion {
          0%,
          100% {
            transform: translate(-50%, -50%) skewX(0deg) scaleX(1);
          }
          25% {
            transform: translate(-50%, -50%) skewX(5deg) scaleX(1.1);
          }
          50% {
            transform: translate(-50%, -50%) skewX(0deg) scaleX(1.2);
          }
          75% {
            transform: translate(-50%, -50%) skewX(-5deg) scaleX(1.1);
          }
        }

        @keyframes spiral-dance {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            border-radius: 50%;
          }
          25% {
            transform: translate(-50%, -50%) rotate(90deg) scale(1.1);
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(0.9);
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          }
          75% {
            transform: translate(-50%, -50%) rotate(270deg) scale(1.05);
            border-radius: 40% 60% 60% 40% / 60% 40% 40% 60%;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
            border-radius: 50%;
          }
        }

        @keyframes breathe-soft {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.4;
          }
        }

        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }

        .animate-morph-blob {
          animation: morph-blob 12s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 6s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .animate-bounce-soft {
          animation: bounce-soft 4s ease-in-out infinite;
        }

        .animate-wave-motion {
          animation: wave-motion 10s ease-in-out infinite;
        }

        .animate-spiral-dance {
          animation: spiral-dance 15s ease-in-out infinite;
        }

        .animate-breathe-soft {
          animation: breathe-soft 5s ease-in-out infinite;
        }

        /* Interactive Effects */
        .blob-interactive {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .blob-interactive:hover {
          transform: translate(-50%, -50%) scale(1.2) !important;
          filter: brightness(1.3) saturate(1.2);
        }

        /* Multiple Blob Effects */
        .blob-container {
          position: relative;
        }

        .blob-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .blob-layer:nth-child(1) {
          animation-delay: 0s;
          opacity: 0.4;
        }

        .blob-layer:nth-child(2) {
          animation-delay: 2s;
          opacity: 0.3;
          transform: scale(0.8);
        }

        .blob-layer:nth-child(3) {
          animation-delay: 4s;
          opacity: 0.2;
          transform: scale(1.2);
        }

        /* Particle Effects */
        .blob-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          animation: float-particle 6s ease-in-out infinite;
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) translateX(15px) scale(1.5);
            opacity: 1;
          }
        }

        .particle:nth-child(1) {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }
        .particle:nth-child(2) {
          top: 80%;
          left: 30%;
          animation-delay: 1s;
        }
        .particle:nth-child(3) {
          top: 40%;
          right: 20%;
          animation-delay: 2s;
        }
        .particle:nth-child(4) {
          bottom: 20%;
          right: 30%;
          animation-delay: 3s;
        }
        .particle:nth-child(5) {
          top: 60%;
          left: 10%;
          animation-delay: 4s;
        }
        .particle:nth-child(6) {
          bottom: 40%;
          left: 40%;
          animation-delay: 5s;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .blob-mobile {
            transform: scale(0.7) translate(-50%, -50%);
          }
        }

        @media (max-width: 480px) {
          .blob-mobile {
            transform: scale(0.5) translate(-50%, -50%);
          }
        }
      `}</style>

      {/* Enhanced Blob Container */}
      <div
        className="absolute blob-container"
        style={{
          top: top,
          left: left,
          width: width,
          height: height,
          transform: "translate(-50%, -50%)",
          animationDelay: `${delay}s`,
        }}
        onMouseEnter={() => interactive && setIsHovered(true)}
        onMouseLeave={() => interactive && setIsHovered(false)}
      >
        {/* Main Blob with Multiple Layers */}
        <div className="blob-layer">
          <div
            className={`
              w-full h-full rounded-full bg-gradient-to-br ${
                colorSchemes[colorScheme]
              }
              ${intensityLevels[intensity].opacity} 
              ${intensityLevels[intensity].blur}
              ${animations[animationType]}
              ${interactive ? "blob-interactive" : ""}
              blob-mobile
              transition-all duration-500 ease-out
            `}
            style={{
              background:
                interactive && isHovered
                  ? `radial-gradient(circle at ${mousePosition.x % 100}% ${
                      mousePosition.y % 100
                    }%, rgba(255,255,255,0.3), transparent)`
                  : undefined,
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          ></div>
        </div>

        {/* Secondary Layer for Depth */}
        <div className="blob-layer">
          <div
            className={`
              w-full h-full rounded-full bg-gradient-to-tl ${colorSchemes[colorScheme]}
              opacity-15 blur-2xl
              ${animations[animationType]}
              blob-mobile
            `}
            style={{
              animationDelay: `${delay + 1}s`,
              animationDuration: "10s",
            }}
          ></div>
        </div>

        {/* Tertiary Layer for Extra Glow */}
        <div className="blob-layer">
          <div
            className={`
              w-full h-full rounded-full bg-gradient-to-r ${colorSchemes[colorScheme]}
              opacity-10 blur-4xl
              ${animations[animationType]}
              blob-mobile
            `}
            style={{
              animationDelay: `${delay + 2}s`,
              animationDuration: "14s",
              animationDirection: "reverse",
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        {intensity === "high" || intensity === "extreme" ? (
          <div className="blob-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
        ) : null}

        {/* Central Glow Effect */}
        {intensity === "extreme" && (
          <div className="absolute inset-0 rounded-full bg-white opacity-5 blur-sm animate-pulse"></div>
        )}
      </div>
    </>
  );
};

// Enhanced prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  colorScheme: PropTypes.oneOf([
    "primary",
    "secondary",
    "warm",
    "cool",
    "neon",
    "sunset",
    "ocean",
    "forest",
    "cosmic",
    "aurora",
  ]),
  animationType: PropTypes.oneOf([
    "float",
    "morph",
    "pulse",
    "rotate",
    "bounce",
    "wave",
    "spiral",
    "breathe",
  ]),
  intensity: PropTypes.oneOf(["low", "medium", "high", "extreme"]),
  interactive: PropTypes.bool,
  delay: PropTypes.number,
};

// Default props
BlurBlob.defaultProps = {
  position: { top: "50%", left: "50%" },
  size: { width: "300px", height: "300px" },
  colorScheme: "primary",
  animationType: "float",
  intensity: "medium",
  interactive: false,
  delay: 0,
};

export default BlurBlob;
