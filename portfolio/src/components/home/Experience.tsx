"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";

const experiences = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        company: "Tech Company",
        duration: "2023 - Present",
        description: "Leading development of distributed systems and cloud infrastructure",
        responsibilities: [
            "Architected and implemented microservices using Kubernetes",
            "Led migration of legacy systems to modern cloud architecture",
            "Mentored junior developers in system design and best practices"
        ],
        technologies: ["TypeScript", "React", "Node.js", "AWS", "Kubernetes"]
    },
    {
        id: 2,
        title: "Kernel Engineer",
        company: "System Solutions Inc",
        duration: "2021 - 2023",
        description: "Developed and maintained Linux kernel modules",
        responsibilities: [
            "Implemented kernel modules for improved system performance",
            "Collaborated on driver development for custom hardware",
            "Optimized system calls for enhanced efficiency"
        ],
        technologies: ["C", "Linux Kernel", "Driver Development", "System Programming"]
    },
    {
        id: 3,
        title: "Software Engineer",
        company: "Mobile Tech",
        duration: "2019 - 2021",
        description: "Developed native Android applications and backend services",
        responsibilities: [
            "Built high-performance Android applications",
            "Designed and implemented RESTful APIs",
            "Improved app performance and user experience"
        ],
        technologies: ["Kotlin", "Java", "Spring Boot", "Android SDK"]
    }
]

export default function Experience() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    return (
        <section id="experience" className="py-20 bg-dark relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey from kernel development to full-stack engineering
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            {/* Timeline line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />

                            {/* Timeline dot */}
                            <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary" />

                            <div className="card hover:border-primary/30 transition-colors">
                                <div className="flex flex-wrap items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-1">
                                            {exp.title}
                                        </h3>
                                        <div className="flex items-center text-gray-400">
                                            <Briefcase className="w-4 h-4 mr-2" />
                                            <span>{exp.company}</span>
                                            <span className="mx-2">•</span>
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <span>{exp.duration}</span>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-primary" />
                                </div>

                                <p className="text-gray-300 mb-4">{exp.description}</p>

                                <ul className="space-y-2 mb-4">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="text-gray-400 flex items-start">
                                            <span className="mr-2 text-primary">▹</span>
                                            {resp}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}