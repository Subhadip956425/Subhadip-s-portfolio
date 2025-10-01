import React, { useEffect, useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
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

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  return (
    <>
      {/* Enhanced Custom CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
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

        @keyframes skillItemHover {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(130, 69, 236, 0.3);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(130, 69, 236, 0.5);
          }
        }

        @keyframes floatingOrb {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        .title-animation {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }

        .title-animation.visible {
          animation-delay: 0.2s;
        }

        .category-card {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.6s ease-out;
        }

        .category-card.visible {
          opacity: 1;
          transform: translateY(0);
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .category-card:nth-child(odd) {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .category-card:nth-child(even) {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .enhanced-card {
          background: linear-gradient(
            135deg,
            rgba(17, 24, 39, 0.9),
            rgba(31, 41, 55, 0.8)
          );
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .enhanced-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(
            45deg,
            #8245ec,
            #a855f7,
            #ec4899,
            #8245ec
          );
          background-size: 300% 300%;
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          animation: gradientShift 4s ease-in-out infinite;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .enhanced-card:hover::before {
          opacity: 1;
        }

        .enhanced-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(130, 69, 236, 0.3),
            0 0 60px rgba(168, 85, 247, 0.2);
        }

        .skill-item {
          background: linear-gradient(
            135deg,
            rgba(55, 65, 81, 0.6),
            rgba(75, 85, 99, 0.4)
          );
          border: 1px solid rgba(156, 163, 175, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .skill-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(130, 69, 236, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .skill-item:hover {
          background: linear-gradient(
            135deg,
            rgba(130, 69, 236, 0.1),
            rgba(168, 85, 247, 0.1)
          );
          border-color: rgba(130, 69, 236, 0.5);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 5px 20px rgba(130, 69, 236, 0.3);
        }

        .skill-item:hover::before {
          left: 100%;
        }

        .skill-logo {
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 8px rgba(130, 69, 236, 0.3));
        }

        .skill-item:hover .skill-logo {
          transform: rotate(360deg) scale(1.2);
          filter: drop-shadow(0 0 12px rgba(130, 69, 236, 0.6));
        }

        .floating-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(130, 69, 236, 0.3),
            transparent
          );
          animation: floatingOrb 8s ease-in-out infinite;
          pointer-events: none;
        }

        .particle-1 {
          top: 15%;
          left: 5%;
          width: 50px;
          height: 50px;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 70%;
          right: 10%;
          width: 30px;
          height: 30px;
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.3),
            transparent
          );
          animation-delay: 2s;
        }

        .particle-3 {
          bottom: 20%;
          left: 15%;
          width: 40px;
          height: 40px;
          background: radial-gradient(
            circle,
            rgba(236, 72, 153, 0.3),
            transparent
          );
          animation-delay: 4s;
        }

        .section-title {
          background: linear-gradient(135deg, #8245ec, #a855f7, #ec4899);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .underline-animation {
          background: linear-gradient(90deg, #8245ec, #a855f7, #ec4899);
          animation: gradientShift 2s ease-in-out infinite;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.8s ease;
        }

        .underline-animation.visible {
          transform: scaleX(1);
        }

        /* Responsive Grid Improvements */
        @media (max-width: 640px) {
          .enhanced-card {
            margin-bottom: 1.5rem;
          }

          .skill-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .skill-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.75rem;
          }
        }

        @media (min-width: 1025px) {
          .skill-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
          }
        }
      `}</style>

      <section
        id="skills"
        className="py-24 pb-24 px-4 sm:px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
      >
        {/* Floating Background Particles */}
        <div className="floating-particle particle-1"></div>
        <div className="floating-particle particle-2"></div>
        <div className="floating-particle particle-3"></div>

        {/* Enhanced Section Title */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl sm:text-5xl font-bold section-title title-animation ${
              isVisible ? "visible" : ""
            }`}
          >
            SKILLS
          </h2>
          <div
            className={`w-32 h-1.5 mx-auto mt-4 rounded-full underline-animation ${
              isVisible ? "visible" : ""
            }`}
          ></div>
          <p
            className={`text-gray-300 mt-6 text-lg font-medium max-w-2xl mx-auto title-animation ${
              isVisible ? "visible" : ""
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            A comprehensive collection of my technical skills and expertise,
            honed through various projects and continuous learning experiences
          </p>
        </div>

        {/* Enhanced Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 py-10">
          {SkillsInfo.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`category-card enhanced-card px-6 sm:px-8 py-8 sm:py-10 rounded-2xl ${
                isVisible ? "visible" : ""
              }`}
              style={{
                animationDelay: `${0.6 + categoryIndex * 0.2}s`,
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center relative">
                {category.title}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full"></div>
              </h3>

              {/* Enhanced Skill Items with Tilt */}
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="skill-grid grid gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="skill-item flex items-center justify-center space-x-2 rounded-xl py-3 px-3 text-center relative group"
                      style={{
                        animationDelay: `${
                          1 + categoryIndex * 0.2 + skillIndex * 0.1
                        }s`,
                      }}
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="skill-logo w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                      <span className="text-xs sm:text-sm text-gray-200 font-medium truncate">
                        {skill.name}
                      </span>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8245ec] to-[#a855f7] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
