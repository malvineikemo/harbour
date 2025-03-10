import { notFound } from 'next/navigation';
import { getPostContent } from '@/lib/getPostContent'; // Adjust this import to your actual function
import { BlogPostParams } from '@/types'; // Adjust this import to your actual types file

// Define the type for BlogPostParams
interface BlogPostParams {
  slug: string;
}

// The default page component
export default async function BlogPost({ params }: { params: BlogPostParams }) {
  // Get the post data
  const post = await getPostContent(params.slug);

  // If the post doesn't exist, show a 404 page
  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// Define the metadata generation function for dynamic metadata
export async function generateMetadata({ params }: { params: BlogPostParams }) {
  const post = await getPostContent(params.slug);

  // If the post doesn't exist, return a generic title
  if (!post) {
    return {
      title: 'Not Found',
      description: 'This blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt || `Read this post about ${params.slug}`,
  };
}