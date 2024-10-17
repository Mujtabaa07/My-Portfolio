import { Card, CardContent } from "@/components/ui/card"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"
import { SiExpress, SiMongodb, SiTailwindcss, SiNextdotjs, SiTypescript, SiGraphql } from "react-icons/si"

export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" }
  ]

  return (
    <section id="skills" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary ">M</span>y Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">
                  Hi Everyone! My name is Mohamed Mujtaba. I am a Full Stack Web Developer with 3 years of experience.
                  Currently, I'm working with a budding startup in the USA and as a full-time freelancer.
                  I specialize in Next.js and creating beautiful UI/UX designs.
                </p>
                <p>
                  My passion lies in crafting efficient, scalable, and user-friendly web applications. 
                  I'm always eager to learn new technologies and improve my skills to deliver the best possible solutions.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 rounded-3xl"></div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 relative z-10">
              {skills.map((skill) => (
                <Card key={skill.name} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <div className="relative w-12 h-12 mb-2 flex items-center justify-center">
                      <skill.icon 
                        size={40} 
                        color={skill.color}
                        className="group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <span className="text-xs text-center font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}