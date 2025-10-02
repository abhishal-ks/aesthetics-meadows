import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-white border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

                    {/* Left: Logo or Brand */}
                    <div className="text-2xl font-bold text-gray-800">
                        Aesthetics Meadows
                    </div>

                    {/* Middle: Nav Links */}
                    <div className="flex space-x-6 text-gray-600 text-sm">
                        <Link href="/about" className="hover:text-blue-600 transition">About</Link>
                        <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
                        <Link href="/privacy" className="hover:text-blue-600 transition">Privacy</Link>
                        <Link href="/terms" className="hover:text-blue-600 transition">Terms</Link>
                    </div>

                    {/* Right: Social Icons */}

                    {/* X */}
                    <div className="flex space-x-4">
                        <a href="https://twitter.com/AbhishalSharma" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6 0-.2 0-.4 0-.6A8.3 8.3 0 0 0 22 4.8a8.2 8.2 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1A4.2 4.2 0 0 0 12 7.5c0 .3 0 .6.1.9A12 12 0 0 1 3 4.2a4.2 4.2 0 0 0 1.3 5.6A4.1 4.1 0 0 1 2.8 9v.1a4.2 4.2 0 0 0 3.3 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.6a12 12 0 0 0 6 1.7" />
                            </svg>
                        </a>

                        {/* IG */}
                        <a href="https://instagram.com/abhishal_ks" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.8 2A5.8 5.8 0 0 0 2 7.8v8.4A5.8 5.8 0 0 0 7.8 22h8.4A5.8 5.8 0 0 0 22 16.2V7.8A5.8 5.8 0 0 0 16.2 2H7.8Zm0 2h8.4A3.8 3.8 0 0 1 20 7.8v8.4a3.8 3.8 0 0 1-3.8 3.8H7.8A3.8 3.8 0 0 1 4 16.2V7.8A3.8 3.8 0 0 1 7.8 4Zm4.2 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2-.8 2.4-1 .1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.1 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 0Z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM0 8.98h5V24H0V8.98zM7.5 8.98h4.6v2.1h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.6V24h-5v-7.6c0-1.8 0-4.2-2.6-4.2s-3 2-3 4v7.8h-5V8.98z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Divider + Copyright */}
                <div className="mt-8 border-t border-gray-100 pt-6 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Aesthetics Meadows. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
