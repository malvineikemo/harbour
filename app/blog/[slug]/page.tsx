import { notFound } from 'next/navigation'

interface BlogPostParams {
  slug: string
}

// Example async function to fetch post content
const getPostContent = async (slug: string) => {
  const res = await fetch(`https://api.example.com/posts/${slug}`)
  if (!res.ok) {
    return null
  }
  return res.json()
}

const BlogPost = async ({ params }: { params: BlogPostParams }) => {
  const post = await getPostContent(params.slug)

  if (!post) {
    notFound() // Trigger 404 if no post found
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

// Dynamic metadata generation
export async function generateMetadata({ params }: { params: BlogPostParams }) {
  const post = await getPostContent(params.slug)

  if (!post) {
    return { title: 'Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt || `Post about ${params.slug}`,
  }
}

export default BlogPost
