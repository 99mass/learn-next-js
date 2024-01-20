import Head from 'next/head'
import Header from "../../components/Header.js";

export default function Photos({ title, url }) {
    return (
        <>
            <Head>
                <title>Photo</title>
            </Head>
            <Header />
            <h1>{title}</h1>
            <h2>{url}</h2>
            <img src={`${url}`} />
        </>
    )
}

export async function getStaticProps({ params }) {
    const { id } = params
    const photos = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const Photo = await photos.json()

    return {
        props: {
            title: Photo.title,
            url: Photo.url
        }
    }
}

export async function getStaticPaths() {
    const photos = await fetch('https://jsonplaceholder.typicode.com/photos')
    const res = await photos.json()
    const paths = res.map(ph => ({
        params: { id: String(ph.id) }
    }))

    return { paths, fallback: false }
}
