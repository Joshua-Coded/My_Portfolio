"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ]

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

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
                            <a href="https://github.com/Joshua-Coded" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
                            </a>
                            <a href="https://www.linkedin.com/in/joshua-alana-5760b3196/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden z-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.div
                            animate={isOpen ? "open" : "closed"}
                            className="relative w-6 h-6"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-400" />
                            )}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-dark/95 backdrop-blur-lg origin-top px-4 py-8 md:hidden"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col h-full justify-center items-center space-y-8"
                        >
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.name}
                                    variants={{
                                        initial: { y: 20, opacity: 0 },
                                        open: { y: 0, opacity: 1 },
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-2xl font-medium text-white hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                variants={{
                                    initial: { y: 20, opacity: 0 },
                                    open: { y: 0, opacity: 1 },
                                }}
                                className="flex items-center space-x-8 pt-8"
                            >
                                <a
                                    href="https://github.com/Joshua-Coded"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/joshua-alana-5760b3196/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}