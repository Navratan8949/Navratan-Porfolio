import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animation for mobile menu
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        {
          clipPath: "circle(0% at 90% 10%)",
          opacity: 0,
        },
        {
          clipPath: "circle(150% at 90% 10%)",
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        menuItemsRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white font-bold text-xl cursor-pointer transition-all duration-300 hover:text-purple-400">
              <span className="text-purple-500">Port</span>folio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "About", "Projects", "Testimonials", "Contact"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="relative cursor-none px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
                  >
                    {item}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-1">
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <span
                  className={`z-10 absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={` absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                    isOpen ? "w-0 opacity-0" : "w-full opacity-100 top-3"
                  }`}
                ></span>
                <span
                  className={`z-10 absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Circular Reveal */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm ${
          isOpen ? "pointer-events-auto" : "pointer-events-none hidden"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center p-6">
          {["Home", "About", "Projects", "Testimonials", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                ref={(el) => (menuItemsRef.current[index] = el)}
                className="block py-4 text-xl font-medium text-white hover:text-purple-400 transition-all duration-300 relative group"
                onClick={() => setIsOpen(false)}
              >
                {item}
                <span className="absolute left-0 bottom-2 h-0.5 w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
          <button
            ref={(el) => (menuItemsRef.current[5] = el)}
            className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
