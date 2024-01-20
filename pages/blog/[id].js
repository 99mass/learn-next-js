import Head from 'next/head'
import Header from "../../components/Header.js";

export default function blog({title,body}) {
    return (
        <>
            <Head>
                <title>Details</title>
            </Head>

            <Header />
            <h1>blog argument</h1>
            <p>{title}</p>
            <p>{body}</p>


        </>
    )
}
export async function getStaticProps({ params }) {
    const { id } = params
    const _post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await _post.json()

    return {
        props: {
            title: post.title,
            body: post.body
        }
    }

}

export async function getStaticPaths() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const resp = await posts.json()

    const paths = resp.map(post => ({
        params: { id: String(post.id) }
    }))

    return { paths, fallback: false }
}