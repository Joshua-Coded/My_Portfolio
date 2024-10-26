"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// src/components/home/Github.tsx

import {
    Github as GithubIcon,
    Star,
    GitFork,
    Users
} from 'lucide-react'

interface GithubStats {
    followers: number;
    following: number;
    publicRepos: number;
    totalStars: number;
}

interface Repository {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    html_url: string;
}

export default function Github() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const [stats, setStats] = useState<GithubStats>({
        followers: 0,
        following: 0,
        publicRepos: 0,
        totalStars: 0
    })

    const [repos, setRepos] = useState<Repository[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                // Fetch user data
                const userResponse = await fetch('https://api.github.com/users/Joshua-Coded')
                const userData = await userResponse.json()

                // Fetch repositories
                const reposResponse = await fetch('https://api.github.com/users/Joshua-Coded/repos?sort=stars&per_page=6')
                const reposData = await reposResponse.json()

                // Calculate total stars
                const totalStars = reposData.reduce((acc: number, repo: Repository) =>
                    acc + repo.stargazers_count, 0
                )

                setStats({
                    followers: userData.followers,
                    following: userData.following,
                    publicRepos: userData.public_repos,
                    totalStars: totalStars
                })

                setRepos(reposData)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching GitHub data:', error)
                setLoading(false)
            }
        }

        fetchGithubData()
    }, [])

    const statsItems = [
        { label: 'Followers', value: stats.followers, icon: Users },
        { label: 'Following', value: stats.following, icon: Users },
        { label: 'Repositories', value: stats.publicRepos, icon: GithubIcon },
        { label: 'Total Stars', value: stats.totalStars, icon: Star }
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
                                    {loading ? (
                                        <div className="h-8 bg-gray-700 rounded animate-pulse" />
                                    ) : (
                                        item.value.toLocaleString()
                                    )}
                                </div>
                                <div className="text-gray-400">{item.label}</div>
                            </motion.div>
                        )
                    }
                    )}
                </div>

                {/* Featured Repositories */}
                <div className="grid md:grid-cols-3 gap-6">
                    {loading ? (
                        // Loading skeleton
                        [...Array(6)].map((_, index) => (
                            <div key={index} className="card animate-pulse">
                                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4" />
                                <div className="h-4 bg-gray-700 rounded w-1/2" />
                            </div>
                        ))
                    ) : (
                        repos.map((repo) => (
                            <motion.a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                className="card hover:border-primary/30 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <GithubIcon className="w-6 h-6 text-primary" />
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 text-gray-400" />
                                            <span className="text-gray-400">{repo.stargazers_count}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <GitFork className="w-4 h-4 text-gray-400" />
                                            <span className="text-gray-400">{repo.forks_count}</span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {repo.name}
                                </h3>
                                <p className="text-gray-400 mb-4 line-clamp-2">
                                    {repo.description || 'No description available'}
                                </p>

                                {repo.language && (
                                    <div className="flex items-center mt-auto">
                                        <span className="px-2 py-1 text-sm bg-dark rounded-full text-gray-300">
                                            {repo.language}
                                        </span>
                                    </div>
                                )}
                            </motion.a>
                        ))
                    )}
                </div>
            </motion.div>
        </section>
    )
}