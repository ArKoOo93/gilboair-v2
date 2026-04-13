
import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import Lightbox from '../components/Lightbox'
import { galleryItems } from '../gallery'

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <main className="page-shell">
      <section className="section page-hero">
        <div className="container">
          <SectionTitle
            eyebrow="גלריה"
            title="גלריית עבודות עם תצוגה יוקרתית ולייטבוקס לצפייה מלאה"
            text="לחיצה על תמונה פותחת תצוגה גדולה, עם ניווט קדימה ואחורה. זה נותן תחושה הרבה יותר פרימיום מתצוגה רגילה."
          />

          <div className="masonry">
            {galleryItems.map((item, index) => (
              <button className="gallery-card panel reveal gallery-button" key={item.src} onClick={() => setActiveIndex(index)} type="button">
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="gallery-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={galleryItems}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={() => setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))}
        onNext={() => setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))}
      />
    </main>
  )
}
