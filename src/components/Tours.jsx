import { ArrowUpRight } from './Icons.jsx'

const TOURS = [
  { title: 'Spice Farm Tour and Local Culture', img: '/images/tour-spice.jpg' },
  { title: 'Jozani Forest & Red Monkeys', img: '/images/tour-jozani.jpg' },
  { title: 'Sand Banks & Blue Lagoon', img: '/images/tour-sandbank.jpg' },
]

export default function Tours() {
  return (
    <section id="tours" className="tours">
      <div className="container">
        <div className="tours-head" data-reveal="up">
          <span className="label-serif red">Handpicked Tours</span>
          <h2 className="tours-title">Experience the Island</h2>
          <p className="tours-desc">
            Every tour is private and personal. No crowded buses, no rush — just you, the island, and stories you'll
            tell forever.
          </p>
        </div>
        <div className="tours-divider" />

        <div className="tour-grid" data-stagger>
          {TOURS.map((t) => (
            <article className="tour-card" key={t.title} data-item>
              <img src={t.img} alt={t.title} />
              <a href="#contact" className="tour-card-body">
                <span className="icon-sq lg"><ArrowUpRight /></span>
                <span className="tour-card-title">{t.title}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
