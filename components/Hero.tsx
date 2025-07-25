import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }} // Replace with your background image path
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-16 mx-auto">
        
        {/* Left: Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-gray-900 mb-4">
            Hello, I'm{' '}
            <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-lg font-mono text-gray-800 mb-6">
            Machine Learning Engineer passionate about building intelligent systems, analyzing data, and creating impactful solutions that solve real-world problems.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow transition duration-300"
          >
            Let’s Connect →
          </Link>
        </div>

        {/* Right: Circular Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/images/profile.jpg" // Replace with your profile image path
              alt="Your Profile"
              layout="fill"
              objectFit="cover"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
