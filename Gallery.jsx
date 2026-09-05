import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'

const PHOTOS = [
  { src: '/images/building.jpg', alt: 'Bâtiment principal de l\'Institut Al Maarifa', caption: 'Bâtiment principal', tall: true },
  { src: '/images/interior.jpg', alt: 'Cour intérieure et espaces de circulation', caption: 'Espace intérieur' },
  { src: '/images/building-alt.jpg', alt: 'Façade et entrée de l\'établissement', caption: 'Façade et entrée' },
  { src: '/images/students.jpg', alt: 'Élèves en activité de lecture', caption: 'Élèves en activité', tall: true },
]

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i + 1) % PHOTOS.length)
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex])

  return (
    <section id="galerie" className="py-20 sm:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-gold-600 font-medium tracking-wide text-sm mb-3">NOTRE ÉTABLISSEMENT</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">Un cadre pensé pour apprendre</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[160px] sm:auto-rows-[220px]">
          {PHOTOS.map((photo, i) => (
            <Reveal
              key={photo.src + i}
              delay={i * 80}
              className={`${photo.tall ? 'row-span-2' : 'row-span-1'} group`}
            >
              <button
                onClick={() => setOpenIndex(i)}
                className="relative w-full h-full rounded-2xl overflow-hidden card-frame focus-ring block"
                aria-label={`Agrandir : ${photo.caption}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-emerald-950/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 focus-ring rounded"
            aria-label="Fermer"
          >
            <X size={28} />
          </button>
          <button
            onClick={() => setOpenIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)}
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white p-2 focus-ring rounded"
            aria-label="Photo précédente"
          >
            <ChevronLeft size={32} />
          </button>
          <figure className="max-w-4xl w-full">
            <img
              src={PHOTOS[openIndex].src}
              alt={PHOTOS[openIndex].alt}
              className="max-h-[75vh] w-full object-contain rounded-lg"
            />
            <figcaption className="text-center text-gold-300 mt-4 text-sm">
              {PHOTOS[openIndex].caption}
            </figcaption>
          </figure>
          <button
            onClick={() => setOpenIndex((i) => (i + 1) % PHOTOS.length)}
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white p-2 focus-ring rounded"
            aria-label="Photo suivante"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  )
}
