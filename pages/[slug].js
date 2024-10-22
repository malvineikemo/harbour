import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const Post = ({ contentHtml, title }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
      title: data.title,
    },
  };
}

export default Post;
