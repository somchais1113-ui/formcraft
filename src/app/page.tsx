import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import ScrollReveal from '@/components/ScrollReveal'
import Marker from '@/components/Marker'
import ProductShowcase from '@/components/ProductShowcase'
import HeroSection from '@/components/HeroSection'

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
  { title: 'ชิ้นส่วนเครื่องจักร CNC', category: 'OEM Manufacturing', image: '/images/oem-cnc.png' },
  { title: 'อุปกรณ์จับยึดเฉพาะงาน', category: 'Custom Production', image: '/images/custom-cnc-milling.png' },
  { title: 'ต้นแบบฝาครอบอลูมิเนียม', category: 'Prototyping', image: '/images/quality-inspector.png' },
  { title: 'แผงควบคุมสแตนเลส', category: 'OEM Manufacturing', image: '/images/welding.png' },
  { title: 'โครงสร้างรองรับสายพาน', category: 'Custom Production', image: '/images/welding-sparks.png' },
  { title: 'ชุดทดสอบคุณภาพ', category: 'Quality Control', image: '/images/quality-control.png' },
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
      <HeroSection />

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
              className="card grid-cols-1 md:grid-cols-[1fr_auto]"
              style={{
                display: 'grid',
                gap: 'var(--space-5)',
                alignItems: 'center',
                marginTop: 'var(--space-7)',
                background: 'var(--bg-dark)',
                borderColor: 'var(--color-charcoal)',
                padding: '2.5rem',
              }}
            >
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
                  ตัวอย่างผลงาน
                </p>
                <h3
                  style={{
                    fontSize: 'clamp(1.75rem, 4vw, var(--fs-h2))',
                    fontWeight: 'var(--fw-bold)',
                    color: 'var(--text-on-dark)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  คุณภาพที่จับต้องได้
                </h3>
                <p
                  style={{
                    fontSize: 'var(--fs-body)',
                    color: 'var(--color-blue-gray)',
                    lineHeight: 1.7,
                  }}
                >
                  ตัวอย่างชิ้นงานจากกระบวนการผลิตของเรา
                  (รูปจริงของผลงานพร้อมเร็วๆ นี้)
                </p>
              </div>
              <ProductShowcase label="ตัวอย่างชิ้นงาน CNC" />
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="gallery-item-pattern"
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(0.15) contrast(1.05)',
                    }}
                  />
                  <div className="gallery-item-overlay">
                    <p
                      style={{
                        fontFamily: 'var(--font-utility)',
                        fontSize: 'var(--fs-caption)',
                        fontWeight: 'var(--fw-bold)',
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
                        fontWeight: 'var(--fw-bold)',
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
