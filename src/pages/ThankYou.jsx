
import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <main className="page-shell">
      <section className="section page-hero">
        <div className="container thankyou-wrap">
          <div className="eyebrow">הפנייה התקבלה</div>
          <h1 className="section-heading">תודה, הפנייה שלכם נשלחה בהצלחה</h1>
          <p>
            הפרטים נשמרו בהצלחה. בעוד רגע ייפתח גם WhatsApp עם ההודעה המוכנה,
            כדי שתוכלו לשלוח אותה בלחיצה אחת.
          </p>

          <div className="thankyou-actions">
            <Link className="btn" to="/">חזרה לדף הבית</Link>
            <Link className="btn btn-outline" to="/portfolio">לצפייה בגלריה</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
