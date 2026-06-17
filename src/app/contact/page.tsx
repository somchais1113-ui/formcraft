'use client'

import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import ScrollReveal from '@/components/ScrollReveal'
import Marker from '@/components/Marker'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'var(--bg-page)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-primary)',
  fontSize: 'var(--fs-body)',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: `border-color var(--dur-fast) var(--ease-out)`,
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
  }

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
            className="hero-fade-up"
            style={{
              fontFamily: 'var(--font-utility)',
              fontSize: 'var(--fs-caption)',
              fontWeight: 'var(--fw-bold)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 'var(--space-3)',
            }}
          >
            ติดต่อ
          </p>
          <h1
            className="hero-fade-up hero-fade-up-delay-1"
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 3.75rem)',
              fontWeight: 'var(--fw-bold)',
              textTransform: 'uppercase',
              color: 'var(--text-on-dark)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              marginBottom: 'var(--space-4)',
              maxWidth: '640px',
            }}
          >
            เริ่มงานกับ FORMCRAFT
          </h1>
          <div className="hero-fade-up hero-fade-up-delay-2 hero-marker-pulse">
            <Marker />
          </div>
        </div>
      </section>

      {/* ── CONTACT CONTENT ──────────────────────────────────── */}
      <section className="section-pad" aria-label="Contact form and info">
        <div className="container-fc">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-8)',
            }}
            className="lg:grid-cols-[1fr_380px]"
          >
            {/* Form */}
            <div>
              <ScrollReveal>
                <SectionHeading
                  eyebrow="ส่งข้อความ"
                  title="บอกเราเกี่ยวกับงานของคุณ"
                />
                <p
                  style={{
                    fontSize: 'var(--fs-body)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginTop: 'var(--space-4)',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  แล้วเราจะติดต่อกลับโดยเร็ว
                </p>
              </ScrollReveal>

              {submitted ? (
                <ScrollReveal>
                  <div
                    style={{
                      padding: '2.5rem',
                      border: '1px solid var(--border-hairline)',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-subtle)',
                      textAlign: 'center',
                    }}
                  >
                    <span
                      style={{
                        width: '48px',
                        height: '48px',
                        background: 'var(--accent)',
                        borderRadius: '50%',
                        margin: '0 auto var(--space-4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <h3
                      style={{
                        fontSize: 'var(--fs-h3)',
                        fontWeight: 'var(--fw-medium)',
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-2)',
                      }}
                    >
                      ส่งข้อความแล้ว
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      ขอบคุณที่ติดต่อมา เราจะตอบกลับภายใน 1–2 วันทำการ
                    </p>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal delay={1}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.25rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: '1.25rem',
                      }}
                    >
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          style={{
                            display: 'block',
                            fontFamily: 'var(--font-utility)',
                            fontSize: 'var(--fs-caption)',
                            fontWeight: 'var(--fw-medium)',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.375rem',
                            letterSpacing: '0.04em',
                          }}
                        >
                          ชื่อ-นามสกุล <span style={{ color: 'var(--accent)' }}>*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-hairline)')}
                          placeholder="ชื่อ นามสกุล"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          style={{
                            display: 'block',
                            fontFamily: 'var(--font-utility)',
                            fontSize: 'var(--fs-caption)',
                            fontWeight: 'var(--fw-medium)',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.375rem',
                            letterSpacing: '0.04em',
                          }}
                        >
                          บริษัท
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={form.company}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-hairline)')}
                          placeholder="ชื่อบริษัท"
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: '1.25rem',
                      }}
                    >
                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          style={{
                            display: 'block',
                            fontFamily: 'var(--font-utility)',
                            fontSize: 'var(--fs-caption)',
                            fontWeight: 'var(--fw-medium)',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.375rem',
                            letterSpacing: '0.04em',
                          }}
                        >
                          อีเมล <span style={{ color: 'var(--accent)' }}>*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-hairline)')}
                          placeholder="email@company.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          style={{
                            display: 'block',
                            fontFamily: 'var(--font-utility)',
                            fontSize: 'var(--fs-caption)',
                            fontWeight: 'var(--fw-medium)',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.375rem',
                            letterSpacing: '0.04em',
                          }}
                        >
                          เบอร์โทร
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-hairline)')}
                          placeholder="+66 2 000 0000"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-utility)',
                          fontSize: 'var(--fs-caption)',
                          fontWeight: 'var(--fw-medium)',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.375rem',
                          letterSpacing: '0.04em',
                        }}
                      >
                        รายละเอียดงาน <span style={{ color: 'var(--accent)' }}>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-hairline)')}
                        placeholder="เล่าให้เราฟังเกี่ยวกับงานที่คุณต้องการผลิต..."
                      />
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn-primary"
                        disabled={!form.name || !form.email || !form.message}
                        style={{
                          opacity: !form.name || !form.email || !form.message ? 0.5 : 1,
                          cursor: !form.name || !form.email || !form.message ? 'not-allowed' : 'pointer',
                        }}
                      >
                        ส่งข้อความ
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <ScrollReveal delay={2}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-5)',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-utility)',
                        fontSize: 'var(--fs-caption)',
                        fontWeight: 'var(--fw-medium)',
                        letterSpacing: 'var(--tracking-wide)',
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                        marginBottom: 'var(--space-4)',
                      }}
                    >
                      ข้อมูลติดต่อ
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-4)',
                      }}
                    >
                      {[
                        {
                          label: 'อีเมล',
                          value: 'info@formcraft.th',
                          href: 'mailto:info@formcraft.th',
                        },
                        {
                          label: 'โทร',
                          value: '+66 2 000 0000',
                          href: 'tel:+6620000000',
                        },
                        {
                          label: 'ที่อยู่',
                          value: 'กรุงเทพมหานคร ประเทศไทย',
                          href: undefined,
                        },
                      ].map(({ label, value, href }) => (
                        <div key={label}>
                          <p
                            style={{
                              fontSize: 'var(--fs-caption)',
                              color: 'var(--text-secondary)',
                              marginBottom: '0.25rem',
                              fontFamily: 'var(--font-utility)',
                              letterSpacing: '0.04em',
                            }}
                          >
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              style={{
                                fontSize: 'var(--fs-body)',
                                color: 'var(--accent)',
                                fontWeight: 'var(--fw-medium)',
                              }}
                            >
                              {value}
                            </a>
                          ) : (
                            <p
                              style={{
                                fontSize: 'var(--fs-body)',
                                color: 'var(--text-primary)',
                                fontWeight: 'var(--fw-medium)',
                              }}
                            >
                              {value}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-hairline)',
                      borderRadius: 'var(--radius-md)',
                      height: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                    role="img"
                    aria-label="แผนที่ — กรุงเทพมหานคร"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      style={{ color: 'var(--color-cool-gray)' }}
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="currentColor"
                        opacity="0.3"
                      />
                    </svg>
                    <p
                      style={{
                        fontSize: 'var(--fs-caption)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      แผนที่
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
