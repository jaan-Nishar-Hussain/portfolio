import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Web2Icon from "../components/Web2Icon";
import Web3Icon from "../components/Web3Icon";

const projects = [
  {
    title: "E-commerce MERN Project",
    description: "A full-stack e-commerce application built with MongoDB, Express, React, and Node.js (MERN). Features user registration, product management, cart, and checkout functionalities.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Stripe"],
    imageUrl: "/public/ss.png",
  },
  {
    title: "Food Delivery App",
    description: "A food ordering and delivery platform similar to Zomato, featuring real-time tracking, user authentication, and blockchain-based payments.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    imageUrl: "/public/ss3.png",
  },
  {
    title: "Portfolio Website",
    description: "A responsive and animated portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/public/ss2.png",
  },
];

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="min-h-screen bg-white text-black py-16 px-4">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Web2Icon />
            <Web3Icon />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-600">HOME</Link>
            <Link to="/about" className="hover:text-gray-600">ABOUT</Link>
            <Link to="/projects" className="hover:text-gray-600">PROJECTS</Link>
          </div>
          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-white shadow-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
        </div>
      )}

      {/* Page Content */}
      <div className="max-w-5xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-4xl font-bold text-center mb-8"
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://github.com/jaan-Nishar-Hussain" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-600" />
          </a>
          <a href="https://www.linkedin.com/in/jaannishar-hussain-b2413b253/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-600" />
          </a>
          <a href="mailto:jaannisharhussain403@gmail.com">
            <FaEnvelope className="hover:text-gray-600" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Projects;
