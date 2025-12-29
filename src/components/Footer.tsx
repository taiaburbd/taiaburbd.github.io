import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="font-semibold">© 2024 Taiabur Rahman. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2">
              Privacy Policy | Terms of Use
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-2 font-semibold">Follow me:</p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://facebook.com/taiaburbd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://github.com/taiaburbd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/taiaburbd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/taiaburrahman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
