import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Coffee } from '../../models/Coffee/CoffeeModel';
import Link from 'next/link';

type CoffeeParams = {
    coffees: Array<Coffee>;
};

export default function CoffeesPage({ coffees }: CoffeeParams) {
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
                <div className={styles.header}>Coffees Page</div>
                <ul>
                    {coffees.map((coffee) => {
                        return (
                            <Link
                                key={coffee.Id}
                                className={styles.card}
                                href={`/coffees/${+coffee.Id - 1}`}
                            >
                                <button className={styles.header}>
                                    {coffee.Id}
                                </button>
                            </Link>
                        );
                    })}
                </ul>
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

    return {
        // Passed to the page component as props
        props: { coffees },
    };
}
