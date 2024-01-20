import Head from 'next/head'
import Header from "../components/Header.js";
import Link from "next/link"
import { useEffect, useState } from 'react';
export default function About() {

    const [data,setData]=useState([])
    const [loading,setloading]=useState(true)
    const [displayData,setDisplayData]=useState('')





    useEffect(() => {
        async function getData() {
            const _data=await fetch('https://jsonplaceholder.typicode.com/photos')
            const res=await _data.json()
            setData(res)
            setloading(false)
        }
        getData()
    }, [])
    console.log(data);
    useEffect(() => {
        setDisplayData(!loading && data.map((ph,index)=>(
            <li key={index}><Link href={`/photos/${ph.id}`}>{ph.title}</Link></li>
        )))
    }, [loading,data])
    
    

    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <Header />
            <h1>About</h1>
            <ul>
                {displayData}
            </ul>
        </>
    )
}