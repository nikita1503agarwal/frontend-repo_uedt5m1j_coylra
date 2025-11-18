import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Search, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Prodotti(){
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch(`${API}/api/categories`).then(r=>r.json()).then(setCategories).catch(()=>{})
    load()
  },[])

  const load = () => {
    const url = new URL(`${API}/api/products`)
    if(query) url.searchParams.set('q', query)
    if(category) url.searchParams.set('category', category)
    fetch(url).then(r=>r.json()).then(setProducts).catch(()=>{})
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Prodotti e Soluzioni</h1>
        <p className="text-blue-100/80 mt-2">Cerca e filtra per categoria.</p>

        <div className="mt-6 grid md:grid-cols-4 gap-4">
          <div className="md:col-span-3 flex gap-2">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-blue-200"/>
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cerca prodotto" className="w-full bg-white/5 border border-white/10 rounded-md pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <button onClick={load} className="px-4 rounded-md bg-blue-600 hover:bg-blue-500">Cerca</button>
          </div>
          <div>
            <div className="relative">
              <Filter className="w-4 h-4 absolute left-3 top-3 text-blue-200"/>
              <select value={category} onChange={e=>setCategory(e.target.value)} className="w-full appearance-none bg-white/5 border border-white/10 rounded-md pl-9 pr-3 py-2">
                <option value="">Tutte le categorie</option>
                {categories.map(c => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <Link key={p.slug} to={`/prodotti/${p.slug}`} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
              <p className="text-sm text-blue-300">{p.category}</p>
              <h3 className="text-lg font-semibold mt-1">{p.name}</h3>
              <p className="text-sm text-blue-100/80 line-clamp-3 mt-2">{p.summary}</p>
              <p className="mt-3 text-sm text-blue-300 opacity-0 group-hover:opacity-100">Scopri di più →</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Prodotti
