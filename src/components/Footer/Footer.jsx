import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerSection = document.querySelector("footer");
    if (footerSection) {
      observer.observe(footerSection);
    }

    return () => {
      if (footerSection) observer.unobserve(footerSection);
    };
  }, []);

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Enhanced Custom CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientFlow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes floatingOrb {
          0%,
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-20px) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translateY(10px) rotate(240deg) scale(0.9);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(0, 245, 255, 0.3),
              0 0 40px rgba(255, 20, 147, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 245, 255, 0.5),
              0 0 60px rgba(255, 20, 147, 0.3);
          }
        }

        @keyframes socialBounce {
          0%,
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) scale(1.2) rotate(5deg);
          }
        }

        @keyframes navHover {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes shimmerEffect {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes liquidWave {
          0%,
          100% {
            transform: translateX(0) scaleY(1);
          }
          33% {
            transform: translateX(15px) scaleY(1.1);
          }
          66% {
            transform: translateX(-10px) scaleY(0.9);
          }
        }

        /* Enhanced Footer Container */
        .footer-container {
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.98),
            rgba(30, 41, 59, 0.95),
            rgba(51, 65, 85, 0.92),
            rgba(15, 23, 42, 0.98)
          );
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(20px);
        }

        .footer-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700,
            #00ff7f,
            #ff6b35
          );
          background-size: 400% 100%;
          animation: gradientFlow 6s ease-in-out infinite,
            liquidWave 4s ease-in-out infinite;
        }

        .footer-container::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(0, 245, 255, 0.03) 40%,
            rgba(255, 20, 147, 0.03) 50%,
            rgba(138, 43, 226, 0.03) 60%,
            transparent 70%
          );
          background-size: 400% 400%;
          animation: gradientFlow 8s ease-in-out infinite;
          opacity: 0.8;
        }

        /* Enhanced Name/Logo */
        .footer-name {
          background: linear-gradient(
            135deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 300% 300%;
          animation: gradientFlow 4s ease-in-out infinite;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 30px rgba(0, 245, 255, 0.5);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-name::before {
          content: "";
          position: absolute;
          inset: -5px;
          background: linear-gradient(
            135deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700
          );
          background-size: 300% 300%;
          border-radius: 10px;
          filter: blur(15px);
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: -1;
          animation: gradientFlow 4s ease-in-out infinite;
        }

        .footer-name:hover::before {
          opacity: 0.3;
        }

        .footer-name:hover {
          transform: translateY(-3px) scale(1.05);
          filter: drop-shadow(0 10px 20px rgba(0, 245, 255, 0.3));
        }

        /* Enhanced Navigation Links */
        .nav-link {
          color: #e5e7eb;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 25px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 245, 255, 0.2),
            rgba(255, 20, 147, 0.2),
            transparent
          );
          transition: left 0.8s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00f5ff, #ff1493);
          transition: all 0.4s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover {
          color: #ffffff;
          background: rgba(0, 245, 255, 0.1);
          border-color: rgba(0, 245, 255, 0.5);
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 245, 255, 0.2),
            0 0 30px rgba(255, 20, 147, 0.1);
          animation: navHover 0.6s ease-in-out;
        }

        .nav-link:hover::before {
          left: 100%;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Enhanced Social Icons */
        .social-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1),
            rgba(0, 245, 255, 0.1)
          );
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(15px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          color: #e5e7eb;
          text-decoration: none;
        }

        .social-icon::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: conic-gradient(
            from 0deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700,
            #00f5ff
          );
          border-radius: 50%;
          animation: rotate 4s linear infinite;
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: -1;
        }

        .social-icon::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle,
            rgba(0, 245, 255, 0.1),
            rgba(255, 20, 147, 0.1),
            transparent
          );
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-icon:hover::before {
          opacity: 1;
        }

        .social-icon:hover::after {
          transform: scale(1);
        }

        .social-icon:hover {
          background: linear-gradient(
            135deg,
            rgba(0, 245, 255, 0.2),
            rgba(255, 20, 147, 0.2)
          );
          border-color: rgba(0, 245, 255, 0.6);
          color: #ffffff;
          transform: translateY(-10px) scale(1.2) rotate(5deg);
          box-shadow: 0 15px 35px rgba(0, 245, 255, 0.3),
            0 0 50px rgba(255, 20, 147, 0.2);
          animation: socialBounce 0.8s ease-in-out;
        }

        /* GitHub specific hover */
        .social-icon.github:hover {
          background: linear-gradient(
            135deg,
            rgba(88, 101, 242, 0.2),
            rgba(139, 92, 246, 0.2)
          );
          border-color: rgba(88, 101, 242, 0.6);
          box-shadow: 0 15px 35px rgba(88, 101, 242, 0.3);
        }

        /* LinkedIn specific hover */
        .social-icon.linkedin:hover {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.2),
            rgba(37, 99, 235, 0.2)
          );
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.3);
        }

        /* Instagram specific hover */
        .social-icon.instagram:hover {
          background: linear-gradient(
            135deg,
            rgba(236, 72, 153, 0.2),
            rgba(168, 85, 247, 0.2)
          );
          border-color: rgba(236, 72, 153, 0.6);
          box-shadow: 0 15px 35px rgba(236, 72, 153, 0.3);
        }

        /* Facebook specific hover */
        .social-icon.facebook:hover {
          background: linear-gradient(
            135deg,
            rgba(37, 99, 235, 0.2),
            rgba(59, 130, 246, 0.2)
          );
          border-color: rgba(37, 99, 235, 0.6);
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);
        }

        /* Twitter specific hover */
        .social-icon.twitter:hover {
          background: linear-gradient(
            135deg,
            rgba(51, 65, 85, 0.2),
            rgba(75, 85, 99, 0.2)
          );
          border-color: rgba(51, 65, 85, 0.6);
          box-shadow: 0 15px 35px rgba(51, 65, 85, 0.3);
        }

        /* Enhanced Copyright */
        .copyright-text {
          background: linear-gradient(
            90deg,
            rgba(156, 163, 175, 0.8),
            rgba(209, 213, 219, 0.9),
            rgba(156, 163, 175, 0.8)
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerEffect 3s ease-in-out infinite;
          position: relative;
        }

        .copyright-text::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          width: 60px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(156, 163, 175, 0.5),
            transparent
          );
          transform: translateX(-50%);
        }

        /* Floating Orbs */
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 245, 255, 0.1),
            transparent
          );
          animation: floatingOrb 15s ease-in-out infinite;
          pointer-events: none;
          filter: blur(1px);
        }

        .orb-1 {
          top: 20%;
          left: 5%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }

        .orb-2 {
          top: 50%;
          right: 10%;
          width: 60px;
          height: 60px;
          background: radial-gradient(
            circle,
            rgba(255, 20, 147, 0.1),
            transparent
          );
          animation-delay: 5s;
        }

        .orb-3 {
          bottom: 30%;
          left: 15%;
          width: 70px;
          height: 70px;
          background: radial-gradient(
            circle,
            rgba(138, 43, 226, 0.1),
            transparent
          );
          animation-delay: 10s;
        }

        /* Animation Classes */
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }

        .fade-in-up.visible {
          animation-delay: var(--delay, 0s);
        }

        .slide-in-left {
          opacity: 0;
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .slide-in-left.visible {
          animation-delay: var(--delay, 0s);
        }

        .slide-in-right {
          opacity: 0;
          animation: slideInRight 0.8s ease-out forwards;
        }

        .slide-in-right.visible {
          animation-delay: var(--delay, 0s);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .floating-orb {
            display: none;
          }

          .social-icon {
            width: 50px;
            height: 50px;
          }

          .nav-link {
            padding: 6px 12px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 640px) {
          .social-icon {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }

          .nav-link {
            padding: 5px 10px;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <footer className="footer-container text-white py-16 px-4 sm:px-[12vw] md:px-[7vw] lg:px-[20vw] relative">
        {/* Floating Background Orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>

        <div className="container mx-auto text-center relative z-10">
          {/* Enhanced Name / Logo */}
          <h2
            className={`footer-name text-2xl sm:text-3xl lg:text-4xl font-black mb-8 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ "--delay": "0.2s" }}
          >
            Subhadip Guchhait
          </h2>

          {/* Enhanced Navigation Links */}
          <nav
            className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ "--delay": "0.4s" }}
          >
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "work" },
              { name: "Education", id: "education" },
              { name: "Contact", id: "contact" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="nav-link text-sm sm:text-base"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Enhanced Social Media Icons */}
          <div
            className={`flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ "--delay": "0.6s" }}
          >
            <a
              href="https://github.com/SubhadipGuchhhait"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/subhadip-guchhait-675395252"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/itz_subhadip106?igsh=MW5uMnpkamNhMTg3dg=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/19QFBh3Liw/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/SubhadipG106"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter text-2xl"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Enhanced Copyright Text */}
          <p
            className={`copyright-text text-sm sm:text-base font-medium pt-8 fade-in-up ${
              isVisible ? "visible" : ""
            }`}
            style={{ "--delay": "0.8s" }}
          >
            © 2025 Subhadip Guchhait. Crafted with ❤️ and cutting-edge
            technology. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
