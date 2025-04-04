import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const filtersRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard",
      category: "web",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/username/ecommerce",
      liveUrl: "https://ecommerce-example.com",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with forecast and location search",
      category: "web",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Weather API", "Chart.js"],
      githubUrl: "https://github.com/username/weather-app",
      liveUrl: "https://weather-example.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity application with drag-and-drop interface and team collaboration features",
      category: "mobile",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Redux"],
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://task-example.com",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description:
        "Interactive data visualization platform for business metrics",
      category: "data",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      githubUrl: "https://github.com/username/analytics",
      liveUrl: "https://analytics-example.com",
    },
    {
      id: 5,
      title: "Social Media App",
      description:
        "Platform for user connections, media sharing, and messaging",
      category: "mobile",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "GraphQL", "AWS"],
      githubUrl: "https://github.com/username/social-app",
      liveUrl: "https://social-example.com",
    },
    {
      id: 6,
      title: "Machine Learning Portfolio",
      description:
        "Collection of ML models for image recognition and natural language processing",
      category: "data",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "Jupyter", "Scikit-learn"],
      githubUrl: "https://github.com/username/ml-portfolio",
      liveUrl: "https://ml-example.com",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "data", label: "Data & ML" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle filter changes and initial load in a single useEffect
  useEffect(() => {
    const filteredProjects =
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    // Set projects immediately, then trigger animation
    setVisibleProjects(filteredProjects);

    // Trigger loading animation
    setIsLoaded(false);
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="py-24 bg-transparent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>
      {/* <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div> */}

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
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
                Projects
              </span>
              <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-75 blur-sm"></span>
              <span className="absolute -bottom-3 left-0 w-2/3 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mt-8 px-4">
            Discover my creative works and technical projects showcasing my
            skills and expertise.
          </p>
        </div>

        <div
          ref={filtersRef}
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-6 py-3 rounded-full backdrop-blur-md transition-all duration-500 ease-out group ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-purple-500/50 shadow-lg shadow-purple-900/30"
                  : "bg-gray-800/50 text-gray-300 border-gray-700/50 hover:bg-gray-800/70"
              }`}
            >
              <span className="relative z-10">{filter.label}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
            </button>
          ))}
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`group backdrop-blur-md bg-gray-800/40 rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl transición-all duration-700 ease-in-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-16 scale-95"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>

                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60"></div>

                  <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500/30 backdrop-blur-md rounded-full text-xs font-medium text-purple-200 border border-purple-500/40 transition-all duration-300 group-hover:bg-purple-500/40">
                    {project.category === "web"
                      ? "Web App"
                      : project.category === "mobile"
                      ? "Mobile App"
                      : "Data & ML"}
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text transition-all duration-300 group-hover:brightness-125">
                      {project.title}
                    </span>
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30 transition-all duration-300 group-hover:bg-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 bg-gray-700/60 text-white text-sm rounded-full hover:bg-gray-700/80 transition-all duration-300 border border-gray-600/50 hover:shadow-md"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm rounded-full transition-all duration-300 hover:from-purple-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-purple-900/30 group/live"
                    >
                      Live Demo
                      <ChevronRight
                        size={16}
                        className="transition-transform duration-300 group-hover/live:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-300 py-8">
              Loading projects...
            </div>
          )}
        </div>
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

export default ProjectsPage;
