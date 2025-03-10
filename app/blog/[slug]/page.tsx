import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

// Simple function to read markdown files
function getPostContent(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), "posts")
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Simple front matter parsing
    const frontMatterRegex = /---\s*([\s\S]*?)\s*---/
    const match = frontMatterRegex.exec(fileContents)
    
    if (!match) {
      return {
        frontMatter: { title: slug, date: new Date().toLocaleDateString() },
        content: fileContents
      }
    }
    
    const frontMatterString = match[1]
    const content = fileContents.replace(frontMatterRegex, '').trim()
    
    // Parse front matter
    const frontMatter: Record<string, string> = {}
    frontMatterString.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':')
      if (key && valueParts.length > 0) {
        frontMatter[key.trim()] = valueParts.join(':').trim()
      }
    })
    
    return { frontMatter, content }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string) {
  return markdown
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
    .replace(/^##### (.*$)/gm, '<h5>$1</h5>')
    .replace(/^###### (.*$)/gm, '<h6>$1</h6>')
    .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gm, '<em>$1</em>')
    .replace(/\[(.*?)\]$$(.*?)$$/gm, '<a href="$2">$1</a>')
    .replace(/!\[(.*?)\]$$(.*?)$$/gm, '<img alt="$1" src="$2" />')
    .replace(/```(.*?)```/gs, (match, p1) => {
      const formattedCode = p1.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      return `<pre><code>${formattedCode}</code></pre>`
    })
    .replace(/`([^`]+)`/gm, '<code>$1</code>')
    .replace(/^- (.*$)/gm, '<ul><li>$1</li></ul>')
    .replace(/^[0-9]+\. (.*$)/gm, '<ol><li>$1</li></ol>')
    .replace(/<\/ul>\s*<ul>/g, '')
    .replace(/<\/ol>\s*<ol>/g, '')
    .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
    .replace(/\n\n/gm, '<br /><br />')
}

export async function generateStaticParams() {
  try {
    const postsDirectory = path.join(process.cwd(), "posts")
    const filenames = fs.readdirSync(postsDirectory)
    
    return filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => ({
        slug: filename.replace(/\.md$/, '')
      }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostContent(params.slug)
  
  if (!post) {
    notFound()
  }
  
  const { frontMatter, content } = post
  
  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" size="sm" className="mb-6" asChild>
        <Link href="/blog">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
        {frontMatter.date && (
          <p className="text-gray-500 dark:text-gray-400">{frontMatter.date}</p>
        )}
      </div>
      
      <div className="prose prose-blue max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }} />
      </div>
    </div>
  )
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostContent(params.slug)
  
  if (!post) {
    return {
      title: "Not Found"
    }
  }
  
  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description || `Blog post about ${params.slug}`
  }
}