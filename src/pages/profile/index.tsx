import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import NavBar from '@/ components/NavBarComponent';

export default function ProfilePage() {
    return (
        <>
            <Head>
                <title>Coffee Roaster App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <div className={styles.header}>Profile Page</div>
            </main>
        </>
    );
}
