import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Coffee } from '../../models/Coffee/CoffeeModel';
import Link from 'next/link';
import NavBar from '@/ components/NavBarComponent';

type CoffeeParams = {
    coffees: Array<Coffee>;
};

export default function CoffeesPage({ coffees }: CoffeeParams) {
    return (
        <>
            <Head>
                <title>Coffee Roaster App</title>
                <link rel="icon" href="/coffee-cup.png" />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <div className={styles.header}>Coffees Page</div>
                <ul className="grid grid-cols-3 gap-3">
                    {coffees.map((coffee) => {
                        return (
                            <Link
                                key={+coffee._id}
                                className="border-4 w-full text-center border-gray-600 hover:bg-gray-400/50"
                                href={`/coffees/${+coffee.Id - 1}`}
                            >
                                <button className={styles.header}>
                                    {coffee.Owner}
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
