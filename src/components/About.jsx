import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Mirrors the original's "chose-3" layout: the stamp ring turns once every 15s while the
// compass star in its centre stays still, the photo is pulled up 140px so it overlaps the
// stamp, and the bridge sketch is pinned to the bottom-right corner of the whole section.
export default function About() {
  const stamp = useRef(null)

  useEffect(() => {
    const tween = gsap.to(stamp.current, { rotate: 360, duration: 15, ease: 'none', repeat: -1 })
    return () => tween.kill()
  }, [])

  return (
    <section id="about" className="section about">
      <div className="about-inner">
        <div className="about-left" data-reveal="left">
          <span className="about-sub">About Us</span>
          <h2 className="about-title">About Royal<br />Flame Tour</h2>
          <p>
            We are a premier Tanzania-based tour operator specializing in creating extraordinary safari and beach
            experiences. With deep local expertise and a passion for showcasing East Africa’s natural wonders, we design
            journeys that exceed expectations.
          </p>
          <div className="about-btn-wrap">
            <a href="#contact" className="tg-btn">Learn More</a>
          </div>
        </div>

        <div className="about-right" data-reveal="right">
          <div className="chose-left">
            <img src="/images/map-shape.png" alt="" className="chose-map" />
            <div className="chose-row">
              <div className="chose-col-4">
                <div className="chose-rounded">
                  <img ref={stamp} src="/images/about-stamp.png" alt="Royal Flame Safari" className="chose-stamp" />
                  <img src="/images/star.png" alt="" className="chose-star" />
                </div>
              </div>
              <div className="chose-col-8">
                <div className="chose-thumb-inner"><div className="chose-thumb-2" /></div>
              </div>
            </div>
          </div>
          <img src="/images/about-photo.png" alt="Safari vehicle beside a giraffe in Tanzania" className="about-photo" />
        </div>
      </div>

      <img src="/images/shape-bridge.png" alt="" className="about-bridge" />
    </section>
  )
}
