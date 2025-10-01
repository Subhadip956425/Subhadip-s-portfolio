import React, { useEffect, useState } from "react";
import { education } from "../../constants";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger items to appear one by one
          education.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    const educationSection = document.getElementById("education");
    if (educationSection) {
      observer.observe(educationSection);
    }

    return () => {
      if (educationSection) observer.unobserve(educationSection);
    };
  }, []);

  return (
    <>
      {/* Fixed Custom CSS with Improved Grade Visibility and Wider Cards */}
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
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes timelineGrow {
          from {
            height: 0;
          }
          to {
            height: 100%;
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

        @keyframes circleAppear {
          0% {
            opacity: 0;
            transform: scale(0) rotate(180deg);
          }
          70% {
            transform: scale(1.15) rotate(360deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(360deg);
          }
        }

        @keyframes floatingOrb {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-25px) rotate(120deg);
          }
          66% {
            transform: translateY(15px) rotate(240deg);
          }
        }

        @keyframes shimmerEffect {
          0% {
            transform: translateX(-200%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
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

        .section-title {
          background: linear-gradient(
            135deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700,
            #00ff7f
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 400% 400%;
          animation: gradientFlow 5s ease-in-out infinite;
        }

        .title-animation {
          opacity: 0;
          animation: fadeInUp 1.2s ease-out forwards;
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
            #00ff7f
          );
          background-size: 400% 100%;
          animation: gradientFlow 4s ease-in-out infinite;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .underline-animation::before {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(10px);
          opacity: 0.6;
        }

        .underline-animation.visible {
          transform: scaleX(1);
        }

        .timeline-line {
          background: linear-gradient(
            180deg,
            rgba(0, 245, 255, 0.9) 0%,
            rgba(255, 20, 147, 0.95) 25%,
            rgba(138, 43, 226, 0.95) 50%,
            rgba(255, 215, 0, 0.9) 75%,
            rgba(0, 255, 127, 0.9) 100%
          );
          filter: drop-shadow(0 0 15px rgba(0, 245, 255, 0.6));
          transform-origin: top;
          height: 0;
          position: relative;
        }

        .timeline-line::before {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(8px);
          opacity: 0.4;
        }

        .timeline-line.visible {
          animation: timelineGrow 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Perfect Circular Logo Container */
        .timeline-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffffff, #f1f5f9);
          border: none;
          box-shadow: 0 0 30px rgba(0, 245, 255, 0.6),
            inset 0 0 20px rgba(255, 255, 255, 0.3);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: absolute;
          overflow: hidden;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          z-index: 30;
        }

        .timeline-circle.visible {
          animation: circleAppear 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .timeline-circle::before {
          content: "";
          position: absolute;
          inset: -3px;
          background: conic-gradient(
            from 0deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700,
            #00f5ff
          );
          border-radius: 50%;
          animation: rotate 6s linear infinite;
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: -1;
        }

        .timeline-circle::after {
          content: "";
          position: absolute;
          inset: -15px;
          border: 2px solid rgba(0, 245, 255, 0.3);
          border-radius: 50%;
          animation: pulseRing 2s ease-out infinite;
          opacity: 0;
        }

        .timeline-circle:hover::before {
          opacity: 1;
        }

        .timeline-circle:hover::after {
          opacity: 1;
        }

        .timeline-circle:hover {
          transform: scale(1.2);
          box-shadow: 0 0 40px rgba(0, 245, 255, 0.8),
            0 0 80px rgba(255, 20, 147, 0.4),
            inset 0 0 30px rgba(255, 255, 255, 0.4);
          z-index: 35;
        }

        /* Perfect Circular Logo */
        .timeline-logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
          transition: all 0.5s ease;
          filter: brightness(1.1) contrast(1.1) saturate(1.1);
          border: 2px solid rgba(255, 255, 255, 0.8);
        }

        .timeline-circle:hover .timeline-logo {
          transform: scale(1.05);
          filter: brightness(1.3) contrast(1.3) saturate(1.2);
          border-color: rgba(255, 255, 255, 1);
        }

        /* FIXED: Wider Education Cards */
        .education-card {
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.98),
            rgba(30, 41, 59, 0.95),
            rgba(51, 65, 85, 0.92)
          );
          border: 2px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          position: relative;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(60px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }

        .education-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .education-card.slide-left {
          animation: slideInLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .education-card.slide-right {
          animation: slideInRight 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .education-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(
            135deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700,
            #00ff7f
          );
          background-size: 400% 400%;
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          animation: gradientFlow 8s ease-in-out infinite;
          opacity: 0;
          transition: opacity 0.8s ease;
          z-index: 1;
        }

        .education-card::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.03) 50%,
            transparent 70%
          );
          transform: rotate(45deg);
          transition: all 0.8s ease;
          z-index: 1;
          opacity: 0;
        }

        .education-card:hover::before {
          opacity: 1;
        }

        .education-card:hover::after {
          animation: shimmerEffect 1.5s ease-in-out;
          opacity: 1;
        }

        .education-card:hover {
          transform: translateY(-20px) scale(1.03);
          box-shadow: 0 30px 80px rgba(0, 245, 255, 0.25),
            0 0 120px rgba(255, 20, 147, 0.2);
          border-color: rgba(0, 245, 255, 0.4);
          z-index: 15;
        }

        /* FIXED: Enhanced Grade Badge with Always Visible Text */
        .grade-badge {
          background: rgba(15, 23, 42, 0.95);
          border: 2px solid rgba(255, 215, 0, 0.7);
          color: #ffffff;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 1);
          z-index: 20;
        }

        .grade-badge::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 215, 0, 0.1),
            transparent
          );
          transition: left 0.6s ease;
          z-index: -1;
        }

        .grade-badge:hover {
          background: rgba(15, 23, 42, 1);
          border-color: rgba(255, 215, 0, 1);
          color: #ffffff;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4),
            0 0 25px rgba(255, 215, 0, 0.3);
          text-shadow: 0 3px 6px rgba(0, 0, 0, 1);
        }

        .grade-badge:hover::before {
          left: 100%;
        }

        /* Floating Orbs */
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 245, 255, 0.15),
            transparent
          );
          animation: floatingOrb 12s ease-in-out infinite;
          pointer-events: none;
          filter: blur(1px);
        }

        .orb-1 {
          top: 10%;
          left: 5%;
          width: 120px;
          height: 120px;
          animation-delay: 0s;
        }

        .orb-2 {
          top: 60%;
          right: 8%;
          width: 100px;
          height: 100px;
          background: radial-gradient(
            circle,
            rgba(255, 20, 147, 0.15),
            transparent
          );
          animation-delay: 4s;
        }

        .orb-3 {
          bottom: 20%;
          left: 15%;
          width: 80px;
          height: 80px;
          background: radial-gradient(
            circle,
            rgba(138, 43, 226, 0.15),
            transparent
          );
          animation-delay: 8s;
        }

        .orb-4 {
          top: 30%;
          right: 25%;
          width: 60px;
          height: 60px;
          background: radial-gradient(
            circle,
            rgba(255, 215, 0, 0.15),
            transparent
          );
          animation-delay: 6s;
        }

        /* Text Elements with Enhanced Visibility */
        .degree-title {
          color: #ffffff;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
          transition: all 0.4s ease;
          z-index: 10;
          position: relative;
          background: linear-gradient(135deg, #ffffff, #f8fafc);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .school-name {
          color: #00f5ff;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
          transition: all 0.4s ease;
          z-index: 10;
          position: relative;
        }

        .education-card:hover .school-name {
          color: #ff1493;
          text-shadow: 0 3px 8px rgba(255, 20, 147, 0.6);
        }

        .date-text {
          background: rgba(15, 23, 42, 0.95);
          border: 2px solid rgba(0, 245, 255, 0.6);
          color: #00f5ff;
          backdrop-filter: blur(10px);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
          z-index: 10;
          position: relative;
          transition: all 0.3s ease;
        }

        .description-text {
          color: #f1f5f9;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
          line-height: 1.8;
          z-index: 10;
          position: relative;
        }

        /* Mobile Layout - Logo Beside Box */
        @media (max-width: 640px) {
          .mobile-timeline-container {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .timeline-line {
            display: none;
          }

          .timeline-circle {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            width: 60px !important;
            height: 60px !important;
            flex-shrink: 0;
            margin-top: 1rem;
            z-index: 10;
          }

          .education-card {
            position: relative !important;
            margin: 0 !important;
            width: 100% !important;
            flex-grow: 1;
          }

          .education-card.slide-left,
          .education-card.slide-right {
            animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .floating-orb {
            display: none;
          }
        }

        /* FIXED: Desktop Layout with Wider Cards and Proper Spacing */
        @media (min-width: 641px) {
          .desktop-timeline-item {
            position: relative;
            display: flex;
            align-items: flex-start;
            margin-bottom: 8rem;
            min-height: 120px;
          }

          .timeline-circle {
            position: absolute;
            left: 50%;
            top: 2rem;
            transform: translateX(-50%);
            z-index: 30;
          }

          /* WIDER CARDS: Increased from 40% to 50% */
          .education-card {
            width: 50%;
            margin-top: 0;
          }

          .education-card.left {
            margin-left: 0;
            margin-right: auto;
            transform: translateX(-50px);
          }

          .education-card.right {
            margin-left: auto;
            margin-right: 0;
            transform: translateX(50px);
          }

          .education-card:hover.left {
            transform: translateX(-50px) translateY(-20px) scale(1.03);
          }

          .education-card:hover.right {
            transform: translateX(50px) translateY(-20px) scale(1.03);
          }
        }

        @media (min-width: 768px) {
          /* WIDER CARDS: Increased spacing */
          .education-card {
            width: 48%;
          }

          .education-card.left {
            transform: translateX(-40px);
          }

          .education-card.right {
            transform: translateX(40px);
          }

          .education-card:hover.left {
            transform: translateX(-40px) translateY(-20px) scale(1.03);
          }

          .education-card:hover.right {
            transform: translateX(40px) translateY(-20px) scale(1.03);
          }
        }

        @media (min-width: 1024px) {
          /* WIDER CARDS: Even more width */
          .education-card {
            width: 46%;
          }

          .education-card.left {
            transform: translateX(-30px);
          }

          .education-card.right {
            transform: translateX(30px);
          }

          .education-card:hover.left {
            transform: translateX(-30px) translateY(-20px) scale(1.03);
          }

          .education-card:hover.right {
            transform: translateX(30px) translateY(-20px) scale(1.03);
          }
        }

        @media (min-width: 1280px) {
          /* WIDER CARDS: Maximum width */
          .education-card {
            width: 45%;
          }

          .education-card.left {
            transform: translateX(-20px);
          }

          .education-card.right {
            transform: translateX(20px);
          }

          .education-card:hover.left {
            transform: translateX(-20px) translateY(-20px) scale(1.03);
          }

          .education-card:hover.right {
            transform: translateX(20px) translateY(-20px) scale(1.03);
          }
        }
      `}</style>

      <section
        id="education"
        className="py-24 pb-24 px-4 sm:px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative overflow-hidden"
      >
        {/* Floating Background Orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>

        {/* Enhanced Section Title */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold section-title title-animation ${
              isVisible ? "visible" : ""
            }`}
          >
            EDUCATION
          </h2>
          <div
            className={`w-32 h-2 mx-auto mt-6 rounded-full underline-animation ${
              isVisible ? "visible" : ""
            }`}
          ></div>
          <p
            className={`text-gray-300 mt-8 text-lg sm:text-xl font-medium max-w-4xl mx-auto leading-relaxed title-animation ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            My educational journey has been a path of continuous learning and
            growth, building the foundation for my technical expertise and
            professional development
          </p>
        </div>

        {/* Enhanced Education Timeline */}
        <div className="relative">
          {/* Desktop: Animated Vertical Timeline */}
          <div
            className={`timeline-line absolute left-1/2 transform -translate-x-1/2 w-1.5 rounded-full hidden sm:block ${
              isVisible ? "visible" : ""
            }`}
          ></div>

          {/* Education Entries */}
          {education.map((edu, index) => (
            <div key={edu.id}>
              {/* Mobile Layout: Logo Beside Box */}
              <div className="mobile-timeline-container sm:hidden">
                <div
                  className={`timeline-circle ${
                    visibleItems.includes(index) ? "visible" : ""
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.3}s` }}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="timeline-logo"
                  />
                </div>

                <div
                  className={`education-card rounded-2xl ${
                    visibleItems.includes(index) ? "visible" : ""
                  }`}
                  style={{ animationDelay: `${1 + index * 0.3}s` }}
                >
                  <div className="p-6">
                    <div className="flex flex-col gap-4 mb-6">
                      <h3 className="degree-title text-lg font-bold leading-tight">
                        {edu.degree}
                      </h3>
                      <h4 className="school-name text-base font-bold">
                        {edu.school}
                      </h4>
                      <p className="date-text text-sm font-semibold px-3 py-2 rounded-full inline-block w-fit">
                        {edu.date}
                      </p>
                    </div>

                    <div className="grade-badge text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                      Grade: {edu.grade}
                    </div>

                    <p className="description-text text-sm leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout: Traditional Timeline */}
              <div className="desktop-timeline-item hidden sm:flex">
                <div
                  className={`timeline-circle ${
                    visibleItems.includes(index) ? "visible" : ""
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.3}s` }}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="timeline-logo"
                  />
                </div>

                <div
                  className={`education-card rounded-2xl ${
                    visibleItems.includes(index) ? "visible" : ""
                  } ${
                    index % 2 === 0 ? "slide-left left" : "slide-right right"
                  }`}
                  style={{ animationDelay: `${1 + index * 0.3}s` }}
                >
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col gap-4 mb-8">
                      <h3 className="degree-title text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                        {edu.degree}
                      </h3>
                      <h4 className="school-name text-base sm:text-lg lg:text-xl font-bold">
                        {edu.school}
                      </h4>
                      <p className="date-text text-sm sm:text-base font-semibold px-4 py-2 rounded-full inline-block w-fit">
                        {edu.date}
                      </p>
                    </div>

                    {/* FIXED: Grade Badge with Always Visible Text */}
                    <div className="grade-badge text-sm sm:text-base font-bold px-6 py-3 rounded-full inline-block mb-6">
                      Grade: {edu.grade}
                    </div>

                    <p className="description-text text-sm sm:text-base lg:text-lg leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
