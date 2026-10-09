import { Star } from './Icons.jsx'

// Quotes are exactly as they appear on the live site (the second one is cut short there too).
const ITEMS = [
  { name: 'David & Lisa Chen', country: 'Australia', avatar: '/images/avatar-1.png',
    quote: '"Exceptional service from start to finish. Our family safari was well-organized, safe, and created memories that will last a lifetime."' },
  { name: 'Sarah & Michael Johnson', country: 'United States', avatar: '/images/avatar-2.png',
    quote: '"Our honeymoon safari with Royal Flame was absolutely magical! The guides were knowledgeable, accommodations were luxurious, a' },
  { name: 'Emma Thompson', country: 'United Kingdom', avatar: '/images/avatar-3.png',
    quote: '"The Sea & Safari combination was perfect. Three days in Serengeti followed by beach relaxation in Zanzibar. Highly recommend!"' },
]

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <img src="/images/shape-test-1.png" alt="" className="sketch sketch-t1" data-parallax="0.3" />
      <img src="/images/shape-test-2.png" alt="" className="sketch sketch-t2" data-parallax="0.2" />
      <div className="container">
        <div className="section-head light" data-reveal="up">
          <span className="section-sub">Next Adventure Destination</span>
          <h2 className="section-title syne">What Our Guests Say</h2>
        </div>

        <div className="testi-grid" data-stagger>
          {ITEMS.map((t) => (
            <article className="testi-card" key={t.name} data-item>
              <div className="testi-head">
                <img src={t.avatar} alt={t.name} />
                <div><h4>{t.name}</h4><span>{t.country}</span></div>
              </div>
              <p className="testi-quote">{t.quote}</p>
              <div className="stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => <Star key={i} />)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
