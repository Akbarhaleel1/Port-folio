'use client'
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import SkillsSection from '../components/SkillsSection'
const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pre-defined star positions to avoid hydration mismatch
  const starPositions = [
    { left: '10%', top: '20%', size: '2px', delay: '0s' },
    { left: '25%', top: '15%', size: '3px', delay: '0.5s' },
    { left: '40%', top: '80%', size: '2px', delay: '1s' },
    { left: '60%', top: '25%', size: '4px', delay: '1.5s' },
    { left: '75%', top: '60%', size: '2px', delay: '2s' },
    { left: '85%', top: '70%', size: '3px', delay: '2.5s' },
    { left: '90%', top: '30%', size: '2px', delay: '3s' },
    { left: '15%', top: '40%', size: '3px', delay: '3.5s' },
    { left: '45%', top: '35%', size: '2px', delay: '4s' },
    { left: '70%', top: '85%', size: '4px', delay: '4.5s' },
    { left: '55%', top: '45%', size: '2px', delay: '5s' },
    { left: '30%', top: '75%', size: '3px', delay: '5.5s' },
    { left: '80%', top: '40%', size: '2px', delay: '6s' },
    { left: '20%', top: '65%', size: '3px', delay: '6.5s' },
    { left: '95%', top: '25%', size: '2px', delay: '7s' },
  ];

  // Pre-defined shooting star positions
  const shootingStarPositions = [
    { top: '20%', left: '10%', delay: '0s' },
    { top: '40%', left: '30%', delay: '2s' },
    { top: '15%', left: '50%', delay: '4s' },
    { top: '35%', left: '70%', delay: '6s' },
    { top: '25%', left: '90%', delay: '8s' },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with authentication, payment integration, and real-time inventory management.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      category: "fullstack",
      link: "#",
      github: "#"
    },
    {
      title: "AI-Powered Chat",
      description: "Real-time messaging platform with AI integration for automated responses and language translation.",
      tech: ["Socket.io", "React", "Node.js", "OpenAI", "MongoDB"],
      category: "ai",
      link: "#",
      github: "#"
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking platform with interactive charts and portfolio management.",
      tech: ["React", "Node.js", "WebSocket", "Charts.js"],
      category: "frontend",
      link: "#",
      github: "#"
    },
    {
      title: "Synx+ Review Management",
      description: "A review management tool that collects reviews from multiple platforms and provides AI-driven sentiment analysis.",
      tech: ["Puppeteer", "React", "Node.js", "MongoDB", "Google API"],
      category: "fullstack",
      link: "http://review.synxautomate.com/GetReviews",
      github: "#"
    },
    {
      title: "CarePoint - Doctor Appointment & Hospital Management",
      description: "A complete healthcare management system for booking doctor appointments and managing hospital workflows.",
      tech: ["React", "Node.js", "MongoDB", "WebRTC", "Microservices"],
      category: "fullstack",
      link: "https://carepoint-frontend-hosting-ns6r.vercel.app/login",
      github: "#"
    },
    {
      title: "Software Service Project",
      description: "Enterprise software solution offering various business automation tools and cloud-based services.",
      tech: ["React", "Node.js", "AWS", "Microservices", "PostgreSQL"],
      category: "software-service",
      link: "https://www.synxup.tech/",
      github: "#"
    }
  ];
  
  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Years Experience", value: "3+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Technologies", value: "15+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated Moon */}
      <div 
        className="fixed right-10 top-10 w-32 h-32 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 opacity-80"
        style={{
          boxShadow: '0 0 50px rgba(255, 255, 255, 0.3)',
          transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Moon craters */}
        <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-gray-300 opacity-60"></div>
        <div className="absolute top-12 right-8 w-6 h-6 rounded-full bg-gray-300 opacity-40"></div>
        <div className="absolute bottom-8 left-10 w-5 h-5 rounded-full bg-gray-300 opacity-50"></div>
      </div>

      {/* Stars Background */}
      <div className="fixed inset-0 opacity-70">
        {starPositions.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-blink"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              background: 'black',
              animationDelay: star.delay,
              boxShadow: '0 0 2px #fff, 0 0 4px #fff'
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {shootingStarPositions.map((star, i) => (
          <div 
            key={i}
            className="shooting-star" 
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className={`container mx-auto px-6 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative z-10">
            <div className="text-blue-400 mb-4 font-mono animate-fade-in">Hello World, I'm</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-slide-up">
              Akbar Haleel
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-300 animate-slide-up" style={{ animationDelay: '200ms' }}>
              Senior MERN Stack Developer
            </h2>
            <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '400ms' }}>
              Transforming ideas into elegant, scalable solutions
            </p>
            <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '600ms' }}>
              <a href="https://github.com/Akbarhaleel1" className="transform hover:scale-110 transition-transform">
                <Github size={28} className="hover:text-blue-400" />
              </a>
              <a href="https://www.linkedin.com/in/akbar-haleel-90b126281/" className="transform hover:scale-110 transition-transform">
                <Linkedin size={28} className="hover:text-blue-400" />
              </a>
              {/* <a href="akbarhaleel508@gmail.com" className="transform hover:scale-110 transition-transform">
                <Mail size={28} className="hover:text-blue-400" />
              </a> */}
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center transform hover:scale-105 transition-transform hover:shadow-xl rounded-lg p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2 animate-count-up">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section className="py-24 relative overflow-hidden">
    
        <SkillsSection/>
    </section>
      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Featured Projects
            </span>
          </h2>
          <div className="flex justify-center mb-12 space-x-4">
            {['all', 'frontend', 'fullstack', 'ai'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(project => activeTab === 'all' || project.category === activeTab)
              .map((project, index) => (
                <div
                  key={index}
                  className="project-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a href={project.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Let's Create Something Amazing
            </span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate and build something extraordinary together.
          </p>
          <button
  onClick={() => window.open("https://wa.me/7356667616", "_blank")}
  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all flex items-center mx-auto"
>
  Start a Conversation <ExternalLink className="ml-2" size={20} />
</button>

        </div>
      </section>
    </div>
  );
};

export default Portfolio;