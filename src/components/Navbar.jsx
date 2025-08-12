import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../constants/navLinks'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
        <img 
  src={logo} 
  alt="WellMind" 
  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain" 
/>

          <span className="font-semibold text-2xl text-[var(--primary)]">WellMind</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((n) => (
            <li key={n.id}>
              <NavLink
                to={n.id === 'home' ? '/' : `/${n.id}`}
                className={({ isActive }) =>
                  'text-[var(--text)] font-medium ' + (isActive ? 'text-[var(--primary)]' : 'opacity-90 hover:text-[var(--primary)]')
                }
              >
                {n.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <img src={open ? close : menu} alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-sm border-t">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((n) => (
              <NavLink
                to={n.id === 'home' ? '/' : `/${n.id}`}
                key={n.id}
                onClick={() => setOpen(false)}
                className={({ isActive }) => 'py-2 text-[var(--text)] ' + (isActive ? 'font-semibold text-[var(--primary)]' : '')}
              >
                {n.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
