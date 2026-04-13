
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { siteConfig } from '../siteConfig'

export default function ContactForm() {
  const navigate = useNavigate()
  const initial = { name: '', phone: '', email: '', message: '' }
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ type: '', text: '' })

  const whatsappUrl = useMemo(() => {
    const body = [
      'פנייה חדשה מהאתר GilboAir',
      `שם: ${form.name || '-'}`,
      `טלפון: ${form.phone || '-'}`,
      `אימייל: ${form.email || '-'}`,
      `הודעה: ${form.message || '-'}`
    ].join('\n')
    return `https://wa.me/${siteConfig.whatsappHref}?text=${encodeURIComponent(body)}`
  }, [form])

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ type: '', text: '' })

    if (!form.name || !form.phone || !form.message) {
      setStatus({ type: 'error', text: 'נא למלא שם, טלפון והודעה.' })
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data?.message || 'השליחה נכשלה')
      }

      setStatus({ type: 'success', text: 'הפנייה נשלחה. כעת ייפתח WhatsApp עם ההודעה המוכנה.' })
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
        navigate('/thank-you')
      }, 450)
      setForm(initial)
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'אירעה שגיאה.' })
    }
  }

  return (
    <form className="panel form reveal" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="שם מלא"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="טלפון"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="אימייל"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        rows="5"
        placeholder="ספרו על האירוע / העסק / הנכס / הפרויקט"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      />
      <div className="form-actions">
        <button className="btn" type="submit">שליחת פנייה ב־WhatsApp</button>
        <a className="btn btn-outline" href={whatsappUrl} target="_blank" rel="noreferrer">
          לפתוח ידנית
        </a>
      </div>
      {status.text ? <div className={`form-status ${status.type}`}>{status.text}</div> : null}
    </form>
  )
}
