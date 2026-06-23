'use client'

import {Inter} from "next/font/google";
import {useState} from "react";

import styles from './page.module.css';

const inter = Inter({
    weight: ["500", "600", "700", "900"],
    subsets: ["latin"]
});

export default function MainMenu() {
    const timeOptions = ["Daytime", "Afternoon", "Evening", "Nighttime", "Dark Hour"];
    const menuOptions = {
        SKILL: "Use skills.",
        ITEM: "",
        PERSONA: "",
        EQUIP: "",
        STATUS: "",
        "S.LINK": "",
        SYSTEM: "",
    };
    const personaOptions = {
        Orpheus: "Fool",
        Thanatos: "Death",
    };

    const [currTimeIndex, setCurrTimeIndex] = useState(0);
    const [hoveredOption, setHoveredOption] = useState(null);

    return (
        <>
            <div className={`${styles.page} ${inter.className}`}>
                <div className={styles.main}>
                    <div className={styles.content}>
                        <h1 className={styles.menu__text}>MENU</h1>
                        <div className={styles.header}>
                            <h2>COMMAND</h2>
                            <div className={styles.header__time}>
                                <div className={styles.time} onClick={() => setCurrTimeIndex((currTimeIndex + 1) % timeOptions.length)}>
                                    <h3 className={styles.time__text}>{timeOptions[currTimeIndex]}</h3>
                                </div>
                                <div className={styles.header__date}>
                                    <h3 className={styles.date__number}>8</h3>
                                    <h3 className={styles.date__day}>/</h3>
                                    <h3 className={styles.date__number}>22</h3>
                                    <div className={styles.dot}/>
                                    <h3 className={styles.date__day}>M</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.menuoptions}>
                            {Object.keys(menuOptions).map(key => {
                                return (
                                    <div key={key} className={styles.menuoption} onMouseEnter={() => setHoveredOption(key)} onMouseLeave={() => setHoveredOption(null)}>
                                        <div className={styles.menuoption__point}/>
                                        <h3 className={styles.menuoption__text}>{key}</h3>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.status__section}>
                            <div className={styles.status}>
                                <div className={styles.levelname}>
                                    <div className={styles.level}>
                                        <h4>PLv</h4>
                                        <h4>1</h4>
                                    </div>
                                    <h3 style={{fontStyle: "initial", fontWeight: "500"}}>Makoto Yuki</h3>
                                    <div className={styles.levelname__underline}/>
                                </div>
                                <div className={styles.health}>
                                    <h4>HP</h4>
                                    <input className={styles.point__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={18} size={3} title={"Click to change the health points of the character."}/>
                                    <h4>/</h4>
                                    <input className={styles.point__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={18} size={3} title={"Click to change the health points of the character."}/>
                                    <div className={styles.pointcontainer__base}>
                                        <div className={styles.healthbar__fill} />
                                    </div>
                                    <div className={styles.health__underline}/>
                                </div>
                                <div className={styles.spirit}>
                                    <h4>SP</h4>
                                    <input className={styles.point__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={18} size={3} title={"Click to change the spirit points of the character."}/>
                                    <h4>/</h4>
                                    <input className={styles.point__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={18} size={3} title={"Click to change the spirit points of the character."}/>
                                    <div className={styles.pointcontainer__base}>
                                        <div className={styles.spirit__fill} />
                                    </div>
                                    <div className={styles.spirit__underline}/>
                                </div>
                            </div>
                            <div className={styles.persona}>
                                <div className={styles.levelname}>
                                    <h4>Lv</h4>
                                    <h4>1</h4>
                                    <h3>Orpheus</h3>
                                </div>
                                <div className={styles.arcana}>
                                    <div className={styles.circle}/>
                                    <h3>ARCANA</h3>
                                    <div className={styles.circle}/>
                                </div>
                                <div className={styles.persona__underline}/>
                                <div className={styles.arcana__underline}/>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.money}>
                                <div className={styles.menuoption__point}/>
                                <div className={styles.money__amount}>
                                    <h4>000.000</h4>
                                    <h3>Yen</h3>
                                </div>
                                <div className={styles.money__underline}/>
                            </div>
                            <div className={styles.menuoption__description}>
                                {hoveredOption !== null &&
                                    <div className={styles.menuoption__point}/>
                                }
                                <h3>{menuOptions[hoveredOption]}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}