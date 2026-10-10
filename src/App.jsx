import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Premium from './components/Premium.jsx'
import Tours from './components/Tours.jsx'
import Transfer from './components/Transfer.jsx'
import Footer from './components/Footer.jsx'
import ScrollTop from './components/ScrollTop.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Scroll reveals. fromTo with explicit end values is safe under StrictMode's double mount.
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        const from = el.dataset.reveal || 'up'
        const start = { opacity: 0, x: 0, y: 0 }
        if (from === 'up') start.y = 50
        if (from === 'left') start.x = -60
        if (from === 'right') start.x = 60
        gsap.fromTo(el, start, {
          opacity: 1, x: 0, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray('[data-stagger]').forEach((group) => {
        gsap.fromTo(group.querySelectorAll('[data-item]'), { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Premium />
        <Tours />
        <Transfer />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
