# Portfólio — Wesley da Costa Canario

Site pessoal construído com Next.js 14 (App Router), TypeScript e Tailwind CSS.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Suba este repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Next.js automaticamente — nenhuma configuração extra é necessária no plano free.

## Estrutura

- `app/` — rotas, layout raiz, metadata SEO e geração dinâmica de favicon/OG image.
- `components/` — um componente por seção (Hero, About, Experience, Skills, Projects, Contact, Footer, Navbar).
- `data/` — conteúdo em arquivos separados (`personal.ts`, `experience.ts`, `skills.ts`, `projects.ts`), para editar sem mexer em JSX.

## Editando conteúdo

- **Dados pessoais e links de contato:** `data/personal.ts`.
- **Experiência, formação e certificações:** `data/experience.ts`.
- **Skills:** `data/skills.ts`.
- **Projetos:** `data/projects.ts` — adicione um objeto ao array `projects` para cada novo case; o layout dos cards já está pronto (veja o `// TODO` no arquivo).
- **GitHub:** atualize `personal.links.github` em `data/personal.ts` (está com um link placeholder).
- **Foto de perfil:** troque o avatar de iniciais em `components/Hero.tsx` por `next/image` apontando para uma foto em `public/`.
