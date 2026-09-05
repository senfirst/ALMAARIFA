import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../siteConfig'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Bonjour, je souhaite avoir des informations sur l'Institut Al Maarifa.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter l'Institut sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform focus-ring"
    >
      <MessageCircle size={26} fill="white" className="text-[#25D366]" />
    </a>
  )
}
