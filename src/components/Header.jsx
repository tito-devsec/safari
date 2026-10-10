import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Facebook, Instagram, WhatsApp } from './Icons.jsx'

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'About', href: '#about' },
  { label: 'Tours', href: '#tours' },
  { label: 'Transfers', href: '#transfers' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panel = useRef(null)
  const backdrop = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    gsap.set(panel.current, { xPercent: 100 })
    gsap.set(backdrop.current, { autoAlpha: 0 })
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power3.inOut' } })
    if (open) {
      document.body.style.overflow = 'hidden'
      tl.to(backdrop.current, { autoAlpha: 1, duration: 0.35 })
        .to(panel.current, { xPercent: 0 }, '<')
        .fromTo(panel.current.querySelectorAll('[data-oc]'), { x: 30, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.07, duration: 0.45, ease: 'power2.out' }, '-=0.2')
    } else {
      document.body.style.overflow = ''
      tl.to(panel.current, { xPercent: 100 }).to(backdrop.current, { autoAlpha: 0, duration: 0.3 }, '<')
    }
  }, [open])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-sticky' : ''}`}>
        <div className="header-inner">
          <a href="#home" className="logo-chip" aria-label="islandBoy Zanzibar Travel">
            <img src="/images/islandboy-logo.png" alt="islandBoy Zanzibar Travel" />
          </a>

          <nav className="main-nav" aria-label="Primary">
            <ul>
              {NAV.map((n) => <li key={n.label}><a href={n.href}>{n.label}</a></li>)}
            </ul>
          </nav>

          <div className="header-right">
            <a href="#contact" className="btn-book">Book Now</a>
            <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div ref={backdrop} className="offcanvas-backdrop" onClick={() => setOpen(false)} />
      <aside ref={panel} className="offcanvas" aria-hidden={!open}>
        <button className="offcanvas-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        <div className="offcanvas-logo" data-oc>
          <img src="/images/islandboy-logo.png" alt="islandBoy Zanzibar Travel" />
        </div>
        <ul className="offcanvas-nav" data-oc>
          {NAV.map((n) => (
            <li key={n.label}><a href={n.href} onClick={() => setOpen(false)}>{n.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="btn-yellow offcanvas-book" data-oc onClick={() => setOpen(false)}>Book Now</a>
        <div className="offcanvas-social" data-oc>
          <a href="#" aria-label="WhatsApp"><WhatsApp /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
          <a href="#" aria-label="Facebook"><Facebook /></a>
        </div>
      </aside>
    </>
  )
}
