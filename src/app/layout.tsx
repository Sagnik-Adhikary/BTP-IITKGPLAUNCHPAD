"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import './globals.css';


// --- Header Component ---
// Includes responsive navigation with a hamburger menu
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Projects", href: "#projects" },
    { name: "Networks", href: "#networks" }
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl sticky top-0 z-50 border-b border-gray-700/50 backdrop-blur-sm">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-orange-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center min-w-0">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center space-x-2 flex-shrink-0">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-wider group-hover:text-blue-400 transition-colors duration-300">
              IITKGP <span className="font-light">LAUNCHPAD</span>
            </span>
            <span className="text-xs text-gray-400 -mt-1">Innovation Hub</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap group ${
                index === 0 ? 'hover:text-blue-400' :
                index === 1 ? 'hover:text-teal-400' :
                index === 2 ? 'hover:text-orange-400' :
                'hover:text-purple-400'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                index === 0 ? 'bg-blue-500' :
                index === 1 ? 'bg-teal-500' :
                index === 2 ? 'bg-orange-500' :
                'bg-purple-500'
              }`}></div>
              <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-1/2 transition-all duration-300 ${
                index === 0 ? 'bg-blue-400' :
                index === 1 ? 'bg-teal-400' :
                index === 2 ? 'bg-orange-400' :
                'bg-purple-400'
              }`}></div>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-shrink-0">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu" 
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-700/50">
          <nav className="flex flex-col items-center space-y-2 py-4">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`w-full text-center py-3 px-4 rounded-lg transition-all duration-300 text-lg cursor-pointer ${
                  index === 0 ? 'hover:bg-blue-500/10 hover:text-blue-400' :
                  index === 1 ? 'hover:bg-teal-500/10 hover:text-teal-400' :
                  index === 2 ? 'hover:bg-orange-500/10 hover:text-orange-400' :
                  'hover:bg-purple-500/10 hover:text-purple-400'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="w-full px-4 pt-2">
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Entrepreneur Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col">


        {/* Navbar */}
        <Header />
        
        {/* Page Content */}
        <main className="flex-grow">{children}</main>
        
        {/* Footer */}
        <footer className="bg-white text-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Social Media Section */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium">Follow our profiles</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Separator */}
            <hr className="border-gray-300 mb-8" />

            {/* Navigation Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4">Programs</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-600 transition-colors duration-300">Startup Incubator</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors duration-300">Mentorship Program</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors duration-300">Funding Support</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors duration-300">Innovation Lab</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-600 transition-colors duration-300">Campus</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors duration-300">Alumni Network</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors duration-300">Who We Are</a></li>
                </ul>
              </div>
              <div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Looking for information about IIT KGP Launchpad?</h4>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Learn more</a>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Looking for information about our startup programs?</h4>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Learn more</a>
                </div>
              </div>
            </div>

            {/* Separator */}
            <hr className="border-gray-300 mb-8" />

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <div className="text-2xl font-bold text-blue-600">IITKGP LAUNCHPAD</div>
                <div className="flex gap-6 text-sm">
                  <a href="#" className="hover:text-blue-600 transition-colors duration-300">About Us</a>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-300">Our Programs</a>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-300">Privacy</a>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-300">Terms</a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c0-.648-.527-1.173-1.177-1.173-.65 0-1.177.525-1.177 1.173 0 .647.527 1.173 1.177 1.173.65 0 1.177-.526 1.177-1.173zM12 9c0-.648-.527-1.173-1.177-1.173-.65 0-1.177.525-1.177 1.173 0 .647.527 1.173 1.177 1.173.65 0 1.177-.526 1.177-1.173zM15.772 9c0-.648-.527-1.173-1.177-1.173-.65 0-1.177.525-1.177 1.173 0 .647.527 1.173 1.177 1.173.65 0 1.177-.526 1.177-1.173z" />
                </svg>
                <a href="#" className="hover:text-blue-600 transition-colors duration-300">Help</a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 pt-6 border-t border-gray-300">
              <p className="text-sm text-gray-600">&copy; 2025 IIT KGP Launchpad. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
