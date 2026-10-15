# 🚀 Dev Blog — Next.js & MDX

Um blog pessoal de alta performance e SEO otimizado, construído com as tecnologias mais recentes do ecossistema React e Next.js. Este projeto foi desenvolvido com base nos conhecimentos adquiridos na **Formação React Developer da DIO (Digital Innovation One)**, aplicando conceitos avançados de arquitetura de software, Server Components e renderização estática.

---

## 💻 Sobre o Projeto

O objetivo do **Dev Blog** é fornecer uma plataforma de publicação de artigos leve, extremamente rápida e de fácil manutenção baseada em **Git-backed CMS**. Em vez de depender de um CMS externo pesado, os artigos são escritos localmente em **MDX** (Markdown + React) e processados diretamente no servidor em tempo de build (SSG).

### ✨ Principais Funcionalidades

- ⚡ **Performance Extrema:** Utilização de **React Server Components (RSC)** e suporte nativo ao Next.js 16 (App Router) para garantir pontuação máxima nos Core Web Vitals.
- 📝 **Suporte a MDX:** Escreva artigos em Markdown com capacidade de importar e renderizar componentes React interativos.
- 🎯 **SEO & Metadados Dinâmicos:** Geração automática de `sitemap.xml`, Open Graph tags e metadados individuais para cada post.
- 🎨 **Styling Moderno:** Estilizado com **Tailwind CSS v4** e o plugin `@tailwindcss/typography` para uma leitura elegante de blocos de texto.
- ⏳ **Streaming & Feedback Visual:** Utilização de rotas com `loading.tsx` e limites de `<Suspense>` para navegação instantânea.
- 🛡️ **Type Safety:** Totalmente tipado de ponta a ponta com **TypeScript**.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Biblioteca UI:** [React 19](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Processamento de Conteúdo:** `gray-matter` & `next-mdx-remote`

---

## 📁 Estrutura do Projeto

```text
meu-blog/
├── app/                              # Rotas do Next.js (App Router)
│   ├── posts/
│   │   └── [slug]/
│   │       ├── loading.tsx           # Skeleton/Fallback visual de carregamento
│   │       └── page.tsx              # Rota dinâmica do artigo
│   ├── globals.css                   # Estilos globais e importações do Tailwind v4
│   ├── layout.tsx                    # Layout base da aplicação
│   ├── page.tsx                      # Página inicial (Listagem de posts)
│   └── sitemap.ts                    # Geração dinâmica do Sitemap
├── components/                       # Componentes Reutilizáveis de UI
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── PostCard.tsx
├── content/                          # Conteúdo em Markdown/MDX
│   └── posts/                        # Artigos do blog (.mdx)
├── lib/                              # Serviços e utilitários
│   └── markdown.ts                   # Camada de leitura e parse de MDX/Frontmatter
└── types/                            # Tipagens do TypeScript
    └── index.ts
```
