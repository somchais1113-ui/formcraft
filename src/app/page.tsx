import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import ScrollReveal from '@/components/ScrollReveal'
import Marker from '@/components/Marker'
import ProductSpinner from '@/components/ProductSpinner'

const journeySteps = [
  {
    num: '01',
    title: 'Concept',
    desc: 'เริ่มจากไอเดีย เราฟังโจทย์และความต้องการของคุณก่อนเสมอ',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'ออกแบบอย่างมีจุดมุ่งหมาย ทุกการตัดสินใจมีเหตุผลทางเทคนิครองรับ',
  },
  {
    num: '03',
    title: 'Prototype',
    desc: 'สร้างต้นแบบเพื่อทดสอบ ปรับจนได้มาตรฐานที่วางใจได้',
  },
  {
    num: '04',
    title: 'Production',
    desc: 'ส่งมอบของจริง เป๊ะ ตรงเวลา ทุกชิ้น',
  },
]

const attributes = [
  {
    title: 'ใส่ใจทุกรายละเอียด',
    desc: 'เราดูงานเหมือนมันกำลังจะมาอยู่ในมือเราเอง รายละเอียดที่คนอื่นมองข้าม คือสิ่งที่เราไม่ปล่อยผ่าน เพราะถ้าเป็นของเรา เราก็อยากได้แบบดีที่สุด',
  },
  {
    title: 'เป๊ะเสมอ ทุกชิ้น',
    desc: 'ความแม่นยำของเราไม่ขึ้นกับว่าใครเป็นคนสั่ง ชิ้นแรกกับชิ้นที่ร้อยได้มาตรฐานเดียวกัน เพราะทุกชิ้นคือชื่อของเรา',
  },
  {
    title: 'ทำด้วยฝีมือจริง',
    desc: 'เบื้องหลังความเนี้ยบคือคนที่รู้งานจริงและภูมิใจในสิ่งที่ทำ เราผสมความแม่นยำแบบวิศวกรรมเข้ากับหัวใจของช่างฝีมือ และนั่นคือที่มาของชื่อ FORMCRAFT',
  },
  {
    title: 'ส่งมอบอย่างมืออาชีพ',
    desc: 'ทำเหมือนเป็นของเราเอง ไม่ได้แปลว่าตามใจตัวเอง แต่แปลว่ารับผิดชอบเต็มที่ ตรงเวลา ได้คุณภาพ และพร้อมให้ลูกค้าพึ่งได้ทุกครั้ง',
  },
  {
    title: 'อยู่ดูแลกันยาว',
    desc: 'เราไม่ได้จบงานแค่ตอนส่งของ แต่อยู่ดูแลต่อเหมือนมันยังเป็นของเรา ความไว้ใจที่สั่งสมทีละงานคือสิ่งที่ทำให้เรากลายเป็นพาร์ตเนอร์ระยะยาว',
  },
]

const portfolio = [
  { title: 'ชิ้นส่วนเครื่องจักร CNC', category: 'OEM Manufacturing' },
  { title: 'อุปกรณ์จับยึดเฉพาะงาน', category: 'Custom Production' },
  { title: 'ต้นแบบฝาครอบอลูมิเนียม', category: 'Prototyping' },
  { title: 'แผงควบคุมสแตนเลส', category: 'OEM Manufacturing' },
  { title: 'โครงสร้างรองรับสายพาน', category: 'Custom Production' },
  { title: 'ชุดทดสอบคุณภาพ', category: 'Quality Control' },
]

