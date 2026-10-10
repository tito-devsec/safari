import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight } from './Icons.jsx'

// Day 1 is the text from the design. Days 2–8 are a suggested itinerary to be confirmed.
const DAYS = [
  { title: 'Day 1: Arrival', text: "Upon arrival in Zanzibar, I'll greet you at the airport and take you to your hotel. Relax, enjoy the beach, and get ready for an adventure." },
  { title: 'Day 2: Stone Town', text: 'Walk the winding alleys of Stone Town with me: the old fort, the spice market, Freddie Mercury House and a sunset at Forodhani Gardens.' },
  { title: 'Day 3: Spice Farm & Jozani', text: 'Taste cloves, vanilla and cinnamon straight from the farm, then meet the red colobus monkeys in Jozani Forest.' },
  { title: 'Day 4: Mnemba Island', text: 'Boat trip to Mnemba atoll for snorkelling with turtles and dolphins, followed by lunch on the beach.' },
  { title: 'Day 5: Sandbank & Blue Lagoon', text: 'A full day at sea: a dhow sail, swimming in the blue lagoon and a seafood lunch on a white sandbank.' },
  { title: 'Day 6: Mikumi National Park', text: 'Fly to the mainland for a game drive in Mikumi: elephants, giraffes, zebras and lions in the wild savanna.' },
  { title: 'Day 7: Mikumi to the Beach', text: 'Morning game drive, then back to Zanzibar for a free afternoon on the beach of your choice.' },
  { title: 'Day 8: Departure', text: 'Breakfast, last souvenirs and a relaxed transfer to the airport. Kwaheri, until next time!' },
]
const GAP = 45

export default function Premium() {
  const track = useRef(null)
  const [index, setIndex] = useState(0)

  const go = (dir) => {
    const next = Math.min(Math.max(index + dir, 0), DAYS.length - 1)
    if (next === index) return
    const w = track.current.querySelector('.day-card').getBoundingClientRect().width + GAP
    gsap.to(track.current, { x: -next * w, duration: 0.6, ease: 'power3.inOut' })
    setIndex(next)
  }

  return (
    // Static (fixed) background image behind this section, as requested for the middle sections.
    <section id="packages" className="premium">
      <div className="container premium-grid">
        <div className="premium-text" data-reveal="left">
          <span className="label-serif yellow">Premium Experience</span>
          <h2 className="premium-title">#Zanzibar 8-day<br />Tour <em>Package</em></h2>
          <p>
            The ultimate, stress-free Zanzibar experience. From the deepest blue waters and historic streets to the
            wild savannas of Mikumi National Park.
          </p>
        </div>

        <div className="days" data-reveal="right">
          <button className="days-btn prev" aria-label="Previous day" onClick={() => go(-1)} disabled={index === 0}><ChevronLeft /></button>
          <div className="days-viewport">
            <div className="days-track" ref={track}>
              {DAYS.map((d, i) => (
                <article className={`day-card ${i === index ? 'is-active' : ''}`} key={d.title}>
                  <h4>{d.title}</h4>
                  <p>{d.text}</p>
                </article>
              ))}
            </div>
          </div>
          <button className="days-btn next" aria-label="Next day" onClick={() => go(1)} disabled={index === DAYS.length - 1}><ChevronRight /></button>
        </div>
      </div>
    </section>
  )
}
