import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { MapMarker, Phone, Envelope, Facebook, Twitter, GooglePlus, Instagram } from './Icons.jsx'

export const NAV = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Zanzibar Tours', href: '#tours' },
  { label: 'Tanzania Tours', href: '#tours' },
  { label: 'Day Trips', href: '#safaris' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panel = useRef(null)
  const backdrop = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Offcanvas slides in from the right
    gsap.set(panel.current, { xPercent: 100 })
    gsap.set(backdrop.current, { autoAlpha: 0 })
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power3.inOut' } })
    if (open) {
      document.body.style.overflow = 'hidden'
      tl.to(backdrop.current, { autoAlpha: 1, duration: 0.35 })
        .to(panel.current, { xPercent: 0 }, '<')
        .from(panel.current.querySelectorAll('[data-oc]'), { x: 30, opacity: 0, stagger: 0.07, duration: 0.45, ease: 'power2.out' }, '-=0.2')
    } else {
      document.body.style.overflow = ''
      tl.to(panel.current, { xPercent: 100 }).to(backdrop.current, { autoAlpha: 0, duration: 0.3 }, '<')
    }
  }, [open])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-sticky' : ''}`}>
        <div className="header-inner">
          <a href="#home" className="logo" aria-label="Royal Flame Safari">
            <img src="/images/logo.png" alt="Royal Flame Safari" />
          </a>

          <nav className="main-nav" aria-label="Primary">
            <ul>
              {NAV.map((n) => (
                <li key={n.label}><a href={n.href} className={n.active ? 'active' : ''}>{n.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="header-right">
            <span className="v-sep" />
            <a href="#contact" className="book-link">BOOK TOUR</a>
            <span className="v-sep" />
            <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Offcanvas sidebar */}
      <div ref={backdrop} className="offcanvas-backdrop" onClick={() => setOpen(false)} />
      <aside ref={panel} className="offcanvas" aria-hidden={!open}>
        <button className="offcanvas-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        <div className="offcanvas-logo" data-oc>
          <img src="/images/hero-badge.png" alt="Royal Flame Safari's" />
        </div>
        <ul className="offcanvas-nav" data-oc>
          {NAV.map((n) => (
            <li key={n.label}><a href={n.href} onClick={() => setOpen(false)}>{n.label}</a></li>
          ))}
        </ul>
        <div className="offcanvas-info">
          <div className="info-item" data-oc>
            <span className="info-icon"><MapMarker /></span>
            <div><h6>Office Address</h6><p>Zanzibar, Tanzania</p></div>
          </div>
          <div className="info-item" data-oc>
            <span className="info-icon"><Phone /></span>
            <div><h6>Phone Number</h6><p><a href="tel:+255778718843">+255 778 718 843</a></p></div>
          </div>
          <div className="info-item" data-oc>
            <span className="info-icon"><Envelope /></span>
            <div><h6>Email Address</h6><p><a href="mailto:info@royalflamesafaris.com">info@royalflamesafaris.com</a></p></div>
          </div>
        </div>
        <div className="offcanvas-social" data-oc>
          <a href="#" aria-label="Facebook"><Facebook /></a>
          <a href="#" aria-label="Twitter"><Twitter /></a>
          <a href="#" aria-label="Google Plus"><GooglePlus /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
        </div>
      </aside>
    </>
  )
}
