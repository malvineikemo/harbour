import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type PageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: any;
};

const Page = ({ source }: PageProps) => {
  return <MDXRemote {...source} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const mdxSource = await serialize(fileContents);

  return {
    props: {
      source: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentDir = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(contentDir);

  // Generate paths based on filenames (removing the .md extension)
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false, // 404 if a page doesn't exist
  };
};

export default Page;
