import { useEffect, useState } from 'react'

function getTimeLeft(targetDate) {
  const diff = +new Date(targetDate) - +new Date()
  if (diff <= 0) return null
  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  if (!timeLeft) {
    return (
      <p className="text-lg font-medium text-gold-300">Les inscriptions sont ouvertes dès maintenant.</p>
    )
  }

  const units = [
    { label: 'Jours', value: timeLeft.jours },
    { label: 'Heures', value: timeLeft.heures },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Secondes', value: timeLeft.secondes },
  ]

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md">
      {units.map((u) => (
        <div
          key={u.label}
          className="bg-white/10 border border-gold-400/30 rounded-xl px-2 py-3 sm:py-4 text-center backdrop-blur-sm"
        >
          <div className="font-display text-2xl sm:text-4xl text-white tabular-nums">
            {String(u.value).padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gold-300 mt-1">{u.label}</div>
        </div>
      ))}
    </div>
  )
}
