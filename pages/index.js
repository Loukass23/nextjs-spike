import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fishy App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.h2}>
          Show me some Client side rendering<Link href="/hello">🐟</Link>
        </h2>
        <h2 className={styles.h2}>
          Show me some statically generated<Link href="/fish">🐟</Link>
        </h2>
        <h2 className={styles.h2}>
          Show me some dynamic routes<Link href="/fishes">🐟</Link>
        </h2>
      </main>
    </div>
  )
}
