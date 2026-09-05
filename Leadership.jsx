import Reveal from './Reveal'

export default function Leadership() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-[220px_1fr] gap-10 items-center">
        <Reveal>
          <div className="relative mx-auto sm:mx-0 w-48 sm:w-full">
            <div className="rounded-full overflow-hidden border-4 border-gold-400/40 shadow-[0_10px_35px_rgba(6,36,25,0.15)] aspect-square">
              <img
                src="/images/responsable.jpg"
                alt="Responsable de l'Institut Al Maarifa Thierno Djibril Ousmane Ba"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="text-center sm:text-left">
          <p className="text-gold-600 font-medium tracking-wide text-sm mb-3">RESPONSABLE</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-emerald-950">La direction de l'Institut</h2>
          <div className="gold-rule w-16 my-6 mx-auto sm:mx-0" />
          <p className="text-emerald-950/75 leading-relaxed max-w-lg mx-auto sm:mx-0">
            Sous la direction de l'Institut, l'établissement veille chaque jour à conjuguer exigence
            académique et transmission des valeurs islamiques, dans un cadre bienveillant et structuré
            pour chaque élève accueilli à Bambilor – Darou Salam.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
