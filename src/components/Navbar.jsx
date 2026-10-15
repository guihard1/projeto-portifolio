import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const links = [
  { to: '/', label: 'Index', end: true },
  { to: '/works', label: 'Works' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 text-white mix-blend-difference md:px-10">
      <Link to="/" className="pointer-events-auto text-sm font-medium tracking-tight">
        © Luiz Guilherme
      </Link>

      <nav className="pointer-events-auto flex items-center gap-6 text-sm">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `transition-opacity ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`
            }
          >
            {label}
          </NavLink>
        ))}
        <button onClick={toggle} aria-label="Toggle theme" className="p-1">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </header>
  )
}
