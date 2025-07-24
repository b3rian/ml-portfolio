import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        
        <p className="text-lg mb-6">
          I’m a passionate Machine Learning Engineer who enjoys building intelligent systems that can learn, adapt, and solve real-world problems. My journey began with a deep curiosity in data and algorithms, and it has evolved into a strong foundation in AI development, research, and deployment.
        </p>

        <p className="text-lg mb-6">
          Over the years, I’ve worked on various projects ranging from computer vision and natural language processing to deploying ML pipelines using MLOps tools. I value clean, efficient code and love collaborating on projects that make an impact.
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">My Tech Stack</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg list-disc list-inside">
            <li>Python</li>
            <li>TensorFlow / PyTorch</li>
            <li>scikit-learn</li>
            <li>FastAPI</li>
            <li>Docker</li>
            <li>Git & GitHub</li>
            <li>SQL & NoSQL</li>
            <li>AWS / GCP</li>
            <li>Next.js & Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
