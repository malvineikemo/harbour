import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

// In a real application, this would come from a database or file system
const posts = {
  "getting-started": {
    title: "Getting Started with Harbour",
    date: "March 7, 2025",
    content: `
# Getting Started with Harbour

Welcome to Harbour! This guide will help you get started with using Harbour for your content needs.

## Installation

To install Harbour, you'll need to have Node.js and npm installed on your machine. Once you have those, you can run the following command:

\`\`\`bash
npx create-next-app@latest my-harbour-site --example https://github.com/harbour/starter
\`\`\`

## Configuration

After installation, you'll need to configure your site. Open the \`harbour.config.js\` file and update the following:

\`\`\`js
module.exports = {
  siteName: 'My Awesome Site',
  description: 'A site built with Harbour',
  // other configuration options
}
\`\`\`

## Creating Content

Harbour uses Markdown for content. To create a new post, add a new \`.md\` or \`.mdx\` file to the \`content\` directory:

\`\`\`md
---
title: My First Post
date: 2025-03-07
---

This is my first post on Harbour!
\`\`\`

## Deployment

Harbour works great with Vercel. To deploy your site, push your code to GitHub and import it into Vercel.
    `,
  },
  "markdown-guide": {
    title: "Markdown Guide",
    date: "March 5, 2025",
    content: `
# Markdown Guide

This guide covers the basics of Markdown syntax that you can use in your Harbour content.

## Basic Syntax

### Headings

\`\`\`
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
\`\`\`

### Emphasis

\`\`\`
*Italic text*
_Also italic text_

**Bold text**
__Also bold text__

***Bold and italic text***
\`\`\`

### Lists

\`\`\`
- Unordered item 1
- Unordered item 2
  - Nested item
  - Another nested item
- Unordered item 3

1. Ordered item 1
2. Ordered item 2
3. Ordered item 3
\`\`\`

### Links

\`\`\`
[Link text](https://example.com)
\`\`\`

### Images

\`\`\`
![Alt text](https://example.com/image.jpg)
\`\`\`

## Advanced Syntax

### Code Blocks

\`\`\`
\`\`\`javascript
function hello() {
  console.log('Hello, world!');
}
\`\`\`
\`\`\`

### Tables

\`\`\`
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
\`\`\`

### Blockquotes

\`\`\`
> This is a blockquote.
> It can span multiple lines.
\`\`\`
    `,
  },
  customization: {
    title: "Customizing Your Harbour Site",
    date: "March 3, 2025",
    content: `
# Customizing Your Harbour Site

This guide will help you customize your Harbour site to match your brand and preferences.

## Theming

Harbour uses Tailwind CSS for styling. You can customize the theme by editing the \`tailwind.config.js\` file:

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... other shades
          900: '#0c4a6e',
        },
        // Add your custom colors here
      },
      // Add other customizations
    },
  },
  // ... other config
}
\`\`\`

## Layout Customization

You can customize the layout by editing the components in the \`components\` directory:

- \`Header.tsx\` - Customize the header
- \`Footer.tsx\` - Customize the footer
- \`Navbar.tsx\` - Customize the navigation

## Adding Custom Components

You can add custom components to your MDX content by creating a component and adding it to the MDX provider:

\`\`\`tsx
// components/CustomComponent.tsx
export function CustomComponent({ children }) {
  return <div className="custom-component">{children}</div>
}

// app/mdx-components.tsx
import { CustomComponent } from '@/components/CustomComponent'

export function useMDXComponents(components) {
  return {
    ...components,
    CustomComponent,
  }
}
\`\`\`

Then you can use it in your MDX content:

\`\`\`mdx
<CustomComponent>
  This is a custom component!
</CustomComponent>
\`\`\`
    `,
  },
  "advanced-features": {
    title: "Advanced Harbour Features",
    date: "March 1, 2025",
    content: `
# Advanced Harbour Features

This guide covers some of the advanced features of Harbour for power users.

## API Routes

Harbour is built on Next.js, so you can use API routes to create serverless functions:

\`\`\`tsx
// app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello, world!' })
}
\`\`\`

## Server Components

Harbour uses React Server Components for improved performance:

\`\`\`tsx
// app/page.tsx
import { db } from '@/lib/db'

export default async function Page() {
  const data = await db.query('SELECT * FROM posts')
  
  return (
    <div>
      {data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
\`\`\`

## Authentication

You can add authentication to your Harbour site using NextAuth.js:

\`\`\`tsx
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
}

const handler = NextAuth(authOptions)
export { POST }
\`\`\`

## Internationalization

Harbour supports internationalization using next-intl:

\`\`\`tsx
// middleware.ts
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'fr', 'de'],
  defaultLocale: 'en',
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
\`\`\`
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-3xl py-12">
      <Button variant="ghost" size="sm" className="mb-6" asChild>
        <Link href="/blog">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold tracking-tighter">{post.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
      </div>

      <div className="prose prose-blue max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
      </div>
    </div>
  )
}

// This is a simple markdown parser for demonstration
// In a real application, you would use a proper markdown library like remark or marked
function markdownToHtml(markdown: string) {
  return markdown
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^#### (.*$)/gm, "<h4>$1</h4>")
    .replace(/^##### (.*$)/gm, "<h5>$1</h5>")
    .replace(/^###### (.*$)/gm, "<h6>$1</h6>")
    .replace(/\*\*(.*)\*\*/gm, "<strong>$1</strong>")
    .replace(/\*(.*)\*/gm, "<em>$1</em>")
    .replace(/\[(.*?)\]$$(.*?)$$/gm, '<a href="$2">$1</a>')
    .replace(/!\[(.*?)\]$$(.*?)$$/gm, '<img alt="$1" src="$2" />')
    .replace(/`{3}(.*?)`{3}/gs, (match, p1) => {
      // Enhanced code block styling
      const formattedCode = p1.replace(/</g, "&lt;").replace(/>/g, "&gt;")
      return `<pre class="code-block"><code>${formattedCode}</code></pre>`
    })
    .replace(/`([^`]+)`/gm, "<code>$1</code>")
    .replace(/^- (.*$)/gm, "<ul><li>$1</li></ul>")
    .replace(/^[0-9]+\. (.*$)/gm, "<ol><li>$1</li></ol>")
    .replace(/<\/ul>\s*<ul>/g, "")
    .replace(/<\/ol>\s*<ol>/g, "")
    .replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>")
    .replace(/\n\n/gm, "<br /><br />")
}

