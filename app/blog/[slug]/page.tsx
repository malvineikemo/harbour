import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

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

### Link