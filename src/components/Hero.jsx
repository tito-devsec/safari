import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ArrowUpRight, ChevronLeft, ChevronRight } from './Icons.jsx'

// Background video (kept from the previous version): plays 0:15 → 1:20 on a loop, muted.
const VIDEO_ID = '3zUuxEiMcVo'
const START = 15
const END = 80

const CARDS = [
  { title: 'Mnemba Island', img: '/images/hero-card-mnemba.jpg' },
  { title: 'Spice Farm', img: '/images/hero-card-spice.jpg' },
  { title: 'Jozani & Mtende', img: '/images/hero-card-jozani.jpg' },
]
const GAP = 20

function loadYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT)
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => { prev && prev(); resolve(window.YT) }
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const s = document.createElement('script')
      s.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(s)
    }
  })
}

export default function Hero() {
  const root = useRef(null)
  const videoHost = useRef(null)
  const track = useRef(null)
  const busy = useRef(false)
  // Order of the cards. The track renders the list twice so sliding never shows a gap.
  const [order, setOrder] = useState(CARDS.map((_, i) => i))

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.3 })
      tl.fromTo('.hero-title .line', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 })
        .fromTo('.hero-btns > *', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }, '-=0.4')
        .fromTo('.hcard', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }, '-=0.3')
        .fromTo('.hero-tagline', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
      gsap.fromTo('.hero-poster', { scale: 1 }, { scale: 1.08, duration: 14, ease: 'none', repeat: -1, yoyo: true })
    }, root)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let player, timer, cancelled = false
    loadYouTubeApi().then((YT) => {
      if (cancelled || !videoHost.current) return
      player = new YT.Player(videoHost.current, {
        videoId: VIDEO_ID,
        playerVars: { autoplay: 1, mute: 1, controls: 0, rel: 0, showinfo: 0, modestbranding: 1, playsinline: 1, loop: 1, start: START, end: END, iv_load_policy: 3, disablekb: 1, fs: 0 },
        events: {
          onReady: (e) => { e.target.mute(); e.target.seekTo(START, true); e.target.playVideo() },
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.PLAYING) {
              gsap.to('.hero-video', { opacity: 1, duration: 1.2 })
              clearInterval(timer)
              timer = setInterval(() => {
                if (player.getCurrentTime && player.getCurrentTime() >= END - 0.3) player.seekTo(START, true)
              }, 500)
            }
            if (e.data === YT.PlayerState.ENDED) { player.seekTo(START, true); player.playVideo() }
          },
        },
      })
    })
    return () => { cancelled = true; clearInterval(timer); try { player && player.destroy() } catch { /* ignore */ } }
  }, [])

  const step = () => track.current.querySelector('.hcard').getBoundingClientRect().width + GAP

  const next = () => {
    if (busy.current) return
    busy.current = true
    gsap.to(track.current, {
      x: -step(), duration: 0.6, ease: 'power3.inOut',
      onComplete: () => { setOrder((o) => [...o.slice(1), o[0]]); gsap.set(track.current, { x: 0 }); busy.current = false },
    })
  }
  const prev = () => {
    if (busy.current) return
    busy.current = true
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)])
    gsap.fromTo(track.current, { x: -step() }, { x: 0, duration: 0.6, ease: 'power3.inOut', onComplete: () => { busy.current = false } })
  }

  const cards = [...order, ...order]

  return (
    <section id="home" className="hero" ref={root}>
      <div className="hero-bg">
        <img className="hero-poster" src="/images/zanzibar-aerial.jpg" alt="" />
        <div className="hero-video"><div ref={videoHost} /></div>
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line">Explore <span className="script">Zanzibar</span></span>
          <span className="line">With a Local..</span>
        </h1>
        <div className="hero-btns">
          <a href="#packages" className="btn-yellow">Packages</a>
          <a href="#contact" className="btn-white">Book Now</a>
        </div>

        <div className="hero-carousel">
          <button className="carousel-btn prev" aria-label="Previous" onClick={prev}><ChevronLeft /></button>
          <div className="hero-viewport">
            <div className="hero-track" ref={track}>
              {cards.map((idx, i) => (
                <article className="hcard" key={`${idx}-${i}`} aria-hidden={i >= order.length}>
                  <img src={CARDS[idx].img} alt={CARDS[idx].title} />
                  <a href="#tours" className="hcard-label">
                    <span className="icon-sq"><ArrowUpRight /></span>
                    <span>{CARDS[idx].title}</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
          <button className="carousel-btn next" aria-label="Next" onClick={next}><ChevronRight /></button>
        </div>

        <p className="hero-tagline">Tours, transfers &amp; experiences, The local way. Hakuna matata.</p>
      </div>
    </section>
  )
}
