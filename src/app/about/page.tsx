import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import ScrollReveal from '@/components/ScrollReveal'
import Marker from '@/components/Marker'

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา | FORMCRAFT',
  description: 'ความไว้ใจ คือจุดเริ่มของทุกงาน — FORMCRAFT พาร์ตเนอร์ด้านการผลิตที่อยู่เคียงข้างคุณตั้งแต่ไอเดียจนถึงของจริง',
}

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
    desc: 'เราไม่ได้จบงานแค่ตอนส่งของ แต่อยู่ดูแลต่อเหมือนมันยังเป็นของเรา ความไว้ใจที่สั่งสมทีละงานคือสิ่งที่ทำให้เรากลายเป็นพาร์ตเนอร์ระยะยาว ไม่ใช่แค่ผู้รับจ้างผลิต',
  },
]

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

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--bg-dark)',
          paddingTop: 'var(--space-9)',
          paddingBottom: 'var(--space-8)',
        }}
      >
        <div className="container-fc">
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
            เกี่ยวกับเรา
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, var(--fs-h1))',
              fontWeight: 'var(--fw-bold)',
              color: 'var(--text-on-dark)',
              lineHeight: 1.15,
              marginBottom: 'var(--space-4)',
              maxWidth: '700px',
            }}
          >
            ความไว้ใจ<br />คือจุดเริ่มของทุกงาน
          </h1>
          <Marker />
        </div>
      </section>

      {/* ── BRAND STORY ──────────────────────────────────────── */}
      <section className="section-pad" aria-label="Brand story">
        <div className="container-fc">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-7)',
              maxWidth: '800px',
            }}
            className="md:grid-cols-1"
          >
            <ScrollReveal>
              <p
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}
              >
                FORMCRAFT เป็นพาร์ตเนอร์ด้านการผลิตสำหรับโรงงานและองค์กร
                เราอยู่ตรงกลางระหว่างไอเดียกับสินค้าจริง
                และเชื่อมช่องว่างนั้นด้วยความแม่นยำเชิงวิศวกรรม
                งานฝีมือที่ใส่ใจ และความไว้ใจที่สั่งสมกันมายาว
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}
              >
                เราไม่ได้มองงานเป็นแค่ออเดอร์ แต่ทำทุกชิ้นเหมือนเป็นของเราเอง
                ความใส่ใจระดับนั้นคือสิ่งที่ทำให้ความเป๊ะของเรามีความหมาย
                และเป็นเหตุผลที่ลูกค้าเลือกอยู่กับเรานานๆ
              </p>
            </ScrollReveal>
          </div>

          {/* Stat row */}
          <ScrollReveal delay={2}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '2px',
                marginTop: 'var(--space-8)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}
            >
              {[
                { value: 'B2B', label: 'เฉพาะองค์กร' },
                { value: '4', label: 'ขั้นตอนชัดเจน' },
                { value: '100%', label: 'QC ทุกชิ้น' },
                { value: 'ยาว', label: 'พาร์ตเนอร์ระยะยาว' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    padding: '2rem 1.5rem',
                    background: i % 2 === 0 ? 'var(--bg-page)' : 'var(--bg-subtle)',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      fontSize: '2rem',
                      fontWeight: 'var(--fw-bold)',
                      color: 'var(--accent)',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--font-utility)',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--fs-caption)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BRAND ATTRIBUTES ─────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: 'var(--bg-subtle)' }}
        aria-label="Brand attributes"
      >
        <div className="container-fc">
          <ScrollReveal>
            <SectionHeading eyebrow="ค่านิยมของเรา" title="สิ่งที่ทำให้เราเป็น FORMCRAFT" />
          </ScrollReveal>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginTop: 'var(--space-7)',
            }}
          >
            {attributes.map((attr, i) => (
              <ScrollReveal key={attr.title} delay={(i % 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                <article
                  className="card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '1.5rem',
                  }}
                >
                  <div>
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
                    <Marker />
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--fs-body)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.8,
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

      {/* ── BRAND JOURNEY ────────────────────────────────────── */}
      <section className="section-pad" aria-label="Brand Journey">
        <div className="container-fc">
          <ScrollReveal>
            <SectionHeading eyebrow="วิธีทำงานของเรา" title="กระบวนการที่เชื่อถือได้" />
          </ScrollReveal>

          <div
            style={{
              position: 'relative',
              marginTop: 'var(--space-7)',
            }}
          >
            {/* Connecting line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '2rem',
                left: '1.5rem',
                right: '1.5rem',
                height: '1px',
                background: 'var(--border-hairline)',
                zIndex: 0,
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {journeySteps.map((step, i) => (
                <ScrollReveal key={step.num} delay={(i % 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                  <div>
                    <div
                      style={{
                        width: '3rem',
                        height: '3rem',
                        background: 'var(--bg-page)',
                        border: '2px solid var(--accent)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--space-4)',
                        fontFamily: 'var(--font-utility)',
                        fontWeight: 'var(--fw-bold)',
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {step.num}
                    </div>
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
        </div>
      </section>
    </>
  )
}
