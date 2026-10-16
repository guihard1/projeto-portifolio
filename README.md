# Luiz Guilherme — Portfolio Interativo

Portfólio pessoal e showcase de projetos Full-Stack com estética editorial inspirada nos padrões de design do Awwwards, transições fluidas e navegação interativa.

[Acessar Portfólio Online](https://projeto-portifolio-guihard1.vercel.app/)

---

## Visão Geral

Este projeto foi construído para apresentar minha trajetória como Desenvolvedor Full-Stack, destacando experiências com modernização de sistemas corporativos, arquitetura MVC, ecossistema PHP (Laravel e Filament) e desenvolvimento de interfaces modernas com React e Next.js.

Além de reunir estudos de caso reais, o portfólio serve como laboratório prático de engenharia de front-end, aplicando microinterações com física realista, iluminação ambiente reativa ao cursor e transições contínuas entre rotas.

---

## Funcionalidades e Detalhes de Interação

- **Transições de Rota por Expansão Circular:** Navegação SPA com efeito de *modal expansion* via Framer Motion, revelando cada página a partir das coordenadas exatas do clique do usuário.
- **Iluminação Ambiente Reativa (Ambient Glow):** Aura difusa em Three.js e React Three Fiber que segue o cursor suavemente em segundo plano, sem linhas estáticas ou ruído visual.
- **Showcase com Pinned Scroll (Works):** Grade dividida onde a mídia dos projetos rola na coluna esquerda enquanto os detalhes técnicos ficam fixados na direita, atualizando com crossfade conforme o scroll avança.
- **Scroll Suave (Lenis):** *Smooth scrolling* a 60+ FPS em todas as páginas, integrado ao ciclo de animações do Framer Motion.
- **Modo Escuro e Claro:** Alternância instantânea de paleta de cores (`#f8f8fa` / `#0c0d12`) respeitando contraste e tipografia editorial.
- **Botões Magnéticos:** Interação física com atração elástica suave nos CTAs e elementos interativos.
- **100% Responsivo:** Layout calibrado para smartphones, tablets e monitores ultrawide sem overflow horizontal.

---

## Projetos em Destaque no Portfólio

1. **Megaleite Internacional 2027**
   - Website oficial e painel administrativo da maior exposição da pecuária leiteira da América Latina.
   - *Stack:* Next.js, React, Tailwind CSS, TypeScript.
   - *Destaque no portfólio:* Visualizador com hover-scroll automático da página completa.

2. **Painel Administrativo Corporativo (Associação Girolando)**
   - Sistema de gestão com controle granular de permissões (ACL), manutenção institucional e gerenciamento de notícias corporativas.
   - *Stack:* Laravel, Filament PHP, MySQL, Docker.
   - *Destaque no portfólio:* Modal de inspeção e zoom em alta definição (Lightbox).

3. **Automação de Formulários e Documentos com DomPDF**
   - Pipeline de processamento que capta submissões web, valida regras de negócio, compila documentos formatados via DomPDF e despacha automaticamente por e-mail com anexo.
   - *Stack:* PHP, DomPDF, SMTP, Automação de Processos.
   - *Destaque no portfólio:* Terminal CLI interativo simulando as etapas da pipeline.

4. **CriticoLeitor**
   - Aplicação web autoral para catalogação, avaliação e debate de livros.
   - *Stack:* PHP 8+, Arquitetura MVC, PDO, MySQL, Tailwind CSS.

---

## Stack Tecnológica

| Camada | Ferramenta / Biblioteca |
| --- | --- |
| **Linguagem & Base** | React 19, JavaScript (ESNext) |
| **Build & Tooling** | Vite 8, Oxlint |
| **Estilização** | Tailwind CSS v4 |
| **Animações & Gestos** | Framer Motion |
| **Efeitos Visuais** | Three.js, React Three Fiber |
| **Smooth Scroll** | Lenis Scroll |
| **Roteamento** | React Router DOM v7 |
| **Ícones** | Lucide React |
| **Hospedagem & CI/CD** | Vercel |

---

## Estrutura do Projeto

```text
projeto-portifolio/
├── public/
│   ├── projects/          # Screenshots e assets dos projetos
│   ├── curriculo.pdf      # Currículo para download
│   └── _redirects         # Regras de redirecionamento SPA
├── src/
│   ├── assets/            # Imagens estáticas e SVGs
│   ├── components/        # Componentes reutilizáveis (Navbar, CustomCursor, AmbientGlow, Magnetic...)
│   ├── data/              # Base de dados unificada do perfil e projetos (profile.js)
│   ├── hooks/             # Custom hooks (useTheme, useTransitionOrigin)
│   ├── layouts/           # Wrapper global de layout com Lenis
│   ├── pages/             # Rotas da aplicação (Home, Works, About)
│   ├── App.jsx            # Orquestração de rotas e transições
│   ├── index.css          # Variáveis de tema e estilos globais
│   └── main.jsx           # Ponto de entrada React
├── vercel.json            # Configuração de rewrites para SPA na Vercel
└── package.json
```

---

## Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior
- Gerenciador de pacotes `npm` (ou `pnpm` / `yarn`)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/guihard1/projeto-portifolio.git
cd projeto-portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O projeto estará acessível em `http://localhost:5173`.

### Scripts Disponíveis

- `npm run dev`: Inicia o ambiente de desenvolvimento com HMR.
- `npm run build`: Compila a aplicação para produção na pasta `dist/`.
- `npm run lint`: Executa a verificação estática de código com o Oxlint.
- `npm run preview`: Visualiza localmente o build de produção compilado.

---

## Autor

**Luiz Guilherme Campos Rodrigues da Silva**  
Desenvolvedor Full-Stack (PHP · Laravel · React · Next.js · Docker)  
Uberaba, MG — Brasil

- LinkedIn: [linkedin.com/in/luiz-guilherme-campos-rodrigues-da-silva-101723226](https://www.linkedin.com/in/luiz-guilherme-campos-rodrigues-da-silva-101723226)
- GitHub: [github.com/guihard1](https://github.com/guihard1)
- E-mail: luizgdev@outlook.com
