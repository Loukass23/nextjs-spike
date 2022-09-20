
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Fishes(props) {
  console.log('props', props)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Fishies
        </h1>

        <ul>
          <li>
            <Link href="/fishes/Atlantic_Northern_Shrimp"><a>Atlantic Northern Shrimp</a></Link>
          </li>
          <li>
            <Link href="/fishes/Canary_Rockfish"><a>Canary Rockfish</a></Link>
          </li>
          <li>
            <Link href="/fishes/Striped_Marlin"><a>Striped Marlin</a></Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

