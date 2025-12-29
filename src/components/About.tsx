import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-gradient-to-b from-gray-50 to-white py-16">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="relative max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
            <img
              src="/images/taiabur_apr24.jpg"
              alt="Taiabur Rahman"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
              I am passionate about multiple aspects of medical imaging, including classification,
              segmentation, registration, and landmark identification. My enthusiasm for these fields drives
              my desire to collaborate on innovative healthcare technology projects. Specifically, I am
              interested in AI-driven diagnostics, telemedicine solutions, and patient data analysis. I
              believe that advancements in these areas have the potential to revolutionize healthcare,
              improving patient outcomes and enhancing the efficiency of medical services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              I am excited about the opportunities to continue developing my skills and knowledge in medical
              imaging. By contributing to cutting-edge research and collaborating on impactful projects, I aim
              to make meaningful contributions to the healthcare industry. My goal is to be at the forefront
              of technological advancements that can transform medical practices and improve patient care
              worldwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Medical Imaging</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">Deep Learning</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">Computer Vision</span>
              <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">AI Diagnostics</span>
              <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold">Software Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
