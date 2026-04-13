
import { siteConfig } from '../siteConfig'
import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <main className="page-shell">
      <section className="section page-hero">
        <div className="container">
          <SectionTitle
            eyebrow="אודות"
            title={siteConfig.aboutTitle}
            text={siteConfig.aboutText}
          />
          <div className="about-grid">
            <div className="panel reveal">
              <h3>מה חשוב בכל צילום</h3>
              <p>להבין מה צריך לבלוט בפריים — הגודל של המקום, האווירה של האירוע, הסביבה של הנכס או התחושה שהמותג צריך לשדר.</p>
            </div>
            <div className="panel reveal">
              <h3>איך זה עובד</h3>
              <p>מתחילים בהבנת הצורך, מתכננים את הצילום, מגיעים ללוקיישן עם כיוון ברור ומסיימים עם חומרים מדויקים שמתאימים לשיווק, לאתר או לזיכרון מהאירוע.</p>
            </div>
            <div className="panel reveal">
              <h3>למי זה מתאים</h3>
              <p>לזוגות, אולמות וגני אירועים, יזמי נדל״ן, בעלי עסקים, מותגים, פרויקטים ותוכן שצריך להיראות טוב יותר מהאוויר.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
