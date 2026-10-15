import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ArrowUpRight, Code2, Database, Layers, Sparkles } from 'lucide-react'
import { profile, projects } from '../data/profile'

const icons = [Layers, Database, Sparkles, Code2]

/** One project's media card. Reports itself active when it crosses viewport center. */
function ProjectMedia({ project, index, onActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-50% 0px -50% 0px' })
  const Icon = icons[index % icons.length]

  useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <div ref={ref} className="flex min-h-screen items-center justify-center py-16">
      <div className="w-full">
        {/* Card visual mockup */}
        <motion.div
          data-cursor
          className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-current/15 bg-gradient-to-br ${project.gradient} p-8 text-white shadow-2xl flex flex-col justify-between`}
          animate={{
            opacity: inView ? 1 : 0.4,
            scale: inView ? 1 : 0.96,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Card Topbar */}
          <div className="flex items-center justify-between text-xs tracking-wider uppercase opacity-75">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full" style={{ backgroundColor: project.accentColor || '#38bdf8' }} />
              <span className="font-mono">0{project.id} / 0{projects.length}</span>
            </div>
            <span className="rounded-full border border-white/20 px-2.5 py-0.5 text-[10px]">
              {project.type}
            </span>
          </div>

          {/* Card Center Visual Motif */}
          <div className="my-auto flex flex-col items-center justify-center text-center py-8">
            <div
              className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md transition-transform duration-500 hover:scale-110"
              style={{ color: project.accentColor || '#fff' }}
            >
              <Icon size={30} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white max-w-xs">
              {project.title}
            </h3>
            <p className="mt-2 text-xs opacity-60 font-mono tracking-widest uppercase">
              {project.context}
            </p>
          </div>

          {/* Card Bottom: Quick Stack Badges */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="opacity-60">{project.tags.slice(0, 3).join(' · ')}</span>
            <span className="font-mono text-[10px] opacity-40">CASE STUDY</span>
          </div>
        </motion.div>

        {/* Mobile: description sits under the media */}
        <div className="mt-6 md:hidden">
          <div className="flex items-center gap-2 text-xs opacity-60">
            <span>0{project.id}</span>
            <span>—</span>
            <span>{project.context}</span>
          </div>
          <h2 className="mt-2 text-3xl font-medium tracking-tight">{project.title}</h2>
          <p className="mt-2 text-base opacity-75 leading-relaxed">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-current/25 px-2.5 py-0.5 text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Works() {
  const [active, setActive] = useState(0)
  const project = projects[active]

  return (
    <div className="px-6 md:px-10">
      {/* Editorial Header (No broken <sup>) */}
      <header className="pb-16 pt-36 border-b border-current/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest opacity-50 block mb-3 font-mono">
              (Portfólio Selecionado)
            </span>
            <h1 className="text-[clamp(3.5rem,10vw,9.5rem)] font-medium leading-[0.88] tracking-tighter">
              Works
            </h1>
          </div>
          <div className="flex items-center gap-4 text-sm opacity-60 pb-2 font-mono">
            <span>0{projects.length} PROJETOS EM DESTAQUE</span>
            <span>·</span>
            <span>2024 — PRESENTE</span>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-2 md:gap-16">
        {/* Left: scrolling media */}
        <div>
          {projects.map((p, i) => (
            <ProjectMedia key={p.id} project={p} index={i} onActive={setActive} />
          ))}
        </div>

        {/* Right: pinned description with smooth crossfade */}
        <aside className="hidden md:block">
          <div className="sticky top-0 flex h-screen items-center">
            <div className="relative h-[32rem] w-full">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={project.id}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3 text-xs tracking-wider uppercase opacity-60 font-mono">
                    <span className="font-semibold text-sm">0{project.id} / 0{projects.length}</span>
                    <span>—</span>
                    <span>{project.context}</span>
                    <span>·</span>
                    <span>{project.type}</span>
                  </div>

                  <h2 className="mt-4 text-4xl lg:text-5xl font-medium leading-[1.05] tracking-tighter">
                    {project.title}
                  </h2>

                  <p className="mt-6 max-w-md text-base lg:text-lg opacity-75 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-current/25 px-3 py-1 bg-current/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-current/15 flex items-center gap-6">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 hover:opacity-75 transition-opacity"
                    >
                      Ver Repositórios no GitHub <ArrowUpRight size={16} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </aside>
      </div>

      <div className="h-[25vh]" />
    </div>
  )
}
