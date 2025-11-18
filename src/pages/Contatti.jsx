import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contatti(){
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${API}/api/contact`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if(res.ok) setStatus('Richiesta inviata. Grazie!')
      else setStatus('Errore durante l\'invio')
    } catch {
      setStatus('Errore di rete')
    }
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <div className="pt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Contatti</h1>
        <p className="text-blue-100/80 mt-2">Compila il form per richieste commerciali o tecniche.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-3">
            <input name="name" placeholder="Nome e Cognome" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" required />
            <input name="email" type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" required />
            <input name="phone" placeholder="Telefono" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" />
            <input name="company" placeholder="Azienda" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" />
            <select name="topic" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2">
              <option value="commerciale">Commerciale</option>
              <option value="tecnico">Tecnico</option>
              <option value="altro">Altro</option>
            </select>
            <input name="subject" placeholder="Oggetto" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" />
            <textarea name="message" placeholder="Messaggio" rows="5" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" required />
            <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500">Invia</button>
            {status && <p className="text-sm text-blue-200">{status}</p>}
          </form>

          <div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Contatti principali</h3>
              <p className="text-blue-100/85 mt-2">Telefono: +39 000 000 000</p>
              <p className="text-blue-100/85">Email: info@chemtech.example</p>
              <p className="text-blue-100/85">Uffici: Via della Chimica 1, 20100, Italia</p>
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Sedi</h3>
              <div className="mt-2 space-y-2 text-sm text-blue-100/85">
                <p>HQ – Milano</p>
                <p>Stabilimento – Lombardia</p>
                <p>Laboratori – Veneto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contatti
