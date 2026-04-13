
import { Link } from 'react-router-dom'
import { siteConfig } from '../siteConfig'
import { galleryItems } from '../gallery'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'

const services = [
  'אירועים וחתונות',
  'נדל״ן ופרויקטים',
  'עסקים ותוכן שיווקי',
  'שטח, תשתיות וחקלאות'
]

const testimonials = [
  {
    title: 'נראות שמעלה את הרמה',
    text: 'צילום רחפן איכותי יוצר רושם חזק יותר כבר מהמבט הראשון, במיוחד לאירועים, נכסים ועסקים שרוצים להיראות מקצועיים באמת.'
  },
  {
    title: 'זוויות שלא מקבלים מהקרקע',
    text: 'הצילום האווירי מוסיף עומק, קנה מידה ואווירה — ומציג את המקום או האירוע בצורה הרבה יותר שלמה ומרשימה.'
  },
  {
    title: 'תוכן שעובד גם לשיווק',
    text: 'החומרים מתאימים לאתר, לרשתות, לפרסום ולחומרי תדמית, כך שהתוצאה לא רק יפה אלא גם שימושית לעסק.'
  }
]

export default function Home() {
  const featured = galleryItems.slice(0, 4)

  return (
    <main>
      <section className="hero hero-gold">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow">{siteConfig.tagline}</div>
            <h1>{siteConfig.heroTitle}</h1>
            <p>{siteConfig.heroText}</p>

            <div className="hero-actions">
              <Link className="btn" to="/contact">לקבלת הצעת מחיר</Link>
              <Link className="btn btn-outline" to="/portfolio">לצפייה בגלריה</Link>
            </div>

            <div className="hero-points">
              {services.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <div className="hero-brand-card reveal">
            <img src="/logo-eng-clean.png" alt="GilboAir" className="hero-logo" />
            <div className="brand-plate">
              <strong>זוויות מדויקות. תנועה נקייה. תוצאה שמושכת את העין.</strong>
              <p>צילום רחפן שמבליט את המקום, מעצים את הרגע ומעניק לכם חומר ויזואלי שנראה ברמה גבוהה.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle
              eyebrow="למה דווקא GilboAir"
              title="כי צילום רחפן איכותי לא נועד רק להיראות יפה — הוא נועד להציג אתכם נכון"
              text="בין אם מדובר בחתונה, בנכס, בפרויקט נדל״ן, בעסק או בצילום תדמיתי — המטרה היא להראות את המקום, האווירה והסיפור בצורה שמושכת את העין ויוצרת רושם נכון. לכן כל פרויקט נבנה סביב זוויות מדויקות, תנועה נכונה ותוצאה שמרגישה מקצועית באמת."
            />
          </div>

          <div className="panel luxury-list reveal">
            <div><strong>צילום מדויק</strong><span>זוויות שמבליטות את המקום והאווירה</span></div>
            <div><strong>התאמה לפרויקט</strong><span>מענה לאירועים, נדל״ן, עסקים ותוכן שיווקי</span></div>
            <div><strong>זמינות מהירה</strong><span>יצירת קשר פשוטה דרך טלפון, WhatsApp או טופס</span></div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionTitle
            eyebrow="טעימה מהעבודות"
            title="חומרי גלם אמיתיים שנותנים תחושת פרימיום"
            text="כמה פריימים נבחרים מהגלריה, כדי שהמבקר יבין תוך שניות את איכות הוויזואליה."
          />
          <div className="featured-grid">
            {featured.map((item) => (
              <article className="featured-card reveal" key={item.src}>
                <img src={item.src} alt={item.title} />
                <div className="featured-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="center-cta">
            <Link className="btn" to="/portfolio">לכל הגלריה</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="למה לקוחות בוחרים בצילום רחפן"
            title="יותר רושם, יותר עומק, יותר נוכחות"
            text="כשצילום אווירי נעשה נכון, הוא לא רק מוסיף יופי — הוא מחזק את התחושה, מציג את התמונה המלאה ויוצר חומר ויזואלי שמרגיש ברמה גבוהה."
          />

          <div className="services-grid trust-grid">
            {testimonials.map((item) => (
              <article className="panel service-card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container contact-page-grid">
          <div>
            <SectionTitle
              eyebrow="יצירת קשר"
              title="רוצים לקבל הצעת מחיר או לשמוע פרטים נוספים?"
              text="אפשר להשאיר פרטים כבר עכשיו ולקבל מענה מהיר. הטופס זמין גם כאן בדף הבית, כדי לחסוך מעבר לעמוד נוסף."
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
