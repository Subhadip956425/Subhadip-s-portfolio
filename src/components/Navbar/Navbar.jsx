import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsScrolled(scrollTop > 50);

      const scrollPosition = scrollTop + window.innerHeight / 2;

      for (let i = menuItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(menuItems[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Enhanced Custom CSS with Fixed Mobile Menu */}
      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
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

        @keyframes logoGlow {
          0%,
          100% {
            text-shadow: 0 0 8px rgba(0, 245, 255, 0.6),
              0 0 16px rgba(255, 20, 147, 0.4);
          }
          50% {
            text-shadow: 0 0 15px rgba(0, 245, 255, 1),
              0 0 25px rgba(255, 20, 147, 0.8), 0 0 35px rgba(138, 43, 226, 0.6);
          }
        }

        @keyframes menuSlideIn {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes socialBounce {
          0%,
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) scale(1.3) rotate(10deg);
          }
        }

        @keyframes hamburgerSpin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.3);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes navLinkHover {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes floatingOrb {
          0%,
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-20px) rotate(120deg) scale(1.2);
          }
          66% {
            transform: translateY(10px) rotate(240deg) scale(0.8);
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

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(0, 245, 255, 0.4),
              0 0 40px rgba(255, 20, 147, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 245, 255, 0.8),
              0 0 80px rgba(255, 20, 147, 0.4);
          }
        }

        /* Enhanced Navbar Container */
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          backdrop-filter: blur(25px);
          background: linear-gradient(
            135deg,
            rgba(5, 4, 20, 0.95),
            rgba(15, 23, 42, 0.9),
            rgba(30, 41, 59, 0.85)
          );
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: visible;
        }

        .navbar-container::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: var(--scroll-progress, 0%);
          height: 4px;
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
          transition: width 0.2s ease-out;
          filter: drop-shadow(0 0 8px rgba(0, 245, 255, 0.8));
        }

        .navbar-container::after {
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
          background-size: 600% 600%;
          animation: gradientFlow 12s ease-in-out infinite;
          opacity: 0.8;
          pointer-events: none;
        }

        .navbar-container.scrolled {
          background: linear-gradient(
            135deg,
            rgba(5, 4, 20, 0.98),
            rgba(15, 23, 42, 0.95),
            rgba(30, 41, 59, 0.9)
          );
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.4),
            0 0 100px rgba(0, 245, 255, 0.1);
          border-bottom-color: rgba(0, 245, 255, 0.4);
        }

        /* Enhanced Logo */
        .logo-container {
          font-size: 1.8rem;
          font-weight: 900;
          cursor: pointer;
          position: relative;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          animation: fadeInLeft 1.2s ease-out forwards;
          animation-delay: 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .logo-container.loaded {
          opacity: 1;
        }

        .logo-bracket {
          background: linear-gradient(135deg, #00f5ff, #ff1493, #8a2be2);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 300% 300%;
          animation: gradientFlow 4s ease-in-out infinite,
            logoGlow 3s ease-in-out infinite;
          display: inline-block;
          transition: all 0.5s ease;
          font-weight: 900;
        }

        .logo-text {
          color: #ffffff;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
          transition: all 0.5s ease;
          font-weight: 900;
        }

        .logo-container:hover {
          transform: translateY(-5px) scale(1.08);
          filter: drop-shadow(0 15px 30px rgba(0, 245, 255, 0.4));
        }

        .logo-container:hover .logo-bracket {
          transform: scale(1.3) rotate(5deg);
          animation-duration: 2s;
        }

        .logo-container:hover .logo-text {
          color: #00f5ff;
          text-shadow: 0 0 20px rgba(0, 245, 255, 0.8);
        }

        /* FIXED: Desktop Navigation - Only Show on Large Screens */
        .nav-menu {
          opacity: 0;
          animation: fadeInRight 1.2s ease-out forwards;
          animation-delay: 0.4s;
          display: flex;
          flex-wrap: nowrap;
          gap: 1rem;
        }

        .nav-menu.loaded {
          opacity: 1;
        }

        .nav-link {
          position: relative;
          padding: 10px 18px;
          border-radius: 30px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 255, 255, 0.15);
          font-weight: 700;
          color: #e5e7eb;
          overflow: hidden;
          white-space: nowrap;
          font-size: 0.95rem;
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
            rgba(0, 245, 255, 0.3),
            rgba(255, 20, 147, 0.3),
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
          height: 3px;
          background: linear-gradient(90deg, #00f5ff, #ff1493, #8a2be2);
          transition: all 0.5s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .nav-link:hover {
          color: #ffffff;
          background: rgba(0, 245, 255, 0.15);
          border-color: rgba(0, 245, 255, 0.6);
          transform: translateY(-8px) scale(1.08);
          box-shadow: 0 15px 35px rgba(0, 245, 255, 0.3),
            0 0 40px rgba(255, 20, 147, 0.2);
          animation: navLinkHover 0.8s ease-in-out;
        }

        .nav-link:hover::before {
          left: 100%;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          background: linear-gradient(
            135deg,
            rgba(0, 245, 255, 0.25),
            rgba(255, 20, 147, 0.25)
          );
          border-color: rgba(0, 245, 255, 0.8);
          color: #ffffff;
          box-shadow: 0 0 30px rgba(0, 245, 255, 0.4),
            inset 0 0 30px rgba(255, 255, 255, 0.1);
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .nav-link.active::after {
          width: 100%;
        }

        /* FIXED: Desktop Social Icons - Only Show on Large Screens */
        .social-icons {
          opacity: 0;
          animation: fadeInRight 1.2s ease-out forwards;
          animation-delay: 0.6s;
          display: flex;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .social-icons.loaded {
          opacity: 1;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.12),
            rgba(0, 245, 255, 0.08)
          );
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          color: #e5e7eb;
          font-size: 1.3rem;
        }

        .social-icon::before {
          content: "";
          position: absolute;
          inset: -3px;
          background: conic-gradient(
            from 0deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700,
            #00ff7f,
            #00f5ff
          );
          border-radius: 50%;
          animation: rotate 6s linear infinite;
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: -1;
        }

        .social-icon:hover::before {
          opacity: 1;
        }

        .social-icon:hover {
          background: linear-gradient(
            135deg,
            rgba(0, 245, 255, 0.25),
            rgba(255, 20, 147, 0.25)
          );
          border-color: rgba(0, 245, 255, 0.8);
          color: #ffffff;
          transform: translateY(-10px) scale(1.4) rotate(10deg);
          box-shadow: 0 20px 50px rgba(0, 245, 255, 0.4),
            0 0 60px rgba(255, 20, 147, 0.3);
          animation: socialBounce 1s ease-in-out;
        }

        /* ENHANCED: Mobile Hamburger Icon - Show on Small/Medium Screens */
        .hamburger-icon {
          font-size: 2.5rem;
          color: #00f5ff;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 12px;
          border-radius: 50%;
          background: rgba(0, 245, 255, 0.15);
          border: 3px solid rgba(0, 245, 255, 0.5);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hamburger-icon::before {
          content: "";
          position: absolute;
          inset: -3px;
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

        .hamburger-icon:hover::before {
          opacity: 1;
        }

        .hamburger-icon:hover {
          background: rgba(0, 245, 255, 0.3);
          border-color: rgba(0, 245, 255, 1);
          transform: scale(1.4);
          box-shadow: 0 0 40px rgba(0, 245, 255, 0.8),
            0 0 80px rgba(255, 20, 147, 0.4);
          animation: hamburgerSpin 1.2s ease-in-out;
        }

        /* ENHANCED: Mobile Menu - Full Screen Experience */
        .mobile-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%);
          width: 96vw;
          max-width: 450px;
          max-height: 85vh;
          overflow-y: auto;
          background: linear-gradient(
            135deg,
            rgba(5, 4, 20, 0.98),
            rgba(15, 23, 42, 0.96),
            rgba(30, 41, 59, 0.94)
          );
          backdrop-filter: blur(30px);
          border: 3px solid rgba(0, 245, 255, 0.4);
          border-radius: 30px;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.7),
            0 0 200px rgba(0, 245, 255, 0.3),
            inset 0 0 80px rgba(255, 255, 255, 0.05);
          animation: menuSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10000;
        }

        .mobile-menu::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            transparent 20%,
            rgba(0, 245, 255, 0.1) 30%,
            rgba(255, 20, 147, 0.1) 40%,
            rgba(138, 43, 226, 0.1) 50%,
            rgba(255, 215, 0, 0.1) 60%,
            transparent 80%
          );
          background-size: 800% 800%;
          animation: gradientFlow 15s ease-in-out infinite;
          border-radius: inherit;
          opacity: 0.6;
          pointer-events: none;
        }

        .mobile-menu-content {
          position: relative;
          z-index: 10;
          padding: 2.5rem 2rem;
        }

        .mobile-menu-item {
          opacity: 0;
          transform: translateY(40px);
          animation: menuSlideIn 0.7s ease-out forwards;
        }

        .mobile-menu-item:nth-child(1) {
          animation-delay: 0.1s;
        }
        .mobile-menu-item:nth-child(2) {
          animation-delay: 0.2s;
        }
        .mobile-menu-item:nth-child(3) {
          animation-delay: 0.3s;
        }
        .mobile-menu-item:nth-child(4) {
          animation-delay: 0.4s;
        }
        .mobile-menu-item:nth-child(5) {
          animation-delay: 0.5s;
        }
        .mobile-menu-item:nth-child(6) {
          animation-delay: 0.6s;
        }
        .mobile-menu-item:nth-child(7) {
          animation-delay: 0.7s;
        }
        .mobile-menu-item:nth-child(8) {
          animation-delay: 0.8s;
        }

        .mobile-nav-link {
          display: block;
          padding: 18px 25px;
          margin: 10px 0;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: #e5e7eb;
          font-weight: 700;
          font-size: 1.2rem;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(15px);
          position: relative;
          overflow: hidden;
        }

        .mobile-nav-link::before {
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

        .mobile-nav-link:hover::before {
          left: 100%;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: linear-gradient(
            135deg,
            rgba(0, 245, 255, 0.25),
            rgba(255, 20, 147, 0.25)
          );
          border-color: rgba(0, 245, 255, 0.8);
          color: #ffffff;
          transform: translateY(-8px) scale(1.08);
          box-shadow: 0 15px 40px rgba(0, 245, 255, 0.4),
            0 0 50px rgba(255, 20, 147, 0.3);
        }

        .mobile-social-icons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          padding: 2rem 0 1rem;
          border-top: 2px solid rgba(255, 255, 255, 0.15);
          margin-top: 2rem;
        }

        .mobile-social-icon {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.15),
            rgba(0, 245, 255, 0.1)
          );
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          color: #e5e7eb;
          font-size: 1.5rem;
        }

        .mobile-social-icon::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: conic-gradient(
            from 0deg,
            #00f5ff,
            #ff1493,
            #8a2be2,
            #ffd700,
            #00ff7f,
            #00f5ff
          );
          border-radius: 50%;
          animation: rotate 5s linear infinite;
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: -1;
        }

        .mobile-social-icon:hover::before {
          opacity: 1;
        }

        .mobile-social-icon:hover {
          background: linear-gradient(
            135deg,
            rgba(0, 245, 255, 0.3),
            rgba(255, 20, 147, 0.3)
          );
          border-color: rgba(0, 245, 255, 0.8);
          color: #ffffff;
          transform: translateY(-10px) scale(1.3) rotate(10deg);
          box-shadow: 0 20px 50px rgba(0, 245, 255, 0.4),
            0 0 60px rgba(255, 20, 147, 0.3);
        }

        /* Floating Orbs */
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 245, 255, 0.12),
            transparent
          );
          animation: floatingOrb 15s ease-in-out infinite;
          pointer-events: none;
          filter: blur(2px);
        }

        .orb-1 {
          top: 20%;
          left: 10%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }

        .orb-2 {
          top: 60%;
          right: 15%;
          width: 60px;
          height: 60px;
          background: radial-gradient(
            circle,
            rgba(255, 20, 147, 0.12),
            transparent
          );
          animation-delay: 5s;
        }

        .orb-3 {
          bottom: 30%;
          left: 20%;
          width: 70px;
          height: 70px;
          background: radial-gradient(
            circle,
            rgba(138, 43, 226, 0.12),
            transparent
          );
          animation-delay: 10s;
        }

        /* FIXED: Responsive Breakpoints */
        /* Large screens and above: Show full desktop layout */
        @media (min-width: 1280px) {
          .logo-container {
            font-size: 2rem;
          }
        }

        /* Desktop screens: Show full desktop layout */
        @media (min-width: 1024px) {
          .nav-menu,
          .social-icons {
            display: flex;
          }

          .hamburger-icon {
            display: none;
          }
        }

        /* Tablets and below: Only show hamburger menu */
        @media (max-width: 1023px) {
          .nav-menu,
          .social-icons {
            display: none !important;
          }

          .hamburger-icon {
            display: flex;
          }

          .floating-orb {
            display: none;
          }
        }

        /* Medium screens */
        @media (max-width: 768px) {
          .logo-container {
            font-size: 1.6rem;
          }

          .mobile-menu {
            width: 98vw;
            max-width: 380px;
          }

          .hamburger-icon {
            font-size: 2.2rem;
            padding: 10px;
          }
        }

        /* Small screens */
        @media (max-width: 640px) {
          .logo-container {
            font-size: 1.4rem;
          }

          .mobile-menu {
            width: 98vw;
            max-width: 350px;
          }

          .mobile-nav-link {
            font-size: 1.1rem;
            padding: 15px 20px;
          }

          .hamburger-icon {
            font-size: 2rem;
            padding: 8px;
          }

          .mobile-social-icon {
            width: 50px;
            height: 50px;
            font-size: 1.3rem;
          }
        }

        /* Extra small screens */
        @media (max-width: 480px) {
          .logo-container {
            font-size: 1.2rem;
          }

          .mobile-menu {
            width: 99vw;
            max-width: 320px;
          }

          .mobile-nav-link {
            font-size: 1rem;
            padding: 12px 18px;
          }
        }
      `}</style>

      {/* Navbar with Fixed Responsive Behavior */}
      <nav
        className={`navbar-container ${isScrolled ? "scrolled" : ""}`}
        style={{ "--scroll-progress": `${scrollProgress}%` }}
      >
        {/* Floating Background Orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>

        {/* Main Navbar Content */}
        <div className="flex justify-between items-center py-4 sm:py-5 px-4 sm:px-6 relative z-10">
          {/* Logo */}
          <div className={`logo-container ${isLoaded ? "loaded" : ""}`}>
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Subhadip</span>
            <span className="logo-bracket">/</span>
            <span className="logo-text">Guchhait</span>
            <span className="logo-bracket">&gt;</span>
          </div>

          {/* FIXED: Desktop Menu - Only Show on Large Screens (1024px+) */}
          <ul className={`nav-menu ${isLoaded ? "loaded" : ""}`}>
            {menuItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`nav-link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* FIXED: Desktop Social Icons - Only Show on Large Screens (1024px+) */}
          <div className={`social-icons ${isLoaded ? "loaded" : ""}`}>
            <a
              href="https://github.com/Subhadip956425"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/subhadip-guchhait-675395252"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/itz_subhadip106"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/19QFBh3Liw/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>

          {/* FIXED: Hamburger Menu Icon - Only Show on Small/Medium Screens */}
          <div className="hamburger-icon">
            {isOpen ? (
              <FiX onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <div key={item.id} className="mobile-menu-item">
                    <button
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`mobile-nav-link w-full ${
                        activeSection === item.id ? "active" : ""
                      }`}
                    >
                      {item.label}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mobile-menu-item mobile-social-icons">
                <a
                  href="https://github.com/SubhadipGuchhhait"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-icon"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/subhadip-guchhait-675395252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-icon"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/itz_subhadip106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-icon"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/share/19QFBh3Liw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-icon"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
