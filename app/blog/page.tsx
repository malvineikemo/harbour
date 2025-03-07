import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

// In a real application, this would come from a database or file system
const posts = [
  {
    id: "getting-started",
    title: "Getting Started with Harbour",
    description: "Learn how to set up and use Harbour for your content needs.",
    date: "March 7, 2025",
    readTime: "5 min read",
  },
  {
    id: "markdown-guide",
    title: "Markdown Guide",
    description: "A comprehensive guide to using Markdown in your Harbour content.",
    date: "March 5, 2025",
    readTime: "8 min read",
  },
  {
    id: "customization",
    title: "Customizing Your Harbour Site",
    description: "Tips and tricks for customizing your Harbour site to match your brand.",
    date: "March 3, 2025",
    readTime: "6 min read",
  },
  {
    id: "advanced-features",
    title: "Advanced Harbour Features",
    description: "Explore the advanced features of Harbour for power users.",
    date: "March 1, 2025",
    readTime: "10 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Blog</h1>
        <p className="text-gray-300">Explore our latest articles and tutorials about Harbour and web development.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription className="text-gray-400">{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-400">
                {post.date} · {post.readTime}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800">
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

