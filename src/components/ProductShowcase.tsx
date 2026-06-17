'use client'

import { useEffect, useState } from 'react'

export default function ProductShowcase({
  label = 'ตัวอย่างผลงาน',
}: {
  label?: string
}) {
  const [src, setSrc] = useState('/product.svg')

  useEffect(() => {
    const probe = new Image()
    probe.onload = () => setSrc('/product.png')
    probe.src = '/product.png'
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '1.5rem',
        width: '360px',
        height: '380px',
      }}
    >
      <img
        src={src}
        alt={label}
        style={{ width: '100%', maxWidth: '160px', height: 'auto' }}
      />
      <img
        src={src}
        alt=""
        aria-hidden="true"
        style={{ width: '100%', maxWidth: '160px', height: 'auto', opacity: 0.85 }}
      />
    </div>
  )
}
