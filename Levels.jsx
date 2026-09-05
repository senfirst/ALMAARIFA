import { Baby, BookOpen } from 'lucide-react'
import Reveal from './Reveal'

const LEVELS = [
  {
    icon: Baby,
    title: 'Préscolaire',
    desc: "Un environnement chaleureux et sécurisant pour les tout-petits, pensé pour éveiller la curiosité, développer le langage et poser les toutes premières bases de l'apprentissage, dans le respect du rythme de chaque enfant.",
    points: ['Éveil et motricité', 'Premiers repères en français et en arabe', 'Jeux éducatifs encadrés'],
  },
  {
    icon: BookOpen,
    title: 'CI',
    desc: "Le cours d'initiation installe durablement la lecture, l'écriture et le calcul, aux côtés d'un apprentissage structuré de la langue arabe et des enseignements islamiques, selon le programme officiel franco-arabe.",
    points: ['Lecture, écriture, calcul', 'Langue arabe et éducation islamique', 'Suivi individualisé'],
  },
]

export default function Levels() {
  return (
    <section id="niveaux" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-gold-600 font-medium tracking-wide text-sm mb-3">NOS NIVEAUX</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">
            Deux niveaux d'accueil pour bien démarrer
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {LEVELS.map((level, i) => (
            <Reveal key={level.title} delay={i * 120}>
              <div className="card-frame h-full p-8 sm:p-10 bg-sand-50 hover:shadow-[0_16px_40px_rgba(6,36,25,0.12)] transition-shadow duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-900 flex items-center justify-center mb-6">
                  <level.icon size={26} className="text-gold-300" />
                </div>
                <h3 className="text-2xl font-semibold text-emerald-950 mb-3">{level.title}</h3>
                <p className="text-emerald-950/75 leading-relaxed mb-6">{level.desc}</p>
                <ul className="space-y-2 border-t border-emerald-950/10 pt-5">
                  {level.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-emerald-950/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
