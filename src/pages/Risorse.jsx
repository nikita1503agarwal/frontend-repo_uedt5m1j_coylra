import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Risorse(){
  const [news, setNews] = useState([])
  const [docs, setDocs] = useState([])

  useEffect(()=>{
    fetch(`${API}/api/news`).then(r=>r.json()).then(setNews).catch(()=>{})
    fetch(`${API}/api/documents`).then(r=>r.json()).then(setDocs).catch(()=>{})
  },[])

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Risorse</h1>

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="font-semibold">News</h3>
            <div className="mt-3 space-y-3">
              {news.map(n => (
                <article key={n.slug} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs text-blue-300">{n.published_at || ''}</p>
                  <h4 className="text-lg font-semibold">{n.title}</h4>
                  <p className="text-blue-100/85">{n.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
          <aside>
            <h3 className="font-semibold">Download</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {docs.map((d,i)=>(
                <li key={i} className="rounded-lg border border-white/10 bg-white/5 p-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{d.title}</p>
                    <p className="text-blue-200 text-xs">{d.category}</p>
                  </div>
                  <a className="text-blue-300 underline" href={d.url} target="_blank">Scarica</a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Risorse
