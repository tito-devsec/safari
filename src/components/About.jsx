import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function About() {
  const stamp = useRef(null)

  useEffect(() => {
    const tween = gsap.to(stamp.current, { rotate: 360, duration: 18, ease: 'none', repeat: -1 })
    return () => tween.kill()
  }, [])

  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-text" data-reveal="left">
          <span className="section-sub section-sub-lg">About Us</span>
          <h2 className="about-title">About Royal<br />Flame Tour</h2>
          <p>
            We are a premier Tanzania-based tour operator specializing in creating extraordinary safari and beach
            experiences. With deep local expertise and a passion for showcasing East Africa’s natural wonders, we design
            journeys that exceed expectations.
          </p>
          <a href="#contact" className="btn btn-dark">LEARN MORE</a>
        </div>

        <div className="about-visual" data-reveal="right">
          <img src="/images/map-shape.png" alt="" className="about-map" />
          <img src="/images/about-photo.png" alt="Safari in Tanzania" className="about-photo" />
          <img ref={stamp} src="/images/about-stamp.png" alt="" className="about-stamp" />
          <img src="/images/star.png" alt="" className="about-star" data-parallax="0.4" />
          <img src="/images/shape-bridge.png" alt="" className="about-bridge" data-parallax="0.2" />
        </div>
      </div>
    </section>
  )
}
