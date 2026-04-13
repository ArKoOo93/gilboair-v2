
export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title reveal">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="section-heading">{title}</h1>
      <p>{text}</p>
    </div>
  )
}
