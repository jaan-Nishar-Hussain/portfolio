import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiSocketdotio, SiCplusplus, SiSolidity } from "react-icons/si";
import Web2Icon from "../components/Web2Icon";
import Web3Icon from "../components/Web3Icon";

const About = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const spiderImages = ["/sp1.jpg", "/sp3.jpg", "/sp4.png", "/sp5.webp"];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % spiderImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-white text-black py-16 px-4">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Web2Icon />
            <Web3Icon />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-600">HOME</Link>
            <Link to="/about" className="hover:text-gray-600">ABOUT</Link>
            <Link to="/projects" className="hover:text-gray-600">PROJECTS</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-white shadow-lg">
            <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
          </div>
        )}
      </nav>

      {/* About Section */}
      <div className="max-w-5xl mx-auto mt-20 flex flex-col-reverse md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }} 
          className="w-full md:w-1/2 text-center md:text-left px-6"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hi, I'm <b>JAAN NISHAR HUSSAIN</b>, a developer skilled in Web2 and Web3 technologies. I love building scalable applications that solve real-world problems.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            My expertise lies in <b>React</b>, <b>Tailwind CSS</b>, <b>Node.js</b>, and <b>MongoDB</b>. I also create dApps using <b>Solidity</b>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I'm not coding, I explore new tech, contribute to open-source, or enjoy coffee. ☕
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }} 
          className="w-full md:w-1/2 flex justify-center"
        >
          <img 
            src={spiderImages[imageIndex]} 
            alt="Spider-Man" 
            className="w-[250px] md:w-[300px] h-auto rounded-lg shadow-lg transform transition-all hover:scale-105 duration-500"
          />
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="max-w-5xl mx-auto mt-16 px-4"
      >
        <h3 className="text-3xl font-bold text-center mb-6">Tech Stack</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 3, transition: { duration: 0.3 } }}
              className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              <tech.icon className="text-4xl text-gray-800" />
              <span className="mt-2 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

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

const techStack = [
  { name: "C++", icon: SiCplusplus },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Socket.io", icon: SiSocketdotio },
  { name: "Solidity", icon: SiSolidity },
];

export default About;