const services = [
  {
    title: 'OEM Manufacturing',
    desc: 'ผลิตตามแบบและสเปกของคุณ ควบคุมคุณภาพทุกขั้นตอน',
  },
  {
    title: 'Custom Production',
    desc: 'ออกแบบและผลิตงานเฉพาะ ตอบโจทย์เฉพาะของแต่ละองค์กร',
  },
  {
    title: 'Prototyping',
    desc: 'สร้างต้นแบบเพื่อทดสอบก่อนผลิตจริง ลดความเสี่ยง',
  },
  {
    title: 'Quality Control',
    desc: 'ตรวจสอบมาตรฐานทุกชิ้น เป๊ะเสมอ ไม่มีตก',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
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

        <div className="container-fc" style={{ position: 'relative', zIndex: 1 }}>
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
              PRECISION MANUFACTURING PARTNER
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
                marginBottom: 'var(--space-7)',
              }}
            >
              From Concept to Creation. — จากความคิด สู่ของจริง
            </p>

            <div
              className="hero-fade-up hero-fade-up-delay-3"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link href="/contact" className="btn-primary">
                ปรึกษางานผลิต
              </Link>
              <Link href="/service" className="btn-secondary-on-dark link-arrow">
                ดูบริการ <span className="link-arrow-glyph">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND JOURNEY ────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: 'var(--bg-subtle)' }}
        aria-label="Brand Journey"
      >
        <div className="container-fc">
          <ScrollReveal>
            <SectionHeading eyebrow="กระบวนการของเรา" title="Brand Journey" />
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              marginTop: 'var(--space-7)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
            }}
          >
            {journeySteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={(i % 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                <div
                  style={{
                    padding: '2rem',
                    borderRight:
                      i < journeySteps.length - 1
                        ? '1px solid var(--border-hairline)'
                        : 'none',
                    background: 'var(--bg-page)',
                    height: '100%',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-utility)',
                      fontSize: '2.5rem',
                      fontWeight: 'var(--fw-bold)',
                      color: 'var(--accent)',
                      lineHeight: 1,
                      marginBottom: 'var(--space-3)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{
                      fontSize: 'var(--fs-h3)',
                      fontWeight: 'var(--fw-medium)',
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <Marker style={{ marginBottom: 'var(--space-3)' } as React.CSSProperties} />
                  <p
                    style={{
                      fontSize: 'var(--fs-body)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND ATTRIBUTES ─────────────────────────────────── */}
      <section className="section-pad" aria-label="Brand Attributes">
        <div className="container-fc">
          <ScrollReveal>
            <SectionHeading
              eyebrow="เราเชื่ออะไร"
              title="สิ่งที่ทำให้เราเป็น FORMCRAFT"
            />
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: 'var(--space-7)',
            }}
          >
            {attributes.map((attr, i) => (
              <ScrollReveal key={attr.title} delay={(i % 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                <article className="card" style={{ height: '100%' }}>
                  <h3
                    style={{
                      fontSize: 'var(--fs-h3)',
                      fontWeight: 'var(--fw-medium)',
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    {attr.title}
                  </h3>
                  <Marker style={{ marginBottom: 'var(--space-3)' } as React.CSSProperties} />
                  <p
                    style={{
                      fontSize: 'var(--fs-body)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {attr.desc}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: 'var(--bg-subtle)' }}
        aria-label="Services Preview"
      >
        <div className="container-fc">
          <ScrollReveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: 'var(--space-7)',
              }}
            >
              <SectionHeading eyebrow="บริการของเรา" title="ความสามารถที่ครอบคลุม" />
              <Link
                href="/service"
                className="link-arrow"
                style={{
                  fontFamily: 'var(--font-utility)',
                  fontSize: '0.875rem',
                  fontWeight: 'var(--fw-medium)',
                  color: 'var(--accent)',
                  letterSpacing: '0.02em',
                }}
              >
                ดูบริการทั้งหมด <span className="link-arrow-glyph">→</span>
              </Link>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={(i % 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                <article className="card" style={{ height: '100%' }}>
                  <h3
                    style={{
                      fontSize: 'var(--fs-h3)',
                      fontWeight: 'var(--fw-medium)',
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    {svc.title}
                  </h3>
                  <Marker style={{ marginBottom: 'var(--space-3)' } as React.CSSProperties} />
                  <p
                    style={{
                      fontSize: 'var(--fs-body)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {svc.desc}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO / GALLERY ──────────────────────────────── */}
      <section className="section-pad" aria-label="Portfolio">
        <div className="container-fc">
          <ScrollReveal>
            <SectionHeading eyebrow="ผลงานของเรา" title="งานที่เราภูมิใจนำเสนอ" />
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div
              className="card md:grid-cols-[auto_1fr]"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--space-5)',
                alignItems: 'center',
                marginTop: 'var(--space-7)',
                background: 'var(--bg-dark)',
                borderColor: 'var(--color-charcoal)',
                padding: '2.5rem',
              }}
            >
              <ProductSpinner label="ตัวอย่างชิ้นงาน CNC" />
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-utility)',
                    fontSize: 'var(--fs-caption)',
                    fontWeight: 'var(--fw-bold)',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  มุมมอง 360°
                </p>
                <h3
                  style={{
                    fontSize: 'var(--fs-h3)',
                    fontWeight: 'var(--fw-bold)',
                    color: 'var(--text-on-dark)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  สำรวจรายละเอียดได้ทุกมุม
                </h3>
                <p
                  style={{
                    fontSize: 'var(--fs-body)',
                    color: 'var(--color-blue-gray)',
                    lineHeight: 1.7,
                  }}
                >
                  ลากเพื่อหมุนดูตัวอย่างชิ้นงานแบบ 360 องศา
                  (ตัวอย่างสำหรับสาธิตฟีเจอร์ — รูปจริงของผลงานพร้อมเร็วๆ นี้)
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.5rem',
              marginTop: 'var(--space-7)',
            }}
          >
            {portfolio.map((item, i) => (
              <ScrollReveal key={item.title} delay={(i % 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                <div className="gallery-item">
                  <svg
                    className="gallery-item-pattern"
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 150"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                  >
                    <rect width="200" height="150" fill="var(--color-deep-navy)" />
                    <g stroke="var(--color-charcoal)" strokeWidth="1">
                      {Array.from({ length: 9 }).map((_, n) => (
                        <line key={`v${n}`} x1={n * 25} y1="0" x2={n * 25} y2="150" />
                      ))}
                      {Array.from({ length: 7 }).map((_, n) => (
                        <line key={`h${n}`} x1="0" y1={n * 25} x2="200" y2={n * 25} />
                      ))}
                    </g>
                    {i % 3 === 0 && (
                      <circle cx="100" cy="75" r="38" fill="none" stroke="var(--color-orange)" strokeWidth="2" opacity="0.7" />
                    )}
                    {i % 3 === 1 && (
                      <rect x="55" y="37" width="90" height="76" fill="none" stroke="var(--color-orange)" strokeWidth="2" opacity="0.7" />
                    )}
                    {i % 3 === 2 && (
                      <path d="M55 113 L100 37 L145 113 Z" fill="none" stroke="var(--color-orange)" strokeWidth="2" opacity="0.7" />
                    )}
                  </svg>
                  <div className="gallery-item-overlay">
                    <p
                      style={{
                        fontFamily: 'var(--font-utility)',
                        fontSize: 'var(--fs-caption)',
                        fontWeight: 'var(--fw-medium)',
                        letterSpacing: 'var(--tracking-wide)',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        marginBottom: '0.375rem',
                      }}
                    >
                      {item.category}
                    </p>
                    <p
                      style={{
                        fontSize: 'var(--fs-body)',
                        fontWeight: 'var(--fw-medium)',
                        color: 'var(--text-on-dark)',
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: 'var(--bg-dark)' }}
        aria-label="Call to action"
      >
        <div className="container-fc">
          <ScrollReveal>
            <div style={{ maxWidth: '640px' }}>
              <p
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
                มีงานผลิตในใจอยู่แล้วใช่ไหม
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, var(--fs-h2))',
                  fontWeight: 'var(--fw-bold)',
                  color: 'var(--text-on-dark)',
                  lineHeight: 1.25,
                  marginBottom: 'var(--space-3)',
                }}
              >
                เริ่มจากการคุยกับเรา
              </h2>
              <Marker style={{ marginBottom: 'var(--space-4)' } as React.CSSProperties} />
              <p
                style={{
                  fontSize: 'var(--fs-body)',
                  color: 'var(--color-blue-gray)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-5)',
                }}
              >
                แล้วให้เราดูแลตั้งแต่ไอเดียจนถึงของจริง
              </p>
              <Link href="/contact" className="btn-primary">
                ติดต่อเรา
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
