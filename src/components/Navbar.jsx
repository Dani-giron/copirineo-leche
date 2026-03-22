import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    // Fade in on load
    gsap.fromTo(nav,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )

    // Scroll: add class when past hero
    const onScroll = () => {
      if (window.scrollY > 80) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#historia', label: 'Historia' },
    { href: '#productos', label: 'Productos' },
    { href: '#beneficios', label: 'Valores' },
    { href: '#donde', label: 'Dónde Comprar' },
  ]

  return (
    <nav ref={navRef} className="navbar">
      <a href="#" className="navbar__logo">
        <img src="/logo.png" alt="Copirineo" className="navbar__logo-img" />
      </a>
      <ul className="navbar__links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className="navbar__link">{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
