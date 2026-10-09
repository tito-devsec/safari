import { NAV } from './Header.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a href="#home" className="footer-logo"><img src="/images/logo.png" alt="Royal Flame Safari" /></a>
          <nav className="footer-nav" aria-label="Footer">
            <ul>
              {NAV.map((n) => (
                <li key={n.label}><a href={n.href} className={n.active ? 'active' : ''}>{n.label === 'Day Trips' ? 'Day trips' : n.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-divider" />
        <p className="copyright">© 2026 All Right Reserved | Designed by Mosheky</p>
      </div>
    </footer>
  )
}
