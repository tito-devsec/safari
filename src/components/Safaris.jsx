const TRIPS = [
  { title: 'Selous National Park', img: '/images/safari-selous.jpg', cta: 'View Trip Details' },
  { title: 'Mikumi National Park', img: '/images/safari-mikumi.jpg', cta: 'View Trip' },
  { title: 'Mafia whale shark tour', img: '/images/safari-mafia.jpg', cta: 'View Trip' },
]

export default function Safaris() {
  return (
    // Static (fixed) background image, as requested for the middle sections
    <section id="safaris" className="section safaris">
      <div className="safaris-overlay" />
      <img src="/images/shape-trip-1.png" alt="" className="sketch sketch-plane" data-parallax="0.3" />
      <img src="/images/shape-trip-2.png" alt="" className="sketch sketch-bag" data-parallax="0.25" />
      <div className="container">
        <div className="section-head light" data-reveal="up">
          <span className="tag-pill">Explore The World</span>
          <h2 className="section-title">Most Visited Safaris</h2>
        </div>

        <div className="trip-grid" data-stagger>
          {TRIPS.map((t) => (
            <article className="trip-card" key={t.title} data-item>
              <div className="trip-thumb"><img src={t.img} alt={t.title} /></div>
              <h3>{t.title}</h3>
              <p className="trip-cat">Category: Day Trips</p>
              <a href="#contact" className="btn btn-orange">{t.cta}</a>
            </article>
          ))}
        </div>

        <div className="center" data-reveal="up">
          <a href="#tours" className="btn btn-light">SEE MORE TOURS</a>
        </div>
      </div>
    </section>
  )
}
