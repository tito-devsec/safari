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
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        const from = el.dataset.reveal || 'up'
        const vars = { opacity: 0, duration: 1, ease: 'power3.out' }
        if (from === 'up') vars.y = 50
        if (from === 'left') vars.x = -60
        if (from === 'right') vars.x = 60
        if (from === 'scale') vars.scale = 0.9
        gsap.from(el, { ...vars, scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      })

      // Staggered card groups
      gsap.utils.toArray('[data-stagger]').forEach((group) => {
        const items = group.querySelectorAll('[data-item]')
        gsap.from(items, {
          opacity: 0, y: 60, duration: 0.9, ease: 'power3.out', stagger: 0.15,
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
