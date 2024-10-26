"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Menu, Terminal, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Terminal className="w-8 h-8 text-primary" />
                        <span className="text-xl font-bold gradient-text">KE</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="nav-link text-sm font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center space-x-4 ml-4">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-gray-400" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-400" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={{
                        open: { opacity: 1, height: 'auto' },
                        closed: { opacity: 0, height: 0 }
                    }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-base font-medium nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </nav>
    )
}