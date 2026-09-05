import { BookMarked, Moon, Globe2, Users } from 'lucide-react'
import Reveal from './Reveal'

const PILLARS = [
  {
    icon: BookMarked,
    title: 'Savoirs fondamentaux',
    desc: 'Apprentissage solide des bases scolaires : lecture, écriture, calcul et éveil scientifique.',
  },
  {
    icon: Moon,
    title: 'Valeurs islamiques',
    desc: 'Une éducation fondée sur les valeurs, le respect et la discipline au quotidien.',
  },
  {
    icon: Globe2,
    title: 'Enseignement franco-arabe',
    desc: 'Une formation qui combine le programme français et la langue arabe.',
  },
  {
    icon: Users,
    title: 'Accompagnement',
    desc: 'Un suivi attentif et personnalisé de chaque élève, en lien avec les familles.',
  },
]

export default function Pedagogy() {
  return (
    <section id="pedagogie" className="py-20 sm:py-28 bg-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-geo-pattern opacity-[0.15]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-gold-400 font-medium tracking-wide text-sm mb-3">NOTRE APPROCHE PÉDAGOGIQUE</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Une pédagogie équilibrée, entre savoir et valeurs
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full bg-white/5 border border-gold-400/20 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-gold-400/40 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-400/30 flex items-center justify-center mb-5">
                  <p.icon size={22} className="text-gold-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
