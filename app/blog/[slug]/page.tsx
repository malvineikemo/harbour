import { Metadata } from "next" // Import Metadata type
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

// Your existing getPostContent function...

interface BlogPostProps {
  params: { slug: string } | Promise<{ slug: string }>
}

// Ensure generateStaticParams returns a Promise of the correct type
export async function generateStaticParams(): Promise<{ slug: string }[]> {
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

// BlogPost component with correct async params typing
export default async function BlogPost({ params }: BlogPostProps) {
  // Make sure the `params` is awaited if it's a promise
  const post = getPostContent(await params)
  
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

// Ensure generateMetadata returns a Promise of the correct type
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = getPostContent(await params)
  
  if (!post) {
    return {
      title: "Not Found"
    }
  }
  
  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description || `Blog post about ${params.slug}`
  }
} // <-- Check this closing brace
