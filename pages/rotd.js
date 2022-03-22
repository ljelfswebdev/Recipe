import Head from 'next/head'
import styles from '../styles/Home.module.css'


const rotd = () => {
    return ( 
        <div className={styles.container}>
        <Head>
          <title>LJ | Recipe of the day</title>
          <meta name="description" content="The recipe of the day" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to The recipe of the day
          </h1>
        </main>
      </div>
     );
}
 
export default rotd;