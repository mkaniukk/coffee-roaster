import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Coffee Roaster App</title>
                <link rel="icon" href="/coffee-cup.png" />
            </Head>
            <main className={styles.main}>
                <div className={styles.header}>Login Page</div>
            </main>
        </>
    );
}
