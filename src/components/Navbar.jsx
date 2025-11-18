import { useState } from 'react'
import { Menu, X, flaskConical, FlaskConical, Package, Building2, Newspaper, Briefcase, Phone, Home } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/prodotti', label: 'Prodotti', icon: Package },
  { to: '/settori', label: 'Settori', icon: Building2 },
  { to: '/azienda', label: "L'Azienda", icon: FlaskConical },
  { to: '/risorse', label: 'Risorse', icon: Newspaper },
  { to: '/careers', label: 'Careers', icon: Briefcase },
  { to: '/contatti', label: 'Contatti', icon: Phone },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-600' : 'text-slate-200 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600/90 grid place-items-center shadow-lg shadow-blue-500/30">
            <FlaskConical className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <p className="text-white font-semibold leading-5">ChemTech</p>
            <p className="text-[11px] text-blue-200/80 leading-3">Leather & Specialty Chemicals</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={linkClass} onClick={() => setOpen(false)}>
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `px-3 py-2 rounded text-sm ${isActive ? 'bg-blue-600 text-white' : 'text-slate-200'}`} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
