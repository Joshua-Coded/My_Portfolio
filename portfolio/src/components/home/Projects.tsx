"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Folder, Github } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
    {
        id: 1,
        title: "Task Scheduling System",
        description: "A C-based task management system designed for small companies to manage and prioritize tasks efficiently.",
        tags: ["C", "Linux Kernel", "System Programming"],
        github: "https://github.com/Joshua-Coded/task_scheduling_system",
        live: "https://demo-link",
        category: "systems"
    },
    {
        id: 2,
        title: "Cloud Infrastructure Automation",
        description: "Infrastructure as Code solution for automated cloud deployment",
        tags: ["Terraform", "AWS", "Docker", "Kubernetes"],
        github: "https://github.com/yourusername/cloud-infra",
        category: "devops"
    },
    {
        id: 3,
        title: "Real-time Analytics Dashboard",
        description: "Full-stack application for real-time data visualization and analysis",
        tags: ["React", "TypeScript", "Node.js", "WebSocket"],
        github: "https://github.com/yourusername/analytics-dashboard",
        live: "https://demo-link",
        category: "fullstack"
    },
    {
        id: 4,
        title: "Native Android SDK",
        description: "Custom Android SDK for seamless mobile integration",
        tags: ["Kotlin", "Java", "Android"],
        github: "https://github.com/yourusername/android-sdk",
        category: "mobile"
    }
]

const categories = [
    { id: 'all', label: 'All' },
    { id: 'systems', label: 'Systems' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'devops', label: 'DevOps' },
    { id: 'mobile', label: 'Mobile' }
]

export default function Projects() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const [activeCategory, setActiveCategory] = useState('all')

    const filteredProjects = projects.filter(
        project => activeCategory === 'all' || project.category === activeCategory
    )

    return (
        <section id="projects" className="py-20 bg-dark relative">
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
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of my work spanning system-level programming to web applications
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full transition-colors ${activeCategory === category.id
                                ? 'bg-primary text-white'
                                : 'bg-dark-lighter text-gray-400 hover:text-primary'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode='wait'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="card group hover:border-primary/30"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <Folder className="w-12 h-12 text-primary" />
                                    <div className="flex space-x-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-primary transition-colors"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-primary transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm bg-dark rounded-full text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </section>
    )
}