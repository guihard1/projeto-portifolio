import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Cpu, FileCode2, Terminal, User } from 'lucide-react'
import { FadeUp, MaskReveal, MaskText } from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import { profile, projects, skills } from '../data/profile'

function ProjectCardImage({ project }) {
  const [error, setError] = useState(false)

  if (project.mockupType === 'terminal') {
    return (
      <div className="flex h-full w-full flex-col justify-between p-3.5 sm:p-4 bg-[#0a0b0d] font-mono text-left">
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400/90 border-b border-white/10 pb-1.5">
          <span className="text-white/40">$</span>
          <span className="truncate">php artisan girolando:dispatch-docs</span>
          <span className="size-1 rounded-full bg-emerald-400 animate-pulse ml-auto" />
        </div>
        <div className="space-y-1 my-auto">
          {project.pipeline?.slice(0, 4).map((p, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[9px] sm:text-[10px]">
              <span className="text-white/30">›</span>
              <span className="text-white/70 truncate flex-1">{p.text}</span>
              <span className={`font-semibold ${p.color}`}>[{p.status}]</span>
            </div>
          ))}
        </div>
        <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[9px] text-white/40">
          <span>Worker ativo</span>
          <span className="text-emerald-400 font-semibold">25 docs/mês</span>
        </div>
      </div>
    )
  }

  if (!error && project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className={
          project.isLongScreenshot
            ? 'long-screenshot-img'
            : project.imageFit === 'contain'
            ? 'h-full w-full object-contain object-center p-1.5 transition-transform duration-700 ease-out group-hover:scale-[1.02]'
            : 'h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105'
        }
        onError={() => setError(true)}
      />
    )
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
      <div
        className="size-3 rounded-full mb-3"
        style={{ backgroundColor: project.accentColor || '#38bdf8' }}
      />
      <span className="text-[11px] font-mono uppercase tracking-widest opacity-50 block mb-1">
        {project.context}
      </span>
      <span className="text-sm font-medium opacity-90 max-w-[200px]">{project.title}</span>
    </div>
  )
}

