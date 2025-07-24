import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Brayan</h1>
      <h2 className="text-2xl font-semibold mb-4">Machine Learning Engineer</h2>
      <p className="max-w-2xl text-lg mb-8">
        I build intelligent systems, solve real-world problems with AI, and love working on computer vision and NLP.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/Brayan-Resume.pdf"
          download
          className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;

import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brayan | ML Engineer Portfolio</title>
        <meta name="description" content="Machine Learning Engineer Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}
