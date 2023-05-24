import FollowUs from "@/components/FollowUs";
import Layout from "@/components/Layout";
import { IPost, posts } from "@/data/posts"
import MarkdownIt from 'markdown-it'

import Head from "next/head";
import PageContainer from "@/components/PageContainer";
import ReadTime from "@/components/ReadTime";
import Author from "@/components/Author";

interface IProps {
  post: IPost
}

export default function Post({ post }: IProps) {
  return (
    <Layout>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.description} key="desc" />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.description} />
        <meta property="og:image" content={`https://anyeco.com/blog-imgs/bienvenidos/${post?.imageName}.jpg`} />
      </Head>
      <PageContainer>
        <h1 className="text-5xl mb-5 mx-4 text-gray-600 mt-4 md:mt-0">{post?.title}</h1>
        <p className="mx-4 mb-4 text-xl md:text-lg italic text-gray-600">{post?.description}</p>  
        <ReadTime />
        <div className={`w-full bg-cover bg-center`} style={{
          height: 400,
          backgroundImage: `url('/blog-imgs/${post?.slug}/${post?.imageName}.jpg')`,
        }}/>
        <Author post={post} />
        <div className="px-5 md:px-8">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post?.content }}
          />
        </div>
        <div className="w-full md:flex text-center md:mx-8 mt-12">
          <FollowUs />
        </div>
      </PageContainer>
    </Layout>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  //const res = await fetch('https://.../posts');
  //const posts = await res.json(); 
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
 
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  //const res = await fetch(`https://.../posts/${params.id}`);
  //const post = await res.json();
  const md = new MarkdownIt({ html: true });
  const post = posts[0]
  post.content = md.render(post?.content)
 
  // Pass post data to the page via props
  return { props: { post } };
}