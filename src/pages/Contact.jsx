
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import { siteConfig } from '../siteConfig'

export default function Contact() {
  return (
    <main className="page-shell">
      <section className="section page-hero">
        <div className="container contact-page-grid">
          <div>
            <SectionTitle
              eyebrow="יצירת קשר"
              title="בואו נדבר על הצילום הבא שלכם"
              text="מלאו את הטופס ונחזור אליכם בהקדם. אפשר גם ליצור קשר ישירות בטלפון או ב־WhatsApp."
            />
            <div className="contact-info-list reveal">
              <a className="panel contact-chip" href={`tel:${siteConfig.phoneHref}`}>
                <strong>טלפון</strong>
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a className="panel contact-chip" href={`https://wa.me/${siteConfig.whatsappHref}`} target="_blank" rel="noreferrer">
                <strong>WhatsApp</strong>
                <span>{siteConfig.whatsappDisplay}</span>
              </a>
              <a className="panel contact-chip" href={`mailto:${siteConfig.email}`}>
                <strong>אימייל</strong>
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
