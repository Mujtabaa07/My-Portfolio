'use client';
import { useState } from 'react';
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
      title: "Tint & Orange",
      description: "A car modification company website with 3D car customization",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=500&h=300",
      tags: ["React", "Three.js", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/tint-and-orange",
      live: "https://tintandorange.com",
    },
    {
      id: 2,
      title: "Breaking Copyrights",
      description: "A platform to discover and download copyright-free music for content creators",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=500&h=300",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/yourusername/breaking-copyrights",
      live: "https://breakingcopyrights.com",
    },
    {
      id: 3,
      title: "Isha Tattva",
      description: "An immersive portfolio for an interior designer showcasing 360° room views",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=500&h=300",
      tags: ["Vue.js", "Three.js", "Express", "MongoDB"],
      github: "https://github.com/yourusername/isha-tattva",
      live: "https://ishatattva.com",
    },
    {
      id: 4,
      title: "Granit",
      description: "An AI-powered architectural planning tool for modern home designs",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500&h=300",
      tags: ["React", "TensorFlow.js", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/granit",
      live: "https://granitdesign.com",
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
                className="overflow-hidden group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
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
