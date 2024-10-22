import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import Layout from '../components/Layout';

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('content'));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('content', slug + '.md'), 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    return {
        props: {
            frontmatter,
            contentHtml
        }
    };
}

const PostPage = ({ frontmatter, contentHtml }) => {
    return (
        <Layout>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </Layout>
    );
};

export default PostPage;
