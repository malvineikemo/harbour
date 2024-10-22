import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the frontmatter and markdown content
  const { data, content } = matter(fileContents);

  // Convert markdown content to HTML
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
      ...data,  // Assuming frontmatter includes title, date, etc.
    },
  };
}
