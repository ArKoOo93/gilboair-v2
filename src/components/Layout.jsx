
import { NavLink } from 'react-router-dom'
import { siteConfig } from '../siteConfig'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <img src="/logo-heb-clean.png" alt="GilboAir" className="brand-logo" />
        </NavLink>

        <nav className="nav">
          <NavLink to="/">בית</NavLink>
          <NavLink to="/about">אודות</NavLink>
          <NavLink to="/services">שירותים</NavLink>
          <NavLink to="/portfolio">גלריה</NavLink>
          <NavLink to="/contact">יצירת קשר</NavLink>
        </nav>

        <div className="header-actions">
          <a className="link-muted" href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
          <a className="btn btn-sm" href={`https://wa.me/${siteConfig.whatsappHref}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <>
      <a
        className="floating-wa"
        href={`https://wa.me/${siteConfig.whatsappHref}?text=${encodeURIComponent(siteConfig.whatsAppGreeting)}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo-eng-clean.png" alt="GilboAir" className="footer-logo" />
            <p>{siteConfig.tagline}</p>
          </div>

          <div>
            <h4>ניווט מהיר</h4>
            <div className="footer-links">
              <NavLink to="/">בית</NavLink>
              <NavLink to="/about">אודות</NavLink>
              <NavLink to="/services">שירותים</NavLink>
              <NavLink to="/portfolio">גלריה</NavLink>
              <NavLink to="/contact">יצירת קשר</NavLink>
            </div>
          </div>

          <div>
            <h4>יצירת קשר</h4>
            <div className="footer-links">
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={`https://wa.me/${siteConfig.whatsappHref}`} target="_blank" rel="noreferrer">
                {siteConfig.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-credit">
          <a href="https://termiweb.co.il" target="_blank" rel="noreferrer">
            אתר זה נבנה ע&quot;י TermiWeb
          </a>
        </div>
      </footer>
    </>
  )
}

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
