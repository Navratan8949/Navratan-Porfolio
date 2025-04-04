import { ChevronDown, Edit, PlusCircle, Trash2 } from "lucide-react";
import React from "react";

export const Dashboard = () => {
  const profileData = {
    name: "John Doe",
    role: "Senior Frontend Developer",
    location: "San Francisco, CA",
    avatar: "/api/placeholder/80/80",
    email: "john@example.com",
  };

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      type: "Web App",
      image: "/api/placeholder/100/60",
    },
    {
      id: 2,
      title: "Travel Companion App",
      type: "Mobile App",
      image: "/api/placeholder/100/60",
    },
    {
      id: 3,
      title: "Finance Tracker",
      type: "Web App",
      image: "/api/placeholder/100/60",
    },
  ];

  const experienceData = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "TechVision Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in creating responsive and accessible web applications using React and modern JavaScript.",
    },
    {
      id: 2,
      position: "UI/UX Designer",
      company: "Creative Solutions",
      period: "2019 - 2021",
      description:
        "Designed user interfaces for web and mobile applications, focusing on user experience and visual appeal.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Profile Overview</h3>
          <Edit size={18} className="text-purple-400 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="/api/placeholder/60/60"
            alt="Profile"
            className="rounded-full"
          />
          <div>
            <h4 className="text-white font-medium">{profileData.name}</h4>
            <p className="text-gray-400 text-sm">{profileData.role}</p>
          </div>
        </div>
        <div className="text-gray-300 text-sm">
          <p className="mb-2">
            <span className="text-gray-400">Email:</span> {profileData.email}
          </p>
          <p className="mb-2">
            <span className="text-gray-400">Location:</span>{" "}
            {profileData.location}
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Projects</h3>
          <span className="text-purple-500 text-sm font-medium">
            {projectsData.length} Total
          </span>
        </div>
        <div className="space-y-4">
          {projectsData.slice(0, 2).map((project) => (
            <div key={project.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-12 h-8 rounded mr-3"
                />
                <div>
                  <h4 className="text-white text-sm font-medium">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-xs">{project.type}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Edit size={16} className="text-blue-400 cursor-pointer" />
                <Trash2 size={16} className="text-red-400 cursor-pointer" />
              </div>
            </div>
          ))}
          <button className="flex items-center text-purple-400 text-sm mt-2">
            View All <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Skills</h3>
          <PlusCircle size={18} className="text-purple-400 cursor-pointer" />
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-sm">React</span>
            <div className="flex items-center">
              <span className="text-purple-400 mr-2">90%</span>
              <div className="flex space-x-1">
                <Edit size={16} className="text-blue-400 cursor-pointer" />
                <Trash2 size={16} className="text-red-400 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-400 h-2 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-300 text-sm">JavaScript</span>
            <div className="flex items-center">
              <span className="text-purple-400 mr-2">85%</span>
              <div className="flex space-x-1">
                <Edit size={16} className="text-blue-400 cursor-pointer" />
                <Trash2 size={16} className="text-red-400 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-400 h-2 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Experience</h3>
          <PlusCircle size={18} className="text-purple-400 cursor-pointer" />
        </div>
        <div className="space-y-4">
          {experienceData.slice(0, 2).map((exp) => (
            <div key={exp.id} className="border-l-2 border-purple-500 pl-4">
              <div className="flex justify-between">
                <h4 className="text-white text-sm font-medium">
                  {exp.position}
                </h4>
                <div className="flex space-x-1">
                  <Edit size={16} className="text-blue-400 cursor-pointer" />
                  <Trash2 size={16} className="text-red-400 cursor-pointer" />
                </div>
              </div>
              <p className="text-gray-400 text-xs">
                {exp.company} | {exp.period}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Testimonials</h3>
          <PlusCircle size={18} className="text-purple-400 cursor-pointer" />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img
                src="/api/placeholder/40/40"
                alt="Client"
                className="rounded-full w-8 h-8 mr-2"
              />
              <div>
                <h4 className="text-white text-sm font-medium">David Park</h4>
                <p className="text-gray-400 text-xs">Startup Founder @NexGen</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <Edit size={16} className="text-blue-400 cursor-pointer" />
              <Trash2 size={16} className="text-red-400 cursor-pointer" />
            </div>
          </div>
          <p className="text-gray-300 text-xs italic">
            "From concept to execution, the entire process was seamless..."
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-white">Education</h3>
          <PlusCircle size={18} className="text-purple-400 cursor-pointer" />
        </div>
        <div className="space-y-4">
          <div className="border-l-2 border-purple-500 pl-4">
            <div className="flex justify-between">
              <h4 className="text-white text-sm font-medium">
                Master of Computer Science
              </h4>
              <div className="flex space-x-1">
                <Edit size={16} className="text-blue-400 cursor-pointer" />
                <Trash2 size={16} className="text-red-400 cursor-pointer" />
              </div>
            </div>
            <p className="text-gray-400 text-xs">
              Tech University | 2016 - 2017
            </p>
          </div>
          <div className="border-l-2 border-purple-500 pl-4">
            <div className="flex justify-between">
              <h4 className="text-white text-sm font-medium">
                Bachelor of Science in IT
              </h4>
              <div className="flex space-x-1">
                <Edit size={16} className="text-blue-400 cursor-pointer" />
                <Trash2 size={16} className="text-red-400 cursor-pointer" />
              </div>
            </div>
            <p className="text-gray-400 text-xs">
              Digital Arts College | 2012 - 2016
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
