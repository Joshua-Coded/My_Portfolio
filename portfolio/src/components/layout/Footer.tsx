"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
    Github,
    Linkedin,
    Mail,
    Terminal,
    Heart,
    ArrowUp,
    Coffee
} from 'lucide-react'

export default function Footer() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ]

    const socialLinks = [
        {
            name: 'Github',
            href: 'https://github.com/Joshua-Coded',
            icon: Github
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/joshua-alana-5760b3196/',
            icon: Linkedin
        },
        {
            name: 'Email',
            href: 'mailto:j.alana@alustudent.com',
            icon: Mail
        }
    ]

    return (
        <footer className="bg-dark-lighter relative">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Terminal className="w-8 h-8 text-primary" />
                            <span className="text-xl font-bold gradient-text">KE</span>
                        </div>
                        <p className="text-gray-400">
                            Kernel Engineer & Full Stack Developer crafting robust solutions from system level to cloud.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ name, href, icon: Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                    aria-label={name}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="mailto:j.alana@alustudent.com"
                                    className="hover:text-primary transition-colors"
                                >
                                    j.alana@alustudent.com
                                </a>
                            </li>
                            <li>Kigali, Rwanda</li>
                            <li className="flex items-center space-x-2">
                                <Coffee className="w-4 h-4" />
                                <span>Available for freelance</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>© {new Date().getFullYear()}</span>
                            <Heart className="w-4 h-4 text-red-500" />
                            <span>Built by Joshua Alana</span>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="group flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
                        >
                            <span>Back to top</span>
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

