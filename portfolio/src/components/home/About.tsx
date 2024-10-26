"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// src/components/home/About.tsx

import {
    Terminal,
    Code2,
    Server,
    Database,
    Cloud,
    Cpu,
    // Git,
    Container
} from 'lucide-react'

export default function About() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    const skills = [
        { icon: Cpu, label: 'Kernel Development', desc: 'Linux kernel modules and system programming' },
        { icon: Code2, label: 'Full Stack Development', desc: 'React, TypeScript, Node.js' },
        { icon: Container, label: 'DevOps', desc: 'Docker, Kubernetes, Terraform' },
        { icon: Cloud, label: 'Cloud Architecture', desc: 'AWS, distributed systems' },
    ]

    return (
        <section id="about" className="py-20 bg-dark-lighter relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark opacity-50" />

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="container mx-auto px-4 relative z-10"
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Bridging the gap between low-level system programming and modern web development
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants} className="relative">
                        <div className="aspect-square rounded-lg overflow-hidden bg-dark">
                            <img
                                src="/api/placeholder/500/500"
                                alt="Profile"
                                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
                        <div className="absolute -top-6 -left-6 w-48 h-48 border border-primary/20 rounded-lg -z-10" />
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="prose prose-invert">
                            <p className="text-lg text-gray-300">
                                With a deep passion for system-level programming and modern web technologies,
                                I bring a unique perspective to full-stack development. My journey began with
                                kernel development, which taught me the importance of efficient, reliable code.
                            </p>
                            <p className="text-gray-400">
                                Today, I apply these principles to building scalable web applications and
                                distributed systems, ensuring optimal performance from the kernel to the cloud.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {skills.map(({ icon: Icon, label, desc }) => (
                                <motion.div
                                    key={label}
                                    variants={itemVariants}
                                    className="p-4 rounded-lg bg-dark hover:bg-dark/50 transition-colors"
                                >
                                    <Icon className="w-8 h-8 text-primary mb-2" />
                                    <h3 className="font-semibold text-white mb-1">{label}</h3>
                                    <p className="text-sm text-gray-400">{desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                            {['C', 'TypeScript', 'Java', 'Kotlin', 'AWS', 'Docker', 'Kubernetes', 'Terraform'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm bg-dark rounded-full text-gray-300 border border-gray-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}