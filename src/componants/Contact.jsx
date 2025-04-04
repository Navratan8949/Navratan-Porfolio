import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Loader2,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  X,
} from "lucide-react";
import { gsap } from "gsap";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  const socialLinks = [
    {
      name: "Twitter",
      color: "from-blue-400 to-blue-600",
      icon: <Twitter size={20} />,
    },
    {
      name: "LinkedIn",
      color: "from-blue-600 to-blue-800",
      icon: <Linkedin size={20} />,
    },
    {
      name: "GitHub",
      color: "from-gray-600 to-gray-800",
      icon: <Github size={20} />,
    },
    {
      name: "Instagram",
      color: "from-purple-500 via-pink-600 to-yellow-500",
      icon: <Instagram size={20} />,
    },
  ];

  // GSAP animations on scroll
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
            contentRef.current.children,
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
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-24 bg-transparent relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(147,51,234,0.2),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.2),_transparent_50%)]"></div>

      {/* Animated Particles */}
      <div className="absolute top-40 right-20 w-4 h-4 rounded-full bg-purple-500 opacity-20 blur-sm animate-[pulse_3s_ease-in-out_infinite, float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 rounded-full bg-cyan-500 opacity-20 blur-sm animate-[pulse_3s_ease-in-out_infinite_1s, float_5s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-pink-500 opacity-20 blur-sm animate-[ refs pulse_3s_ease-in-out_infinite_2s, float_7s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
                Let's Connect
              </span>
              <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-75 blur-sm"></span>
              <span className="absolute -bottom-3 left-0 w-2/3 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Reach out to discuss projects, opportunities, or just to say hello!
          </p>
        </div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7 relative bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl shadow-purple-900/20 group overflow-hidden"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur"></div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2,
                      }}
                      className="w-24 h-24 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mb-8 shadow-lg"
                    >
                      <Check size={48} className="text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4 text-white bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300 text-center text-lg mb-8 max-w-md">
                      Thank you for reaching out. I'll respond as soon as
                      possible.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-gray-700/50 rounded-full text-white hover:bg-gray-600 transition-all duration-300"
                    >
                      Send Another
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                      Send a Message
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                      />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg flex items-center justify-center"
                    >
                      {loading ? (
                        <Loader2
                          size={20}
                          className="animate-spin mr-3 text-white"
                        />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight size={20} className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <div className="lg:col-span-5 space-y-8">
            {[
              {
                title: "Email",
                value: "hello@yourname.com",
                icon: <Mail size={24} />,
                color: "from-blue-500 to-indigo-600",
              },
              {
                title: "Phone",
                value: "+1 (555) 123-4567",
                icon: <Phone size={24} />,
                color: "from-purple-500 to-pink-600",
              },
              {
                title: "Location",
                value: "San Francisco, CA",
                icon: <MapPin size={24} />,
                color: "from-green-500 to-teal-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800/40 backdrop-blur-lg rounded-3xl p-6 border border-gray-700/50 shadow-2xl shadow-purple-900/20 group overflow-hidden"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur"></div>
                <div className="relative flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              className="relative bg-gray-800/40 backdrop-blur-lg rounded-3xl p-6 border border-gray-700/50 shadow-2xl shadow-purple-900/20 group overflow-hidden"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              className="relative bg-gray-800/40 backdrop-blur-lg rounded-3xl p-6 border border-gray-700/50 shadow-2xl shadow-purple-900/20 group overflow-hidden"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  Available for Freelance
                </h3>
                <p className="text-gray-300 mb-4">
                  Open to new projects and collaborations.
                </p>
                <div className="flex items-center bg-purple-500/20 rounded-full p-2 border border-purple-500/30">
                  <div className="relative mr-2">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 absolute inset-0 animate-ping opacity-75"></div>
                  </div>
                  <span className="text-gray-200">Ready to work!</span>
                </div>
              </div>
            </motion.div>
          </div>
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
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactPage;
