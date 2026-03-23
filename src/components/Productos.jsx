import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CheeseWedge from './svgs/CheeseWedge'
import './Productos.css'

gsap.registerPlugin(ScrollTrigger)

const BrickPhoto = ({ alt, style }) => (
  <img
    src="/bricks  de leche.jpeg"
    alt={alt}
    className="panel__product-photo"
    style={style}
  />
)

const PANELS = [
  {
    id: 'entera',
    bg: '#0d1f3c',
    text: '#ffffff',
    label: 'ENTERA',
    sub: 'Toda la cremosidad del Pirineo',
    detail: '3,6% MG',
    nutrition: [
      { label: 'Energía',    value: '~65 kcal' },
      { label: 'Grasas',     value: '~3,6 g' },
      { label: 'Proteínas',  value: '~3,2 g' },
      { label: 'Azúcares',   value: '~4,7 g' },
    ],
    component: <BrickPhoto alt="Copirineo Leche Entera" />,
    deco: 'drops',
  },
  {
    id: 'semi',
    bg: '#3d6b35',
    text: '#ffffff',
    label: 'SEMI',
    sub: 'Equilibrio y sabor natural',
    detail: '0,3g MG/100ml',
    nutrition: [
      { label: 'Energía',    value: '34 kcal' },
      { label: 'Grasas',     value: '0,3 g' },
      { label: 'Proteínas',  value: '3,15 g' },
      { label: 'Azúcares',   value: '4,75 g' },
    ],
    component: <BrickPhoto alt="Copirineo Leche Semidesnatada" style={{ filter: 'hue-rotate(80deg) saturate(0.7) brightness(1.1)' }} />,
    deco: 'leaves',
  },
  {
    id: 'desnatada',
    bg: '#ede8dd',
    text: '#0a0a0a',
    wide: true,
    label: 'DESNATADA',
    sub: 'Ligereza sin renunciar al origen',
    detail: '0,1% MG',
    nutrition: [
      { label: 'Energía',    value: '~35 kcal' },
      { label: 'Grasas',     value: '~0,1 g' },
      { label: 'Proteínas',  value: '~3,4 g' },
      { label: 'Azúcares',   value: '~4,8 g' },
    ],
    component: <BrickPhoto alt="Copirineo Leche Desnatada" style={{ filter: 'saturate(0.3) brightness(1.05)' }} />,
    deco: 'mountains',
  },
  {
    id: 'queso',
    bg: '#c4a35a',
    text: '#0a0a0a',
    label: 'QUESO',
    sub: 'Artesanal · Curación natural',
    detail: 'PIRINEO',
    nutrition: [
      { label: 'Energía',    value: '~370 kcal' },
      { label: 'Grasas',     value: '~30 g' },
      { label: 'Proteínas',  value: '~25 g' },
      { label: 'Sal',        value: '~1,5 g' },
    ],
    component: <CheeseWedge width={260} />,
    deco: 'knife',
  },
]

