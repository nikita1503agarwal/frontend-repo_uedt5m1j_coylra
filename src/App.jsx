import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Prodotti from './pages/Prodotti'
import ProdottoDettaglio from './pages/ProdottoDettaglio'
import Settori from './pages/Settori'
import Azienda from './pages/Azienda'
import Risorse from './pages/Risorse'
import Careers from './pages/Careers'
import Contatti from './pages/Contatti'

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prodotti" element={<Prodotti />} />
      <Route path="/prodotti/:slug" element={<ProdottoDettaglio />} />
      <Route path="/settori" element={<Settori />} />
      <Route path="/azienda" element={<Azienda />} />
      <Route path="/risorse" element={<Risorse />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contatti" element={<Contatti />} />
    </Routes>
  )
}

export default App
