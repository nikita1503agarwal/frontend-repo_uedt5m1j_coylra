import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 text-white pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/95 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Innovazione Chimica per la Concia e le Specialità
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-lg text-blue-100/85 max-w-2xl"
          >
            Sviluppiamo, produciamo e supportiamo soluzioni chimiche ad alte prestazioni per l’industria della pelle e applicazioni speciali. Affidabilità, qualità e competenza scientifica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link to="/prodotti" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/20">
              Esplora Prodotti <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/settori" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 text-white font-medium">
              Settori
            </Link>
            <Link to="/contatti" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 text-white font-medium">
              Contatti
            </Link>
          </motion.div>
        </div>
        <div className="py-24">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Tecnologia, Sostenibilità, Risultati</h3>
            <p className="text-blue-100/80 mt-2">Approccio tecnico rigoroso, impianti moderni e laboratori applicativi per soluzioni affidabili e a basso impatto.</p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[{k:'brevetti',v:'+20'},{k:'linee prodotto',v:'+50'},{k:'paesi serviti',v:'+30'}].map((m)=> (
                <div key={m.k} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-2xl font-bold text-blue-400">{m.v}</p>
                  <p className="text-xs uppercase tracking-wide text-blue-100/60">{m.k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
