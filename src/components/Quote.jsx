import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Quote.css'

gsap.registerPlugin(ScrollTrigger)

const LINES = [
  'No vendemos leche.',
  'Vendemos lo que pasa cuando una vaca',
  'pasa su vida entera en un prado del Pirineo.',
]

export default function Quote() {
  const sectionRef = useRef(null)
  const linesRef   = useRef([])
  const attrRef    = useRef(null)

  linesRef.current = []
  const addLine = el => { if (el) linesRef.current.push(el) }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(linesRef.current,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )
      gsap.fromTo(attrRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: attrRef.current, start: 'top 85%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="quote">
      {/* Foto fondo: vacas al atardecer con pico de montaña */}
      <div className="quote__photo-bg" aria-hidden="true">
        <img src="/WhatsApp Image 2026-03-22 at 17.26.51 (4).jpeg" alt="" />
      </div>
      <span className="quote__mark" aria-hidden="true">"</span>
      <blockquote className="quote__block">
        {LINES.map((line, i) => (
          <span key={i} className="line-wrap">
            <span ref={addLine} className="quote__line">{line}</span>
          </span>
        ))}
      </blockquote>
      <p ref={attrRef} className="quote__attr">
        — Ganaderos de Copirineo, Ribagorza (Huesca)
      </p>
    </section>
  )
}
