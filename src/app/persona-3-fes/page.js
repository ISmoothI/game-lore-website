'use client'

import {Tirra} from "next/font/google";
import {useState} from "react";

import styles from './page.module.css';

const tirra = Tirra({
    weight: ["400", "700", "900"],
    subsets: ["latin"]
});

export default function MainMenu() {
    const menuOptions = {
        SKILL: "Use skills.",
        ITEM: "",
        PERSONA: "",
        EQUIP: "",
        STATUS: "",
        "S.LINK": "",
        SYSTEM: "",
    };

    const [hoveredOption, setHoveredOption] = useState(null);

    return (
        <>
            <div className={`${styles.page} ${tirra.className}`}>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h1>COMMAND</h1>
                        <div className={styles.header__time}>
                            <h3>Dark Hour</h3>
                            <div className={styles.header__date}>
                                <h3>8/22</h3>
                                <h3>*</h3>
                                <h3>M</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.menuoptions}>
                        {Object.keys(menuOptions).map(key => {
                            return (
                                <div key={key} className={styles.menuoption} onMouseEnter={() => setHoveredOption(key)} onMouseLeave={() => setHoveredOption(null)}>
                                    <h3 className={styles.menuoption__point}>*</h3>
                                    <h3 className={styles.menuoption__text}>{key}</h3>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.status__section}>
                        <div className={styles.status}>
                            <div className={styles.levelname}>
                                <div className={styles.level}>
                                    <h3>PLV</h3>
                                    <h3>1</h3>
                                </div>
                                <h3>Makoto Yuki</h3>
                            </div>
                            <div className={styles.health}>
                                <h3>HP</h3>
                                <input className={styles.health__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={18} size={3} title={"Click to change the health points of the character."}/>
                                <h3>/</h3>
                                <input className={styles.health__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={18} size={3} title={"Click to change the health points of the character."}/>
                                <div className={styles.healthbar__base}>
                                    <div className={styles.healthbar__fill} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.persona}>
                            <div className={styles.levelname}>
                                <h3>LV</h3>
                                <h3>1</h3>
                                <h3>Orpheus</h3>
                            </div>
                            <div className={styles.arcana}>
                                <h3>*</h3>
                                <h3>ARCANA</h3>
                                <h3>*</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.money}>
                        <h3>000,000</h3>
                        <h3>yen</h3>
                    </div>
                    <div className={styles.menuoption__description}>
                        <h3>{menuOptions[hoveredOption]}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}