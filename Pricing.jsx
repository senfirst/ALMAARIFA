import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { SITE, formatFCFA } from '../siteConfig'

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            setValue(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(tick)
            else setValue(target)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return [value, ref]
}

function PriceRow({ label, amount }) {
  const [value, ref] = useCountUp(amount)
  return (
    <div ref={ref} className="flex items-center justify-between py-4 border-b border-emerald-950/10 last:border-0">
      <span className="text-emerald-950/80">{label}</span>
      <span className="font-display text-xl font-semibold text-emerald-950 tabular-nums">
        {formatFCFA(value)}
      </span>
    </div>
  )
}

export default function Pricing() {
  const { pricing } = SITE
  const [totalValue, totalRef] = useCountUp(pricing.total)

  return (
    <section id="tarifs" className="py-20 sm:py-28 bg-sand-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-gold-600 font-medium tracking-wide text-sm mb-3">TARIFS {SITE.year}</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">Nos tarifs</h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-5 gap-6 items-stretch">
          <Reveal className="sm:col-span-3">
            <div className="card-frame bg-white h-full p-8 sm:p-10">
              <PriceRow label="Frais d'inscription" amount={pricing.inscription} />
              <PriceRow label="Blouse" amount={pricing.blouse} />
              <PriceRow label="Mensualité" amount={pricing.mensualite} />
            </div>
          </Reveal>

          <Reveal delay={120} className="sm:col-span-2">
            <div
              ref={totalRef}
              className="h-full bg-emerald-950 rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center border border-gold-400/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-geo-pattern opacity-20" />
              <p className="relative text-gold-300 tracking-wide text-sm mb-2">TOTAL</p>
              <p className="relative font-display text-4xl sm:text-5xl font-semibold text-white tabular-nums">
                {formatFCFA(totalValue)}
              </p>
              <a
                href="#inscriptions"
                className="relative mt-7 inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-emerald-950 px-6 py-3 rounded-full font-semibold transition-colors focus-ring w-full"
              >
                Commencer l'inscription
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
