import { SITE } from '../siteConfig'

const LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#institut', label: "L'Institut" },
  { href: '#niveaux', label: 'Niveaux' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#inscriptions', label: 'Inscriptions' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-emerald-950 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center text-center gap-5">
          <img src="/logo.png" alt="Logo Institut Al Maarifa" className="h-16 w-auto" />
          <div>
            <p className="text-white font-display text-xl">{SITE.name}</p>
            <p className="text-white/60 mt-1">{SITE.address}</p>
            <p className="text-white/60">{SITE.phones.join(' / ')}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-gold-300 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="gold-rule w-full max-w-xs mt-2" />

          <p className="text-white/45 text-sm">© 2026 Institut Al Maarifa — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
