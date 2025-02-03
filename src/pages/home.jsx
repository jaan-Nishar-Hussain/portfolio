import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Web2Icon from "../components/Web2Icon";
import Web3Icon from "../components/Web3Icon";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
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
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col px-3 py-2 bg-white shadow-lg">
            <Link to="/" className="py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/about" className="py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            <Link to="/projects" className="py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>PROJECTS</Link>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <main className="relative pt-24 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="text-4xl md:text-6xl font-bold"
        >
          EXPLORE <span className="text-blue-500">WEB2 & WEB3</span>
        </motion.h1>
        <motion.div className="mt-8 flex justify-center">
          <motion.img
            src="/public/pngwing.com (1).png"
            alt="Web3 Hero"
            className="w-2/3 md:w-1/3 max-w-lg h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </motion.div>
      </main>
      
      {/* About Me Section */}
      <section className="px-4 py-8 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Hey there! I'm Nishar</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          I'm a MERN-stack developer passionate about building scalable web applications that are both functional and visually appealing.
          I also develop decentralized applications (dApps) to bring innovative blockchain solutions to real-world problems.
        </p>
      </section>
      
      {/* Social Links */}
      <footer className="mt-12 text-center">
              <div className="flex justify-center space-x-6 text-2xl mb-12">
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
    </div>
  );
}

export default Home;
