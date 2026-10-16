import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ArrowUpRight, Code2, Database, Globe, Layers, Maximize2, Sparkles, X } from 'lucide-react'
import { profile, projects } from '../data/profile'

const icons = [Layers, Database, Sparkles, Code2]

function ProjectMedia({ project, index, onActive, onOpenLightbox }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-35% 0px -35% 0px' })
  const Icon = icons[index % icons.length]
  const [imgError, setImgError] = useState(false)
  const hasImage = Boolean(project.image) && !imgError

  useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <div ref={ref} className="flex min-h-0 md:min-h-screen items-center justify-center py-8 md:py-0">
      <div className="w-full max-w-full md:max-w-none min-w-0">
        <motion.div
          data-cursor
          className={`group relative min-h-[440px] md:min-h-0 md:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-current/15 bg-gradient-to-br ${project.gradient} p-4 sm:p-7 text-white shadow-2xl flex flex-col justify-between`}
          animate={{
            opacity: inView ? 1 : 0.45,
            scale: inView ? 1 : 0.97,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between text-xs tracking-wider uppercase opacity-80 z-20 gap-2">
            <div className="flex items-center gap-2 shrink-0">
              <span className="size-2 rounded-full" style={{ backgroundColor: project.accentColor || '#38bdf8' }} />
              <span className="font-mono">0{project.id} / 0{projects.length}</span>
            </div>
            <span className="rounded-full border border-white/20 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono bg-white/5 backdrop-blur-md truncate max-w-[150px] xs:max-w-[190px] sm:max-w-none">
              {project.type}
            </span>
          </div>

          <div className="my-auto w-full z-10 py-2.5 sm:py-4">
            <div className="overflow-hidden rounded-xl border border-white/15 bg-neutral-950/90 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:border-white/30">
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-white/[0.03]">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="size-2 sm:size-2.5 rounded-full bg-red-500/70" />
                  <span className="size-2 sm:size-2.5 rounded-full bg-yellow-500/70" />
                  <span className="size-2 sm:size-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black/40 px-2 sm:px-3 py-0.5 text-[10px] sm:text-[11px] font-mono opacity-70 min-w-0 mx-2">
                  <Globe size={11} className="opacity-60 shrink-0" />
                  <span className="truncate max-w-[110px] xs:max-w-[160px] sm:max-w-[220px]">{project.mockupUrl || 'localhost:3000'}</span>
                </div>
                <div className="w-5 sm:w-8 flex justify-end shrink-0">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {project.mockupType === 'terminal' ? (
                <div className="relative aspect-auto sm:aspect-[16/10] w-full overflow-hidden bg-[#0a0b0d] p-3 sm:p-5 flex flex-col justify-between font-mono min-h-[220px]">
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs text-emerald-400/90 border-b border-white/10 pb-2">
                    <span className="text-white/40">$</span>
                    <span className="text-white/90 truncate">php artisan girolando:dispatch-docs</span>
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse ml-auto shrink-0" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 my-auto py-2">
                    {project.pipeline?.map((p, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[11px] leading-tight">
                        <span className="text-white/30 shrink-0">›</span>
                        <span className="px-1 sm:px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] bg-white/10 text-white/80 font-bold uppercase tracking-wider shrink-0">
                          {p.tag}
                        </span>
                        <span className="text-white/70 truncate flex-1 min-w-0">{p.text}</span>
                        <span className={`text-[9px] sm:text-[10px] font-semibold shrink-0 ${p.color}`}>[{p.status}]</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-[10px] text-white/40">
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Worker Daemon Ativo
                    </span>
                    <span className="text-emerald-400 font-semibold">25 docs/mês</span>
                  </div>
                </div>
              ) : (
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center ${
                    hasImage && !project.isLongScreenshot ? 'cursor-zoom-in' : ''
                  }`}
                  onClick={() => {
                    if (hasImage && !project.isLongScreenshot && onOpenLightbox) {
                      onOpenLightbox(project)
                    }
                  }}
                >
                  {hasImage ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={
                          project.isLongScreenshot
                            ? 'long-screenshot-img'
                            : project.imageFit === 'contain'
                            ? 'h-full w-full object-contain object-center p-1 sm:p-1.5 transition-transform duration-700 ease-out group-hover:scale-[1.02]'
                            : 'h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105'
                        }
                        onError={() => setImgError(true)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity pointer-events-none" />

                      {project.isLongScreenshot ? (
                        <div className="pointer-events-none absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] font-mono backdrop-blur-md transition-opacity duration-300 group-hover:opacity-0 text-white/90">
                          <span className="size-1.5 rounded-full bg-sky-400 animate-pulse" />
                          <span>Hover p/ rolar ↓</span>
                        </div>
                      ) : (
                        <div className="pointer-events-none absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 z-20 flex items-center gap-1 rounded-md border border-white/20 bg-black/75 px-2 py-0.5 text-[9px] sm:text-[10px] font-mono opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white/90">
                          <Maximize2 size={10} />
                          <span>Expandir</span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-4 sm:p-6 text-center relative overflow-hidden">
                      <div
                        className="absolute -top-12 -right-12 size-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                        style={{ backgroundColor: project.accentColor || '#38bdf8' }}
                      />
                      <div
                        className="mb-2 sm:mb-3 flex size-10 sm:size-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md transition-transform duration-500 group-hover:scale-110"
                        style={{ color: project.accentColor || '#fff' }}
                      >
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-xs sm:text-base font-medium tracking-tight text-white max-w-xs truncate px-2">
                        {project.title}
                      </h4>
                      <p className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] font-mono opacity-50 uppercase tracking-widest">
                        {project.context}
                      </p>
                      <div className="mt-2 sm:mt-3 flex items-center gap-1 text-[9px] sm:text-[10px] font-mono opacity-40 rounded-full border border-white/10 px-2 sm:px-2.5 py-0.5 max-w-[210px] truncate">
                        <span className="truncate">Screenshot: {project.image}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="pt-2 sm:pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs z-20">
            <span className="opacity-70 font-mono text-[10px] sm:text-[11px] truncate max-w-[190px] xs:max-w-[230px] sm:max-w-none">
              {project.tags.slice(0, 3).join(' · ')}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] opacity-40 uppercase shrink-0">CASE STUDY</span>
          </div>
        </motion.div>

        <div className="mt-6 md:hidden">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs opacity-60 font-mono">
            <span className="font-semibold text-current opacity-90">0{project.id} / 0{projects.length}</span>
            <span>—</span>
            <span>{project.context}</span>
            <span className="hidden sm:inline">·</span>
            <span className="w-full sm:w-auto opacity-75">{project.type}</span>
          </div>
          <h2 className="mt-2 text-xl sm:text-3xl font-medium tracking-tight">{project.title}</h2>
          <p className="mt-2.5 text-sm sm:text-base opacity-75 leading-relaxed">{project.description}</p>
          <div className="mt-3.5 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-current/25 px-2.5 py-0.5 text-[11px] sm:text-xs bg-current/5">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 pt-3.5 border-t border-current/15">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium underline underline-offset-4 hover:opacity-75 transition-opacity"
            >
              Ver Repositórios no GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Works() {
  const [active, setActive] = useState(0)
  const [lightboxProject, setLightboxProject] = useState(null)
  const project = projects[active]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxProject(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="px-4 sm:px-6 md:px-10 max-w-full">
      <header className="pb-12 sm:pb-16 pt-28 sm:pt-36 border-b border-current/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest opacity-50 block mb-2 sm:mb-3 font-mono">
              (Portfólio Selecionado)
            </span>
            <h1 className="text-[clamp(2.75rem,9vw,9.5rem)] font-medium leading-[0.88] tracking-tighter">
              Works
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm opacity-60 pb-1 sm:pb-2 font-mono">
            <span>0{projects.length} PROJETOS EM DESTAQUE</span>
            <span>·</span>
            <span>2024 — PRESENTE</span>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-2 md:gap-16 mt-10">
        <div>
          {projects.map((p, i) => (
            <ProjectMedia
              key={p.id}
              project={p}
              index={i}
              onActive={setActive}
              onOpenLightbox={setLightboxProject}
            />
          ))}
        </div>

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

      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxProject(null)}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/85 p-3 sm:p-8 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[92vh] max-w-6xl w-full overflow-hidden rounded-2xl border border-white/20 bg-neutral-950 shadow-2xl flex flex-col cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5 sm:py-3.5 bg-white/[0.04] gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <span
                    className="size-2 sm:size-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: lightboxProject.accentColor || '#38bdf8' }}
                  />
                  <span className="font-mono text-[11px] sm:text-xs text-white/80 tracking-wider uppercase truncate max-w-[210px] sm:max-w-md">
                    {lightboxProject.title} · {lightboxProject.type}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxProject(null)}
                  className="rounded-lg p-1 text-white/70 hover:bg-white/10 hover:text-white transition-colors shrink-0"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="overflow-auto max-h-[calc(90vh-55px)] p-3 sm:p-6 flex items-center justify-center bg-black/90">
                <img
                  src={lightboxProject.image}
                  alt={lightboxProject.title}
                  className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[25vh]" />
    </div>
  )
}
