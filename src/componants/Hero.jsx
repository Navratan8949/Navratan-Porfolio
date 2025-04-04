import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const circleRef = useRef(null);

  const typingTexts = [
    "Frontend Developer",
    "UI/UX Designer",
    "React Specialist",
    "Web Animator",
  ];

  // Animation when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const text = typingTexts[currentTextIndex];

    if (isTyping) {
      if (typedText.length < text.length) {
        const timeout = setTimeout(() => {
          setTypedText(text.substring(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(text.substring(0, typedText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentTextIndex((currentTextIndex + 1) % typingTexts.length);
      }
    }
  }, [typedText, isTyping, currentTextIndex, typingTexts]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 bg-transparent"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>

      {/* <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div> */}

      {/* Grid pattern overlay */}
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-10"></div> */}

      <motion.div
        className="absolute top-20 left-20 w-8 h-8 bg-indigo-300 rounded-full opacity-5"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-purple-300 rounded-full opacity-5"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Hero Text Section */}
          <div
            className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-2">
              <span className="text-gray-300 text-lg font-medium">
                Hello, I'm
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Navratan </span>
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
                Prajapat
              </span>
            </h1>
            <div className="h-12 mb-4">
              <div className="flex text-xl sm:text-2xl font-bold items-center justify-center md:justify-start">
                <span className="text-gray-300 mr-2">I'm a</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                  {typedText}
                </span>
                <span className="w-1 h-6 bg-cyan-400 ml-1 animate-blink"></span>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about creating stunning web experiences with smooth
              animations and intuitive interfaces. Let's build something amazing
              together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg shadow-purple-500/20">
                View My Work
                <span className="absolute right-0 top-0 h-full w-12 -ml-6 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[20deg] translate-x-[-130%] group-hover:translate-x-[130%] transition-all duration-1000 ease-in-out"></span>
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                Contact Me
              </button>
            </div>
          </div>

          {/* Hero Image/Animation */}
          <div
            className={`w-full md:w-1/2 md:mt-0 mt-0   transition-all duration-1000 delay-300 transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative mx-auto w-64 h-64 mb-25 md:mb-0 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Rotating circles */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full border-2 border-cyan-500/30 animate-spin-slow-reverse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-pink-500/30 animate-spin-medium"></div>

              {/* Profile image */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 p-1 shadow-xl shadow-purple-500/30 animate-pulse-slow">
                <div className="h-full w-full  rounded-full bg-gray-800 overflow-hidden">
                  <img
                    src="https://p.kindpng.com/picc/s/72-727254_black-and-white-profile-pic-asian-hd-png.png"
                    alt="Developer"
                    className="h-full w-full object-cover opacity-90 "
                  />
                </div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-float">
                <div className="text-2xl">⚛️</div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-float animation-delay-1000">
                <div className="text-xl">🎨</div>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-float animation-delay-2000">
                <div className="text-lg">💻</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-float animation-delay-3000">
                <div className="text-xl">🚀</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce-slow"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
