'use client'

import { useEffect, useRef, useState } from 'react'

const SEGMENTS = 20

export default function ProductSpinner({
  label = 'ตัวอย่างผลงาน',
}: {
  label?: string
}) {
  const [rotation, setRotation] = useState(0)
  const [dragging, setDragging] = useState(false)
  const lastX = useRef(0)

  useEffect(() => {
    if (dragging) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame: number
    const tick = () => {
      setRotation((r) => r + 0.15)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [dragging])

  const handlePointerDown = (e: React.PointerEvent) => {
    setDragging(true)
    lastX.current = e.clientX
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return
    const delta = e.clientX - lastX.current
    lastX.current = e.clientX
    setRotation((r) => r + delta * 0.6)
  }

  const handlePointerUp = () => setDragging(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-3)',
      }}
    >
      <div
        role="img"
        aria-label={`${label} — มุมมอง 360 องศา ลากเพื่อหมุน`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={dragging ? 'spinner-stage dragging' : 'spinner-stage'}
        style={{
          width: '220px',
          height: '320px',
          perspective: '900px',
          cursor: dragging ? 'grabbing' : 'grab',
          touchAction: 'none',
        }}
      >
        <div
          className="spinner-drum"
          style={{
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {Array.from({ length: SEGMENTS }).map((_, i) => {
            const angle = (360 / SEGMENTS) * i
            const shade = 0.35 + 0.5 * Math.abs(Math.cos((angle * Math.PI) / 180))
            return (
              <div
                key={i}
                className="spinner-segment"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(70px)`,
                  background: `linear-gradient(180deg, rgba(255,255,255,${shade * 0.35}) 0%, var(--color-deep-navy) 18%, var(--color-charcoal) 82%, rgba(255,255,255,${shade * 0.2}) 100%)`,
                  opacity: shade,
                }}
              />
            )
          })}
          <div className="spinner-band" aria-hidden="true" />
          <div className="spinner-cap spinner-cap-top" aria-hidden="true" />
          <div className="spinner-cap spinner-cap-bottom" aria-hidden="true" />
        </div>
      </div>
      <p
        style={{
          fontFamily: 'var(--font-utility)',
          fontSize: 'var(--fs-caption)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
        }}
      >
        ลากเพื่อหมุนดู 360°
      </p>
    </div>
  )
}
