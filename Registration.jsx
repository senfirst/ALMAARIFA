import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import Reveal from './Reveal'
import Countdown from './Countdown'
import { SITE } from '../siteConfig'
import { submitRegistration } from '../lib/registrationService'

const LEVELS = ['Préscolaire', 'CI']

const initialForm = {
  childLastName: '',
  childFirstName: '',
  birthDate: '',
  level: '',
  parentName: '',
  phone: '',
  address: '',
  message: '',
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-emerald-950/80 mb-1.5 block">{label}</span>
      {children}
    </label>
  )
}

const inputClass =
  'w-full rounded-xl border border-emerald-950/15 bg-white px-4 py-3 text-emerald-950 placeholder:text-emerald-950/35 focus:outline-none focus:ring-2 focus:ring-gold-500/60 focus:border-gold-500 transition-colors'

export default function Registration() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | done | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitRegistration(form)
      setStatus('done')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="inscriptions" className="relative py-24 sm:py-32 bg-emerald-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/students.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-950/90 to-emerald-950" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white">
            Inscriptions ouvertes {SITE.year}
          </h2>
          <p className="mt-4 text-white/75 text-lg">
            Les inscriptions démarrent à partir du <span className="text-gold-300 font-medium">15 septembre 2026</span>.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex justify-center">
          <Countdown targetDate={SITE.registrationStart} />
        </Reveal>

        <Reveal delay={150} className="mt-16 text-left">
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-2xl">
            {status === 'done' ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto text-emerald-600" size={52} />
                <h3 className="mt-5 text-2xl font-semibold text-emerald-950">Demande envoyée</h3>
                <p className="mt-2 text-emerald-950/70">
                  Merci ! Votre demande d'inscription a bien été reçue. Notre équipe vous contactera
                  très prochainement par téléphone ou WhatsApp.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 inline-flex items-center justify-center bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-medium transition-colors focus-ring"
                >
                  Envoyer une nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <Field label="Nom de l'enfant">
                  <input required className={inputClass} value={form.childLastName} onChange={update('childLastName')} />
                </Field>
                <Field label="Prénom">
                  <input required className={inputClass} value={form.childFirstName} onChange={update('childFirstName')} />
                </Field>
                <Field label="Date de naissance">
                  <input required type="date" className={inputClass} value={form.birthDate} onChange={update('birthDate')} />
                </Field>
                <Field label="Niveau demandé">
                  <select required className={inputClass} value={form.level} onChange={update('level')}>
                    <option value="" disabled>
                      Choisir un niveau
                    </option>
                    {LEVELS.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Nom du parent / tuteur">
                  <input required className={inputClass} value={form.parentName} onChange={update('parentName')} />
                </Field>
                <Field label="Téléphone">
                  <input required type="tel" className={inputClass} value={form.phone} onChange={update('phone')} />
                </Field>
                <Field label="Adresse">
                  <input required className={`${inputClass} sm:col-span-2`} value={form.address} onChange={update('address')} />
                </Field>
                <Field label="Message (optionnel)">
                  <textarea rows={4} className={`${inputClass} sm:col-span-2 resize-none`} value={form.message} onChange={update('message')} />
                </Field>

                <div className="sm:col-span-2">
                  {status === 'error' && (
                    <p className="text-sm text-red-600 mb-3">
                      Une erreur est survenue. Merci de réessayer ou de nous contacter directement.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 disabled:opacity-70 text-emerald-950 px-6 py-4 rounded-full font-semibold text-lg transition-colors focus-ring"
                  >
                    {status === 'submitting' && <Loader2 size={20} className="animate-spin" />}
                    Envoyer la demande
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
