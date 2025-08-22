"use client"; // Add this at the top for client-side interactivity (for the carousel)

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';


// --- Header Component ---
// Includes responsive navigation with a hamburger menu
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["About Us", "Team", "Projects", "Networks"];

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center min-w-0">
        <Link href="/" className="text-xl sm:text-2xl font-bold tracking-wider flex-shrink-0 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
          IITKGP <span className="font-light">LAUNCHPAD</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-shrink-0">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="cursor-pointer">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link} href="#" className="hover:text-blue-400 transition-colors duration-300 text-lg cursor-pointer">
                {link}
              </a>
            ))}
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
        <footer className="bg-gray-900 text-white py-6 text-center mt-10">
          <p>&copy; 2025 Entrepreneur Platform. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
