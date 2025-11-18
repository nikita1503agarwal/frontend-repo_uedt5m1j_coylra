import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProdottoDettaglio(){
  const { slug } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(()=>{
    fetch(`${API}/api/products/${slug}`).then(r=>r.json()).then(setProduct).catch(()=>{})
  },[slug])

  if(!product) return <div className="min-h-screen bg-slate-950 text-white"><Navbar /><div className="pt-24 px-6">Caricamento...</div></div>

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <div className="pt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-blue-300 text-sm">{product.category}</p>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        {product.summary && <p className="text-blue-100/80 mt-2">{product.summary}</p>}

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {product.description && (
              <div className="prose prose-invert max-w-none">
                <p>{product.description}</p>
              </div>
            )}

            {product.applications?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold">Applicazioni</h3>
                <ul className="list-disc list-inside text-blue-100/90 mt-2 space-y-1">
                  {product.applications.map((a,i)=>(<li key={i}>{a}</li>))}
                </ul>
              </div>
            )}

            {product.benefits?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold">Vantaggi</h3>
                <ul className="list-disc list-inside text-blue-100/90 mt-2 space-y-1">
                  {product.benefits.map((a,i)=>(<li key={i}>{a}</li>))}
                </ul>
              </div>
            )}
          </div>
          <aside>
            {product.image_url && (
              <img src={product.image_url} alt={product.name} className="rounded-xl border border-white/10"/>
            )}
            {product.documentation_urls?.length > 0 && (
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="font-semibold">Documentazione</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  {product.documentation_urls.map((u,i)=>(
                    <li key={i}><a className="text-blue-300 hover:text-blue-200 underline" href={u} target="_blank">Scarica PDF #{i+1}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProdottoDettaglio
