function Footer(){
  return (
    <footer className="bg-slate-950 text-blue-100/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <p className="text-white font-semibold">ChemTech</p>
          <p className="text-sm mt-2">Soluzioni chimiche per la concia delle pelli e specialità.</p>
        </div>
        <div>
          <p className="text-white font-semibold">Azienda</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Storia</li>
            <li>Mission & Vision</li>
            <li>Qualità & Sicurezza</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Risorse</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>News</li>
            <li>Cataloghi</li>
            <li>Certificazioni</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Contatti</p>
          <p className="text-sm mt-2">info@chemtech.example</p>
          <p className="text-sm">+39 000 000 000</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-blue-100/60">© {new Date().getFullYear()} ChemTech. Tutti i diritti riservati.</div>
    </footer>
  )
}

export default Footer
