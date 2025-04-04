import React, { useEffect, useRef, useState } from "react";
import {
  Code,
  Briefcase,
  GraduationCap,
  Box,
  Layout,
  FileCode,
  Type,
  Palette,
  Smartphone,
} from "lucide-react";
import { gsap } from "gsap";

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

          // Left Column animation
          gsap.fromTo(
            leftColumnRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "back.out(1.4)",
              delay: 0.3,
            }
          );

          // Right Column animation (synchronized with Left Column)
          gsap.fromTo(
            rightColumnRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "back.out(1.4)",
              delay: 0.3,
            }
          );

          // Animate individual items within columns with a slight stagger
          gsap.fromTo(
            ".animate-item-left",
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "back.out(1.4)",
              delay: 0.5,
            }
          );
          gsap.fromTo(
            ".animate-item-right",
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "back.out(1.4)",
              delay: 0.5,
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

  const expertise = [
    {
      title: "Frontend Development",
      description:
        "Crafting responsive, intuitive web interfaces with modern frameworks like React and Next.js.",
      icon: <Layout size={20} className="text-purple-300" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing stunning interfaces with smooth animations and thoughtful interactions.",
      icon: <Palette size={20} className="text-cyan-300" />,
    },
    {
      title: "React Specialist",
      description:
        "Mastering the React ecosystem with expertise in hooks, context, and state management.",
      icon: <Box size={20} className="text-purple-300" />,
    },
    {
      title: "Web Animation",
      description:
        "Animating websites with GSAP, Framer Motion, and CSS for dynamic experiences.",
      icon: <FileCode size={20} className="text-cyan-300" />,
    },
  ];

  const skills = [
    {
      name: "React/Next.js",
      level: 95,
      icon: <Box size={20} className="text-cyan-300" />,
    },
    {
      name: "JavaScript/TypeScript",
      level: 90,
      icon: <Code size={20} className="text-purple-300" />,
    },
    {
      name: "HTML/CSS/Tailwind",
      level: 95,
      icon: <FileCode size={20} className="text-cyan-300" />,
    },
    {
      name: "UI/UX Design",
      level: 85,
      icon: <Palette size={20} className="text-purple-300" />,
    },
    {
      name: "GSAP/Framer Motion",
      level: 90,
      icon: <FileCode size={20} className="text-cyan-300" />,
    },
    {
      name: "Responsive Design",
      level: 92,
      icon: <Smartphone size={20} className="text-purple-300" />,
    },
  ];

  const education = [
    {
      degree: "Master of Interactive Technology",
      institution: "Digital Arts University",
      year: "2020-2022",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Tech Institute",
      year: "2016-2020",
    },
    {
      degree: "UI/UX Design Bootcamp",
      institution: "Design Academy",
      year: "2019",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24  overflow-hidden bg-transparent"
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
                About Me
              </span>
              <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-75 blur-sm"></span>
              <span className="absolute -bottom-3 left-0 w-2/3 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mt-8">
            Passionate about crafting stunning web experiences with smooth
            animations and intuitive interfaces.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {/* Left Column - Expertise & Skills */}
          <div ref={leftColumnRef} className="order-2 lg:order-1">
            <div className="md:p-10 bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl shadow-purple-900/20 group relative overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur"></div>
              <div className="relative z-10">
                {/* Expertise */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                    Expertise
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {expertise.map((item, index) => (
                    <div key={index} className="animate-item-left group/item">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center shadow-inner group-hover/item:bg-gradient-to-br group-hover/item:from-purple-500 group-hover/item:to-cyan-500 transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2 group-hover/item:text-cyan-300 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="mt-12">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <Code size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                      Skills
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="animate-item-left group/skill"
                      >
                        <div className="flex justify-between mb-2 items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center shadow-inner group-hover/skill:bg-gradient-to-br group-hover/skill:from-purple-500 group-hover/skill:to-cyan-500 transition-all duration-300">
                              {skill.icon}
                            </div>
                            <span className="text-white font-medium group-hover/skill:text-cyan-300 transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-cyan-400 font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="h-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bio & Education */}
          <div ref={rightColumnRef} className="order-1 lg:order-2">
            <div className="space-y-10">
              {/* Bio */}
              <div className="md:p-10 bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl shadow-purple-900/20 group overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <Type size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                      Who I Am
                    </h3>
                  </div>
                  <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                    <p className="animate-item-right">
                      I'm John Doe, a passionate frontend developer and UI/UX
                      designer with over 5 years of experience in building
                      responsive, accessible, and performant websites.
                    </p>
                    <p className="animate-item-right">
                      My expertise lies in combining technical skills with
                      creative design to deliver exceptional user experiences
                      that captivate and engage.
                    </p>
                    <p className="animate-item-right">
                      When not coding, I explore new design trends, experiment
                      with animations, and collaborate with creatives to push
                      digital boundaries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="md:p-10 bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl shadow-purple-900/20 group overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                      Education
                    </h3>
                  </div>
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="animate-item-right group/edu pl-6 border-l border-gray-700 pb-6 last:pb-0"
                      >
                        <div className="flex items-start gap-4">
                          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2 group-hover/edu:text-cyan-300 transition-colors duration-300">
                              {edu.degree}
                            </h4>
                            <p className="text-gray-300">{edu.institution}</p>
                            <span className="inline-block mt-2 px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full">
                              {edu.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
