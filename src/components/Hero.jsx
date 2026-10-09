import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowCircleRight } from './Icons.jsx'

// Same YouTube background video as the live site (plays 0:15 → 1:20 on a loop, muted).
const VIDEO_ID = '3zUuxEiMcVo'
const START = 15
const END = 80

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

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.3 })
      tl.from('.hero-pill', { y: 30, opacity: 0, duration: 0.8 })
        .from('.hero-title .word', { y: 60, opacity: 0, duration: 0.9, stagger: 0.08 }, '-=0.4')
        .from('.hero-sub', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-btns > *', { y: 30, opacity: 0, duration: 0.7, stagger: 0.15 }, '-=0.5')
      // subtle slow zoom on the poster while the video loads
      gsap.fromTo('.hero-poster', { scale: 1 }, { scale: 1.08, duration: 14, ease: 'none', repeat: -1, yoyo: true })
    }, root)
    return () => ctx.revert()
  }, [])

  // Background video
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

  const words = (text) => text.split(' ').map((w, i) => <span className="word" key={i}>{w}&nbsp;</span>)

  return (
    <section id="home" className="hero" ref={root}>
      <div className="hero-bg">
        <img className="hero-poster" src="/images/hero-bg.png" alt="" />
        <div className="hero-video"><div ref={videoHost} /></div>
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <span className="hero-pill">Royal flame tour</span>
        <h1 className="hero-title">
          {words('"Discover Wild beauty')}<span className="highlight">{words('Of Tanzania"')}</span>
        </h1>
        <p className="hero-sub">Explore Serengeti, Ngorongoro and Zanzibar with Local Guides</p>
        <div className="hero-btns">
          <a href="#tours" className="btn btn-outline">Explore Packages <ArrowCircleRight className="btn-icon" /></a>
          <a href="#contact" className="btn btn-gold">Book Tour</a>
        </div>
      </div>
    </section>
  )
}
