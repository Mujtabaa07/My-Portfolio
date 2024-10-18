"use client"

import { AnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Linkedin, Github, Twitter, Mail, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/buttons"

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:your-email@example.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohamed-mujtaba/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Mujtabaa07", label: "GitHub" },
]


const Wave = ({ animate }: { animate: AnimationControls }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0,56L48,75.6C96,95,192,135,288,149.3C384,163,480,153,576,149.3C672,145,768,149,864,135.3C960,121,1056,93,1152,84C1248,75,1344,84,1392,89.6L1440,95L1440,560L1392,560C1344,560,1248,560,1152,560C1056,560,960,560,864,560C768,560,672,560,576,560C480,560,384,560,288,560C192,560,96,560,48,560L0,560Z"
        fill="rgba(59, 130, 246, 0.1)"
        animate={animate}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 20,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M0,168L48,186.7C96,205,192,243,288,234.7C384,227,480,177,576,165.3C672,153,768,177,864,186.7C960,196,1056,187,1152,168C1248,149,1344,121,1392,107.3L1440,93L1440,560L1392,560C1344,560,1248,560,1152,560C1056,560,960,560,864,560C768,560,672,560,576,560C480,560,384,560,288,560C192,560,96,560,48,560L0,560Z"
        fill="rgba(59, 130, 246, 0.05)"
        animate={animate}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 15,
          ease: "easeInOut",
        }}
      />
    </svg>
  )
}


export default function Footer() {
  const footerRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -20, 0],
    })
  }, [controls])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      ref={footerRef}
      className="relative bg-white overflow-hidden py-20 px-4"
    >
      <Wave animate={controls} />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold text-gray-800 text-center mb-16"
        >
          {/* <AnimatedText text="Let's  Create Together" /> */}
        </motion.div>

        <div className="flex justify-center space-x-8 mb-12">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300 relative group"
            >
              <link.icon size={32} className="relative z-10" />
              <span className="sr-only">{link.label}</span>
              <div className="absolute inset-0 bg-gray-200 rounded-full filter blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Say Hi!</h3>
          <a
            href="mailto:mohamedmujtaba07@gmail.com"
            className="text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300 block text-center"
          >
            mohamedmujtaba07@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-gray-600 text-sm mt-12"
        >
          © 2023 Mohamed Mujtaba. All rights reserved.
        </motion.div>

        <Button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors duration-300"
        >
          <ChevronUp size={24} className="mr-2" />
          Back to Top
        </Button>
      </div>
    </footer>
  )
}