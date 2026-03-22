import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Footer.css'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const bgTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgTextRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: bgTextRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <footer className="footer">
      {/* BG text parallax */}
      <span ref={bgTextRef} className="footer__bg-text" aria-hidden="true">
        COPIRINEO
      </span>

      <div className="footer__inner">
        {/* Logo */}
        <div className="footer__logo-wrap">
          <img src="/logo.png" alt="Copirineo" className="footer__logo" />
        </div>

        {/* 3 columnas */}
        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__col-label">Productos</span>
            <ul>
              {['Leche Entera', 'Semidesnatada', 'Desnatada', 'Queso Artesanal'].map(p => (
                <li key={p}><a href="#productos" className="footer__link">{p}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <span className="footer__col-label">Empresa</span>
            <ul>
              {['Historia', 'Valores', 'Contacto'].map(p => (
                <li key={p}><a href="#historia" className="footer__link">{p}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <span className="footer__col-label">Siguenos</span>
            <ul>
              {['Instagram', 'Facebook'].map(p => (
                <li key={p}><a href="#" className="footer__link">{p}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Email */}
        <div className="footer__email">
          <a href="mailto:info@copirineo.es" className="footer__email-link">
            info@copirineo.es
          </a>
        </div>

        {/* Bottom line */}
        <div className="footer__bottom">
          <span>© 2026 Copirineo</span>
          <span className="footer__dot">·</span>
          <span>Aragón</span>
          <span className="footer__dot">·</span>
          <span>Hecho en Aragón</span>
        </div>
      </div>
    </footer>
  )
}
