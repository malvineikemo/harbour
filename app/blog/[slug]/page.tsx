import { PageProps } from "next"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { notFound } from "next/navigation"

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

// ✅ Fix: Extend `PageProps` correctly
interface BlogPostProps extends PageProps {
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
   
