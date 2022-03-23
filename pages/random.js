import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import {useState, useEffect} from 'react';
// import axios from 'axios';
// import {Modal} from 'antd';
import Link from 'next/link'

const Random = () => {
    return ( 
        <div className={styles.container}>
        <Head>
          <title>LJ | Get a random recipe of the day</title>
          <meta name="description" content="The recipe of the day" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            A random recipe
          </h1>
            <div className="container">
              <div className="row text-center">
                <h5>Get a random meal by clicking below</h5>
                <Link href="/randomPage">
                  <a>
                    <button className="btn btn-primary">Get Meal ?</button>
                  </a>
                </Link>
                
              </div>
            </div>
        </main>

      </div>
     );
}
 
export default Random;