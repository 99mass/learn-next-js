import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header.js";
import Exemple from "../components/Exemple.js";

import { useState, useEffect } from 'react';

export default function Home() {

  const [value, setValue] = useState([])
  const [displayValue, setDisplayValue] = useState('');
  const [isloading, setIsloading] = useState(true);
  const [number, setNumber] = useState(0)
  const [fecthData, setFormData] = useState({checkbox: [],})

  useEffect(() => {
    async function fecthData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const resp = await data.json();
      setValue(resp);
      setIsloading(false)
    }
    fecthData();

  }, [])
  useEffect(() => {
    setDisplayValue(
      !isloading
        ? value.map((val) => <li key={val.id}><Link href={`/blog/${val.id}`}> {val.title}</Link> </li>)
        : <span>isloading...</span>
    );
  }, [isloading, value]);

  const addNumer = (n) => {
    setNumber(n)
  }

  const handleValuesChange = (event) => {
    const { type, name, value, checked, files } = event.target;

    setFormData(prev => {
      if (type === 'checkbox') {
        const updatedCheckbox = checked
          ? [...prev.checkbox, value]
          : prev.checkbox.filter(item => item !== value);

        return { ...prev, [name]: updatedCheckbox };
      } else {
        return { ...prev, [name]: value };
      }
    });
  }

  const handleFrom = (event) => {
    event.preventDefault();
    console.log(fecthData);
  }


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />

      <form onSubmit={handleFrom} className={styles._form}>
        <label>userName</label>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={fecthData.username || ''}
          onChange={handleValuesChange}
          required
        />
        <label>email</label>
        <input
          type='email'
          name='email'
          placeholder='E-mail'
          value={fecthData.email || ''}
          onChange={handleValuesChange}
          required
        />

        <input
          type='checkbox'
          name='checkbox'
          value={'mango' || ''}
          onChange={handleValuesChange}
          required
        />
        <label >mango</label>
        <input
          type='checkbox'
          name='checkbox'
          value={'orange' || ''}
          onChange={handleValuesChange}
          required
        />
        <label >orange</label>

        <label >Ratio</label>
        <input
          type='number'
          name='ratio'
          placeholder='Ratio'
          value={fecthData.ratio || ''}
          onChange={handleValuesChange}
          required
        />



        <label>
          Upload File
          <input
            type="file"
            name="file"
            onChange={handleValuesChange}
          />
        </label>

        <label>
          Fruits
          <select
            name='fruit'
            value={fecthData.fruit || ''}
            onChange={handleValuesChange}
            required
          >
            <option value=''>Select a fruit</option>
            <option value='mango'>Mango</option>
            <option value='orange'>Orange</option>
          </select>
        </label>


        <button type='submit'>Send</button>
      </form>




      {/* <h2>number: {number}</h2>     
     { !isloading && value.map((val) =>( <Exemple key={val.id} title={val.title} body={val.body} addNumer={addNumer} index={val.id} />))} */}

      {/* <ul>{displayValue}</ul> */}

    </>
  )
}
