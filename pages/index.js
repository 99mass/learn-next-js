import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header  from "../components/Header.js";

export default function Home() {
  return (
    <>
    <Head>
       <title>Home</title>
    </Head>
    <Header/>
       <p>Home</p>       
    </>
  )
}