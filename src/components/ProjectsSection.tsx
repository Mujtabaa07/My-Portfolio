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
      image: "https://i.ibb.co/mCRgRRD/Screenshot-2024-10-18-155313-wwwwwwwwwwwwwwwwwwwwwkjahdiahddiafouubfojsnd-VL-k-www-jpeg.png",
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
      title: "Tic-Tac-Toe",
      description: "Frontend created by react.js for creating responsive user-friendly interfaces and seamless API integration.Backend and Database Management: Proficient in server-side development with Node.js, Express.js, and Postgresql. Dynamic Data Management: Developed a web application with full CRUD (Create, Read, Update, Delete)capabilities.",
      image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQdR5hPxiKG7MuJFuIe1lbrqandKE2QP5JzdrE4Dt6gnzu6Xnc0dCyK97yTeghVzkok",
      tags: ["Next.js", "Express.js", "Node.js", "Postgresql","NeonDB","Render.com(Backend)"],
      github: "https://github.com/Mujtabaa07/Tic-Tac-Toe-FullStack-",
      live: "https://tic-tac-toe-full-stack.vercel.app/",
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
