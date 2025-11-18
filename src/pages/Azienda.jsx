import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Azienda(){
  const [company, setCompany] = useState(null)
  useEffect(()=>{
    fetch(`${API}/api/company`).then(r=>r.json()).then(setCompany).catch(()=>{})
  },[])

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <div className="pt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">L'Azienda</h1>
        {company && (
          <>
            <p className="text-blue-100/80 mt-2">{company.mission || 'Mission orientata a innovazione, qualità e sostenibilità.'}</p>
            {company.history && (
              <div className="mt-6">
                <h3 className="font-semibold">Storia</h3>
                <p className="text-blue-100/85 mt-2">{company.history}</p>
              </div>
            )}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-semibold">Impianti e Laboratori</h4>
                <ul className="list-disc list-inside text-sm text-blue-100/90 mt-2">
                  {(company.facilities || ['Reparto sintesi','Laboratori applicativi','Controllo qualità']).map((f,i)=>(<li key={i}>{f}</li>))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-semibold">Presenza</h4>
                <ul className="list-disc list-inside text-sm text-blue-100/90 mt-2">
                  {(company.locations || ['HQ - Italia','Stabilimento produzione','Uffici commerciali']).map((f,i)=>(<li key={i}>{f}</li>))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Azienda
