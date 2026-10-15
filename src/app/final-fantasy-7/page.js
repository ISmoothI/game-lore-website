'use client'

import {useState} from "react";
import {DotGothic16} from "next/font/google";

import CharacterCard from "./components/charactercard";

import cloudIcon from "./assets/icon_cloud.svg";
import barretIcon from "./assets/icon_barret.svg";
import tifaIcon from "./assets/icon_tifa.svg";
import fingerIcon from "./assets/icon_finger.svg";

import styles from './page.module.css';
import Image from "next/image";

const dotGothic16 = DotGothic16({
    subsets: ["latin"],
    weight: ["400"]
});

export default function MainMenu() {
    const menuOptions = ["Item", "Magic", "Materia", "Equip", "Status", "Order", "Limit", "Config", "PHS", "Save", "Quit",];
    const [characters, setCharacters] = useState( [
        {"id": 1, "name": "Cloud", "level": 6, "health": 302, "magic": 54, "nextlevel": 100, "limitlevel": 40, "img": cloudIcon},
        {"id": 2, "name": "Barret", "level": 6, "health": 327, "magic": 43, "nextlevel": 10, "limitlevel": 50, "img": barretIcon},
        {"id": 3, "name": "Tifa", "level": 6, "health": 308, "magic": 44, "nextlevel": 10, "limitlevel": 10, "img": tifaIcon},
        {"id": 4, "name": "Aeris", "level": 1, "health": 300, "magic": 30, "nextlevel": 20, "limitlevel": 30, "img": null},
        {"id": 5, "name": "Red XIII", "level": 1, "health": 300, "magic": 30, "nextlevel": 30, "limitlevel": 10, "img": null},
        {"id": 6, "name": "Cait Sith", "level": 1, "health": 300, "magic": 30, "nextlevel": 50, "limitlevel": 80, "img": null},
        {"id": 7, "name": "Cid Highwind", "level": 1, "health": 300, "magic": 30, "nextlevel": 10, "limitlevel": 90, "img": null},
        {"id": 8, "name": "Yuffie", "level": 1, "health": 300, "magic": 30, "nextlevel": 80, "limitlevel": 40, "img": null},
        {"id": 9, "name": "Vincent", "level": 1, "health": 300, "magic": 30, "nextlevel": 70, "limitlevel": 50, "img": null},
    ]);
    const areas = ["Platform", "Sector 1", "No.1 Reactor", "Sector 8", "Midgar Train", "Sector 7 Station", "Sector 7 Slums", "7th Heaven"];

    const [areaIndex, setAreaIndex] = useState(7);

    return (
        <>
            <div className={`${styles.page} ${dotGothic16.className}`}>
                <div className={styles.main}>
                    <div className={styles.party}>
                        {characters.slice(0, 3).map((character, index) => (
                            <div key={index} className={styles.char__info}>
                                <CharacterCard character={character} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.menus}>
                        <div className={styles.menu}>
                            {menuOptions.map((option, index) => {
                                const [isHovered, setIsHovered] = useState(false);

                                return (
                                    <div key={index} className={styles.menuoption__container}>
                                        {isHovered &&
                                            <Image className={styles.finger__icon} src={fingerIcon} alt={"Pointing finger icon."} />
                                        }
                                        <h2 onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>{option}</h2>
                                    </div>
                            )})}
                        </div>
                        <div className={styles.extramenu}>
                            <div className={styles.extra__stats}>
                                <div className={styles.time}>
                                    <h2>Time</h2>
                                    <div className={styles.time__text}>
                                        <h2>01</h2>
                                        <h2 className={styles.time__colon}>:</h2>
                                        <h2>31:97</h2>
                                    </div>
                                </div>
                                <div className={styles.gil}>
                                    <h2>Gil</h2>
                                    <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{8}"} maxLength={8} defaultValue={"08311997"} size={8} title={`Click to change gil amount.`}/>
                                </div>
                            </div>
                            <div className={styles.area}>
                                <h2 onClick={() => setAreaIndex((areaIndex + 1) % areas.length)}>{areas[areaIndex]}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}