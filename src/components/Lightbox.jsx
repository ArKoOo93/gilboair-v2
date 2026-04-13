
import { useEffect } from 'react'

export default function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKey(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onPrev()
      if (event.key === 'ArrowLeft') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  if (activeIndex === null) return null
  const item = items[activeIndex]

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} type="button">×</button>
      <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); onPrev() }} type="button">‹</button>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.title} />
        <div className="lightbox-copy">
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </div>
      </div>
      <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); onNext() }} type="button">›</button>
    </div>
  )
}
