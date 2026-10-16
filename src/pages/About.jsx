import { useState } from 'react'
import { ArrowUpRight, Check, Copy, FileDown } from 'lucide-react'
import { FadeUp, MaskText } from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import {
  courses,
  education,
  experience,
  languages,
  profile,
  skills,
} from '../data/profile'

function Row({ label, children }) {
  return (
    <div className="grid gap-6 border-t border-current/15 py-14 md:grid-cols-12">
      <FadeUp className="text-xs uppercase tracking-widest opacity-50 font-mono md:col-span-3">
        {label}
      </FadeUp>
      <div className="md:col-span-9">{children}</div>
    </div>
  )
}

const external = { target: '_blank', rel: 'noreferrer' }

export default function About() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 max-w-full">
      <section className="flex min-h-[75vh] flex-col justify-end gap-10 pb-20 pt-36">
        <span className="text-xs uppercase tracking-widest opacity-50 block font-mono">
          (Trajetória &amp; Perfil Profissional)
        </span>
        <h1 className="text-[clamp(3.5rem,11vw,11rem)] font-medium leading-[0.88] tracking-tighter">
          <MaskText>Sobre</MaskText>
        </h1>
        <FadeUp delay={0.2}>
          <p className="max-w-3xl text-[clamp(1.15rem,1.9vw,1.65rem)] leading-relaxed opacity-85 font-normal">
            {profile.summary}
          </p>
        </FadeUp>
      </section>

      <Row label="(Experiência Atual)">
        {experience.map((e) => (
          <FadeUp key={e.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">{e.role}</h2>
              <span className="text-xs font-mono opacity-60 rounded-full border border-current/20 px-3 py-1">
                {e.period}
              </span>
            </div>
            <p className="mt-2 text-sm opacity-60 font-mono">
              {e.company} · {e.place}
            </p>
            <ul className="mt-6 max-w-2xl list-disc space-y-3.5 pl-5 text-base opacity-80 marker:opacity-40 leading-relaxed">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </FadeUp>
        ))}
      </Row>

      <Row label="(Competências)">
        <div className="grid gap-10 sm:grid-cols-2">
          {skills.map((g, i) => (
            <FadeUp key={g.group} delay={(i % 2) * 0.08}>
              <h3 className="text-xs font-mono uppercase tracking-wider opacity-50">{g.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-current/25 bg-current/5 px-3 py-1">
                    {s}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </Row>

      <Row label="(Formação Acadêmica)">
        {education.map((ed) => (
          <FadeUp key={ed.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">{ed.title}</h2>
              <span className="text-xs font-mono opacity-60 rounded-full border border-current/20 px-3 py-1">
                {ed.period}
              </span>
            </div>
            <p className="mt-2 text-sm opacity-60 font-mono">
              {ed.school} · {ed.place}
            </p>
            <p className="mt-4 max-w-xl text-base opacity-80 leading-relaxed">{ed.note}</p>
          </FadeUp>
        ))}

        <FadeUp className="mt-14">
          <h3 className="text-xs font-mono uppercase tracking-wider opacity-50">Especializações &amp; Cursos</h3>
          <ul className="mt-3 space-y-2.5 max-w-xl">
            {courses.map((c) => (
              <li key={c.name} className="flex justify-between gap-4 border-b border-current/10 pb-2.5 text-sm">
                <span>{c.name}</span>
                <span className="font-mono opacity-60 text-xs">{c.date}</span>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp className="mt-10">
          <h3 className="text-xs font-mono uppercase tracking-wider opacity-50">Idiomas</h3>
          <p className="mt-3 text-sm opacity-80">
            {languages.map((l) => `${l.name}: ${l.level}`).join('  ·  ')}
          </p>
        </FadeUp>
      </Row>

      <Row label="(Contato &amp; Redes)">
        <FadeUp>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider opacity-50 block">E-mail Direto</span>
            {copied && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full animate-fade-in">
                <Check size={11} /> Copiado para a área de transferência!
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-baseline gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="break-all text-[clamp(1.5rem,4vw,3.5rem)] font-medium tracking-tight underline-offset-8 hover:underline"
            >
              {profile.email}
            </a>

            <Magnetic strength={0.3}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-full border border-current/20 bg-current/5 px-3 py-1.5 text-xs font-mono hover:bg-current/10 transition-colors"
                title="Copiar e-mail"
              >
                {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </Magnetic>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-mono">
            <Magnetic strength={0.25}>
              <a
                href={profile.cvUrl}
                download="Curriculo-Luiz-Guilherme.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-current/30 px-4 py-2 text-xs font-mono uppercase tracking-wider hover:bg-blue-400 hover:text-paper dark:hover:text-ink transition-colors"
              >
                <FileDown size={14} /> Baixar CV em PDF
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a href={profile.linkedin} {...external} className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:opacity-75">
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a href={profile.github} {...external} className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:opacity-75">
                GitHub <ArrowUpRight size={16} />
              </a>
            </Magnetic>
          </div>
          <p className="mt-6 text-xs font-mono opacity-60">{profile.location} · Disponível para atuações remotas ou híbridas</p>
        </FadeUp>
      </Row>

      <div className="h-[20vh]" />
    </div>
  )
}
