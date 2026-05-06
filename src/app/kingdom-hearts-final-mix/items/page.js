'use client'

import localFont from "next/font/local";

const myFont = localFont({
    src: '../assets/fonts/KHMenu.woff2'
})

import {useEffect, useRef, useState} from "react";

import MenuOption from "../components/menuoption/menuoption";

import styles from "@/app/kingdom-hearts-final-mix/page.module.css";

export default function ItemsPage() {
    const menuOptions = {
        Sora: "Items equipped by Sora. Select the Items command to use them.",
        Donald: "Items equipped by Donald. Select the Items command to use them.",
        Goofy: "Items equipped by Goofy. Select the Items command to use them.",
        Stock: ".",
        "Gummi Ship": "Gummi blocks to be used for building gummi ships."
    }
    const itemOptions = {
        Recovery: [
            {
                id: 1,
                title: "Potion",
                description: "Description",
            },
            {
                id: 2,
                title: "Hi-Potion",
                description: "Description",
            },
            {
                id: 3,
                title: "Mega-Potion",
                description: "Description",
            },
            {
                id: 4,
                title: "Ether",
                description: "Description",
            },
            {
                id: 5,
                title: "Mega-Ether",
                description: "Description",
            },
            {
                id: 6,
                title: "Elixir",
                description: "Description",
            },
            {
                id: 7,
                title: "Megalixir",
                description: "Description",
            }
        ],
        Stat: [
            {
                id: 1,
                title: "Tent",
                description: "Description",
            },
            {
                id: 2,
                title: "Camping Set",
                description: "Description",
            },
            {
                id: 3,
                title: "Cottage",
                description: "Description",
            },
            {
                id: 4,
                title: "Power Up",
                description: "Description",
            },
            {
                id: 5,
                title: "Defense Up",
                description: "Description",
            },
            {
                id: 6,
                title: "AP Up",
                description: "Description",
            }
        ]
    }

    const [hoveredKey, setHoveredKey] = useState(null);
    const [time, setTime] = useState("");

    useEffect(() => {
        const timeFormat = () => {
            setTime(new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }));
        };

        timeFormat();

        const timer = setInterval(timeFormat, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className={`${styles.page} ${myFont.className}`}>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h2>MENU</h2>
                        <h1>Area Name</h1>
                        <h3>World Name</h3>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.menu__options}>
                            {Object.entries(menuOptions).map(([key, description]) => {
                                let colorOption = (key === "Save") ? "green" : "red";

                                return(
                                    <MenuOption key={key} text={key} color={colorOption}
                                                onMouseEnter={() => setHoveredKey(description)}
                                                onMouseLeave={() => setHoveredKey(null)}
                                    />
                                )
                            })}
                        </div>
                        <div className={styles.menu__options}>
                            {Object.entries(itemOptions).map(([type, entries]) => {
                                return(
                                    <div key={type} className={styles.menu__options}>
                                        {entries.map((entry, index) => (
                                            <MenuOption key={index} text={entry.title} image={type} imageStart={true}
                                                        onMouseEnter={() => setHoveredKey(entry.description)}
                                                        onMouseLeave={() => setHoveredKey(null)}
                                            />
                                        ))}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.footer__stats}>
                            <div className={styles.munny}>
                                <h4 className={styles.munny__header}>munny</h4>
                                <h4 className={styles.munny__amount}>00000</h4>
                            </div>
                            <div className={styles.time}>
                                <h4 className={styles.time__header}>time</h4>
                                {/*<h4 className={styles.time__amount}>{time.toLocaleTimeString()}</h4>*/}
                            </div>
                        </div>
                        <div className={styles.footer__description}>
                            <h4>{hoveredKey}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}