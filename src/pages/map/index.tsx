import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import MapComponent from '@/ components/MapComponent';
import NavBar from '@/ components/NavBarComponent';

export default function MapPage() {
    return (
        <>
            <Head>
                <title>Coffee Roaster App</title>
                <link rel="icon" href="/coffee-cup.png" />
            </Head>
            <main className="grid-rows-2 h-full">
                <NavBar />
                <MapComponent />
            </main>
        </>
    );
}
