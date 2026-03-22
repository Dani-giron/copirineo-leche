import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Marquee.css'

const TEXT = 'GANADEROS OSCENSES  •  BIENESTAR ANIMAL  •  0 INTERMEDIARIOS  •  KM0  •  100% ARAGÓN  •  RIBAGORZA · HUESCA  •  GRAUS · ARAGÓN  •  TRADICIÓN GANADERA  •  LECHE DE AQUÍ  •  '

export default function Marquee() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    // Mide el ancho de una copia y anima xPercent -50
    gsap.to(track, {
      xPercent: -50,
      duration: 18,
      ease: 'none',
      repeat: -1,
    })
    return () => gsap.killTweensOf(track)
  }, [])

  // Repetir 4 veces para que el loop sea imperceptible
  const items = Array(4).fill(TEXT)

  return (
    <div className="marquee">
      <div ref={trackRef} className="marquee__track">
        {items.map((t, i) => (
          <span key={i} className="marquee__item">{t}</span>
        ))}
      </div>
    </div>
  )
}
