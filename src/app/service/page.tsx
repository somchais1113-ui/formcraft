import type { Metadata } from 'next'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import ScrollReveal from '@/components/ScrollReveal'
import Marker from '@/components/Marker'

export const metadata: Metadata = {
  title: 'บริการ | FORMCRAFT',
  description: 'OEM Manufacturing, Custom Production, Prototyping และ Quality Control — ครอบคลุมทุกความต้องการด้านการผลิต',
}

const services = [
  {
    title: 'OEM Manufacturing',
    desc: 'ผลิตตามแบบและสเปกของคุณ ควบคุมคุณภาพทุกขั้นตอน ได้ชิ้นงานที่ตรงตามที่คุณต้องการ ทุกครั้ง',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
        <rect x="4" y="12" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12V8a6 6 0 0 1 12 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 17v-2M16 25v-2M13 20H11M21 20h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Custom Production',
    desc: 'ออกแบบและผลิตงานเฉพาะ ตอบโจทย์เฉพาะของแต่ละองค์กร เราร่วมงานกับทีมของคุณตั้งแต่ขั้นออกแบบ',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
        <path d="M22 6l4 4-14 14H8v-4L22 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M19 9l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 28h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Prototyping',
    desc: 'สร้างต้นแบบเพื่อทดสอบก่อนผลิตจริง ลดความเสี่ยง ปรับได้จนกว่าจะได้ชิ้นที่สมบูรณ์',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
        <path d="M16 4l10 6v12l-10 6L6 22V10l10-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 4v24M6 10l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Quality Control',
    desc: 'ตรวจสอบมาตรฐานทุกชิ้น เป๊ะเสมอ ไม่มีตก เอกสาร QC ครบถ้วนทุกล็อต',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
        <path d="M16 4l9 4v9c0 5-4 9-9 11-5-2-9-6-9-11V8l9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 16l3.5 3.5L21 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const processRows = [
  {
    step: 'รับโจทย์และวิเคราะห์',
    detail: 'ฟังความต้องการ ตรวจสอบความเป็นไปได้ทางเทคนิค',
    result: 'สรุปขอบเขตงาน',
  },
  {
    step: 'ออกแบบและวางแผน',
    detail: 'CAD design พร้อม spec ครบถ้วน ประมาณการต้นทุน',
    result: 'แบบที่อนุมัติแล้ว',
  },
  {
    step: 'สร้างต้นแบบ',
    detail: 'ผลิตชิ้นทดสอบ ทดสอบคุณสมบัติและมาตรฐาน',
    result: 'Prototype ที่ผ่านการตรวจ',
  },
  {
    step: 'ผลิตจริง',
    detail: 'ผลิตตามมาตรฐานที่กำหนด ควบคุมทุกขั้นตอน',
    result: 'สินค้าพร้อมส่ง',
  },
  {
    step: 'ตรวจสอบและส่งมอบ',
    detail: 'QC ทุกชิ้น เอกสารครบถ้วน จัดส่งตามกำหนด',
    result: 'ส่งมอบตรงเวลา',
  },
]

export default function ServicePage() {
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
            บริการ
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, var(--fs-h1))',
              fontWeight: 'var(--fw-bold)',
              color: 'var(--text-on-dark)',
              lineHeight: 1.15,
              marginBottom: 'var(--space-4)',
              maxWidth: '640px',
            }}
          >
            สิ่งที่เราทำได้
          </h1>
          <Marker />
        </div>
      </section>

      {/* ── SERVICE GRID ─────────────────────────────────────── */}
      <section className="section-pad" aria-label="Services">
        <div className="container-fc">
          <ScrollReveal>
            <SectionHeading eyebrow="กลุ่มบริการ" title="ความสามารถที่ครอบคลุม" />
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginTop: 'var(--space-7)',
            }}
          >
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={(i % 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                <article className="card" style={{ height: '100%' }}>
                  <div
                    style={{
                      color: 'var(--accent)',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    {svc.icon}
                  </div>
                  <h2
                    style={{
                      fontSize: 'var(--fs-h3)',
                      fontWeight: 'var(--fw-medium)',
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    {svc.title}
                  </h2>
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

      {/* ── PROCESS TABLE ────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: 'var(--bg-subtle)' }}
        aria-label="Process"
      >
        <div className="container-fc">
          <ScrollReveal>
            <SectionHeading eyebrow="กระบวนการทำงาน" title="ขั้นตอนที่เชื่อถือได้" />
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div
              style={{
                marginTop: 'var(--space-7)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}
            >
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: 'var(--fs-body)',
                }}
                aria-label="ขั้นตอนการทำงาน"
              >
                <thead>
                  <tr
                    style={{
                      background: 'var(--bg-dark)',
                      color: 'var(--text-on-dark)',
                    }}
                  >
                    {['ขั้นตอน', 'รายละเอียด', 'ผลลัพธ์'].map((col) => (
                      <th
                        key={col}
                        style={{
                          padding: '1rem 1.5rem',
                          textAlign: 'left',
                          fontFamily: 'var(--font-utility)',
                          fontSize: 'var(--fs-caption)',
                          fontWeight: 'var(--fw-medium)',
                          letterSpacing: 'var(--tracking-wide)',
                          textTransform: 'uppercase',
                          color: 'var(--color-steel)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {processRows.map((row, i) => (
                    <tr
                      key={row.step}
                      style={{
                        background: i % 2 === 0 ? 'var(--bg-page)' : 'var(--bg-subtle)',
                        borderTop: '1px solid var(--border-hairline)',
                      }}
                    >
                      <td
                        style={{
                          padding: '1.25rem 1.5rem',
                          fontWeight: 'var(--fw-medium)',
                          color: 'var(--text-primary)',
                          verticalAlign: 'top',
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-block',
                            width: '1.5rem',
                            fontFamily: 'var(--font-utility)',
                            fontSize: 'var(--fs-caption)',
                            color: 'var(--accent)',
                            fontWeight: 'var(--fw-bold)',
                            marginRight: '0.5rem',
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {row.step}
                      </td>
                      <td
                        style={{
                          padding: '1.25rem 1.5rem',
                          color: 'var(--text-secondary)',
                          verticalAlign: 'top',
                          lineHeight: 1.6,
                        }}
                      >
                        {row.detail}
                      </td>
                      <td
                        style={{
                          padding: '1.25rem 1.5rem',
                          color: 'var(--accent)',
                          fontWeight: 'var(--fw-medium)',
                          fontFamily: 'var(--font-utility)',
                          fontSize: '0.875rem',
                          verticalAlign: 'top',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {row.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
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
            <div style={{ maxWidth: '600px' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, var(--fs-h2))',
                  fontWeight: 'var(--fw-bold)',
                  color: 'var(--text-on-dark)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                พร้อมเริ่มงานด้วยกันแล้วใช่ไหม
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
                บอกเราเกี่ยวกับโปรเจกต์ของคุณ แล้วเราจะแนะนำว่าเราจะช่วยได้อย่างไร
              </p>
              <Link href="/contact" className="btn-primary">
                ปรึกษางานผลิต
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
