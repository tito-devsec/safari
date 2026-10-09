import { useRef, useState } from 'react'
import gsap from 'gsap'
import { Monitor } from './Icons.jsx'

const QA = [
  { q: 'How do I book a trip with Royal flame Safari?',
    a: 'You can book by selecting your preferred experience on our website and submitting the booking inquiry form. Our team will then contact you to customize details and confirm availability.' },
  { q: 'Can I customize my trip itinerary?',
    a: 'A: Yes. All our experiences are flexible. We tailor itineraries based on your travel dates, interests, budget, and group size.' },
  { q: 'Are Zanzibar day trips private or shared?',
    a: 'Most Zanzibar tours can be arranged as private experiences. Shared options are available upon request.' },
  { q: 'Are safaris suitable for families and first-time travelers?',
    a: 'A: Absolutely. We design safaris for families, couples, honeymooners, and first-time safari guests, prioritizing safety and comfort.' },
]

function Item({ q, a, open, onToggle }) {
  const body = useRef(null)
  const toggle = () => {
    const el = body.current
    if (open) {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.35, ease: 'power2.inOut' })
    } else {
      gsap.set(el, { height: 'auto' })
      gsap.from(el, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.out' })
    }
    onToggle()
  }
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <span className="faq-icon"><Monitor /></span>
      <div className="faq-panel">
        <button className="faq-q" onClick={toggle} aria-expanded={open}>
          <span>{q}</span>
          <span className="faq-toggle" aria-hidden>{open ? '−' : '+'}</span>
        </button>
        <div ref={body} className="faq-a" style={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}>
          <p>{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [active, setActive] = useState(0)
  return (
    <section id="contact" className="section faq">
      <div className="container faq-grid">
        <div className="faq-img" data-reveal="left">
          <img src="/images/faq-monkey.jpg" alt="Monkey in the forest" />
        </div>
        <div className="faq-content" data-reveal="right">
          <span className="faq-label">FAQ</span>
          <h2 className="faq-title">You Can Find All<br />Answers Here</h2>
          <div className="faq-list">
            {QA.map((item, i) => (
              <Item key={i} {...item} open={active === i} onToggle={() => setActive(active === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
