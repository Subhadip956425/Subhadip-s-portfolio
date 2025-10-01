import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      observer.observe(contactSection);
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (contactSection) observer.unobserve(contactSection);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_nyeodkk",
        "template_y6rntjj",
        form.current,
        "nAzMbVaq-h90ZWbBn"
      )
      .then(
        () => {
          setIsSent(true);
          setIsSubmitting(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsSubmitting(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <>
      {/* Ultra-Enhanced Custom CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.8) rotateX(15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
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
            transform: translateY(-30px) rotate(120deg) scale(1.2);
          }
          66% {
            transform: translateY(20px) rotate(240deg) scale(0.8);
          }
        }

        @keyframes morphingBackground {
          0%,
          100% {
            border-radius: 30px;
            transform: rotate(0deg);
          }
          25% {
            border-radius: 60px;
            transform: rotate(1deg);
          }
          50% {
            border-radius: 45px;
            transform: rotate(-1deg);
          }
          75% {
            border-radius: 35px;
            transform: rotate(0.5deg);
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) translateX(-10px) scale(0.8);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-30px) translateX(15px) scale(1.1);
            opacity: 0.9;
          }
        }

        @keyframes liquidWave {
          0%,
          100% {
            transform: translateX(0) scaleY(1);
          }
          33% {
            transform: translateX(20px) scaleY(1.1);
          }
          66% {
            transform: translateX(-15px) scaleY(0.9);
          }
        }

        @keyframes neonPulse {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(0, 245, 255, 0.5),
              0 0 10px rgba(0, 245, 255, 0.5), 0 0 15px rgba(0, 245, 255, 0.5),
              0 0 20px rgba(0, 245, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 10px rgba(255, 20, 147, 0.8),
              0 0 20px rgba(255, 20, 147, 0.8), 0 0 30px rgba(255, 20, 147, 0.8),
              0 0 40px rgba(255, 20, 147, 0.8);
          }
        }

        @keyframes buttonMorph {
          0%,
          100% {
            border-radius: 20px;
            transform: scale(1);
          }
          50% {
            border-radius: 35px;
            transform: scale(1.05);
          }
        }

        @keyframes energyRipple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(8);
            opacity: 0;
          }
        }

        @keyframes holographicShine {
          0% {
            background-position: -200% center;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            background-position: 200% center;
            opacity: 0;
          }
        }

        @keyframes matrixRain {
          0% {
            transform: translateY(-100px);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .section-title {
          background: linear-gradient(
            135deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700,
            #00ff7f,
            #ff6b35
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 600% 600%;
          animation: gradientFlow 6s ease-in-out infinite,
            neonPulse 3s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(0, 245, 255, 0.3));
        }

        .title-animation {
          opacity: 0;
          animation: fadeInUp 1.5s ease-out forwards;
        }

        .title-animation.visible {
          animation-delay: 0.3s;
        }

        .underline-animation {
          background: linear-gradient(
            90deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700,
            #00ff7f,
            #ff6b35
          );
          background-size: 600% 100%;
          animation: gradientFlow 5s ease-in-out infinite,
            liquidWave 4s ease-in-out infinite;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.5));
        }

        .underline-animation::before {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(15px);
          opacity: 0.8;
        }

        .underline-animation.visible {
          transform: scaleX(1);
        }

        /* Ultra-Enhanced Contact Form Container */
        .contact-form-container {
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.98),
            rgba(30, 41, 59, 0.95),
            rgba(51, 65, 85, 0.92),
            rgba(15, 23, 42, 0.98)
          );
          border: 3px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(25px);
          position: relative;
          overflow: hidden;
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(80px) scale(0.8) rotateX(20deg);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5),
            inset 0 0 40px rgba(0, 245, 255, 0.05);
          animation: morphingBackground 8s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .contact-form-container.visible {
          animation: slideInScale 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards,
            morphingBackground 8s ease-in-out infinite 1.2s;
        }

        .contact-form-container::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 3px;
          background: linear-gradient(
            45deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700,
            #00ff7f,
            #ff6b35,
            #00f5ff
          );
          background-size: 600% 600%;
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          animation: gradientFlow 10s ease-in-out infinite;
          opacity: 0;
          transition: opacity 1s ease;
          z-index: 1;
        }

        .contact-form-container::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(0, 245, 255, 0.1) 40%,
            rgba(255, 20, 147, 0.1) 50%,
            rgba(138, 43, 226, 0.1) 60%,
            transparent 70%
          );
          background-size: 400% 400%;
          animation: holographicShine 3s ease-in-out infinite,
            gradientFlow 8s ease-in-out infinite;
          z-index: 1;
          opacity: 0.8;
        }

        .contact-form-container:hover::before {
          opacity: 1;
        }

        .contact-form-container:hover {
          transform: translateY(-15px) scale(1.02) rotateX(-5deg);
          box-shadow: 0 50px 120px rgba(0, 245, 255, 0.3),
            0 0 150px rgba(255, 20, 147, 0.2),
            inset 0 0 60px rgba(0, 245, 255, 0.1);
          border-color: rgba(0, 245, 255, 0.5);
        }

        /* Particle System */
        .particle-system {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 2;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #00f5ff, #ff1493);
          border-radius: 50%;
          animation: particleFloat 8s ease-in-out infinite;
          opacity: 0.7;
        }

        .particle:nth-child(1) {
          top: 10%;
          left: 20%;
          animation-delay: 0s;
        }
        .particle:nth-child(2) {
          top: 20%;
          right: 25%;
          animation-delay: 1s;
          background: linear-gradient(45deg, #ff1493, #8a2be2);
        }
        .particle:nth-child(3) {
          bottom: 30%;
          left: 15%;
          animation-delay: 2s;
          background: linear-gradient(45deg, #8a2be2, #ffd700);
        }
        .particle:nth-child(4) {
          top: 60%;
          right: 20%;
          animation-delay: 3s;
          background: linear-gradient(45deg, #ffd700, #00ff7f);
        }
        .particle:nth-child(5) {
          bottom: 20%;
          left: 30%;
          animation-delay: 4s;
          background: linear-gradient(45deg, #00ff7f, #ff6b35);
        }
        .particle:nth-child(6) {
          top: 40%;
          left: 50%;
          animation-delay: 0.5s;
          background: linear-gradient(45deg, #ff6b35, #00f5ff);
        }

        /* Matrix Rain Effect */
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.1;
        }

        .matrix-char {
          position: absolute;
          color: #00f5ff;
          font-family: "Courier New", monospace;
          font-size: 10px;
          animation: matrixRain 4s linear infinite;
        }

        .matrix-char:nth-child(1) {
          left: 10%;
          animation-delay: 0s;
        }
        .matrix-char:nth-child(2) {
          left: 25%;
          animation-delay: 0.5s;
        }
        .matrix-char:nth-child(3) {
          left: 40%;
          animation-delay: 1s;
        }
        .matrix-char:nth-child(4) {
          left: 60%;
          animation-delay: 1.5s;
        }
        .matrix-char:nth-child(5) {
          left: 80%;
          animation-delay: 2s;
        }

        /* Ultra-Enhanced Form Fields */
        .form-field {
          background: rgba(15, 23, 42, 0.9);
          border: 2px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          backdrop-filter: blur(15px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          z-index: 10;
          border-radius: 15px;
        }

        .form-field::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #00f5ff, #ff1493, #8a2be2);
          background-size: 200% 100%;
          animation: gradientFlow 3s ease-in-out infinite;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
          border-radius: 0 0 15px 15px;
        }

        .form-field::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            rgba(0, 245, 255, 0.03),
            rgba(255, 20, 147, 0.03),
            rgba(138, 43, 226, 0.03)
          );
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
          border-radius: inherit;
        }

        .form-field:focus {
          background: rgba(15, 23, 42, 0.98);
          border-color: rgba(0, 245, 255, 0.8);
          outline: none;
          box-shadow: 0 0 30px rgba(0, 245, 255, 0.4),
            0 0 60px rgba(255, 20, 147, 0.2),
            inset 0 0 30px rgba(0, 245, 255, 0.1);
          transform: translateY(-3px) scale(1.02);
          border-radius: 20px;
        }

        .form-field:focus::before {
          width: 100%;
        }

        .form-field:focus::after {
          opacity: 1;
        }

        .form-field::placeholder {
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.4s ease;
        }

        .form-field:focus::placeholder {
          color: rgba(0, 245, 255, 0.8);
          transform: translateY(-2px);
        }

        /* Ultra-Enhanced Submit Button */
        .submit-button {
          background: linear-gradient(
            135deg,
            rgba(0, 245, 255, 0.9),
            rgba(255, 20, 147, 0.9),
            rgba(138, 43, 226, 0.9),
            rgba(255, 215, 0, 0.9)
          );
          background-size: 400% 400%;
          border: 3px solid rgba(0, 245, 255, 0.6);
          color: #ffffff;
          font-weight: 800;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: gradientFlow 6s ease-in-out infinite,
            buttonMorph 4s ease-in-out infinite;
          box-shadow: 0 10px 30px rgba(0, 245, 255, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .submit-button::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3),
            rgba(0, 245, 255, 0.2),
            transparent
          );
          border-radius: 50%;
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .submit-button::after {
          content: "";
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            45deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700
          );
          background-size: 300% 300%;
          border-radius: inherit;
          animation: gradientFlow 4s ease-in-out infinite;
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: -2;
        }

        .submit-button:hover::before {
          width: 400%;
          height: 400%;
        }

        .submit-button:hover::after {
          opacity: 0.3;
        }

        .submit-button:hover {
          border-color: rgba(255, 20, 147, 1);
          transform: translateY(-8px) scale(1.08) rotateX(-5deg);
          box-shadow: 0 25px 60px rgba(0, 245, 255, 0.5),
            0 0 80px rgba(255, 20, 147, 0.4),
            inset 0 0 40px rgba(255, 255, 255, 0.2);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
            0 2px 4px rgba(0, 0, 0, 1);
        }

        .submit-button:active {
          transform: translateY(-4px) scale(1.05);
        }

        .submit-button:disabled {
          opacity: 0.8;
          cursor: not-allowed;
          animation: none;
          transform: none;
        }

        /* Enhanced Loading Animation */
        .loading-spinner {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid #00f5ff;
          border-right: 3px solid #ff1493;
          border-radius: 50%;
          animation: spin 1.5s linear infinite;
          display: inline-block;
          margin-left: 12px;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Enhanced Floating Orbs */
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 245, 255, 0.2),
            transparent
          );
          animation: floatingOrb 12s ease-in-out infinite;
          pointer-events: none;
          filter: blur(2px);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .orb-1 {
          top: 10%;
          left: 10%;
          width: 120px;
          height: 120px;
          animation-delay: 0s;
        }

        .orb-2 {
          top: 60%;
          right: 15%;
          width: 100px;
          height: 100px;
          background: radial-gradient(
            circle,
            rgba(255, 20, 147, 0.2),
            transparent
          );
          animation-delay: 2s;
          box-shadow: 0 0 20px rgba(255, 20, 147, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .orb-3 {
          bottom: 25%;
          left: 20%;
          width: 80px;
          height: 80px;
          background: radial-gradient(
            circle,
            rgba(138, 43, 226, 0.2),
            transparent
          );
          animation-delay: 4s;
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .orb-4 {
          top: 30%;
          right: 30%;
          width: 90px;
          height: 90px;
          background: radial-gradient(
            circle,
            rgba(255, 215, 0, 0.2),
            transparent
          );
          animation-delay: 1s;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .orb-5 {
          top: 70%;
          left: 50%;
          width: 60px;
          height: 60px;
          background: radial-gradient(
            circle,
            rgba(0, 255, 127, 0.2),
            transparent
          );
          animation-delay: 3s;
          box-shadow: 0 0 20px rgba(0, 255, 127, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        /* Enhanced Contact Icons */
        .contact-icon {
          background: linear-gradient(
            135deg,
            rgba(0, 245, 255, 0.2),
            rgba(255, 20, 147, 0.2),
            rgba(138, 43, 226, 0.2)
          );
          border: 2px solid rgba(0, 245, 255, 0.5);
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(15px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 245, 255, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .contact-icon::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: conic-gradient(
            from 0deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #00f5ff
          );
          border-radius: 50%;
          animation: rotate 4s linear infinite;
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: -1;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .contact-icon:hover::before {
          opacity: 1;
        }

        .contact-icon:hover {
          background: linear-gradient(
            135deg,
            rgba(0, 245, 255, 0.4),
            rgba(255, 20, 147, 0.4),
            rgba(138, 43, 226, 0.4)
          );
          border-color: rgba(255, 20, 147, 0.8);
          transform: translateY(-10px) scale(1.2) rotateZ(5deg);
          box-shadow: 0 20px 40px rgba(0, 245, 255, 0.4),
            0 0 60px rgba(255, 20, 147, 0.3),
            inset 0 0 30px rgba(255, 255, 255, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .floating-orb,
          .particle,
          .matrix-rain {
            display: none;
          }

          .contact-form-container {
            margin: 0 1rem;
          }

          .contact-icon {
            width: 60px;
            height: 60px;
          }
        }

        @media (min-width: 769px) {
          .contact-form-container {
            max-width: 700px;
          }
        }

        @media (min-width: 1024px) {
          .contact-form-container {
            max-width: 800px;
          }
        }
      `}</style>

      <section
        id="contact"
        className="flex flex-col items-center justify-center py-24 px-4 sm:px-[12vw] md:px-[7vw] lg:px-[20vw] relative overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {/* Toast Container */}
        <ToastContainer />

        {/* Enhanced Floating Background Orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>

        {/* Matrix Rain Effect */}
        <div className="matrix-rain">
          <div className="matrix-char">01</div>
          <div className="matrix-char">10</div>
          <div className="matrix-char">11</div>
          <div className="matrix-char">00</div>
          <div className="matrix-char">01</div>
        </div>

        {/* Ultra-Enhanced Section Title */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl sm:text-6xl lg:text-7xl font-black section-title title-animation ${
              isVisible ? "visible" : ""
            }`}
          >
            CONTACT
          </h2>
          <div
            className={`w-40 h-3 mx-auto mt-8 rounded-full underline-animation ${
              isVisible ? "visible" : ""
            }`}
          ></div>
          <p
            className={`text-gray-300 mt-10 text-xl sm:text-2xl font-medium max-w-4xl mx-auto leading-relaxed title-animation ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            Ready to create something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 font-bold">
              extraordinary
            </span>
            ? Let's connect and turn your vision into reality with cutting-edge
            technology and innovation!
          </p>
        </div>

        {/* Ultra-Enhanced Contact Form */}
        <div
          className={`contact-form-container w-full max-w-4xl p-10 sm:p-12 lg:p-16 rounded-3xl ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          {/* Particle System */}
          <div className="particle-system">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>

          <div className="relative z-10">
            {/* Enhanced Form Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600">
                Let's Create Magic Together ✨
              </h3>
              <div className="flex justify-center space-x-6 mb-10">
                <div className="contact-icon group">
                  <svg
                    className="w-8 h-8 text-white transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="contact-icon group">
                  <svg
                    className="w-8 h-8 text-white transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div className="contact-icon group">
                  <svg
                    className="w-8 h-8 text-white transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Ultra-Enhanced Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Amazing Name"
                  required
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="form-field w-full p-6 text-lg sm:text-xl font-medium"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="your.email@awesome.com"
                  required
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="form-field w-full p-6 text-lg sm:text-xl font-medium"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="What's your incredible idea? 💡"
                required
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                className="form-field w-full p-6 text-lg sm:text-xl font-medium"
              />

              <textarea
                name="message"
                placeholder="Tell me about your vision, project, or just say hello! I'm excited to hear from you... ✨"
                rows="7"
                required
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="form-field w-full p-6 text-lg sm:text-xl font-medium resize-vertical min-h-[180px]"
              />

              {/* Ultra-Enhanced Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button w-full py-6 px-10 text-xl sm:text-2xl rounded-2xl font-black flex items-center justify-center group"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending Your Message</span>
                    <div className="loading-spinner"></div>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Launch Message</span>
                    <svg
                      className="w-8 h-8 ml-4 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-125 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Enhanced Success Message */}
            {isSent && (
              <div className="mt-10 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/50 rounded-2xl text-center backdrop-blur-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 animate-pulse"></div>
                <p className="text-green-300 font-bold text-lg relative z-10">
                  🚀 Message launched successfully! Expect a reply soon from
                  mission control!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
