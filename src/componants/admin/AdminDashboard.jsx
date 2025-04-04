import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  ChevronDown,
  Clock,
  Code,
  ExternalLink,
  Eye,
  FileText,
  Folder,
  Globe,
  Home,
  Image,
  Layout,
  LogOut,
  Menu,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Star,
  User,
  X,
} from "lucide-react";
import { Dashboard } from "./Dashboard";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Simple stats for the dashboard
  const stats = [
    {
      label: "Total Projects",
      value: "12",
      icon: <Folder size={20} />,
      change: "+2",
      color: "blue",
    },
    {
      label: "Portfolio Views",
      value: "8.4k",
      icon: <Eye size={20} />,
      change: "+14%",
      color: "green",
    },
    {
      label: "Messages",
      value: "24",
      icon: <MessageSquare size={20} />,
      change: "+6",
      color: "purple",
    },
    {
      label: "Avg. Response",
      value: "2h",
      icon: <Clock size={20} />,
      change: "-30m",
      color: "cyan",
    },
  ];

  // Project data for the table
  const projects = [
    {
      id: 1,
      name: "E-commerce Website",
      type: "Web App",
      tech: "React",
      status: "Live",
      views: 1245,
    },
    {
      id: 2,
      name: "Task Manager",
      type: "Mobile App",
      tech: "React Native",
      status: "Live",
      views: 968,
    },
    {
      id: 3,
      name: "Dashboard UI",
      type: "UI/UX",
      tech: "Figma",
      status: "Completed",
      views: 742,
    },
    {
      id: 4,
      name: "Booking System",
      type: "Web App",
      tech: "Vue.js",
      status: "In Progress",
      views: 516,
    },
    {
      id: 5,
      name: "Portfolio Website",
      type: "Web App",
      tech: "Next.js",
      status: "Live",
      views: 1890,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      {/* Sidebar */}
      <motion.div
        className={`bg-gray-900 border-r border-gray-800 ${
          sidebarOpen ? "w-64" : "w-20"
        } flex flex-col transition-all duration-300 fixed h-full z-10`}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {sidebarOpen && (
            <motion.div
              className="text-xl font-bold text-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Portfolio Admin
            </motion.div>
          )}
          <button
            className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {[
              { id: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
              { id: "projects", label: "Projects", icon: <Folder size={20} /> },
              {
                id: "analytics",
                label: "Analytics",
                icon: <BarChart3 size={20} />,
              },
              {
                id: "messages",
                label: "Messages",
                icon: <MessageSquare size={20} />,
              },
              {
                id: "media",
                label: "Media Library",
                icon: <Image size={20} />,
              },
              { id: "pages", label: "Pages", icon: <FileText size={20} /> },
              {
                id: "settings",
                label: "Settings",
                icon: <Settings size={20} />,
              },
            ].map((item) => (
              <li key={item.id}>
                <button
                  className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${
                    activeTab === item.id
                      ? "bg-blue-900/30 text-blue-400"
                      : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {sidebarOpen && (
                    <span className="ml-3 text-sm font-medium">
                      {item.label}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-10 px-2">
            <div
              className={`border-t border-gray-800 pt-4 ${
                sidebarOpen ? "px-3" : ""
              }`}
            >
              <button className="flex items-center w-full p-3 rounded-lg text-red-400 hover:bg-gray-800 transition-colors duration-200">
                <LogOut size={20} />
                {sidebarOpen && (
                  <span className="ml-3 text-sm font-medium">Logout</span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div
        className={`flex-1 ${
          sidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        {/* Top Bar */}
        <header className="bg-gray-900 border-b border-gray-800 p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-gray-900 font-bold">
                  JD
                </div>
                <span className="text-sm font-medium hidden md:inline-block">
                  John Doe
                </span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "projects" && <h1>Projects</h1>}
          {activeTab === "analytics" && <h1>Analytics</h1>}
          {activeTab === "messages" && <h1>Messages</h1>}
          {activeTab === "media" && <h1>Media Library</h1>}
          {activeTab === "pages" && <h1>Pages</h1>}
          {activeTab === "settings" && <h1>Settings</h1>}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
