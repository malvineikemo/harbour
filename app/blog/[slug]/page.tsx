import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

// Define the types for props and data
interface BlogPostParams {
  slug: string
}

interface FrontMatter {
  title: string
  date?: string
  description?: string
}

interface Post {
  frontMatter: FrontMatter
  content: string
}

interface BlogPostProps {
  params: BlogPostParams
}

// This is the actual server-side component
const BlogPost = async ({ params }: BlogPostProps) => {
  const post = await getPostContent(params.slug)

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

// Ensure generateMetadata is correct and returns a Promise<Metadata>
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = await getPostContent(params.slug)

  if (!post) {
    return {
      title: 'Not Found'
    }
  }

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description || `Blog post about ${params.slug}`
  }
}

export default BlogPost // Correct default export
