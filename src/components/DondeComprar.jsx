import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AragonMap from './svgs/AragonMap'
import './DondeComprar.css'

gsap.registerPlugin(ScrollTrigger)

const PUNTOS = [
  'Supermercados',
  'Tiendas locales',
  'Mercados comarcales',
  'Hostelería aragonesa',
]

export default function DondeComprar() {
  const sectionRef   = useRef(null)
  const titleCercaRef = useRef(null)
  const titleDetiRef  = useRef(null)
  const listRef       = useRef(null)
  const mapRef        = useRef(null)

  useEffect(() => {
    const section   = sectionRef.current
    const titleCerca = titleCercaRef.current
    const titleDeti  = titleDetiRef.current
    const mapEl      = mapRef.current
    const listItems  = listRef.current
      ? Array.from(listRef.current.querySelectorAll('.donde__item'))
      : []

    if (!section) return

    // Estado inicial vía GSAP (no CSS) para que sea visible si JS falla
    if (mapEl) gsap.set(mapEl, { x: 60 })
    gsap.set(listItems, { opacity: 0, x: -30 })

    const triggers = []

    // Título reveal línea a línea con clip-path
    triggers.push(
      ScrollTrigger.create({
        trigger: section,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            [titleCerca, titleDeti],
            { clipPath: 'inset(0 0 100% 0)' },
            { clipPath: 'inset(0 0 0% 0)', duration: 0.9, stagger: 0.18, ease: 'power3.out' }
          )
        },
      })
    )

    // Puntos de venta: stagger desde izquierda
    if (listItems.length) {
      triggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: 'top 70%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              listItems,
              { x: -30, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
            )
          },
        })
      )
    }

    // Mapa: fade + slide desde la derecha
    if (mapEl) {
      triggers.push(
        ScrollTrigger.create({
          trigger: mapEl,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              mapEl,
              { opacity: 0, x: 60 },
              { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
            )
          },
        })
      )
    }

    return () => triggers.forEach(t => t.kill())
  }, [])

  return (
    <section ref={sectionRef} id="donde" className="donde">
      <div className="donde__grid">

        {/* Izquierda */}
        <div className="donde__left">
          <h2 className="donde__title">
            <span className="line-wrap">
              <span ref={titleCercaRef} className="donde__title-cerca">CERCA</span>
            </span>
            <span className="line-wrap">
              <span ref={titleDetiRef} className="donde__title-deti">DE TI</span>
            </span>
          </h2>

          <p className="donde__desc">
            Producida en granjas aragonesas, procesada en Binéfar.
            Distribuida en Aragón sin rodeos ni almacenes lejanos.
            Si eres aragonés, ya tienes Copirineo cerca.
          </p>

          <ul ref={listRef} className="donde__list">
            {PUNTOS.map((p, i) => (
              <li key={i} className="donde__item">
                <span className="donde__arrow">→</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Derecha: mapa protagonista */}
        <div ref={mapRef} className="donde__map-col" style={{ opacity: 0 }}>
          <AragonMap width={560} />
        </div>

      </div>
    </section>
  )
}
