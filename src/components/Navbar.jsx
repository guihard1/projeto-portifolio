import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import Magnetic from './Magnetic'

const links = [
  { to: '/', label: 'Index', end: true },
  { to: '/works', label: 'Works' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'America/Sao_Paulo',
        }),
      )
    }
    update()
    const timer = setInterval(update, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-white mix-blend-difference md:px-10">
      <Magnetic strength={0.25}>
        <Link to="/" className="pointer-events-auto text-xs sm:text-sm font-medium tracking-tight">
          © Luiz Guilherme
        </Link>
      </Magnetic>

      <div className="pointer-events-auto hidden md:flex items-center gap-2 font-mono text-xs opacity-60">
        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Uberaba, BR</span>
        <span>·</span>
        <span>{time || '10:30'} (GMT-3)</span>
      </div>

      <nav className="pointer-events-auto flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
        {links.map(({ to, label, end }) => (
          <Magnetic key={to} strength={0.25}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `transition-opacity ${isActive ? 'opacity-100 font-semibold' : 'opacity-50 hover:opacity-100'}`
              }
            >
              {label}
            </NavLink>
          </Magnetic>
        ))}
        <Magnetic strength={0.25}>
          <button onClick={toggle} aria-label="Toggle theme" className="p-1">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </Magnetic>
      </nav>
    </header>
  )
}
