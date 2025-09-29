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

                    {/* Right: Social Icons (Optional) */}
                    <div className="flex space-x-4">
                        <a href="https://twitter.com/AbhishalSharma" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6 0-.2 0-.4 0-.6A8.3 8.3 0 0 0 22 4.8a8.2 8.2 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1A4.2 4.2 0 0 0 12 7.5c0 .3 0 .6.1.9A12 12 0 0 1 3 4.2a4.2 4.2 0 0 0 1.3 5.6A4.1 4.1 0 0 1 2.8 9v.1a4.2 4.2 0 0 0 3.3 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.6a12 12 0 0 0 6 1.7" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/abhishal_ks" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.8 2A5.8 5.8 0 0 0 2 7.8v8.4A5.8 5.8 0 0 0 7.8 22h8.4A5.8 5.8 0 0 0 22 16.2V7.8A5.8 5.8 0 0 0 16.2 2H7.8Zm0 2h8.4A3.8 3.8 0 0 1 20 7.8v8.4a3.8 3.8 0 0 1-3.8 3.8H7.8A3.8 3.8 0 0 1 4 16.2V7.8A3.8 3.8 0 0 1 7.8 4Zm4.2 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
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
