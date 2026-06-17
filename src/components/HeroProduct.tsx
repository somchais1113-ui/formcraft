'use client'

import { useEffect, useState } from 'react'

export default function HeroProduct() {
  const [src, setSrc] = useState('/product.svg')

  useEffect(() => {
    const probe = new Image()
    probe.onload = () => setSrc('/product.png')
    probe.src = '/product.png'
  }, [])

  return (
    <div className="hero-product-col hero-fade-up hero-fade-up-delay-2 hero-product-wrap">
      <div className="hero-product-glow" aria-hidden="true" />
      <div className="hero-product-float">
        <img
          src={src}
          alt="ตัวอย่างผลิตภัณฑ์ FORMCRAFT"
          className="hero-product-spin"
          style={{ width: '220px', maxWidth: '70%', height: 'auto' }}
        />
      </div>
    </div>
  )
}
