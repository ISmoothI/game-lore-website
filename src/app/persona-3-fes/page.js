'use client'

import Image from "next/image";

import {Inter} from "next/font/google";
import {useState} from "react";

import greatIcon from "./assets/images/icon_great.svg";
import goodIcon from "./assets/images/icon_good.svg";
import tiredIcon from "./assets/images/icon_tired.svg";
import sickIcon from "./assets/images/icon_sick.svg";
import orpheusImage from "./assets/images/persona_orpheus.svg";
import makotoImage from "./assets/images/character_makoto.svg";

import styles from './page.module.css';

const inter = Inter({
    weight: ["500", "600", "700", "900"],
    subsets: ["latin"]
});

export default function MainMenu() {
    const timeOptions = ["Before Dawn", "Early Morning", "Morning", "Daytime", "Lunchtime", "Afternoon", "After School", "Evening", "Nighttime", "Late Night", "Dark Hour"];
    const dayOptions = ["M", "T", "W", "Th", "F", "Sa", "Su"];
    const menuOptions = {
        "SKILL": "Use/view skills.",
        "ITEM": "Use/view items.",
        "PERSONA": "Change/view Personas.",
        "EQUIP": "Change/view equipment.",
        "STATUS": "View detailed status",
        "S.LINK": "View Social Link details.",
        "SYSTEM": "Info/Config.",
    };
    const conditionOptions = {
        Great: greatIcon,
        Good: goodIcon,
        Tired: tiredIcon,
        Sick: sickIcon
    };
    const personaOptions = {
        Orpheus: {
            arcana: "Fool",
            src: orpheusImage
        },
        // Thanatos: "Death",
    };
    const totalConditionAmount = Object.entries(conditionOptions).length;
    const totalPersonaAmount = Object.entries(personaOptions).length;

    const [currTimeIndex, setCurrTimeIndex] = useState(0);
    const [currDayIndex, setCurrDayIndex] = useState(0);
    const [currHealth, setCurrHealth] = useState(18);
    const [maxHealth, setMaxHealth] = useState(18);
    const [currSpirit, setCurrSpirit] = useState(18);
    const [maxSpirit, setMaxSpirit] = useState(18);
    const [currConditionIndex, setCurrConditionIndex] = useState(0);
    const [currPersonaIndex, setCurrPersonaIndex] = useState(0);
    const [hoveredOption, setHoveredOption] = useState(null);

    const percentageCalc = (currVal, maxVal) => {
        let maxNum = Math.max(0, (maxVal > 0 ? (currVal / maxVal) * 100 : 0));

        return Math.min(94, maxNum);
    }

    return (
        <>
            <div className={`${styles.page} ${inter.className}`}>
                <div className={styles.main}>
                    <div className={styles.content}>
                        <Image className={styles.persona__image} src={Object.values(personaOptions)[currPersonaIndex].src} alt={`${Object.keys(personaOptions)[currPersonaIndex]} image icon`} />
                        <Image className={styles.character__image} src={makotoImage} alt={"Makoto Yuki image"} />
                        <div className={styles.menu__textcontainer}>
                            <div className={styles.menu__textcontent}>
                                <h1 className={styles.menu__text}>MAIN</h1>
                                <h1 className={styles.menu__text} aria-hidden={true}>MAIN</h1>
                            </div>
                        </div>
                        <div className={styles.header}>
                            <h2 className={styles.command}>COMMAND</h2>
                            <div className={styles.header__time}>
                                <div className={styles.time} onClick={() => setCurrTimeIndex((currTimeIndex + 1) % timeOptions.length)}>
                                    <h3 className={styles.time__text}>{timeOptions[currTimeIndex]}</h3>
                                </div>
                                <div className={styles.header__date}>
                                    <input className={styles.date__inputone} type={"text"} inputMode={"numeric"} pattern={"[0-9]{2}"} maxLength={2} defaultValue={"1"} size={2} title={"Click to change the month of the date."}/>
                                    <h3 className={styles.date__divider}>/</h3>
                                    <input className={styles.date__inputtwo} type={"text"} inputMode={"numeric"} pattern={"[0-9]{2}"} maxLength={2} defaultValue={"12"} size={2} title={"Click to change the day of the date."}/>
                                    <div className={styles.dot}/>
                                    <h3 className={styles.date__day} onClick={() => setCurrDayIndex((currDayIndex + 1) % dayOptions.length)}>{dayOptions[currDayIndex]}</h3>
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
                                        <input className={styles.level__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{2}"} maxLength={2} defaultValue={10} size={2} title={"Click to change the level of the character."}/>
                                    </div>
                                    <h3 className={styles.character__name}>Makoto Yuki</h3>
                                    <div className={styles.levelname__underline}/>
                                </div>
                                <div className={styles.health}>
                                    <h4 className={styles.status__title}>HP</h4>
                                    <input className={styles.point__leftinput} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={currHealth} onChange={(e) => setCurrHealth(e.target.value)} size={3} title={"Click to change the health points of the character."}/>
                                    <h4>/</h4>
                                    <input className={styles.point__rightinput} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={maxHealth} onChange={(e) => setMaxHealth(e.target.value)} size={3} title={"Click to change the health points of the character."}/>
                                    <div className={styles.pointcontainer__base}>
                                        <div style={{width: `${percentageCalc(currHealth, maxHealth)}%`}} className={styles.healthbar__fill} />
                                    </div>
                                    <div className={styles.health__underline}/>
                                </div>
                                <div className={styles.spirit}>
                                    <h4 className={styles.status__title}>SP</h4>
                                    <input className={styles.point__leftinput} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={18} onChange={(e) => setCurrSpirit(e.target.value)} size={3} title={"Click to change the spirit points of the character."}/>
                                    <h4>/</h4>
                                    <input className={styles.point__rightinput} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={18} onChange={(e) => setMaxSpirit(e.target.value)} size={3} title={"Click to change the spirit points of the character."}/>
                                    <div className={styles.pointcontainer__base}>
                                        <div style={{width: `${percentageCalc(currSpirit, maxSpirit)}%`}} className={styles.spirit__fill} />
                                    </div>
                                    <div className={styles.spirit__underline}/>
                                </div>
                            </div>
                            <div className={styles.condition} onClick={() => setCurrConditionIndex((currConditionIndex + 1) % totalConditionAmount)}>
                                <h3 className={styles.condition__text}>{Object.keys(conditionOptions)[currConditionIndex]}</h3>
                                <Image className={styles.condition__image} src={Object.values(conditionOptions)[currConditionIndex]} alt={`${conditionOptions[currConditionIndex]} image icon`} />
                            </div>
                            <div className={styles.persona}>
                                <div className={styles.levelname}>
                                    <div className={styles.level}>
                                        <h4>Lv</h4>
                                        <input className={styles.level__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{2}"} maxLength={2} defaultValue={10} size={2} title={"Click to change the level of the persona."}/>
                                    </div>
                                    <h3 className={styles.persona__name} onClick={() => setCurrPersonaIndex((currPersonaIndex + 1) % totalPersonaAmount)}>{Object.keys(personaOptions)[currPersonaIndex]}</h3>
                                </div>
                                <div className={styles.arcana}>
                                    <div className={styles.circle}/>
                                    <h3>{Object.values(personaOptions)[currPersonaIndex].arcana}</h3>
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
                                    <input className={styles.money__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{7}"} maxLength={7} defaultValue={"0000000"} size={7} title={"Click to change the money of the character."}/>
                                    <h3>Yen</h3>
                                </div>
                                <div className={styles.money__underline}/>
                            </div>
                            <div className={styles.menuoption__description}>
                                <div className={styles.menuoption__point}/>
                                <h3>{menuOptions[hoveredOption]}&nbsp;</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}