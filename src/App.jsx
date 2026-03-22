import './styles/globals.css'
import './styles/fonts.css'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Marquee      from './components/Marquee'
import Historia     from './components/Historia'
import Productos    from './components/Productos'
import Beneficios   from './components/Beneficios'
import Quote        from './components/Quote'
import DondeComprar from './components/DondeComprar'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Historia />
        <Productos />
        <Beneficios />
        <Quote />
        <DondeComprar />
      </main>
      <Footer />
    </>
  )
}
