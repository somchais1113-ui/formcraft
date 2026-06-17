import Link from 'next/link'
import Marker from './Marker'

const navLinks = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/about', label: 'เกี่ยวกับเรา' },
  { href: '/service', label: 'บริการ' },
  { href: '/contact', label: 'ติดต่อ' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-dark)',
        color: 'var(--text-on-dark)',
        paddingBlock: 'var(--space-8)',
      }}
    >
      <div className="container-fc">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
          }}
          className="md:grid-cols-3"
        >
          {/* Brand column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <span
                className="wordmark"
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-on-dark)',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                FORMCRAFT
              </span>
              <Marker />
            </div>
            <p
              style={{
                fontSize: 'var(--fs-caption)',
                color: 'var(--color-blue-gray)',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}
            >
              Craft from your trust.
            </p>
            <p
              style={{
                fontSize: 'var(--fs-caption)',
                color: 'var(--color-warm-gray)',
                lineHeight: 1.6,
              }}
            >
              พาร์ตเนอร์ด้านการผลิตสำหรับ<br />โรงงานและองค์กร B2B
            </p>
          </div>

          {/* Nav column */}
          <nav aria-label="Footer navigation">
            <p
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: 'var(--fs-caption)',
                fontWeight: 'var(--fw-medium)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color: 'var(--color-steel)',
                marginBottom: '1.25rem',
              }}
            >
              เมนู
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: 'var(--fs-caption)',
                fontWeight: 'var(--fw-medium)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color: 'var(--color-steel)',
                marginBottom: '1.25rem',
              }}
            >
              ติดต่อ
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
              }}
            >
              {[
                { label: 'อีเมล', value: 'info@formcraft.th' },
                { label: 'โทร', value: '+66 2 000 0000' },
                { label: 'ที่อยู่', value: 'กรุงเทพมหานคร ประเทศไทย' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span
                    style={{
                      fontSize: 'var(--fs-caption)',
                      color: 'var(--color-warm-gray)',
                    }}
                  >
                    {label}:{' '}
                  </span>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-blue-gray)',
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 'var(--space-7)',
            paddingTop: 'var(--space-4)',
            borderTop: '1px solid var(--color-charcoal)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            alignItems: 'flex-start',
          }}
          className="md:flex-row md:justify-between md:items-center"
        >
          <p
            style={{
              fontSize: 'var(--fs-caption)',
              color: 'var(--color-warm-gray)',
            }}
          >
            © 2024 FORMCRAFT. All rights reserved.
          </p>
          <p
            style={{
              fontSize: 'var(--fs-caption)',
              color: 'var(--color-warm-gray)',
            }}
          >
            From Concept to Creation.
          </p>
        </div>
      </div>
    </footer>
  )
}
