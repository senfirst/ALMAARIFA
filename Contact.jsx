import { MapPin, Phone, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import { SITE, whatsappLink, telLink } from '../siteConfig'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-gold-600 font-medium tracking-wide text-sm mb-3">CONTACT</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">Nous contacter</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 card-frame bg-sand-50 p-8 sm:p-12 grid sm:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-emerald-900 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-gold-300" />
                </span>
                <div>
                  <p className="text-sm text-emerald-950/60">Adresse</p>
                  <p className="text-emerald-950 font-medium text-lg">{SITE.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-emerald-900 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold-300" />
                </span>
                <div>
                  <p className="text-sm text-emerald-950/60">Téléphone</p>
                  {SITE.phones.map((p) => (
                    <a key={p} href={telLink(p)} className="block text-emerald-950 font-medium text-lg hover:text-emerald-700">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3">
              <a
                href={telLink(SITE.phones[0])}
                className="inline-flex items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-4 rounded-full font-semibold transition-colors focus-ring"
              >
                <Phone size={19} />
                Appeler l'Institut
              </a>
              <a
                href={whatsappLink("Bonjour, je souhaite avoir des informations sur l'Institut Al Maarifa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-emerald-950 px-6 py-4 rounded-full font-semibold transition-colors focus-ring"
              >
                <MessageCircle size={19} />
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
