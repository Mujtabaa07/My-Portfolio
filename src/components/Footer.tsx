 "use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter, Instagram, Mail, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/buttons"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false)

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/mohamed-mujtaba/' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Mujtabaa07' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Email', icon: Mail, href: 'https://mail.google.com/mail/u/0/#inbox?compose=new' },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center space-y-4"
          initial={{ height: 60 }}
          animate={{ height: isExpanded ? 'auto' : 60 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center"
          >
            <span className="mr-2">{isExpanded ? 'Less' : 'More'}</span>
            <ChevronUp className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </Button>

          {isExpanded && (
            <>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Mohamed Mujtaba
              </div>
              <nav className="flex flex-wrap justify-center gap-4">
                <Button variant="link" asChild>
                  <a href="#projects">Projects</a>
                </Button>
                <Button variant="link" asChild>
                  <a href="#skills">Skills</a>
                </Button>
                <Button variant="link" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </nav>
              <div className="flex space-x-4">
                <TooltipProvider>
                  {socialLinks.map((link) => (
                    <Tooltip key={link.name}>
                      <TooltipTrigger asChild>
                        <a 
                          href={link.href}
                          className="text-2xl hover:text-secondary transition-colors"
                          aria-label={link.name}
                        >
                          <link.icon className="w-6 h-6" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{link.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </>
          )}

          <div className="text-sm text-center">
            © {new Date().getFullYear()} Mohamed Mujtaba. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  )
}