import { MessageCircle, Phone, ArrowRight } from 'lucide-react'
import { whatsappLink, telLink, SITE } from '../siteConfig'

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/images/building.jpg"
          alt="Bâtiment de l'Institut Al Maarifa Thierno Djibril Ousmane Ba à Bambilor"
          className="h-full w-full object-cover"
          style={{ objectPosition: '65% 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-emerald-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/10 to-transparent sm:hidden" />
        <div className="absolute inset-0 bg-geo-pattern opacity-40 mix-blend-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:py-32 w-full">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 border border-gold-400/50 text-gold-300 text-xs tracking-wide px-3 py-1.5 rounded-full mb-6">
            Partenaire : Institut Al-Azhar
          </span>

          <h1 className="font-display text-white font-semibold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
            Inscriptions ouvertes
            <span className="block text-gold-400">{SITE.year}</span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-white/90 font-medium">École franco-arabe</p>

          <div className="gold-rule w-24 my-6" />

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-md">
            « Une éducation de qualité, entre savoirs modernes et valeurs islamiques »
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#inscriptions"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-emerald-950 px-6 py-3.5 rounded-full font-semibold transition-colors focus-ring"
            >
              Inscrire mon enfant
              <ArrowRight size={18} />
            </a>
            <a
              href={whatsappLink("Bonjour, je souhaite avoir des informations sur l'Institut Al Maarifa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3.5 rounded-full font-medium transition-colors focus-ring backdrop-blur-sm"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href={telLink(SITE.phones[0])}
              className="inline-flex items-center gap-2 text-white/90 hover:text-gold-300 px-2 py-3.5 font-medium transition-colors focus-ring"
            >
              <Phone size={18} />
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
