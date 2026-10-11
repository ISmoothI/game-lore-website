'use client'

import Image from "next/image";

import {useState} from "react";
import {DotGothic16} from "next/font/google";

import styles from './page.module.css';

const dotGothic16 = DotGothic16({
    subsets: ["latin"],
    weight: ["400"]
});

export default function MainMenu() {
    const menuOptions = ["Item", "Magic", "Materia", "Equip", "Status", "Order", "Limit", "Config", "PHS", "Save", "Quit",];
    const [characters, setCharacters] = useState( [
        {"id": 1, "name": "Cloud", "level": "1", "health": "300", "magic": "30", "nextlevel": "10", "limitlevel": "1", "img": null},
        {"id": 2, "name": "Barret", "level": "1", "health": "300", "magic": "30", "nextlevel": "10", "limitlevel": "1", "img": null},
        {"id": 3, "name": "Tifa", "level": "1", "health": "300", "magic": "30", "nextlevel": "10", "limitlevel": "1", "img": null},
        {"id": 4, "name": "Aeris", "level": "1", "health": "300", "magic": "30", "nextlevel": "10", "limitlevel": "1", "img": null},
        {"id": 5, "name": "Red XIII", "level": "1", "health": "300", "magic": "30", "nextlevel": "10", "limitlevel": "1", "img": null},
        {"id": 6, "name": "Cait Sith", "level": "1", "health": "300", "magic": "30", "nextlevel": "10", "limitlevel": "1", "img": null},
        {"id": 7, "name": "Cid Highwind", "level": "1", "health": "300", "magic": "30", "nextlevel": "10", "limitlevel": "1", "img": null},
        {"id": 8, "name": "Yuffie", "level": "1", "health": "300", "magic": "30", "nextlevel": "10", "limitlevel": "1", "img": null},
        {"id": 9, "name": "Vincent", "level": "1", "health": "300", "magic": "30", "nextlevel": "10", "limitlevel": "1", "img": null},
    ]);

    return (
        <>
            <div className={`${styles.page} ${dotGothic16.className}`}>
                <div className={styles.main}>
                    <div className={styles.party}>
                        {characters.slice(0, 3).map((character, index) => (
                            <div key={index} className={styles.char__info}>
                                {/*<Image src={} alt={} />*/}
                                <div className={styles.char__stats}>
                                    <h2>{character.name}</h2>
                                    <div className={styles.stats}>
                                        <div>
                                            <div className={styles.level}>
                                                <h2>LV</h2>
                                                <h2>{character.level}</h2>
                                            </div>
                                            <div className={styles.health}>
                                                <h2>HP</h2>
                                                <h2>{character.health}</h2>
                                            </div>
                                            <div className={styles.magic}>
                                                <h2>MP</h2>
                                                <h2>{character.magic}</h2>
                                            </div>
                                        </div>
                                        <div className={styles.char__levels}>
                                            <h2>next level</h2>
                                            <h2>BAR</h2>
                                            <h2>Limit level {character.limitlevel}</h2>
                                            <h2>BAR</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.menu}>
                        {menuOptions.map((option, index) => (
                            <h2 key={index}>{option}</h2>
                        ))}
                    </div>
                    <div className={styles.extra__stats}>
                        <div className={styles.time}>
                            <h2>Time</h2>
                            <h2>00:00:00</h2>
                        </div>
                        <div className={styles.gil}>
                            <h2>Gil</h2>
                            <h2>00000000</h2>
                        </div>
                    </div>
                    <div className={styles.area}>
                        <h2>AREA</h2>
                    </div>
                </div>
            </div>
        </>
    )
}