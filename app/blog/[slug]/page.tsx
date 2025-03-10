import { GetServerSideProps } from "next"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

interface BlogPostParams {
  slug: string
}

interface BlogPostProps {
  params: BlogPostParams
  post: any // Adjust this type as needed for the post data
}

// This function will fetch the post data on the server side for each request
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string }

  try {
    const post = getPostContent(slug)

    if (!post) {
      return { notFound: true }
    }

    return {
      props: {
        post,
        params: { slug },
      },
    }
  } catch (error) {
    console.error("Error fetching post:", error)
    return { notFound: true }
  }
}

// BlogPost component accepts post data and params as props
const BlogPost = ({ params, post }: BlogPostProps) => {
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

export default BlogPost
