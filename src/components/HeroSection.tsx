import Link from 'next/link'

const processStages = ['Concept', 'Design', 'Prototype', 'Production']
const activeStage = 2 // Concept + Design are the stages a lead enters at

const stats = [
  { value: 'B2B', label: 'เฉพาะองค์กร' },
  { value: '4', label: 'ขั้นตอนชัดเจน' },
  { value: '100%', label: 'QC ทุกชิ้น' },
]

export default function HeroSection() {
  return (
    <section
      style={{
        background: 'var(--bg-dark)',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        paddingBlock: 'var(--space-9)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Hero"
    >
      {/* Decorative blueprint grid */}
      <div
        aria-hidden="true"
        className="hero-grid"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--color-charcoal) 1px, transparent 1px), linear-gradient(90deg, var(--color-charcoal) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      {/* Corner frames — structural device, not decoration */}
      <span
        aria-hidden="true"
        className="hero-fade-up"
        style={{
          position: 'absolute',
          top: 'var(--space-5)',
          left: 'var(--space-5)',
          width: '20px',
          height: '20px',
          borderTop: '1.5px solid var(--accent)',
          borderLeft: '1.5px solid var(--accent)',
        }}
      />
      <span
        aria-hidden="true"
        className="hero-fade-up hero-fade-up-delay-1"
        style={{
          position: 'absolute',
          bottom: 'var(--space-5)',
          right: 'var(--space-5)',
          width: '20px',
          height: '20px',
          borderBottom: '1.5px solid var(--accent)',
          borderRight: '1.5px solid var(--accent)',
        }}
      />

      <div
        className="container-fc hero-grid-layout"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-7)',
          alignItems: 'center',
        }}
      >
        {/* ── Main content ── */}
        <div style={{ maxWidth: '760px' }}>
          <p
            className="hero-fade-up"
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: 'var(--fs-caption)',
              fontWeight: 'var(--fw-medium)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 'var(--space-3)',
            }}
          >
            Precision Manufacturing Partner
          </p>

          <div className="hero-fade-up hero-fade-up-delay-1" style={{ marginBottom: 'var(--space-4)' }}>
            <span
              aria-hidden="true"
              className="hero-marker-pulse"
              style={{
                display: 'block',
                width: '60px',
                height: '3px',
                background: 'var(--marker-color)',
              }}
            />
          </div>

          <h1
            className="hero-fade-up hero-fade-up-delay-1"
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 5rem)',
              lineHeight: 0.98,
              fontWeight: 'var(--fw-bold)',
              color: 'var(--text-on-dark)',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-3)',
            }}
          >
            Craft from<br />your trust.
          </h1>

          <p
            className="hero-fade-up hero-fade-up-delay-2"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              color: 'var(--color-blue-gray)',
              marginBottom: 'var(--space-2)',
              lineHeight: 1.5,
            }}
          >
            เราคราฟต์ทุกงานขึ้นจากความไว้ใจของคุณ
          </p>

          <p
            className="hero-fade-up hero-fade-up-delay-2"
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: 'var(--fs-caption)',
              letterSpacing: '0.08em',
              color: 'var(--color-warm-gray)',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-6)',
            }}
          >
            From Concept to Creation. — จากความคิด สู่ของจริง
          </p>

          {/* Brand Progress Marker */}
          <div
            className="hero-fade-up hero-fade-up-delay-3"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-6)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-utility)',
                fontSize: '0.625rem',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color: 'var(--color-warm-gray)',
                whiteSpace: 'nowrap',
              }}
            >
              Process
            </span>

            <div
              style={{
                position: 'relative',
                height: '2px',
                background: 'rgba(255,255,255,0.12)',
                flex: '1 1 160px',
                maxWidth: '220px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: `${(activeStage / processStages.length) * 100}%`,
                  background: 'var(--accent)',
                }}
              />
            </div>

            <div style={{ display: 'flex' }}>
              {processStages.map((stage, i) => (
                <span
                  key={stage}
                  style={{
                    fontFamily: 'var(--font-utility)',
                    fontSize: '0.625rem',
                    fontWeight: 'var(--fw-medium)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0 0.5rem',
                    borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.12)',
                    color: i < activeStage ? 'var(--text-on-dark)' : 'var(--color-warm-gray)',
                  }}
                >
                  {stage}
                </span>
              ))}
            </div>
          </div>

          {/* CTA group */}
          <div
            className="hero-fade-up hero-fade-up-delay-3"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 'var(--space-7)' }}
          >
            <Link href="/contact" className="btn-primary">
              ปรึกษางานผลิต
            </Link>
            <Link href="/service" className="btn-secondary-on-dark link-arrow">
              ดูบริการ <span className="link-arrow-glyph">→</span>
            </Link>
          </div>

          {/* Trust stats */}
          <div
            className="hero-fade-up hero-fade-up-delay-4"
            style={{
              display: 'flex',
              gap: 'var(--space-5)',
              flexWrap: 'wrap',
              paddingTop: 'var(--space-5)',
              borderTop: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: 'var(--font-utility)',
                    fontSize: '1.5rem',
                    fontWeight: 'var(--fw-bold)',
                    color: 'var(--text-on-dark)',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-utility)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-gray)',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Contact CTA panel ── */}
        <div
          className="hero-fade-up hero-fade-up-delay-2"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem 1.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: 'var(--fs-caption)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 'var(--space-2)',
            }}
          >
            เริ่มต้นโปรเจกต์
          </p>
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 'var(--fw-bold)',
              color: 'var(--text-on-dark)',
              lineHeight: 1.3,
              marginBottom: '0.25rem',
            }}
          >
            พูดคุยกับ<br />ทีมงานของเรา
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: '0.6875rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Free Consultation
          </p>
          <Link href="/contact" className="btn-primary" style={{ width: '100%' }}>
            ขอคำปรึกษาฟรี <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-fade-up hero-fade-up-delay-4"
        style={{
          position: 'absolute',
          bottom: 'var(--space-4)',
          left: 'var(--container-pad)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            position: 'relative',
            width: '1px',
            height: '2rem',
            background: 'rgba(255,255,255,0.15)',
            overflow: 'hidden',
          }}
        >
          <div
            className="hero-scroll-fill"
            style={{ position: 'absolute', top: '-100%', left: 0, width: '100%', height: '100%', background: 'var(--accent)' }}
          />
        </div>
        <span
          style={{
            fontFamily: 'var(--font-utility)',
            fontSize: '0.625rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          เลื่อนเพื่อดูเพิ่มเติม
        </span>
      </div>
    </section>
  )
}
