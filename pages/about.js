import Head from 'next/head'
import Header  from "../components/Header.js";
export default function About() {
    return( 
         <>
             <Head>
            <title>About</title>
            </Head>

            <Header/>
            <h1>About</h1>
        </>
    )
}