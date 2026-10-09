import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import About from './components/About.jsx'
import Safaris from './components/Safaris.jsx'
import WhyUs from './components/WhyUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'
import ScrollTop from './components/ScrollTop.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Generic reveal: any element with data-reveal fades/slides in when it scrolls into view.
    const ctx = gsap.context(() => {
      // fromTo with explicit end values: safe under React StrictMode's double mount.
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        const from = el.dataset.reveal || 'up'
        const start = { opacity: 0, x: 0, y: 0, scale: 1 }
        if (from === 'up') start.y = 50
        if (from === 'left') start.x = -60
        if (from === 'right') start.x = 60
        if (from === 'scale') start.scale = 0.9
        gsap.fromTo(el, start, {
          opacity: 1, x: 0, y: 0, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      // Staggered card groups
      gsap.utils.toArray('[data-stagger]').forEach((group) => {
        const items = group.querySelectorAll('[data-item]')
        gsap.fromTo(items, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        })
      })

      // Decorative sketches drift slowly as you scroll (parallax)
      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.2
        gsap.to(el, {
          yPercent: -40 * speed * 5, ease: 'none',
          scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: true },
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
        <Categories />
        <About />
        <Safaris />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Gallery />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
