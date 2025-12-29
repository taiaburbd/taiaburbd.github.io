import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:taiaburbd@gmail.com"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            📧 Email Me
          </a>
          <a
            href="https://github.com/taiaburbd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/taiaburbd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            💼 LinkedIn
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p>Available for remote work worldwide</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p>taiaburbd@gmail.com</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Work</h3>
            <p>Open to opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
