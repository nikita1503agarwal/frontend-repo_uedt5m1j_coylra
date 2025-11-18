import { Beaker, Leaf, ShieldCheck, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

export function IntroSections() {
  const cards = [
    {
      icon: Beaker,
      title: 'Prodotti e Soluzioni',
      desc: 'Gamma completa per concia delle pelli e specialità ad alto valore.',
      to: '/prodotti'
    },
    {
      icon: Search,
      title: 'Ricerca & Sviluppo',
      desc: 'Laboratori applicativi, sviluppo su misura, validazione sui materiali.',
      to: '/azienda'
    },
    {
      icon: ShieldCheck,
      title: 'Qualità e Sicurezza',
      desc: 'Standard certificati, tracciabilità, controllo di processo continuo.',
      to: '/risorse'
    },
    {
      icon: Leaf,
      title: 'Sostenibilità',
      desc: 'Soluzioni per ridurre impatti, consumo d’acqua e sostanze critiche.',
      to: '/risorse'
    }
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, desc, to }) => (
            <Link key={title} to={to} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-600/90 grid place-items-center shadow-md shadow-blue-500/20">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{desc}</p>
              <p className="mt-4 text-sm text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">Approfondisci →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Portiamo la chimica oltre lo standard</h2>
        <p className="mt-4 text-blue-100/85 max-w-2xl mx-auto">Progettiamo insieme soluzioni affidabili, performanti e sostenibili per i tuoi processi. Contatta i nostri tecnici per una valutazione dedicata.</p>
        <Link to="/contatti" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium mt-8">Parla con un esperto</Link>
      </div>
    </section>
  )
}
