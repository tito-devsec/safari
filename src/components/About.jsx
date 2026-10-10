import { Star, BadgeCheck, Translate, CalendarCheck, Car } from './Icons.jsx'

const REASONS = [
  { icon: BadgeCheck, text: 'Licensed local guide' },
  { icon: Translate, text: 'Fluent in Eng & Swahili' },
  { icon: CalendarCheck, text: 'Planned around you' },
  { icon: Car, text: 'Hotel pickup included' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-figure" data-reveal="left">
            <img src="/images/guide.jpg" alt="Your islandBoy guide in Stone Town" />
            <div className="rating-badge">
              <span className="rating-icon"><Star /></span>
              <div>
                <strong>5.0 Rating</strong>
                <span>Local Expert</span>
              </div>
            </div>
          </div>

          <div className="about-text" data-reveal="right">
            <span className="label-serif red">About islandBoy</span>
            <h2 className="about-title">Born &amp; Raised<br />in Zanzibar</h2>
            <p>
              I grew up exploring every corner of this island — from the winding alleys of Stone Town to the hidden
              beaches only locals know. Tourism isn't just my job, it's my way of sharing the place I love most with
              the world.
            </p>
            <a href="#tours" className="btn-dark">Learn More</a>
          </div>
        </div>

        <div className="why" data-reveal="up">
          <span className="why-label">Why Choosing islandBoy?</span>
          <div className="why-card">
            <ul className="why-list">
              {REASONS.map(({ icon: Icon, text }) => (
                <li key={text}><span className="why-icon"><Icon /></span><span>{text}</span></li>
              ))}
            </ul>
            <div className="why-photo">
              <img src="/images/why-photo.jpg" alt="Guide showing visitors around Stone Town" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
