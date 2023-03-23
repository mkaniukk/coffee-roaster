import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import MapComponent from '@/ components/MapComponent';
import NavBar from '@/ components/NavBarComponent';
import CoffeesMapComponent from '@/ components/CoffeesMapComponent';
import { Coffee } from '@/models/Coffee/CoffeeModel';

type CoffeesMapProps = {
    locations: string;
};

export default function Home({ locations }: CoffeesMapProps) {
    return (
        <>
            <Head>
                <title>Coffee Roaster App</title>
                <link rel="icon" href="/coffee-cup.png" />
            </Head>
            <main className="grid-rows-2 h-full">
                <NavBar />
                <CoffeesMapComponent locations={[locations]} />
            </main>
        </>
    );
}

export async function getStaticProps() {
    const coffees = await fetch(`http://127.0.0.1:3000/api/coffees`).then(
        (data) => {
            return data.json();
        },
    );

    const locations = coffees
        .map((coffee: Coffee) => {
            return (
                coffee?.Farm?.Name +
                ' ' +
                coffee?.Region +
                ' ' +
                coffee?.Country?.of?.Origin
            );
        })
        .slice(0, 20);

    console.log(locations);

    return {
        // Passed to the page component as props
        props: { locations },
    };
}
