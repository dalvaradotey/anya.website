import FollowUs from "@/components/FollowUs";
import Layout from "@/components/Layout";
import { IPost } from "@/data/posts"
import MarkdownIt from 'markdown-it'

import Head from "next/head";
import PageContainer from "@/components/PageContainer";
import ReadTime from "@/components/ReadTime";
import Author from "@/components/Author";
import PostService from "@/services/PostService";

interface IProps {
  post: IPost
}

export default function Post({ post }: IProps) {
  return (
    <Layout>
      <Head>
        <title>{post?.attributes.metaTitle}</title>
        <meta name="description" content={post?.attributes?.metaDescription} key="desc" />
        <meta property="og:title" content={post?.attributes.metaTitle} />
        <meta property="og:description" content={post?.attributes?.metaDescription} />
        <meta property="og:image" content={post?.attributes?.image?.data?.attributes?.formats?.large?.url} />
      </Head>
      <PageContainer>
        <h1 className="text-5xl mb-5 mx-4 text-gray-600 mt-4 md:mt-0">{post?.attributes?.title}</h1>
        <p className="mx-4 mb-4 text-xl md:text-lg italic text-gray-600">{post?.attributes?.description}</p>  
        <ReadTime />
        <div className={`w-full bg-cover bg-center`} style={{
          height: 400,
          backgroundImage: `url('${post?.attributes?.image?.data?.attributes?.formats?.large?.url}')`,
        }}/>
        <Author post={post} />
        <div className="px-5 md:px-8">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post?.attributes?.content }}
          />
        </div>
        <div className="w-full md:flex text-center md:mx-8 mt-12">
          <FollowUs />
        </div>
      </PageContainer>
    </Layout>
  )
}

export async function getStaticPaths() {
  const postService = new PostService
  const posts = await postService.get()

  if (!posts?.data?.length) return { paths: [], fallback: false  }

  const paths = posts?.data?.map((post: any) => ({
    params: { slug: post?.attributes?.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  const postService = new PostService
  const posts = await postService.get({
    slug: params?.slug,
    'populate[0]': 'image',
    'populate[1]': 'author.image',
  })

  if (!posts?.data?.length) return { props: { } }

  const md = new MarkdownIt({ html: true });
  const post = posts?.data[0]
  post.attributes.content = md.render(post?.attributes?.content)

  return { props: { post } }
}
