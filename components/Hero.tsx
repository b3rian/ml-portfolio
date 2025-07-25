import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Transforming Data into Intelligent Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Machine Learning Engineer | AI Enthusiast | Problem Solver
        </p>
        <p className="mt-4 text-lg text-gray-400">
          Welcome to my world of algorithms, models, and data-driven innovation! I’m <span className="font-semibold text-white">Brian Liboso</span>, a passionate Machine Learning Engineer dedicated to building intelligent systems that solve real-world challenges.
        </p>
        <p className="text-gray-400">
          With expertise in <span className="text-white font-medium">deep learning</span>, <span className="text-white font-medium">predictive modeling</span>, <span className="text-white font-medium">NLP</span>, and <span className="text-white font-medium">computer vision</span>, I bridge the gap between raw data and actionable insights—turning complex problems into scalable AI solutions.
        </p>
        <div className="text-lg text-gray-300 space-x-2 mt-4">
          <span>🔍 Exploring Patterns</span>
          <span>🤖 Engineering Intelligence</span>
          <span>🚀 Driving Impact</span>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="#projects">
            <a className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              View My Work
            </a>
          </Link>
          <Link href="#contact">
            <a className="border border-gray-300 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Get in Touch
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
