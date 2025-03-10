import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

const components = {}

async function getPostContent(slug: string) {
  const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`)

  try {
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    if (data.published === false) {
      return null
    }

    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
      },
      scope: data,
    })

    return { mdxSource, frontMatter: data }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(`Error reading or processing post ${slug}:`, e.message)
    } else {
      console.error(`Unknown error occurred while processing post ${slug}`)
    }
    return null
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts")
  const filenames = fs.readdirSync(postsDirectory)

  return filenames.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }))
}

// Fix: Remove the PageProps extension which is causing the type error
interface BlogPostProps {
  params: { slug: string }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params
  const post = await getPostContent(slug)

  if (!post) {
    notFound()
  }

  const { mdxSource, frontMatter } = post

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
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostContent(slug)

  if (!post) {
    return {
      title: "Not Found",
    }
  }

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
  }
}