import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

export default function Hero() {
  const heroRef      = useRef(null)
  const bgTextRef    = useRef(null)
  const locatorRef   = useRef(null)
  const linesRef     = useRef([])
  const dividerRef   = useRef(null)
  const paraRef      = useRef(null)
  const btnRef       = useRef(null)
  const cartonRef    = useRef(null)
  const blobRef      = useRef(null)

  linesRef.current = []
  const addLine = el => { if (el) linesRef.current.push(el) }

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // 1. Texto de fondo
    tl.fromTo(bgTextRef.current,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.out' }
    )
    // 2. Blob / círculo detrás del brick
    .fromTo(blobRef.current,
      { scale: 0, transformOrigin: 'center center' },
      { scale: 1, duration: 1, ease: 'back.out(1.2)' },
      '-=0.8'
    )
    // 3. Localizador
    .fromTo(locatorRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.6'
    )
    // 4. Líneas del título (SplitText manual — cada span tiene overflow:hidden)
    .fromTo(linesRef.current,
      { y: '120%' },
      { y: '0%', duration: 0.9, stagger: 0.12 },
      '-=0.3'
    )
    // 5. Divisor + párrafo
    .fromTo([dividerRef.current, paraRef.current],
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
      '-=0.4'
    )
    // 6. Botón
    .fromTo(btnRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.3'
    )
    // 7. Brick de leche
    .fromTo(cartonRef.current,
      { x: 80, rotation: -15, scale: 0.8, opacity: 0 },
      { x: 0, rotation: -5, scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.4)' },
      '-=0.9'
    )

    return () => { tl.kill() }
  }, [])

  const titleLines = [
    { text: 'LA',     cls: 'hero__title-la' },
    { text: 'MEJOR',  cls: 'hero__title-mejor' },
    { text: 'LECHE',  cls: 'hero__title-leche' },
    { text: 'EN TU',  cls: 'hero__title-en' },
    { text: 'CASA',   cls: 'hero__title-casa' },
  ]

  return (
    <section ref={heroRef} className="hero grain">
      {/* Foto de fondo: vacas en el Pirineo */}
      <div className="hero__photo-bg" aria-hidden="true">
        <img src="/vacas prado (1).jpeg" alt="" fetchPriority="high" />
      </div>

      {/* Capa 1: texto de fondo gigante */}
      <div ref={bgTextRef} className="hero__bg-text" aria-hidden="true">
        <span>COPIRINEO</span>
        <span>COPIRINEO</span>
        <span>COPIRINEO</span>
      </div>

      {/* Capa 2: contenido */}
      <div className="hero__grid">

        {/* Área A: localizador + título */}
        <div className="hero__top">
          <p ref={locatorRef} className="hero__locator">
            PIRINEO ARAGONÉS · GRAUS · HUESCA
          </p>
          <h1 className="hero__title">
            {titleLines.map((l, i) => (
              <span key={i} className="line-wrap">
                <span ref={addLine} className={`hero__title-line ${l.cls}`}>
                  {l.text}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Área B: brick (derecha en desktop, centro en móvil) */}
        <div className="hero__right">
          <div ref={blobRef} className="hero__blob" />
          <div ref={cartonRef} className="hero__carton">
            <img
              src="/bricks  de leche.jpeg"
              alt="Copirineo leche entera del Pirineo"
              className="hero__carton-img"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Área C: párrafo + botón */}
        <div className="hero__bottom">
          <div ref={dividerRef} className="hero__divider" />
          <p ref={paraRef} className="hero__para">
            Familias ganaderas oscenses, generaciones de oficio.<br />
            Vacas Holstein en libertad a más de 1.000 metros.<br />
            De los pastos del Pirineo a tu mesa. Cero intermediarios.
          </p>
          <a ref={btnRef} href="#productos" className="hero__cta">
            DESCUBRE <span className="hero__cta-arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
