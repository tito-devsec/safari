const CELLS = [
  { type: 'img', src: '/images/why-thumb-1.jpg', alt: 'Zanzibar beach' },
  { type: 'card', tone: 'dark', title: 'Local Expertise', text: "Native guides with deep knowledge of Tanzania's wildlife and culture" },
  { type: 'img', src: '/images/why-thumb-2.jpg', alt: 'Traveller in the forest' },
  { type: 'card', tone: 'gold', title: 'Safari & Beach Specialists', text: 'Expertly curated experiences combining adventure with relaxation' },
  { type: 'img', src: '/images/why-thumb-3.jpg', alt: 'Boats on the beach' },
  { type: 'card', tone: 'gold', title: 'Professional Service', text: 'Safety-first approach with premium accommodations and transport' },
]

export default function WhyUs() {
  return (
    <section className="section why">
      <img src="/images/shape-iconbox.png" alt="" className="sketch sketch-bridge" data-parallax="0.3" />
      <img src="/images/shape-4.png" alt="" className="sketch sketch-tower" data-parallax="0.2" />
      <div className="container">
        <div className="section-head" data-reveal="up">
          <span className="section-sub">Next Adventure Destination</span>
          <h2 className="section-title syne">Why You Should Work With Us</h2>
          <p className="section-desc">
            Are you tired of the typical tourist destinations and looking<br />to step out of your comfort zonetravel
          </p>
        </div>

        <div className="why-grid" data-stagger>
          {CELLS.map((c, i) =>
            c.type === 'img' ? (
              <div className="why-img" key={i} data-item><img src={c.src} alt={c.alt} /></div>
            ) : (
              <div className={`why-card ${c.tone}`} key={i} data-item>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
