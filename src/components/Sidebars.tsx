import Link from 'next/link';

export default function Sidebars() {
  return (
    <>
      {/* Left Sidebar: Social Icons */}
      <div style={{ position: 'fixed', left: '2rem', bottom: 0, zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <a href="https://github.com/gh-Deepesh-N" target="_blank" rel="noopener noreferrer" className="nav-link">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/deepesh-n-39718525b/" target="_blank" rel="noopener noreferrer" className="nav-link">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="mailto:ndeepesh2004@gmail.com" className="nav-link">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6.5 12 13 2 6.5"/></svg>
        </a>
        <div style={{ width: '1px', height: '6rem', background: 'var(--color-slate)', marginTop: '1rem' }} />
      </div>
      {/* Right Sidebar: Email */}
      <div style={{ position: 'fixed', right: '2rem', bottom: 0, zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a href="mailto:ndeepesh2004@gmail.com" className="nav-link" style={{ fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '1rem', transform: 'rotate(90deg)', color: 'var(--color-slate)' }}>
          ndeepesh2004@gmail.com
        </a>
        <div style={{ width: '1px', height: '6rem', background: 'var(--color-slate)', marginTop: '1rem' }} />
      </div>
    </>
  );
} 