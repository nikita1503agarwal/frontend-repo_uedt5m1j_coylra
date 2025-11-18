import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Careers(){
  const [jobs, setJobs] = useState([])
  const [status, setStatus] = useState('')

  useEffect(()=>{
    fetch(`${API}/api/jobs`).then(r=>r.json()).then(setJobs).catch(()=>{})
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${API}/api/applications`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if(res.ok) setStatus('Candidatura inviata. Grazie!')
      else setStatus('Errore durante l\'invio')
    } catch {
      setStatus('Errore di rete')
    }
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Careers</h1>
        <p className="text-blue-100/80 mt-2">Posizioni aperte e candidature spontanee.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold">Posizioni aperte</h3>
            <div className="mt-3 space-y-3">
              {jobs.map(j => (
                <div key={j.slug} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-blue-300">{j.department}</p>
                  <h4 className="text-lg font-semibold">{j.title}</h4>
                  <p className="text-blue-100/85">{j.location} • {j.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Candidatura spontanea</h3>
            <form onSubmit={handleSubmit} className="mt-3 space-y-3">
              <input name="name" placeholder="Nome e Cognome" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" required />
              <input name="email" type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" required />
              <input name="phone" placeholder="Telefono" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" />
              <input name="linkedin_url" placeholder="LinkedIn" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" />
              <textarea name="message" placeholder="Messaggio" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" rows="4" />
              <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500">Invia candidatura</button>
              {status && <p className="text-sm text-blue-200">{status}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Careers
