// SERVER SIDE GENERATION

import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Fishes({ fish }) {

    const router = useRouter()


    return (
        <div className={styles.container}>
            {/* Important for SEO */}
            <Head>
                <title> {fish['Species Name']}</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {fish['Species Name']}
                </h1>

                <img src={fish['Species Illustration Photo'].src} width="300px" />

            </main>
        </div>
    )
}

// SSR
export async function getServerSideProps({ params }) {
    const req = await fetch(`https://www.fishwatch.gov/api/species/${params.id.replace(/_/g, " ")}`);
    const data = await req.json();

    return {
        props: { fish: data[0] },
    }
}



// // SSG
// export async function getStaticProps({ params }) {
//     console.log('params', params)
//     const req = await fetch(`https://www.fishwatch.gov/api/species/${params.id.replace(/_/g, " ")}`);
//     const data = await req.json();

//     return {
//         props: { fish: data[0] },
//     }
// }
// //tells next which dynamic route to render
// export async function getStaticPaths() {

//     const req = await fetch('https://www.fishwatch.gov/api/species');
//     const data = await req.json();
//     console.log('data', data)
//     const paths = data.map((fish, i) => {
//         return { params: { id: fish['Species Name'].replace(/ /g, "_") } }
//     })

//     return {
//         paths,
//         fallback: false
//     };
// } 
