import React, { useEffect, useState } from "react";
import { experiences } from "../../constants";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger items to appear one by one
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => {
      if (experienceSection) observer.unobserve(experienceSection);
    };
  }, []);

  return (
    <>
      {/* Fixed CSS with Proper Desktop Spacing */}
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
            transform: translateY(-30px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) rotate(240deg);
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

        .section-title {
          background: linear-gradient(
            135deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #00ff7f,
            #ffd700
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
            #00ff7f,
            #ffd700
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
            rgba(0, 255, 127, 0.9) 75%,
            rgba(255, 215, 0, 0.9) 100%
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

        /* FIXED: Perfect Circular Logo Container with Proper Z-Index */
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
            #00ff7f,
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
          transform: scale(1.15);
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

        .experience-card {
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

        .experience-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .experience-card.slide-left {
          animation: slideInLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .experience-card.slide-right {
          animation: slideInRight 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .experience-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(
            135deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #00ff7f,
            #ffd700
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

        .experience-card::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 70%
          );
          transform: rotate(-45deg);
          transition: transform 1s ease;
          z-index: 1;
        }

        .experience-card:hover::before {
          opacity: 1;
        }

        .experience-card:hover::after {
          animation: shimmerEffect 1.5s ease-in-out;
        }

        .experience-card:hover {
          transform: translateY(-25px) scale(1.02);
          box-shadow: 0 40px 80px rgba(0, 245, 255, 0.25),
            0 0 120px rgba(255, 20, 147, 0.2), 0 10px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(0, 245, 255, 0.4);
          z-index: 15;
        }

        /* Enhanced Skill Tags */
        .skill-tag {
          background: rgba(30, 41, 59, 0.95);
          border: 2px solid rgba(0, 245, 255, 0.6);
          color: #ffffff;
          backdrop-filter: blur(10px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          font-weight: 600;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
          z-index: 10;
        }

        .skill-tag::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.8s ease;
          z-index: -1;
        }

        .skill-tag:hover {
          background: rgba(15, 23, 42, 0.98);
          border-color: rgba(255, 20, 147, 0.8);
          color: #ffffff;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 245, 255, 0.4),
            0 0 25px rgba(255, 20, 147, 0.3);
          text-shadow: 0 2px 6px rgba(0, 0, 0, 1);
        }

        .skill-tag:hover::before {
          left: 100%;
        }

        /* Enhanced Certificate Button */
        .certificate-btn {
          background: rgba(15, 23, 42, 0.98);
          border: 3px solid rgba(0, 245, 255, 0.7);
          color: #ffffff;
          font-weight: 700;
          backdrop-filter: blur(15px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 1);
          z-index: 10;
        }

        .certificate-btn::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(
            circle,
            rgba(0, 245, 255, 0.2),
            transparent
          );
          border-radius: 50%;
          transition: all 1s ease;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .certificate-btn:hover::before {
          width: 400%;
          height: 400%;
        }

        .certificate-btn:hover {
          background: rgba(15, 23, 42, 1);
          border-color: rgba(255, 20, 147, 0.9);
          color: #ffffff;
          transform: translateY(-5px) scale(1.08);
          box-shadow: 0 20px 50px rgba(0, 245, 255, 0.5),
            0 0 40px rgba(255, 20, 147, 0.4);
          text-shadow: 0 3px 8px rgba(0, 0, 0, 1);
        }

        /* Enhanced Floating Orbs */
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 245, 255, 0.15),
            transparent
          );
          animation: floatingOrb 15s ease-in-out infinite;
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
          top: 50%;
          right: 8%;
          width: 100px;
          height: 100px;
          background: radial-gradient(
            circle,
            rgba(255, 20, 147, 0.15),
            transparent
          );
          animation-delay: 5s;
        }

        .orb-3 {
          bottom: 20%;
          left: 10%;
          width: 80px;
          height: 80px;
          background: radial-gradient(
            circle,
            rgba(138, 43, 226, 0.15),
            transparent
          );
          animation-delay: 10s;
        }

        .orb-4 {
          top: 30%;
          right: 25%;
          width: 60px;
          height: 60px;
          background: radial-gradient(
            circle,
            rgba(0, 255, 127, 0.15),
            transparent
          );
          animation-delay: 7s;
        }

        /* Text Elements with Enhanced Visibility */
        .role-title {
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

        .company-name {
          color: #00f5ff;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
          transition: all 0.4s ease;
          z-index: 10;
          position: relative;
        }

        .experience-card:hover .company-name {
          color: #ff1493;
          text-shadow: 0 3px 8px rgba(255, 20, 147, 0.6);
        }

        .date-badge {
          background: rgba(15, 23, 42, 0.95);
          border: 2px solid rgba(0, 245, 255, 0.6);
          color: #ffffff;
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

        .skills-header {
          color: #ffffff;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
          z-index: 10;
          position: relative;
        }

        /* FIXED: Mobile Layout - Logo Beside Box */
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

          .experience-card {
            position: relative !important;
            margin: 0 !important;
            width: 100% !important;
            flex-grow: 1;
          }

          .experience-card.slide-left,
          .experience-card.slide-right {
            animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .skill-tag {
            font-size: 0.75rem;
            padding: 0.4rem 0.8rem;
          }

          .floating-orb {
            display: none;
          }
        }

        /* FIXED: Desktop Layout with Proper Spacing */
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

          .experience-card {
            width: 40%;
            margin-top: 0;
          }

          /* FIXED: Left Side Cards - Proper Margin */
          .experience-card.left {
            margin-left: 0;
            margin-right: auto;
            /* Ensure enough space from center line */
            transform: translateX(-60px);
          }

          /* FIXED: Right Side Cards - Proper Margin */
          .experience-card.right {
            margin-left: auto;
            margin-right: 0;
            /* Ensure enough space from center line */
            transform: translateX(60px);
          }

          .experience-card:hover.left {
            transform: translateX(-60px) translateY(-25px) scale(1.02);
          }

          .experience-card:hover.right {
            transform: translateX(60px) translateY(-25px) scale(1.02);
          }
        }

        @media (min-width: 768px) {
          .experience-card.left {
            transform: translateX(-80px);
          }

          .experience-card.right {
            transform: translateX(80px);
          }

          .experience-card:hover.left {
            transform: translateX(-80px) translateY(-25px) scale(1.02);
          }

          .experience-card:hover.right {
            transform: translateX(80px) translateY(-25px) scale(1.02);
          }
        }

        @media (min-width: 1024px) {
          .experience-card {
            width: 38%;
          }

          .experience-card.left {
            transform: translateX(-100px);
          }

          .experience-card.right {
            transform: translateX(100px);
          }

          .experience-card:hover.left {
            transform: translateX(-100px) translateY(-25px) scale(1.02);
          }

          .experience-card:hover.right {
            transform: translateX(100px) translateY(-25px) scale(1.02);
          }
        }

        @media (min-width: 1280px) {
          .experience-card {
            width: 35%;
          }

          .experience-card.left {
            transform: translateX(-120px);
          }

          .experience-card.right {
            transform: translateX(120px);
          }

          .experience-card:hover.left {
            transform: translateX(-120px) translateY(-25px) scale(1.02);
          }

          .experience-card:hover.right {
            transform: translateX(120px) translateY(-25px) scale(1.02);
          }
        }
      `}</style>

      <section
        id="experience"
        className="py-24 pb-24 px-4 sm:px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative overflow-hidden"
      >
        {/* Enhanced Floating Background Orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>

        {/* Enhanced Section Title */}
        <div className="text-center mb-24">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold section-title title-animation ${
              isVisible ? "visible" : ""
            }`}
          >
            EXPERIENCE & CERTIFICATION
          </h2>
          <div
            className={`w-48 h-2 mx-auto mt-8 rounded-full underline-animation ${
              isVisible ? "visible" : ""
            }`}
          ></div>
          <p
            className={`text-gray-300 mt-10 text-lg sm:text-xl font-medium max-w-4xl mx-auto leading-relaxed title-animation ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            A comprehensive showcase of my professional journey, certifications,
            and the impactful roles I've embraced across various organizations
          </p>
        </div>

        {/* Enhanced Experience Timeline */}
        <div className="relative">
          {/* Desktop: Animated Vertical Timeline */}
          <div
            className={`timeline-line absolute left-1/2 transform -translate-x-1/2 w-1.5 rounded-full hidden sm:block ${
              isVisible ? "visible" : ""
            }`}
          ></div>

          {/* Experience Entries */}
          {experiences.map((experience, index) => (
            <div key={experience.id}>
              {/* Mobile Layout: Logo Beside Box */}
              <div className="mobile-timeline-container sm:hidden">
                <div
                  className={`timeline-circle ${
                    visibleItems.includes(index) ? "visible" : ""
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.3}s` }}
                >
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="timeline-logo"
                  />
                </div>

                <div
                  className={`experience-card rounded-2xl ${
                    visibleItems.includes(index) ? "visible" : ""
                  }`}
                  style={{ animationDelay: `${1 + index * 0.3}s` }}
                >
                  {/* Mobile Content */}
                  <div className="p-6">
                    <div className="flex flex-col gap-4 mb-6">
                      <h3 className="role-title text-lg font-bold leading-tight">
                        {experience.role}
                      </h3>
                      <h4 className="company-name text-base font-bold">
                        {experience.company}
                      </h4>
                      <p className="date-badge text-sm font-semibold px-3 py-2 rounded-full inline-block w-fit">
                        {experience.date}
                      </p>
                    </div>

                    <p className="description-text mb-6 text-sm leading-relaxed">
                      {experience.desc}
                    </p>

                    <div className="mb-6">
                      <h5 className="skills-header font-bold mb-4 text-base flex items-center gap-2">
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full animate-pulse"></span>
                        Skills & Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="skill-tag px-3 py-1.5 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {experience.link && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-btn inline-flex items-center gap-2 py-3 px-5 rounded-full text-sm group"
                      >
                        <span>View Certificate</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* FIXED: Desktop Layout with Proper Spacing */}
              <div className="desktop-timeline-item hidden sm:flex">
                <div
                  className={`timeline-circle ${
                    visibleItems.includes(index) ? "visible" : ""
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.3}s` }}
                >
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="timeline-logo"
                  />
                </div>

                <div
                  className={`experience-card rounded-2xl ${
                    visibleItems.includes(index) ? "visible" : ""
                  } ${
                    index % 2 === 0 ? "slide-left left" : "slide-right right"
                  }`}
                  style={{ animationDelay: `${1 + index * 0.3}s` }}
                >
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col gap-4 mb-8">
                      <h3 className="role-title text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                        {experience.role}
                      </h3>
                      <h4 className="company-name text-base sm:text-lg lg:text-xl font-bold">
                        {experience.company}
                      </h4>
                      <p className="date-badge text-sm sm:text-base font-semibold px-4 py-2 rounded-full inline-block w-fit">
                        {experience.date}
                      </p>
                    </div>

                    <p className="description-text mb-8 text-sm sm:text-base lg:text-lg">
                      {experience.desc}
                    </p>

                    <div className="mb-8">
                      <h5 className="skills-header font-bold mb-5 text-lg sm:text-xl flex items-center gap-3">
                        <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full animate-pulse"></span>
                        Skills & Technologies
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="skill-tag px-4 py-2 text-xs sm:text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {experience.link && (
                      <div className="flex justify-start">
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="certificate-btn inline-flex items-center gap-3 py-4 px-6 sm:px-8 rounded-full group"
                        >
                          <span>View Certificate</span>
                          <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
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

export default Experience;
