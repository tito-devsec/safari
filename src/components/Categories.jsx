import { ArrowCircleRight } from './Icons.jsx'

const CARDS = [
  { title: 'Zanzibar Tours', img: '/images/cat-zanzibar.jpg' },
  { title: 'Tanzania Mainland', img: '/images/cat-mainland.jpg' },
  { title: 'Day Trips', img: '/images/cat-daytrips.jpg' },
]

export default function Categories() {
  return (
    <section id="tours" className="section categories">
      <img src="/images/shape-trip-01.png" alt="" className="sketch sketch-left" data-parallax="0.3" />
      <div className="container">
        <div className="section-head" data-reveal="up">
          <span className="section-sub">Choose Your Adventure</span>
          <h2 className="section-title">Our Most Popular Experiences</h2>
        </div>
        <div className="cat-grid" data-stagger>
          {CARDS.map((c) => (
            <article className="cat-card" key={c.title} data-item>
              <div className="cat-thumb">
                <img src={c.img} alt={c.title} />
                <span className="featured">// Featured</span>
              </div>
              <h3>{c.title}</h3>
              <a href="#safaris" className="btn btn-gold btn-sm">Explore Tours <ArrowCircleRight className="btn-icon" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
