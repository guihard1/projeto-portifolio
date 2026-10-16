// Single source of truth for portfolio content & professional positioning

export const profile = {
  name: 'Luiz Guilherme',
  surname: 'Campos Rodrigues da Silva',
  fullName: 'Luiz Guilherme Campos Rodrigues da Silva',
  role: 'Desenvolvedor Full-Stack',
  stackLine: 'PHP · Laravel · React · Next.js · Docker',
  location: 'Uberaba, MG, Brasil',
  email: 'luizgdev@outlook.com',
  linkedin: 'https://www.linkedin.com/in/luiz-guilherme-campos-rodrigues-da-silva-101723226',
  github: 'https://github.com/guihard1',
  cvUrl: '/curriculo.pdf',
  status: 'Disponível para novas oportunidades',
  availability: 'Aberto a novos projetos e posições Full-Stack',

  // Hero statement
  headline: 'Desenvolvimento Full-Stack focado em modernização de sistemas legados, código estruturado e interfaces eficientes.',

  // Strategic intro narrative for recruiters & heads
  introTitle: 'Back-end estruturado e resiliente. Front-end moderno e funcional.',
  introText:
    'Atuação focada em resolver gargalos operacionais e modernizar aplicações no dia a dia corporativo. Combino o ecossistema PHP (Laravel, Filament, PDO e MVC) com interfaces em React e Next.js utilizando Tailwind CSS. Na Associação Brasileira dos Criadores de Girolando — entidade de alcance nacional e referência no agronegócio —, atuo na conteinerização local com Docker, refatoração de código legado e automações com DomPDF que agilizam processos internos essenciais para colaboradores e associados em todo o Brasil.',

  // Comprehensive profile summary for About page
  summary:
    'Desenvolvedor Full-Stack com sólida experiência em modernização de sistemas, refatoração de código legado e desenvolvimento de soluções práticas e escaláveis. Atuo na Associação Brasileira dos Criadores de Girolando (entidade nacional do agronegócio), desenvolvendo painéis administrativos robustos (Laravel Filament e Next.js), automação de processos documentais e padronização de ambientes de desenvolvimento local com Docker e Docker Compose. Foco permanente na integridade dos dados, boas práticas estruturais (MVC, POO, ACL) e entrega de interfaces responsivas.',

  // Operational highlights & metrics
  metrics: [
    { value: 'Docker', label: 'Ambiente local conteinerizado e isolado com Docker Compose' },
    { value: '25+', label: 'Cadastros mensais gerados em PDF e enviados sem edição manual' },
    { value: 'Estabilidade', label: 'Em refatorações e modernizações de código legado' },
  ],
}

export const skills = [
  {
    group: 'Back-end & Arquitetura',
    items: ['PHP 8+', 'Laravel', 'Filament PHP', 'PDO', 'APIs RESTful', 'POO', 'Arquitetura MVC'],
  },
  {
    group: 'Front-end & Interfaces',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5 / CSS3'],
  },
  {
    group: 'Banco de Dados',
    items: ['MySQL', 'SQL Estruturado', 'Modelagem Relacional'],
  },
  {
    group: 'DevOps & Ferramentas',
    items: ['Docker (Ambiente Local)', 'Docker Compose', 'Git', 'GitHub', 'DomPDF', 'Linux / Bash'],
  },
  {
    group: 'Práticas & Estrutura',
    items: ['Refatoração de Legados', 'Automação de Processos', 'Controle de Acesso (ACL)', 'Modelagem UML'],
  },
]

export const experience = [
  {
    role: 'Desenvolvedor Full-Stack / Profissional de TI',
    company: 'Associação Brasileira dos Criadores de Girolando (Entidade Nacional do Agronegócio)',
    place: 'Uberaba, MG',
    period: '09/2025 — Presente',
    bullets: [
      'Refatoração técnica do portal institucional (girolando.com.br) — canal central de atendimento a criadores e associados em todo o país —, implementando conteinerização do ambiente de desenvolvimento local em Docker e Docker Compose para garantir segurança, padronização e estabilidade.',
      'Desenvolvimento do painel administrativo corporativo em Laravel e Filament com permissões granulares (ACL) para gestão e controle (notícias, diretoria, usuários e dados institucionais), utilizado diariamente por múltiplos departamentos.',
      'Automação completa do fluxo de novos associados utilizando PHP e DomPDF: recebimento de cadastro via formulário web, tratamento dos dados, geração de PDF oficial formatado e pronto para assinatura/carimbo e despacho automático por e-mail para a Central de Relacionamento (cerca de 25 documentos/mês sem edição manual).',
      'Desenvolvimento do website oficial e painel da Megaleite Internacional 2027 — principal exposição da pecuária leiteira da América Latina — utilizando Next.js, React, Tailwind CSS e TypeScript, com novo banco estruturado para gerenciar e centralizar as notícias do evento.',
      'Correção de bugs estruturais e modernização contínua de bases de código legado em PHP, garantindo interoperabilidade com novos serviços e estabilidade de processos críticos.',
    ],
  },
]

