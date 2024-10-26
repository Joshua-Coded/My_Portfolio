"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

// src/components/home/Hero.tsx


export default function Hero() {
    const [typedText, setTypedText] = useState('')
    const textToType = "Kernel Engineer & Full Stack Developer"
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        let currentIndex = 0
        const typingInterval = setInterval(() => {
            if (currentIndex <= textToType.length) {
                setTypedText(textToType.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(typingInterval)
            }
        }, 100)

        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 500)

        return () => {
            clearInterval(typingInterval)
            clearInterval(cursorInterval)
        }
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/0 via-primary/5 to-dark/0" />

            <motion.div
                className="container mx-auto px-4 text-center z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-6">
                    <Terminal className="inline-block w-12 h-12 text-primary mb-4" />
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Hi, I'm <span className="gradient-text">Your Name</span>
                </motion.h1>

                <motion.div
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-gray-400 mb-8"
                >
                    {typedText}
                    <span className={`inline-block w-0.5 h-6 ml-1 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
                >
                    Passionate about building robust systems from kernel to cloud.
                    Specializing in system programming, distributed systems, and modern web technologies.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <a href="#contact" className="btn-primary w-full sm:w-auto">
                        <Mail className="w-5 h-5" />
                        Get in Touch
                    </a>
                    <a href="#projects" className="btn-secondary w-full sm:w-auto">
                        View Projects
                    </a>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex justify-center space-x-6"
                >
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <ArrowDown className="w-6 h-6 text-gray-400" />
                </motion.div>
            </motion.div>
        </section>
    )
}