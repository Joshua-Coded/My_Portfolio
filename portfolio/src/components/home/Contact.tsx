"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

// src/components/home/Contact.tsx


export default function Contact() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Add your form submission logic here
        console.log('Form submitted:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="contact" className="py-20 bg-dark relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 relative z-10"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Contact Information
                            </h3>
                            <p className="text-gray-400">
                                Feel free to reach out through any of these channels. if that&apos;s what you&apos;re looking for.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <a
                                href="mailto:your.email@example.com"
                                className="flex items-center space-x-4 text-gray-400 hover:text-primary transition-colors group"
                            >
                                <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center group-hover:bg-primary/10">
                                    <Mail className="w-6 h-6 group-hover:text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">Email</p>
                                    <p className="text-sm">j.alana@alustudent.com</p>
                                </div>
                            </a>

                            <a
                                href="https://github.com/Joshua-Coded"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 text-gray-400 hover:text-primary transition-colors group"
                            >
                                <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center group-hover:bg-primary/10">
                                    <Github className="w-6 h-6 group-hover:text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">Github</p>
                                    <p className="text-sm">Joshua-Coded</p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/joshua-alana-5760b3196/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 text-gray-400 hover:text-primary transition-colors group"
                            >
                                <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center group-hover:bg-primary/10">
                                    <Linkedin className="w-6 h-6 group-hover:text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">LinkedIn</p>
                                    <p className="text-sm">Joshua Alana</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white 
                           focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white 
                           focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-white 
                           focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}