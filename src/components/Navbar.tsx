'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Marker from './Marker'

const navLinks = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/about', label: 'เกี่ยวกับเรา' },
  { href: '/service', label: 'บริการ' },
  { href: '/contact', label: 'ติดต่อ' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--bg-page)',
        borderBottom: scrolled ? '1px solid var(--border-hairline)' : '1px solid transparent',
        transition: `border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)`,
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <nav
        className="container-fc"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="wordmark"
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-primary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            lineHeight: 1,
          }}
          aria-label="FORMCRAFT — Home"
        >
          FORMCRAFT
          <Marker />
        </Link>

        {/* Desktop nav */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '0.875rem',
                  fontWeight: active ? 'var(--fw-medium)' : 'var(--fw-regular)',
                  color: active ? 'var(--accent)' : 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                  transition: `color var(--dur-fast) var(--ease-out)`,
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                }}
              >
                {link.label}
              </Link>
            )
          })}
          <Link href="/contact" className="btn-primary">
            ปรึกษางานผลิต
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={mobileOpen}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'var(--text-primary)',
              transition: `transform var(--dur-fast) var(--ease-out), opacity var(--dur-fast)`,
              transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'var(--text-primary)',
              transition: `opacity var(--dur-fast)`,
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'var(--text-primary)',
              transition: `transform var(--dur-fast) var(--ease-out), opacity var(--dur-fast)`,
              transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--bg-page)',
            borderTop: '1px solid var(--border-hairline)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 49,
          }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 'var(--fw-medium)',
                  color: active ? 'var(--accent)' : 'var(--text-primary)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border-hairline)',
                }}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ marginTop: '1rem', textAlign: 'center' }}
          >
            ปรึกษางานผลิต
          </Link>
        </div>
      )}
    </header>
  )
}
