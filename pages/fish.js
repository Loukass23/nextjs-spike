// STATIC GENERATION
import styles from '../styles/Home.module.css'
export async function getStaticProps() {

    const req = await fetch(`https://www.fishwatch.gov/api/species`);
    const data = await req.json();
    console.log('data', data)
    return {
        props: { fishes: data },
    }
}


export default function Fishes({ fishes }) {
    console.log('fishes', fishes)
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Fishies
                </h1>
                <div className={styles.grid}>
                    {fishes.map(fish => {
                        return <div className={styles.card} key={fish['Species Name']}>
                            <h3>{fish['Species Name']}</h3>
                            <img width={100} src={fish['Species Illustration Photo'].src} />
                        </div>
                    })}
                </div>
            </main>
        </div>
    )

}