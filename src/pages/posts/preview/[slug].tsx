import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";
import styles from '../post.module.scss'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

interface PostsPropsPreview{
    post: {
        slug: string,
        title: string,
        content: string,
        updateAt: string
    }
}

export default function PostPreview({post}: PostsPropsPreview){
    const {data: session} = useSession();
    const router = useRouter();

    useEffect(() => {
        if(session?.activeSubscription) {
            router.push(`/posts/${post.slug}`)
        }
    }, [post.slug, router, session])


    return (
        <>
        <Head>
            <title>{post.title} | TechNews</title>
        </Head>

        <main className={styles.container}>
            <article className={styles.post}>
                <h1>{post.title}</h1>
                <time>{post.updateAt}</time>
                <div
                className={`${styles.postContent} ${styles.previewContent}`} 
                dangerouslySetInnerHTML={{__html: post.content}}/>

                <div className={styles.continueReading}>
                    <Link href='/' legacyBehavior>
                        <a href=""> Subscribe Now 🤗</a>
                    </Link>

                </div>
            </article>
        </main>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async ()=>{
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async({ params }) =>{

    const { slug } = params;


    const prismic = getPrismicClient()

    const response = await prismic.getByUID('post', String(slug), {})

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asText(response.data.content.splice(0,3)),
        updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
            day: '2-digit',
            month: 'long',
            year: "numeric"       
        })
    };

    return {
        props: {
            post
        },
        redirect: 60 * 30, //30 min
    }
}