


export default function Fish({ fish }) {

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