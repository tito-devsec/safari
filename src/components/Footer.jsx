import { NAV } from './Header.jsx'
import { Facebook, Instagram, WhatsApp } from './Icons.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/islandboy-logo.png" alt="islandBoy Zanzibar Travel" />
            <p>Tours, transfers &amp; experiences, the local way. Hakuna matata.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <ul>{NAV.map((n) => <li key={n.label}><a href={n.href}>{n.label}</a></li>)}</ul>
          </nav>
          <div className="footer-social">
            <a href="#" aria-label="WhatsApp"><WhatsApp /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="Facebook"><Facebook /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 islandBoy Zanzibar Travel. All rights reserved.</span>
          <span>Zanzibar, Tanzania</span>
        </div>
      </div>
    </footer>
  )
}
