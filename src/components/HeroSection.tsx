'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownCircle } from 'lucide-react';

export default function HeroSection() {
  const handleScroll = () => {
    const nextSection = document.getElementById('projects'); // Adjust ID based on the next section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center min-h-screen p-12 text-center overflow-hidden bg-fixed bg-center bg-cover "
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524055988636-436cfa46e59e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRmb2xpbyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')" }} // Replace with your desired background image
    >
      {/* Main Text Section */}
      <div className="z-10">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-black"
        >
          Mohamed Mujtaba
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl md:text-2xl text-primary mb-8 text-blue-300 font-medium"
        >
          <TypeAnimation
            sequence={[
              'Full-Stack Developer', 2000,
              'UI/UX Enthusiast', 2000,
              'Problem Solver', 2000,
              'MERN Stack Developer', 2000,
              'DevOps Developer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Buttons Section */}
        <div className="flex space-x-4 align-middle justify-center mb-8">
          <motion.a 
            href="mailto:your-email@example.com" // Replace with your email or link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: "#ff6347" }} // Change color on hover
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 ease-in-out"
          >
            Hire Me
          </motion.a>
          
          <motion.a 
            href="https://drive.google.com/file/d/1Hp1hR6VvYxELLCOG9qiuQIQof-cMLPPf/view?usp=sharing" // Replace with your resume link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: "#ff6347" }} // Change color on hover
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 ease-in-out"
          >
            Resume
          </motion.a>
        </div>
      </div>

      {/* Decorative Animated Elements */}
      <div className="relative mt-12">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          src="https://avatars.githubusercontent.com/u/70109255?v=4"
          alt="Mohamed Mujtaba"
          className="rounded-full shadow-full"
        />
        <motion.svg
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 1.5 }}
  className="absolute top-0 right-0 w-16 h-16 animate-bounce text-blue-500"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2.5"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="10" className="stroke-current text-blue-300" />
  <path d="M14 8l-4 4 4 4" className="stroke-current text-blue-500" />
</motion.svg>
<motion.svg
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.4, duration: 0.5 }}
  className="absolute bottom-0 left-0 w-16 h-16 animate-pulse text-green-500"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2.5"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="3" y="3" width="18" height="18" rx="4" ry="4" className="stroke-current text-green-300" />
  <path d="M8 12h8" className="stroke-current text-green-500" />
</motion.svg>
      </div>

      {/* Arrow Down Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-3 cursor-pointer"
        onClick={handleScroll}
      >
        <ArrowDownCircle className="w-12 h-12 text-primary animate-bounce" />
      </motion.div>
    </motion.section>
  );
}