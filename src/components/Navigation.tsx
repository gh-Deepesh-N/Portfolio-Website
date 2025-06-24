'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { num: '01.', label: 'About', href: '#about' },
  { num: '02.', label: 'Experience', href: '#experience' },
  { num: '03.', label: 'Work', href: '#work' },
  { num: '04.', label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="navbar-logo">
          DN
        </Link>
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              <span style={{ color: 'var(--color-green)', fontFamily: 'monospace', fontSize: '1rem', marginRight: '0.25em' }}>{link.num}</span>
              <span>{link.label}</span>
            </a>
          ))}
          <a href="https://drive.google.com/drive/folders/1oPzJE0aowK7VaPx-v0nrSHQNWC5QMF2V?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginLeft: '1.5rem' }}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
} 