import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import NavBar from '@/ components/NavBarComponent';

export default function ProfilePage() {
    return (
        <>
            <Head>
                <title>Coffee Roaster App</title>
                <link rel="icon" href="/coffee-cup.png" />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <div className={styles.header}>Profile Page</div>
            </main>
        </>
    );
}
