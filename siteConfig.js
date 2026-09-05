export const SITE = {
  name: "Institut Al Maarifa Thierno Djibril Ousmane Ba",
  shortName: "Institut Al Maarifa",
  address: "Bambilor – Darou Salam",
  phones: ["77 403 64 24", "77 572 29 37"],
  whatsappNumber: "221774036424", // international format, no plus/spaces, used for wa.me links
  registrationStart: "2026-09-15T00:00:00",
  year: "2026–2027",
  pricing: {
    inscription: 20000,
    blouse: 5000,
    mensualite: 8000,
    total: 33000,
  },
}

export function whatsappLink(message) {
  const base = `https://wa.me/${SITE.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function telLink(number) {
  return `tel:+221${number.replace(/\s/g, '')}`
}

export function formatFCFA(amount) {
  return amount.toLocaleString('fr-FR') + ' F CFA'
}
