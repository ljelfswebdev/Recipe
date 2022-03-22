import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LJ | Recipes</title>
        <meta name="description" content="A recipe app created by Lewis Jelfs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to The recipe app
        </h1>
      </main>
    </div>
  )
}
