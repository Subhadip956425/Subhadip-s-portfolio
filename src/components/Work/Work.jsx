import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger project animations
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleProjects((prev) => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    const workSection = document.getElementById("work");
    if (workSection) {
      observer.observe(workSection);
    }

    return () => {
      if (workSection) observer.unobserve(workSection);
    };
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {/* Enhanced Custom CSS with 2x3 Grid Format */}
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

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
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
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) rotate(240deg);
          }
        }

        @keyframes shimmerEffect {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

         {
          /* @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        } */
        }

        @keyframes overlayFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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
          filter: blur(8px);
          opacity: 0.5;
        }

        .underline-animation.visible {
          transform: scaleX(1);
        }

        /* Enhanced Project Cards with Wider Design */
        .project-card {
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.95),
            rgba(30, 41, 59, 0.9),
            rgba(51, 65, 85, 0.85)
          );
          border: 2px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(60px) scale(0.9);
          cursor: pointer;
          min-height: 420px;
        }

        .project-card.visible {
          animation: slideInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .project-card::before {
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
          transition: opacity 0.6s ease;
          z-index: 1;
        }

        .project-card::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -100%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.08) 50%,
            transparent 70%
          );
          transform: rotate(45deg);
          transition: all 0.8s ease;
          z-index: 2;
          opacity: 0;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover::after {
          left: 100%;
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-20px) scale(1.05);
          box-shadow: 0 35px 90px rgba(0, 245, 255, 0.3),
            0 0 140px rgba(255, 20, 147, 0.25);
          border-color: rgba(0, 245, 255, 0.5);
        }

        /* Enhanced Project Image - Larger for wider cards */
        .project-image {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .project-image img {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(0.9) contrast(1.1);
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-card:hover .project-image img {
          transform: scale(1.15);
          filter: brightness(1.2) contrast(1.3);
        }

        .project-image::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 245, 255, 0.15),
            rgba(255, 20, 147, 0.15)
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .project-card:hover .project-image::before {
          opacity: 1;
        }

        /* Enhanced Tags */
        .project-tag {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid rgba(0, 245, 255, 0.4);
          color: #00f5ff;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        .project-tag::before {
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
            transparent
          );
          transition: left 0.6s ease;
        }

        .project-tag:hover {
          background: rgba(15, 23, 42, 0.9);
          border-color: rgba(255, 20, 147, 0.6);
          color: #ff1493;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 245, 255, 0.3);
        }

        .project-tag:hover::before {
          left: 100%;
        }

        /* Enhanced Modal */
        .modal-overlay {
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          animation: overlayFadeIn 0.4s ease-out;
        }

        .modal-content {
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.98),
            rgba(30, 41, 59, 0.95)
          );
          border: 2px solid rgba(0, 245, 255, 0.3);
          backdrop-filter: blur(20px);
          animation: modalExpand 0.45s ease-out;
          position: relative;
          overflow-y: auto; /* ✅ IMPORTANT */
          scrollbar-width: thin;
        }

        @keyframes modalExpand {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            max-height: 90vh;
            transform: translateY(0);
          }
        }

        .modal-content.closing {
          animation: modalVerticalScale 0.4s ease-in reverse;
        }

        .modal-content::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(
            135deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #00ff7f
          );
          background-size: 300% 300%;
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          animation: gradientFlow 6s ease-in-out infinite;
          opacity: 0.8;
          z-index: 1;
        }

        .modal-inner {
          position: relative;
          z-index: 2;
        }

        .close-button {
          background: rgba(30, 41, 59, 0.8);
          border: 2px solid rgba(255, 20, 147, 0.5);
          color: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .close-button:hover {
          background: rgba(15, 23, 42, 0.9);
          border-color: rgba(255, 20, 147, 0.8);
          transform: scale(1.1) rotate(90deg);
          box-shadow: 0 0 20px rgba(255, 20, 147, 0.5);
        }

        /* Enhanced Action Buttons */
        .action-button {
          backdrop-filter: blur(15px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          font-weight: 700;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
          border: 2px solid transparent;
        }

        .action-button.github {
          background: rgba(30, 41, 59, 0.9);
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        .action-button.live {
          background: linear-gradient(
            135deg,
            rgba(0, 245, 255, 0.2),
            rgba(255, 20, 147, 0.2)
          );
          border-color: rgba(0, 245, 255, 0.6);
          color: #ffffff;
        }

        .action-button::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          transition: all 0.8s ease;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .action-button.github::before {
          background: rgba(255, 255, 255, 0.1);
        }

        .action-button.live::before {
          background: radial-gradient(
            circle,
            rgba(0, 245, 255, 0.3),
            rgba(255, 20, 147, 0.3)
          );
        }

        .action-button:hover::before {
          width: 300%;
          height: 300%;
        }

        .action-button:hover {
          transform: translateY(-3px) scale(1.05);
        }

        .action-button.github:hover {
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
        }

        .action-button.live:hover {
          border-color: rgba(255, 20, 147, 0.8);
          box-shadow: 0 10px 30px rgba(0, 245, 255, 0.4);
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
            rgba(0, 255, 127, 0.15),
            transparent
          );
          animation-delay: 6s;
        }

        /* UPDATED: 2x3 Grid Format */
        .projects-grid {
          display: grid;
          gap: 3rem;
          grid-template-columns: repeat(2, 1fr);
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Mobile: Single Column */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1rem;
          }

          .project-card {
            min-height: 380px;
          }

          .project-image {
            height: 180px;
          }

          .floating-orb {
            display: none;
          }
        }

        /* Small Desktop: Still 2 columns but with better spacing */
        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid {
            gap: 2.5rem;
            padding: 0 2rem;
          }

          .project-card {
            min-height: 400px;
          }

          .project-image {
            height: 200px;
          }
        }

        /* Large Desktop: 2 columns with maximum width */
        @media (min-width: 1025px) {
          .projects-grid {
            gap: 3.5rem;
          }

          .project-card {
            min-height: 450px;
          }

          .project-image {
            height: 240px;
          }
        }

        /* Extra Large Screens: Still 2 columns but with more spacing */
        @media (min-width: 1400px) {
          .projects-grid {
            gap: 4rem;
          }

          .project-card {
            min-height: 480px;
          }

          .project-image {
            height: 260px;
          }
        }
      `}</style>

      <section
        id="work"
        className="py-24 pb-24 px-4 sm:px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
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
            PROJECTS
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
            A showcase of innovative projects that demonstrate my technical
            expertise and creative problem-solving across various technologies
            and domains
          </p>
        </div>

        {/* Enhanced Projects Grid - 2x3 Format */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className={`project-card rounded-2xl ${
                visibleProjects.includes(index) ? "visible" : ""
              }`}
              style={{ animationDelay: `${0.8 + index * 0.2}s` }}
            >
              <div className="p-6 h-full flex flex-col relative z-10">
                {/* Larger Project Image */}
                <div className="project-image rounded-xl overflow-hidden mb-6 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags at bottom */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.slice(0, 6).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="project-tag text-xs font-semibold rounded-full px-3 py-2"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="project-tag text-xs font-semibold rounded-full px-3 py-2">
                        +{project.tags.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal (unchanged) */}
        {selectedProject && (
          <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="modal-content rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="modal-inner">
                {/* Close Button */}
                <div className="flex justify-end p-6">
                  <button onClick={handleCloseModal} className="close-button">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col">
                  {/* Project Image */}
                  <div className="w-full flex justify-center px-6 mb-8">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full max-w-2xl object-contain rounded-xl shadow-2xl"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="px-6 pb-8">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                      {selectedProject.title}
                    </h3>

                    <p className="text-gray-300 mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* All Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="project-tag text-xs font-semibold rounded-full px-3 py-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button github flex-1 py-4 px-6 rounded-xl text-center font-bold text-sm sm:text-base inline-flex items-center justify-center gap-3"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Code
                      </a>
                      <a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button live flex-1 py-4 px-6 rounded-xl text-center font-bold text-sm sm:text-base inline-flex items-center justify-center gap-3"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        View Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Work;
