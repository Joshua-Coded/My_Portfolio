"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
    Github as GithubIcon,
    GitBranch,
    GitCommit,
    GitPullRequest,
    Star,
    GitFork
} from 'lucide-react'

interface Repository {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    url: string;
}

export default function Github() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const [githubStats, setGithubStats] = useState({
        repos: 0,
        commits: 0,
        pullRequests: 0,
        contributions: 0
    })

    const [repos, setRepos] = useState<Repository[]>([
        {
            name: "kernel-module-manager",
            description: "Advanced Linux kernel module management system",
            stars: 120,
            forks: 25,
            language: "C",
            url: "https://github.com/yourusername/kernel-module-manager"
        },
        {
            name: "cloud-infra",
            description: "Infrastructure as Code solutions",
            stars: 85,
            forks: 15,
            language: "TypeScript",
            url: "https://github.com/yourusername/cloud-infra"
        },
        {
            name: "analytics-dashboard",
            description: "Real-time analytics dashboard",
            stars: 95,
            forks: 20,
            language: "JavaScript",
            url: "https://github.com/yourusername/analytics-dashboard"
        }
    ])

    useEffect(() => {
        // Simulate loading Github stats
        setGithubStats({
            repos: 25,
            commits: 1243,
            pullRequests: 156,
            contributions: 892
        })
    }, [])

    const statsItems = [
        { label: 'Repositories', value: githubStats.repos, icon: GithubIcon },
        { label: 'Commits', value: githubStats.commits, icon: GitCommit },
        { label: 'Pull Requests', value: githubStats.pullRequests, icon: GitPullRequest },
        { label: 'Contributions', value: githubStats.contributions, icon: GitBranch }
    ]

    return (
        <section className="py-20 bg-dark-lighter relative">
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark opacity-50" />

            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 relative z-10"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Github <span className="gradient-text">Activity</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Overview of my open source contributions and projects
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {statsItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white mb-1">
                                    {item.value.toLocaleString()}
                                </div>
                                <div className="text-gray-400">{item.label}</div>
                            </motion.div>
                        )
                    }
                    )}
                </div>

                {/* Contribution Graph */}
                <div className="card mb-16">
                    <h3 className="text-xl font-semibold text-white mb-6">
                        Contribution Activity
                    </h3>
                    <div className="h-48 bg-dark rounded-lg overflow-hidden">
                        <div className="grid grid-cols-52 gap-1 p-4">
                            {[...Array(52)].map((_, weekIndex) => (
                                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                                    {[...Array(7)].map((_, dayIndex) => (
                                        <div
                                            key={dayIndex}
                                            className={`w-3 h-3 rounded-sm ${Math.random() > 0.5
                                                    ? 'bg-primary'
                                                    : Math.random() > 0.7
                                                        ? 'bg-primary/60'
                                                        : 'bg-dark-lighter'
                                                }`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Featured Repositories */}
                <div className="grid md:grid-cols-3 gap-6">
                    {repos.map((repo, index) => (
                        <motion.a
                            key={repo.name}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1 }}
                            className="card hover:border-primary/30 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <GithubIcon className="w-6 h-6 text-primary" />
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-400">{repo.stars}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <GitFork className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-400">{repo.forks}</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2">
                                {repo.name}
                            </h3>
                            <p className="text-gray-400 mb-4">
                                {repo.description}
                            </p>

                            <div className="flex items-center mt-auto">
                                <span className="px-2 py-1 text-sm bg-dark rounded-full text-gray-300">
                                    {repo.language}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}