export const education = [
  {
    title: 'Tecnologia em Análise e Desenvolvimento de Software',
    school: 'Faculdade Anhanguera',
    place: 'Uberaba, MG',
    period: 'Conclusão prevista: 11/2027',
    note: 'Ênfase em Análise e Projeto Orientado a Objetos, arquitetura de software e modelagem de sistemas com UML.',
  },
]

export const courses = [
  { name: 'Rocketseat — Formação Back-end PHP', date: '03/2026' },
  { name: 'Rocketseat — Formação Front-end React', date: '05/2026' },
]

export const languages = [
  { name: 'Inglês', level: 'Intermediário (Leitura técnica fluente e documentação)' },
  { name: 'Espanhol', level: 'Básico' },
]

export const projects = [
  {
    id: 1,
    title: 'Site e Painel Megaleite Internacional 2027',
    context: 'Associação Girolando (Nacional)',
    type: 'Website Oficial & Painel Integrado',
    image: '/projects/megaleite.png',
    mockupUrl: 'megaleite.com.br',
    isLongScreenshot: true,
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    description:
      'Desenvolvimento completo do website oficial da Megaleite Internacional — principal exposição da pecuária leiteira da América Latina — em Next.js, React, Tailwind CSS e TypeScript, acompanhado de painel administrativo integrado para gestão de notícias e novo banco estruturado para centralizar o histórico e futuras edições do evento.',
    gradient: 'from-neutral-800 to-neutral-950 dark:from-neutral-900 dark:to-neutral-950',
    accentColor: '#38bdf8',
  },
  {
    id: 2,
    title: 'Painel Administrativo com Filament',
    context: 'Associação Girolando (Nacional)',
    type: 'Sistema Geral de Gestão Interna',
    image: '/projects/filament-admin.png',
    mockupUrl: 'painel.girolando.com.br/admin',
    imageFit: 'contain',
    tags: ['Laravel', 'Filament PHP', 'ACL', 'MySQL'],
    description:
      'Painel de controle geral desenvolvido em Laravel e Filament para gestão. Centraliza controle de acessos e permissões (ACL), publicação e manutenção de notícias institucionais, integrantes da diretoria e dados corporativos, atendendo diariamente múltiplos setores da entidade nacional.',
    gradient: 'from-zinc-800 to-stone-900 dark:from-zinc-900 dark:to-neutral-950',
    accentColor: '#f59e0b',
  },
  {
    id: 3,
    title: 'Automação de Formulários e Documentos com DomPDF',
    context: 'Associação Girolando (Nacional)',
    type: 'Automação de Processos & Back-end',
    mockupType: 'terminal',
    mockupUrl: 'cli: php artisan girolando:dispatch-docs',
    tags: ['PHP', 'DomPDF', 'SMTP / E-mail', 'Automação'],
    pipeline: [
      { tag: 'HTTP', status: '200 OK', text: 'POST /filiacao/cadastro-associado', color: 'text-emerald-400' },
      { tag: 'DATA', status: 'VALIDATED', text: 'Sanitização do payload e regras de negócio', color: 'text-sky-400' },
      { tag: 'CORE', status: 'COMPILED', text: 'Geração de PDF timbrado via DomPDF', color: 'text-amber-400' },
      { tag: 'FILE', status: 'OUTPUT', text: 'ficha_associacao_formatada.pdf', color: 'text-purple-400' },
      { tag: 'SMTP', status: 'SENT', text: 'Despacho com anexo -> Central de Relacionamento', color: 'text-emerald-400' },
      { tag: 'DONE', status: '0 MANUAL EDIT', text: '~25 processos/mês automatizados', color: 'text-white' },
    ],
    description:
      'Automação em PHP que capta os cadastros preenchidos via formulários web, gera automaticamente o documento oficial em PDF formatado com DomPDF e envia por e-mail com anexo para a Central de Relacionamento. Eliminou o retrabalho manual em cerca de 25 processos mensais, entregando os documentos prontos para assinatura e carimbo.',
    gradient: 'from-stone-800 to-neutral-900 dark:from-stone-900 dark:to-neutral-950',
    accentColor: '#10b981',
  },
  {
    id: 4,
    title: 'CriticoLeitor',
    context: 'Projeto Autoral',
    type: 'Aplicação Web Autoral',
    image: '/projects/criticoleitor.png',
    mockupUrl: 'localhost/criticoleitor',
    tags: ['PHP', 'PDO', 'MySQL', 'Tailwind CSS'],
    description:
      'Aplicação web com foco em boas práticas de programação orientada a objetos (POO) e arquitetura MVC sem dependência de frameworks pesados, aplicando queries seguras via PDO e interface responsiva com Tailwind CSS para registro, avaliação e debate de livros.',
    gradient: 'from-neutral-900 to-stone-950 dark:from-neutral-900 dark:to-black',
    accentColor: '#a855f7',
  },
]
