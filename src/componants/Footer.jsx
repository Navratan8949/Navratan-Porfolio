import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Heart,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-gray-100 pt-16 pb-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>
      {/* Animated Particles */}
      <div className="absolute top-10 left-20 w-4 h-4 rounded-full bg-purple-500 opacity-20 blur-sm animate-[pulse_3s_ease-in-out_infinite, float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-10 right-20 w-6 h-6 rounded-full bg-cyan-500 opacity-20 blur-sm animate-[pulse_3s_ease-in-out_infinite_1s, float_5s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-pink-500 opacity-20 blur-sm animate-[pulse_3s_ease-in-out_infinite_2s, float_7s_ease-in-out_infinite]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section with Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              Navratan Prajapat
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
              Crafting digital experiences that blend aesthetics with
              functionality.
            </p>
            <div className="flex space-x-4 mt-6">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800/40 backdrop-blur-lg rounded-full flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 hover:text-white transition-all duration-300 border border-gray-700/50 group"
                  aria-label={Icon.name}
                >
                  <Icon size={18} />
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Resume", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ChevronRight
                        size={16}
                        className="mr-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1"
                      />
                      <span className="text-sm sm:text-base">{item}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text pl-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "Digital Marketing",
                "Branding",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1"
                    />
                    <span className="text-sm sm:text-base">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex items-start group">
                <Mail
                  size={18}
                  className="mr-3 text-purple-400 mt-1 shrink-0 group-hover:text-cyan-400 transition-colors duration-300"
                />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  navratan0442@gmail.com
                </span>
              </li>
              <li className="flex items-start group">
                <Phone
                  size={18}
                  className="mr-3 text-purple-400 mt-1 shrink-0 group-hover:text-cyan-400 transition-colors duration-300"
                />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start group">
                <MapPin
                  size={18}
                  className="mr-3 text-purple-400 mt-1 shrink-0 group-hover:text-cyan-400 transition-colors duration-300"
                />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl shadow-purple-900/10 mb-12 relative overflow-hidden group"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">
                Subscribe for the latest updates and insights.
              </p>
            </div>
            <div className="md:col-span-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600/50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 relative overflow-hidden group"
                >
                  <span className="relative z-10">Subscribe</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-300 text-sm sm:text-base mb-4 md:mb-0"
          >
            © {currentYear} Navratan Prajapat. All rights reserved. Made with{" "}
            <Heart
              size={14}
              className="inline text-red-400 mx-1 animate-pulse"
            />{" "}
            and code.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 relative overflow-hidden group"
            aria-label="Scroll to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} className="relative z-10" />
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
          </motion.button>
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
    </footer>
  );
};

export default Footer;
