'use client'

import {useEffect, useState} from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "@/components/searchbar/searchbar.module.css";

export default function SearchBar() {
    const prefix = process.env.NODE_ENV === "production" ? "/game-lore-website" : "";
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(`${prefix}/data/games.json`);
                const data = await res.json();
                setData(data);
            } catch (err) {
                console.error(err);
            }
        }

        loadData();
    }, []);

    if(!data) return <div>Loading...</div>;
    if(data.error) return <div>Loading...</div>;

    return (
        <div className={styles.search__container}>
            <input className={styles.searchbar} type={"search"} placeholder={"Search..."} onChange={e => setSearchTerm(e.target.value)} />
            <ul className={styles.list__container}>
                {
                    data.filter((game) => {
                        if(searchTerm === "") {
                            // setSearchResultDisplay("none");

                            return searchTerm;
                        }
                        else if(game.title.trim().toLowerCase().includes(searchTerm.toLowerCase())) {
                            // setSearchResultDisplay("block");

                            return game;
                        }
                    })
                    .map((game) => {
                        return (
                            <li key={game.id}>
                                <Link key={game.id} href={`/${game.url}/achievements`} className={styles.result__link}>
                                    {/*<Image src={checkmark} alt={`An image for ${game.title}`} className={styles.result__image} />*/}
                                    <div className={styles.result__container}>
                                        <h5>{game.title}</h5>
                                        {/*<h5 style={{ margin: 0 }}>{game.description}</h5>*/}
                                        <div className={styles.description__container}>
                                            {game.tags.map((tag, index) => (
                                                <h6 key={index}>{tag}</h6>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}