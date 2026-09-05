import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { whatsappLink } from '../siteConfig'

const LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#institut', label: "L'Institut" },
  { href: '#niveaux', label: 'Nos niveaux' },
  { href: '#pedagogie', label: 'Pédagogie' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#inscriptions', label: 'Inscriptions' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-emerald-950/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#accueil" className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Institut Al Maarifa Thierno Djibril Ousmane Ba" className="h-11 md:h-14 w-auto" />
            <span className="hidden lg:block text-white leading-tight">
              <span className="block font-display text-lg tracking-wide">Al Maarifa</span>
              <span className="block text-[11px] text-gold-300 tracking-wider">THIERNO DJIBRIL OUSMANE BA</span>
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/85 hover:text-gold-300 transition-colors focus-ring rounded"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <a
              href={whatsappLink("Bonjour, je souhaite avoir des informations sur l'inscription.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-950 bg-white/95 hover:bg-white px-3 py-2 rounded-full text-sm font-medium transition-colors focus-ring"
            >
              <MessageCircle size={16} className="text-emerald-700" />
              WhatsApp
            </a>
            <a
              href="#inscriptions"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-emerald-950 px-4 py-2 rounded-full text-sm font-semibold transition-colors focus-ring"
            >
              Inscription
            </a>
          </div>

          <button
            className="xl:hidden text-white p-2 focus-ring rounded"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-[560px]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-6 pt-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/90 py-2.5 border-b border-white/10 text-[15px]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Bonjour, je souhaite avoir des informations sur l'inscription.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-white text-emerald-950 px-4 py-3 rounded-full text-sm font-medium"
          >
            <MessageCircle size={16} className="text-emerald-700" />
            Écrire sur WhatsApp
          </a>
          <a
            href="#inscriptions"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-gold-500 text-emerald-950 px-4 py-3 rounded-full text-sm font-semibold"
          >
            Commencer l'inscription
          </a>
        </nav>
      </div>
    </header>
  )
}
