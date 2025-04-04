import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Figma,
  FileCode,
  Globe,
  Layers,
  Server,
  Smartphone,
  Terminal,
  Wifi,
} from "lucide-react";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: <Layers size={24} />,
      skills: [
        { name: "HTML/CSS", icon: <FileCode size={20} />, level: 90 },
        { name: "JavaScript", icon: <Code size={20} />, level: 85 },
        { name: "React", icon: <Layers size={20} />, level: 80 },
        {
          name: "Responsive Design",
          icon: <Smartphone size={20} />,
          level: 85,
        },
      ],
    },
    {
      category: "Backend Development",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", icon: <Server size={20} />, level: 75 },
        { name: "Python", icon: <Terminal size={20} />, level: 70 },
        { name: "Databases", icon: <Database size={20} />, level: 65 },
        { name: "API Development", icon: <Wifi size={20} />, level: 80 },
      ],
    },
    {
      category: "Design & Other",
      icon: <Figma size={24} />,
      skills: [
        { name: "UI/UX Design", icon: <Figma size={20} />, level: 75 },
        { name: "SEO", icon: <Globe size={20} />, level: 60 },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br bg-[#0F172A] text-gray-100 p-6 md:p-12">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 rounded-full bg-teal-600 blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-16 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            My Skills
          </motion.h1>
          <motion.p
            className="text-xl text-cyan-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A showcase of my technical expertise and professional capabilities
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-gradient-to-b from-slate-800/90 to-slate-900/90 rounded-2xl p-8 border border-indigo-900/50 shadow-xl backdrop-blur-sm hover:-translate-y-2 hover:shadow-indigo-900/20 hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <motion.div
                className="flex items-center mb-6 pb-3 border-b border-indigo-800/30"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * categoryIndex, duration: 0.5 }}
              >
                <motion.div
                  className="p-3 mr-4 bg-indigo-800/30 rounded-full text-cyan-400"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    backgroundColor: "rgba(99, 102, 241, 0.4)",
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {category.icon}
                </motion.div>
                <motion.h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                  {category.category}
                </motion.h2>
              </motion.div>

              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="relative"
                    custom={skillIndex}
                    variants={skillVariants}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <motion.div
                          className="mr-3 text-cyan-400 bg-cyan-900/20 p-2 rounded-lg"
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, -10, 10, -10, 0],
                            transition: { duration: 0.5 },
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="font-medium text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <motion.span
                        className="text-lg font-semibold text-cyan-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 0.7 + skillIndex * 0.1,
                          duration: 0.3,
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    <div className="h-3 w-full bg-gray-800/60 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        custom={skill.level}
                        variants={progressVariants}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
