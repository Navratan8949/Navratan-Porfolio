import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Palette,
  X,
  Star,
  Code2,
  Type,
  GitBranch,
  Smartphone,
  FileCode,
  Box,
  Layers,
} from "lucide-react";
import { gsap } from "gsap";

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const skillIcons = {
    React: <Star size={20} />,
    Redux: <Layers size={20} />,
    TypeScript: <Type size={20} />,
    CSS3: <Layers size={20} />,
    Webpack: <Box size={20} />,
    JavaScript: <Code2 size={20} />,
    SCSS: <Palette size={20} />,
    Git: <GitBranch size={20} />,
    "Responsive Design": <Smartphone size={20} />,
    HTML5: <FileCode size={20} />,
    jQuery: <Code size={20} />,
    Bootstrap: <Box size={20} />,
  };

  useEffect(() => {
    setTimeout(() => {
      setExperiences([
        {
          id: 1,
          company: "Tech Innovations Inc.",
          logo: <Briefcase size={24} />,
          role: "Senior Frontend Developer",
          period: "Jan 2020 - Present",
          description:
            "Led the development of responsive web applications using React, Redux, and TypeScript. Improved page load times by 40% through code optimization.",
          skills: ["React", "Redux", "TypeScript", "CSS3", "Webpack"],
          color: "from-blue-500 to-indigo-600",
        },
        {
          id: 2,
          company: "Digital Solutions LLC",
          logo: <Code size={24} />,
          role: "Frontend Developer",
          period: "Mar 2018 - Dec 2019",
          description:
            "Developed and maintained client websites. Collaborated with designers to implement pixel-perfect UIs and smooth animations.",
          skills: ["JavaScript", "React", "SCSS", "Git", "Responsive Design"],
          color: "from-purple-500 to-pink-600",
        },
        {
          id: 3,
          company: "Creative Web Studios",
          logo: <Palette size={24} />,
          role: "Junior Web Developer",
          period: "Jun 2016 - Feb 2018",
          description:
            "Built interactive websites for clients across various industries. Focused on creating accessible and performant web experiences.",
          skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
          color: "from-green-500 to-teal-600",
        },
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            headerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
          );

          gsap.fromTo(
            cardsRef.current.children,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "back.out(1.4)",
              stagger: 0.2,
              delay: 0.3,
            }
          );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isLoading]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>

      {/* Animated Particles */}
      <div className="absolute top-40 right-20 w-4 h-4 rounded-full bg-purple-500 opacity-20 blur-sm animate-[pulse_3s_ease-in-out_infinite, float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 rounded-full bg-cyan-500 opacity-20 blur-sm animate-[pulse_3s_ease-in-out_infinite_1s, float_5s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-pink-500 opacity-20 blur-sm animate-[pulse_3s_ease-in-out_infinite_2s, float_7s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
                My Experience
              </span>
              <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-75 blur-sm"></span>
              <span className="absolute -bottom-3 left-0 w-2/3 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mt-8">
            A journey through my professional career, highlighting key roles and
            expertise gained along the way.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              className="w-16 h-16 rounded-full border-4 border-t-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            ></motion.div>
          </div>
        ) : (
          <motion.div
            ref={cardsRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                layoutId={`card-container-${exp.id}`}
                variants={cardVariants}
                className="relative bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl shadow-purple-900/20 group overflow-hidden cursor-pointer"
                onClick={() => setSelectedId(exp.id)}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur"></div>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white`}
                    >
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                          {exp.company}
                        </span>
                      </h3>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-200 mb-4 group-hover:text-white transition-colors">
                    {exp.role}
                  </h4>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 flex items-center py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30 transition-all duration-300 group-hover:bg-purple-500/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skillIcons[skill]}{" "}
                        <span className="ml-1">{skill}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Detail Modal */}
        {selectedId && (
          <motion.div
            layoutId={`card-container-${selectedId}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-700/50 shadow-2xl shadow-purple-900/30"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {experiences
                .filter((exp) => exp.id === selectedId)
                .map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-14 h-14 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white`}
                        >
                          {exp.logo}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                            {exp.company}
                          </h2>
                          <p className="text-gray-400">{exp.period}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedId(null)}
                        className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-all duration-300"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                      {exp.role}
                    </h3>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-200 mb-4">
                        Description
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description} As part of this role, I collaborated
                        with cross-functional teams to deliver high-quality
                        solutions while meeting tight deadlines. I mentored
                        junior developers and implemented best practices that
                        improved overall team productivity.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-200 mb-4">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">✓</span>
                          Implemented CI/CD pipelines that reduced deployment
                          time by 70%
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">✓</span>
                          Led the migration from legacy systems to a modern
                          React-based architecture
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">✓</span>
                          Improved application performance by optimizing
                          rendering and API calls
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-200 mb-4">
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30 flex items-center"
                          >
                            {skillIcons[skill]}{" "}
                            <span className="ml-1">{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
};

export default ExperiencePage;
