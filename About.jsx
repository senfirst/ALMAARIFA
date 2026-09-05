import Reveal from './Reveal'

const VALUES = [
  'Enseignement général',
  'Apprentissage de la langue arabe',
  'Éducation islamique',
  'Discipline et respect',
  'Valeurs humaines',
  'Accompagnement des enfants',
]

export default function About() {
  return (
    <section id="institut" className="relative py-20 sm:py-28 bg-sand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <div className="card-frame overflow-hidden rounded-[2rem]">
              <img
                src="/images/interior.jpg"
                alt="Espace intérieur de l'Institut Al Maarifa"
                className="w-full h-[340px] sm:h-[420px] object-cover"
              />
            </div>
            <div className="hidden sm:flex absolute -bottom-8 -right-6 bg-emerald-900 text-white rounded-2xl px-6 py-5 shadow-xl border border-gold-400/30">
              <div>
                <p className="font-display text-3xl text-gold-300">2026</p>
                <p className="text-xs text-white/70 tracking-wide">Année scolaire {`2026–2027`}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-gold-600 font-medium tracking-wide text-sm mb-3">L'INSTITUT</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950 leading-tight">
            Bienvenue à l'Institut Al Maarifa
          </h2>
          <div className="gold-rule w-16 my-6" />
          <p className="text-emerald-950/75 text-base sm:text-lg leading-relaxed">
            Situé à Bambilor – Darou Salam, l'Institut Al Maarifa Thierno Djibril Ousmane Ba est une
            école franco-arabe qui conjugue un enseignement général solide, un apprentissage rigoureux
            de la langue arabe et une éducation islamique fondée sur le respect et la discipline. En
            partenariat avec l'Institut Al-Azhar, nous accompagnons chaque enfant avec attention, pour
            construire des bases scolaires durables et un caractère ancré dans les valeurs humaines.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {VALUES.map((v) => (
              <li key={v} className="flex items-start gap-2.5 text-emerald-950/85">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                <span className="text-[15px]">{v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
