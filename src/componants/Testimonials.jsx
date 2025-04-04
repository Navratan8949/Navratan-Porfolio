import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  UserCircle,
  Quote,
} from "lucide-react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

// Sample testimonial data
const testimonialsData = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content:
      "Working with this team transformed our digital presence completely. The attention to detail and creative solutions exceeded our expectations.",
    rating: 5,
    image: "https://via.placeholder.com/100",
    project: "Corporate Website",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "CEO",
    company: "Innovate Studios",
    content:
      "I've worked with many developers, but none have delivered results like this. Intuitive design with flawless functionality, exactly what we needed.",
    rating: 5,
    image: "https://via.placeholder.com/100",
    project: "Mobile App",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Manager",
    company: "GlobalSoft",
    content:
      "The portfolio work speaks for itself. Creative solutions to complex problems with a focus on user experience that's unmatched in the industry.",
    rating: 4,
    image: "https://via.placeholder.com/100",
    project: "Dashboard",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "ArtisanWeb",
    content:
      "Exceptional collaboration and communication throughout. The final product not only met our requirements but incorporated innovative features we hadn't even considered.",
    rating: 5,
    image: "https://via.placeholder.com/100",
    project: "E-Commerce Platform",
  },
  {
    id: 5,
    name: "David Park",
    role: "Startup Founder",
    company: "NexGen",
    content:
      "From concept to execution, the entire process was seamless. The responsive design works perfectly across all devices, and the attention to performance optimization is impressive.",
    rating: 5,
    image: "https://via.placeholder.com/100",
    project: "Startup Website",
  },
];

const PortfolioTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);
  const testimonialsRef = useRef([]);

  // Add testimonials to ref
  testimonialsRef.current = testimonialsData.map(
    (_, i) => testimonialsRef.current[i] ?? React.createRef()
  );

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);

          // Header animation
          gsap.fromTo(
            headerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
          );

          // Initial carousel animation
          gsap.fromTo(
            carouselRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "back.out(1.4)",
              delay: 0.3,
            }
          );
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Automatic carousel slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 8000); // Change every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  // Framer Motion Variants
  const testimonialVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: 30,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>

      {/* Animated Particles */}
      <div className="absolute top-40 right-20 w-4 h-4 rounded-full bg-purple-500 opacity-20 blur-sm animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-6 h-6 rounded-full bg-cyan-500 opacity-20 blur-sm animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-pink-500 opacity-20 blur-sm animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
                Client Reviews
              </span>
              <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-75 blur-sm"></span>
              <span className="absolute -bottom-3 left-0 w-2/3 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mt-8">
            What clients say about working with me on their digital
            transformation journeys.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div ref={carouselRef} className="relative max-w-5xl mx-auto">
          <div className="bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-gray-700/50 shadow-2xl shadow-purple-900/20 relative overflow-hidden group">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur"></div>

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl -z-10"></div>

            {/* Quote Icons */}
            <div className="absolute top-6 left-6 text-gray-700 opacity-20">
              <Quote size={60} className="text-purple-500" />
            </div>
            <div className="absolute bottom-6 right-6 text-gray-700 opacity-20 transform rotate-180">
              <Quote size={60} className="text-cyan-500" />
            </div>

            {/* Testimonials Slider */}
            <div className="relative h-[350px] md:h-[300px]">
              <AnimatePresence mode="wait">
                {testimonialsData.map(
                  (testimonial, index) =>
                    index === activeIndex && (
                      <motion.div
                        key={testimonial.id}
                        variants={testimonialVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute inset-0"
                      >
                        <div className="flex flex-col md:flex-row gap-8 h-full items-center">
                          {/* Left - Picture and Rating */}
                          <div className="md:w-1/3 flex flex-col items-center">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-xl mb-4 group-hover:shadow-purple-500/20 transition-all duration-300">
                              <div className="w-full h-full bg-gradient-to-br from-purple-500/80 to-cyan-500/80 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                                <UserCircle size={48} className="text-white" />
                              </div>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-1 text-center">
                              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                                {testimonial.name}
                              </span>
                            </h3>

                            <p className="text-gray-400 text-sm mb-2 text-center">
                              {testimonial.role}{" "}
                              <span className="text-cyan-400">
                                @{testimonial.company}
                              </span>
                            </p>

                            <div className="flex justify-center mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={`${
                                    i < testimonial.rating
                                      ? "text-yellow-400"
                                      : "text-gray-600"
                                  }`}
                                  fill={
                                    i < testimonial.rating
                                      ? "currentColor"
                                      : "none"
                                  }
                                />
                              ))}
                            </div>

                            <div className="hidden md:block">
                              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full">
                                {testimonial.project}
                              </span>
                            </div>
                          </div>

                          {/* Right - Testimonial Content */}
                          <div className="md:w-2/3">
                            <p className="text-gray-200 text-lg leading-relaxed italic mb-6 relative">
                              "{testimonial.content}"
                            </p>

                            <div className="md:hidden text-center mt-4">
                              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full">
                                {testimonial.project}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center absolute  top-40 left-6 right-6 ">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-gray-600  flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            {/* Progress Indicators */}
            <div className="flex items-center gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-6">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 
                    ${
                      index === activeIndex
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-10"
                        : "bg-gray-700 w-2 hover:bg-gray-600"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTestimonials;
