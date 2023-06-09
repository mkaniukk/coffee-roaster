import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Coffee } from '../../models/Coffee/CoffeeModel';
import Link from 'next/link';
import NavBar from '@/ components/NavBarComponent';
import MapComponent from '@/ components/MapComponent';

type GetStaticPathsParams = {
    params: { id: number };
};

type CoffeeParams = {
    coffee: Coffee;
};

export default function CoffeePage({ coffee }: CoffeeParams) {
    console.log(coffee);

    return (
        <>
            <Head>
                <title>Coffee Roaster App</title>
                <link rel="icon" href="/coffee-cup.png" />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <a className="block w-1/4 text-center h-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Coffee {coffee.Id} Page{' '}
                    </h5>
                    {coffee.Company && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Company: {coffee?.Company?.toUpperCase()}
                        </p>
                    )}
                    {coffee.Company && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Country: {coffee?.Country?.of?.Origin.toUpperCase()}
                        </p>
                    )}
                    {coffee.Producer && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Producer: {coffee?.Producer?.toUpperCase()}
                        </p>
                    )}
                    {coffee.Region && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Region: {coffee?.Region?.toUpperCase()}
                        </p>
                    )}
                    {coffee?.Farm?.Name && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Farm: {coffee?.Farm?.Name.toUpperCase()}
                        </p>
                    )}
                    {coffee?.Total?.Cup?.Points && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Points: {coffee?.Total?.Cup?.Points}
                        </p>
                    )}
                </a>
                <div className="grid-cols-2">
                    <Link
                        className={styles.card}
                        href={`/coffees/${+coffee.Id - 1}`}
                    >
                        <button className={styles.header}>&#8592;</button>
                    </Link>

                    <Link
                        className={styles.card}
                        href={`/coffees/${+coffee.Id + 1}`}
                    >
                        <button className={styles.header}>&#8594;</button>
                    </Link>
                </div>
                <MapComponent
                    location={
                        coffee?.Farm?.Name +
                        ' ' +
                        coffee?.Region +
                        ' ' +
                        coffee?.Country?.of?.Origin
                    }
                />
            </main>
        </>
    );
}

export async function getStaticPaths() {
    const coffees = await fetch(`http://127.0.0.1:3000/api/coffees`).then(
        (data) => {
            return data.json();
        },
    );

    const paths = await coffees.map((coffee: { Id: number }) => ({
        params: { id: coffee.Id },
    }));

    return { paths, fallback: false };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: GetStaticPathsParams) {
    const { id } = context.params;

    const coffee = await fetch(`http://127.0.0.1:3000/api/coffees/${id}`).then(
        (data) => {
            return data.json();
        },
    );

    return {
        // Passed to the page component as props
        props: { coffee },
    };
}