export default function Home() {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="px-4 sm:px-6 md:px-10 max-w-full overflow-hidden">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col justify-end pb-16 pt-32">
        <span className="text-xs uppercase tracking-widest opacity-50 block mb-4 font-mono">
          (Portfolio &amp; Desenvolvimento de Software)
        </span>
        <h1 className="text-[clamp(3.5rem,12vw,12rem)] font-medium leading-[0.88] tracking-tighter">
          <MaskText>Luiz Guilherme</MaskText>
          <MaskText delay={0.1} className="opacity-40">
            Full-Stack Dev
          </MaskText>
        </h1>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between text-sm border-t border-current/15 pt-8">
          <FadeUp delay={0.4}>
            <p className="max-w-md font-mono text-xs sm:text-sm opacity-70 leading-relaxed">
              {profile.role} · {profile.stackLine}
              <br />
              <span className="opacity-60">{profile.location}</span>
            </p>
          </FadeUp>

          <FadeUp delay={0.5} className="flex items-center gap-6 text-xs sm:text-sm font-mono">
            {/*<span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-600 dark:text-emerald-400">*/}
            {/*  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />*/}
            {/*  {profile.status}*/}
            {/*</span>*/}
            <span className="opacity-50 hidden sm:inline">Scroll ↓</span>
          </FadeUp>
        </div>
      </section>

      {/* Strategic Intro Section */}
      <section className="grid gap-12 py-32 md:py-40 md:grid-cols-12 border-t border-current/15">
        <FadeUp className="text-xs uppercase tracking-widest opacity-50 font-mono md:col-span-3">
          (Visão &amp; Atuação)
        </FadeUp>
        <div className="md:col-span-9">
          <h2 className="text-[clamp(1.8rem,4.2vw,3.8rem)] font-medium leading-[1.08] tracking-tight">
            <MaskText>Back-end estruturado e resiliente.</MaskText>
            <MaskText delay={0.08}>Front-end moderno e funcional.</MaskText>
          </h2>

          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-2xl text-base sm:text-lg opacity-75 leading-relaxed">
              {profile.introText}
            </p>
          </FadeUp>

          {/* 3 Core Value Pillars */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3 pt-8 border-t border-current/10">
            <FadeUp delay={0.25} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase opacity-50">
                <Terminal size={14} />
                <span>Refatoração</span>
              </div>
              <h3 className="font-medium text-sm sm:text-base">Modernização de Legados</h3>
              <p className="text-xs opacity-60 leading-relaxed">
                Evolução e estabilização de bases de código em PHP sem interrupção de processos críticos da empresa.
              </p>
            </FadeUp>

            <FadeUp delay={0.3} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase opacity-50">
                <Cpu size={14} />
                <span>Automação</span>
              </div>
              <h3 className="font-medium text-sm sm:text-base">Automação com DomPDF</h3>
              <p className="text-xs opacity-60 leading-relaxed">
                Captura de cadastros via formulário web, tratamento dos dados, geração de PDF pronto para carimbo e assinatura e envio automático por e-mail.
              </p>
            </FadeUp>

            <FadeUp delay={0.35} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase opacity-50">
                <FileCode2 size={14} />
                <span>Docker Local</span>
              </div>
              <h3 className="font-medium text-sm sm:text-base">Isolamento Local com Docker</h3>
              <p className="text-xs opacity-60 leading-relaxed">
                Conteinerização do ambiente de desenvolvimento em Docker e Compose, isolando a aplicação para trabalhar de forma segura e sem riscos.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Profile & Technical Stack Section */}
      <section className="grid gap-10 pb-32 md:pb-40 md:grid-cols-12 border-t border-current/15 pt-16">
        {/* Left Column: Developer Profile Presence Card (With photo support) */}
        <div className="md:col-span-5">
          <MaskReveal className="aspect-[4/5] w-full">
            <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-current/20 bg-neutral-900 p-8 text-neutral-100 shadow-2xl">
              {/* Optional Profile Photo if added to /avatar.jpg */}
              {!imgError && (
                <img
                  src="/avatar.jpg"
                  alt="Luiz Guilherme"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-luminosity filter transition-transform duration-700 hover:scale-105"
                  onError={() => setImgError(true)}
                />
              )}

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  FULL-STACK
                </span>
                <span className="opacity-60">{profile.location}</span>
              </div>

              {/* Card Center Identity Fallback (if avatar isn't provided) */}
              {imgError && (
                <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex size-20 items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md">
                    <User size={36} className="opacity-80" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest opacity-50">
                    Desenvolvedor Full-Stack
                  </span>
                </div>
              )}

              {/* Card Footer Info */}
              <div className="relative z-10 pt-6">
                <h3 className="text-2xl font-medium tracking-tight text-white">
                  {profile.name}
                </h3>
                <p className="mt-1 text-xs font-mono opacity-70">
                  {profile.role} @ Girolando (Nacional)
                </p>
              </div>
            </div>
          </MaskReveal>
        </div>

        {/* Right Column: Complete Technical Expertise */}
        <div className="flex flex-col justify-between gap-10 md:col-span-7 md:pl-6">
          <div>
            <FadeUp>
              <span className="text-xs uppercase tracking-widest opacity-50 font-mono block mb-4">
                (Stack &amp; Domínio Técnico)
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
                Tecnologias aplicadas em ambiente corporativo real.
              </h2>
            </FadeUp>

            <div className="mt-8 space-y-6">
              {skills.map((g, i) => (
                <FadeUp key={g.group} delay={i * 0.06}>
                  <p className="text-xs font-mono uppercase tracking-wider opacity-50">{g.group}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-current/20 bg-current/5 px-3 py-1 text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.25} className="pt-4 border-t border-current/15">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-75 transition-opacity"
            >
              Ver experiência profissional completa, formação e contato
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-24 md:py-32 border-t border-current/15">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest opacity-50 font-mono block mb-3">
              (Projetos em Foco)
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Aplicações &amp; Sistemas Recentes
            </h2>
          </div>
          <Link
            to="/works"
            className="text-xs sm:text-sm font-mono underline underline-offset-4 hover:opacity-75 inline-flex items-center gap-1.5"
          >
            Ver todos os 0{projects.length} projetos <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <Link
              key={project.id}
              to="/works"
              className="group block overflow-hidden rounded-2xl border border-current/15 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-8 text-white shadow-xl transition-all duration-500 hover:border-current/35 hover:scale-[1.01]"
            >
              <div className="flex items-center justify-between text-xs font-mono opacity-70 mb-5 gap-2">
                <span className="truncate max-w-[170px] xs:max-w-[220px] sm:max-w-none">
                  0{project.id} · {project.type}
                </span>
                <span className="flex items-center gap-1 text-[11px] underline underline-offset-4 group-hover:opacity-100 shrink-0">
                  Ver detalhes <ArrowUpRight size={12} />
                </span>
              </div>

              {/* Browser Preview Frame */}
              <div className="overflow-hidden rounded-xl border border-white/15 bg-neutral-950/90 shadow-2xl backdrop-blur-md mb-6 transition-all duration-500 group-hover:border-white/30">
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 bg-white/[0.03]">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-red-500/70" />
                    <span className="size-2 rounded-full bg-yellow-500/70" />
                    <span className="size-2 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-[10px] font-mono opacity-60 truncate max-w-[180px]">
                    {project.mockupUrl}
                  </span>
                  <div className="w-6" />
                </div>
                <div className="relative aspect-[16/10] w-full bg-black/60 overflow-hidden flex items-center justify-center">
                  <ProjectCardImage project={project} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-sky-300 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm opacity-70 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-mono opacity-60">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 px-2.5 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Works Banner CTA */}
      <section className="py-32 md:py-40 border-t border-current/15">
        <Link
          to="/works"
          className="group flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-widest opacity-50 font-mono block mb-3">
              (Casos de Uso Selecionados)
            </span>
            <span className="text-[clamp(3rem,9vw,9rem)] font-medium leading-none tracking-tighter group-hover:opacity-80 transition-opacity">
              Ver trabalhos
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono opacity-60 hidden sm:inline">04 Projetos em destaque</span>
            <Magnetic strength={0.4}>
              <div className="flex size-14 sm:size-20 items-center justify-center rounded-full border border-current/30 group-hover:border-current group-hover:scale-105 transition-all">
                <ArrowUpRight className="size-6 sm:size-8 transition-transform duration-500 group-hover:rotate-45" />
              </div>
            </Magnetic>
          </div>
        </Link>
      </section>
    </div>
  )
}
