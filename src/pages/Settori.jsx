import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Settori(){
  const [sectors, setSectors] = useState([])

  useEffect(()=>{
    fetch(`${API}/api/sectors`).then(r=>r.json()).then(setSectors).catch(()=>{})
  },[])

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Settori</h1>
        <p className="text-blue-100/80 mt-2">Mercati serviti e soluzioni proposte.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map(s => (
            <div key={s.slug} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              {s.challenges?.length>0 && (
                <div className="mt-3">
                  <p className="text-sm text-blue-300">Sfide</p>
                  <ul className="list-disc list-inside text-sm text-blue-100/90">
                    {s.challenges.map((c,i)=>(<li key={i}>{c}</li>))}
                  </ul>
                </div>
              )}
              {s.solutions?.length>0 && (
                <div className="mt-3">
                  <p className="text-sm text-blue-300">Soluzioni</p>
                  <ul className="list-disc list-inside text-sm text-blue-100/90">
                    {s.solutions.map((c,i)=>(<li key={i}>{c}</li>))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Settori
