'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/buttons";
import Badge from "@/components/ui/badge";
import { Github, ExternalLink, ChevronRight } from 'lucide-react';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "X-Clone (Twitter) FullStack App",
      description: "FullStack WebApp for Twitter Clone",
      image: "https://img.freepik.com/free-vector/new-twitter-logo-x-icon-black-background_1017-45427.jpg?semt=ais_hybrid",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/Mujtabaa07/x-clone-clientside-",
      live: "https://x-clone-clientside.vercel.app/",
    },
    {
      id: 2,
      title: "MsCafe",
      description: "MsCafe was founded with a simple mission: to serve the best coffee in town.with User friendly interface UI",
      image: "https://private-user-images.githubusercontent.com/70109255/372352450-1d60d37c-891d-4b7b-b477-1bfa75d59691.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkyNDU4MjgsIm5iZiI6MTcyOTI0NTUyOCwicGF0aCI6Ii83MDEwOTI1NS8zNzIzNTI0NTAtMWQ2MGQzN2MtODkxZC00YjdiLWI0NzctMWJmYTc1ZDU5NjkxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMTglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDE4VDA5NTg0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQzMTVmMzJiNDRhMTI0ZDhlMWNiOWRkZTgwZWI4NDJlMTUzMDAyOGMyMWU2Y2JmMWFiYWJmNDFjOTgxNTUyMmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.8pJp7y4U1ywyTPHHs-4KD3k9D097-0OPOdEqqniT7oc",
      tags: ["React", "Three.js", "Node.js", "MongoDB"],
      github: "https://github.com/Mujtabaa07/coffeeShop?tab=readme-ov-file",
      live: "https://coffee-shop-teal.vercel.app/",
    },
    {
      id: 3,
      title: "Obys Agency Clone",
      description: "Responsive Design Mastery: Developed seamless, responsive layouts using CSS Flexbox, Grid, and media queries, enhancing user experience across all devices.Dynamic UI and Animations: Crafted engaging UIs with Locomotive Scroll, GSAP, and advanced JavaScript libraries, bringing websites to life with interactive animations.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=500&h=300",
      tags: ["HTML", "CSS/TailwindCss", "Gsap", "ScrollTrigger"],
      github: "https://github.com/Mujtabaa07/Project-FrontEnd-",
      live: "https://mujtabaa07.github.io/Project-FrontEnd-/",
    },
    {
      id: 4,
      title: "MernBlog",
      description: "Welcome to the MERN Stack Blog Project, an in-depth full-stack blog application built using Node.js, Express, React, and MongoDB. Starting from scratch, this project showcases how to create a complete and functional full-stack application with modern web technologies.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500&h=300",
      tags: ["React", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/Mujtabaa07/Mernblog-frontend",
      live: "https://mernblog-frontend-phi.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-clip-text bg-gradient-to-r from-primary to-secondary">
            My Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card
                className="overflow-hidden group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    className="mr-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                  <Button
                    variant="secondary"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {project.title}
                    <ChevronRight
                      className={`h-6 w-6 transition-transform duration-300 ${
                        hoveredProject === project.id ? 'translate-x-1' : ''
                      }`}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
