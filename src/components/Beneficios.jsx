import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Beneficios.css'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
  { num: '01', title: 'Cero intermediarios', desc: 'Del establo en Graus al lineal aragonés. Sin caminos largos, sin manos de más. La cadena más corta posible.' },
  { num: '02', title: 'Vacas felices',       desc: 'Más de 200 días al año en el exterior. Pasto libre en el Pirineo oscense. Una vaca feliz da mejor leche — sin excepciones.' },
  { num: '03', title: 'Tradición oscense',   desc: 'Familias ganaderas de la Ribagorza de generación en generación. Este oficio no se aprende en un curso, se hereda.' },
  { num: '04', title: 'KM0 de verdad',       desc: 'Producida y distribuida en Aragón. No son cientos de kilómetros en camión. Es leche de aquí, para los de aquí.' },
  { num: '05', title: 'Sin aditivos',        desc: 'Sin conservantes, sin estabilizantes, sin nada que no sea leche del Pirineo. La etiqueta más limpia es la que no necesita explicarse.' },
  { num: '06', title: '100% aragonesa',      desc: 'Huesca, Zaragoza, Teruel. Copirineo es de Aragón y para Aragón. Orgullo de tierra, no de marketing.' },
]

export default function Beneficios() {
  const sectionRef = useRef(null)
  const titleRef   = useRef(null)
  const gridRef    = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const title   = titleRef.current
    const grid    = gridRef.current
    if (!section || !title || !grid) return

    const titleSpans = Array.from(title.querySelectorAll('.line-wrap span'))
    const lines      = Array.from(grid.querySelectorAll('.bene__line'))
    const rows       = Array.from(grid.querySelectorAll('.bene__row'))

    const triggers = []

    // Título reveal
    if (titleSpans.length) {
      triggers.push(
        ScrollTrigger.create({
          trigger: title,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              titleSpans,
              { clipPath: 'inset(0 0 100% 0)' },
              { clipPath: 'inset(0 0 0% 0)', duration: 0.9, stagger: 0.15, ease: 'power3.out' }
            )
          },
        })
      )
    }

    // Líneas separadoras: scaleX 0→1 al scroll
    lines.forEach(line => {
      triggers.push(
        ScrollTrigger.create({
          trigger: line,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              line,
              { scaleX: 0, transformOrigin: 'left center' },
              { scaleX: 1, duration: 0.8, ease: 'power3.out' }
            )
          },
        })
      )
    })

    // Filas: translateX + fade
    rows.forEach(row => {
      triggers.push(
        ScrollTrigger.create({
          trigger: row,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              row,
              { x: -40, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
            )
          },
        })
      )
    })

    return () => triggers.forEach(t => t.kill())
  }, [])

  return (
    <section ref={sectionRef} id="beneficios" className="beneficios">
      {/* Foto fondo izquierda */}
      <div className="beneficios__photo-bg" aria-hidden="true">
        <img src="/vacas grass fed.jpeg" alt="" />
      </div>

      <div className="beneficios__inner">

        {/* Título vertical sticky */}
        <div ref={titleRef} className="beneficios__title-block">
          <div className="line-wrap"><span className="bene__t1">SIGUE</span></div>
          <div className="line-wrap"><span className="bene__t2">SIENDO</span></div>
          <div className="line-wrap"><span className="bene__t3">BUENA</span></div>
        </div>

        {/* Grid de beneficios */}
        <div ref={gridRef} className="beneficios__grid">
          {ITEMS.map((item) => (
            <div key={item.num}>
              <div className="bene__line" />
              <div className="bene__row">
                <span className="bene__num">{item.num}</span>
                <div className="bene__body">
                  <h3 className="bene__title">{item.title}</h3>
                  <p className="bene__desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="bene__line" />
        </div>

      </div>
    </section>
  )
}
