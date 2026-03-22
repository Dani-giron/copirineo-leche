import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Historia.css'

gsap.registerPlugin(ScrollTrigger)

export default function Historia() {
  const sectionRef  = useRef(null)
  const numRef      = useRef(null)
  const titleLine1  = useRef(null)
  const titleLine2  = useRef(null)
  const textRef     = useRef(null)
  const statsRef    = useRef(null)
  const svgRef      = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Número parallax (sticky + lento)
      gsap.to(numRef.current, {
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })

      // Título: reveal línea a línea con clip-path
      const titleLines = [titleLine1.current, titleLine2.current]
      gsap.fromTo(titleLines,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      )

      // Texto + stats fadeIn
      gsap.fromTo([textRef.current, statsRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          }
        }
      )

      // SVG: entra desde abajo, parallax más rápido
      gsap.fromTo(svgRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 85%',
          }
        }
      )

      // Stats counter animation
      const statEls = statsRef.current?.querySelectorAll('[data-count]')
      statEls?.forEach(el => {
        const target = parseFloat(el.dataset.count)
        const suffix = el.dataset.suffix || ''
        const proxy  = { val: 0 }
        gsap.to(proxy, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate() {
            el.textContent = Math.round(proxy.val).toLocaleString('es-ES') + suffix
          },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            once: true,
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="historia" className="historia">
      <div className="historia__grid">
        {/* Col 1: número decorativo */}
        <div className="historia__num-col">
          <span ref={numRef} className="historia__num" aria-hidden="true">01</span>
        </div>

        {/* Col 2: contenido */}
        <div className="historia__content">
          <h2 className="historia__title">
            <span className="line-wrap">
              <span ref={titleLine1} className="historia__title-main">GANADEROS</span>
            </span>
            <span className="line-wrap">
              <span ref={titleLine2} className="historia__title-sub">de Aragón</span>
            </span>
          </h2>

          <div ref={textRef} className="historia__text">
            <p>
              Somos familias ganaderas aragonesas. Nuestros abuelos ya
              cuidaban estas vacas, y nuestros hijos seguirán haciéndolo.
              En Aragón, nuestras vacas Holstein pastan en los pastos
              de montaña como siempre ha sido — con espacio, con tiempo,
              sin atajos.
            </p>
            <p>
              Aquí no hay intermediarios. La leche sale de las granjas
              aragonesas, se procesa en Binéfar y llega directa
              a los lineales aragoneses. Kilómetro cero de verdad. Ganadería extensiva que cuida el animal,
              respeta el territorio y mantiene vivo el paisaje oscense
              de generación en generación.
            </p>
          </div>

          <div ref={statsRef} className="historia__stats">
            <div className="historia__stat-item">
              <span className="historia__stat-num">
                <span data-count="0">0</span>
              </span>
              <span className="historia__stat-label">Intermediarios</span>
            </div>
            <div className="historia__stat-item">
              <span className="historia__stat-num">
                <span data-count="100" data-suffix="%">0%</span>
              </span>
              <span className="historia__stat-label">Oscense</span>
            </div>
            <div className="historia__stat-item">
              <span className="historia__stat-num">KM0</span>
              <span className="historia__stat-label">Distribución directa</span>
            </div>
          </div>
        </div>

        {/* Col 3: foto Ribagorza */}
        <div ref={svgRef} className="historia__illustration">
          <img
            src="/vacas en campo.jpeg"
            alt="Vacas Holstein en los pastos de la Ribagorza, Huesca"
            className="historia__photo"
            loading="lazy"
          />
          <img
            src="/vacas prado (4).jpeg"
            alt="Cooperativa Láctea Altoaragón, Graus"
            className="historia__photo historia__photo--secondary"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