export default function Productos() {
  const sectionRef  = useRef(null)
  const trackRef    = useRef(null)
  const currentIdx  = useRef(0)
  const [dir, setDir] = useState('next') // 'next' | 'prev'

  const handleArrow = () => {
    const track = trackRef.current
    if (!track) return
    const panels = track.querySelectorAll('.panel')
    const next = dir === 'next' ? currentIdx.current + 1 : currentIdx.current - 1
    const clamped = Math.max(0, Math.min(next, panels.length - 1))
    panels[clamped]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    currentIdx.current = clamped
    // Flip al llegar a los bordes
    if (clamped === panels.length - 1) setDir('prev')
    else if (clamped === 0) setDir('next')
  }

  useEffect(() => {
    const mobile = window.innerWidth <= 768

    if (mobile) {
      // En móvil: scroll nativo CSS, aseguramos que GSAP no toca el track
      if (trackRef.current) {
        gsap.set(trackRef.current, { clearProps: 'all' })
      }
      return
    }

    const track   = trackRef.current
    const section = sectionRef.current
    if (!track || !section) return

    const getTotal = () => track.scrollWidth - window.innerWidth

    const st = ScrollTrigger.create({
      animation: gsap.to(track, {
        x: () => -getTotal(),
        ease: 'none',
      }),
      trigger: section,
      start: 'top top',
      end: () => `+=${getTotal()}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    })

    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => st.kill()
  }, [])

  return (
    <section ref={sectionRef} id="productos" className="productos">
      {/* Label lateral fijo (desktop) */}
      <div className="productos__sidebar" aria-hidden="true">
        <span className="productos__sidebar-small">NUESTROS</span>
        <span className="productos__sidebar-big">PRODUCTOS</span>
      </div>

      {/* Header móvil */}
      <div className="productos__mobile-header" aria-hidden="true">
        <span className="productos__mobile-label">NUESTROS PRODUCTOS</span>
        <span className="productos__mobile-hint">← SWIPE →</span>
      </div>

      {/* Track horizontal */}
      <div ref={trackRef} className="productos__track">
        {PANELS.map((panel, i) => (
          <div
            key={panel.id}
            className={`panel${panel.wide ? ' panel--wide' : ''}`}
            style={{ background: panel.bg, color: panel.text }}
          >
            {/* Número decorativo fondo */}
            <span className="panel__num" style={{ color: `${panel.text}10` }}
              aria-hidden="true">0{i + 1}</span>

            {/* Label — encoge y vuela a esquina en hover */}
            <div className="panel__label-wrap">
              <h2 className="panel__label">{panel.label}</h2>
              <p className="panel__sub" style={{ color: `${panel.text}90` }}>
                {panel.sub}
              </p>
            </div>

            {/* Zona hover fija — no se mueve, evita feedback loop */}
            <div className="panel__hover-zone" aria-hidden="true" />

            {/* Producto — se centra en hover */}
            <div className="panel__product">{panel.component}</div>

            {/* Badge */}
            <div className="panel__badge"
              style={{ borderColor: `${panel.text}30`, color: panel.text }}>
              {panel.detail}
            </div>

            {/* Tabla nutricional — aparece centrada bajo el brick */}
            {panel.nutrition && (
              <div className="panel__nutrition">
                <p className="panel__nutrition-header"
                  style={{ color: `${panel.text}45` }}>
                  Por 100 ml
                </p>
                {panel.nutrition.map((row, j) => (
                  <div key={j} className="panel__nutrition-row"
                    style={{ borderColor: `${panel.text}18`, '--delay': `${j * 0.07}s` }}>
                    <span style={{ color: `${panel.text}65` }}>{row.label}</span>
                    <span className="panel__nutrition-val"
                      style={{ color: panel.text }}>{row.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Decoraciones */}
            {panel.deco === 'drops' && <DropsDeco color={panel.text} />}
            {panel.deco === 'leaves' && <LeavesDeco color={panel.text} />}
            {panel.deco === 'mountains' && <MiniMountains color={panel.text} />}
            {panel.deco === 'knife' && <KnifeDeco color={panel.text} />}

          </div>
        ))}
      </div>

      {/* Flecha flotante móvil — una sola, cambia de sentido */}
      <button
        className={`productos__float-arrow${dir === 'prev' ? ' productos__float-arrow--prev' : ''}`}
        onClick={handleArrow}
        aria-label={dir === 'next' ? 'Siguiente producto' : 'Producto anterior'}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  )
}

// ===== DECOS SVG =====
function DropsDeco({ color }) {
  return (
    <svg className="panel__deco panel__deco--drops" viewBox="0 0 80 200" fill="none">
      {[0,1,2,3,4].map(i => (
        <ellipse key={i} cx={12 + i * 14} cy={30 + i * 34} rx="5" ry="9"
          fill={color} opacity="0.08" />
      ))}
    </svg>
  )
}

function LeavesDeco({ color }) {
  return (
    <svg className="panel__deco panel__deco--leaves" viewBox="0 0 100 200" fill="none">
      <path d="M50,180 Q20,120 50,80 Q80,120 50,180Z" fill={color} opacity="0.07"/>
      <path d="M70,160 Q45,110 70,70 Q95,110 70,160Z" fill={color} opacity="0.05"/>
      <path d="M30,150 Q5,100 30,60 Q55,100 30,150Z" fill={color} opacity="0.05"/>
    </svg>
  )
}

function MiniMountains({ color }) {
  return (
    <svg className="panel__deco panel__deco--mountains" viewBox="0 0 200 80" fill="none">
      <polygon points="0,80 40,20 80,50 120,10 160,35 200,15 200,80" fill={color} opacity="0.07"/>
    </svg>
  )
}

function KnifeDeco({ color }) {
  return (
    <svg className="panel__deco panel__deco--knife" viewBox="0 0 40 200" fill="none">
      {/* mango */}
      <rect x="12" y="140" width="16" height="50" rx="4" fill={color} opacity="0.15"/>
      {/* hoja */}
      <polygon points="20,140 12,30 20,20 28,30 20,140" fill={color} opacity="0.12"/>
      {/* filo */}
      <line x1="20" y1="25" x2="20" y2="140" stroke={color} strokeWidth="0.5" opacity="0.3"/>
    </svg>
  )
}
