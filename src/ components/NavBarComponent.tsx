import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav
            className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full
                z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
        >
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center"
                ></a>
                <div className="flex md:order-2">
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 
                            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                            rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 
                            dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Log in
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full 
                        md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul
                        className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg 
                        bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium 
                        md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 
                        dark:border-gray-700"
                    >
                        <li>
                            <Link
                                href="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 
                                    rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/coffees"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded 
                                    hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                                    md:p-0 md:dark:hover:text-white dark:text-gray-400 
                                    dark:hover:bg-gray-700 dark:hover:text-white 
                                    md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Coffees
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/map"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded 
                                    hover:bg-gray-100 md:hover:bg-transparent 
                                    md:hover:text-blue-700 md:p-0 md:dark:hover:text-white 
                                    dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                                    md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Map
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="profile"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded 
                                    hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                                    md:p-0 md:dark:hover:text-white dark:text-gray-400 
                                    dark:hover:bg-gray-700 dark:hover:text-white 
                                    md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
