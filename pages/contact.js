import Head from 'next/head'
import styles from '../styles/Home.module.css'


const contact = () => {
    return ( 
        <div className={styles.container}>
        <Head>
          <title>LJ | Contact</title>
          <meta name="description" content="Contact" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
           Contact
          </h1>
        </main>
      </div>
     );
}
 
export default contact;