import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Content in Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Visitor Counter */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-white rounded-lg p-3 inline-block">
              <a href="https://clustrmaps.com/site/1c0t0" title="Visit tracker">
                <img 
                  src="//www.clustrmaps.com/map_v2.png?d=1FdDCe9Mp7tl9ELfel-yvD1xuuvnDkAqgwmRv4TFV0M&cl=ffffff" 
                  alt="Visitor Map"
                  className="max-w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </a>
            </div>
          </div>

          {/* Column 2: Copyright */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg mb-2">© 2024 Taiabur Rahman</p>
            <p className="text-sm text-gray-400">All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2">
              Privacy Policy | Terms of Use
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg mb-3">Quick Links</p>
            <div className="flex flex-col space-y-2">
              <a href="mailto:taiaburbd@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                Email Me
              </a>
              <a 
                href="/cv/TaiaburRahman-CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Download CV
              </a>
              <a 
                href="https://www.upwork.com/fl/taiaburbd" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Hire on Upwork
              </a>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="text-center md:text-left lg:text-right">
            <p className="font-semibold text-lg mb-3">Follow Me</p>
            <div className="flex flex-col space-y-2 items-center md:items-start lg:items-end">
              <a
                href="https://facebook.com/taiaburbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://github.com/taiaburbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/taiaburbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/taiaburrahman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
