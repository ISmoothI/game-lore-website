'use client'

import Image from "next/image";

import {useState} from "react";
import {Archivo} from "next/font/google";

import headerblade from "./assets/bladeheader.svg";
import iconGold from "./assets/icon_gold.svg";
import iconClock from "./assets/icon_clock.svg";
import iconOrder from "./assets/icon_order.svg";
import iconSystemPlus from "./assets/icon_system_plus.svg";
import decRing from "./assets/dec_ring.svg";

import styles from './page.module.css';

const archivo = Archivo({
    subsets: ["latin"],
    // style: "normal",
    weight: ["100"]
});

export default function MainMenu() {
    const menuOptions = {
        "Change Equipment": "Adjust your party members' equipment.",
        "Party": "Set up party members.",
        "Skill Trees": "Manage Skill Trees and set up Skill Links.",
        "Arts": "Set and level up Arts.",
        "Area Maps": "View area maps and use skip travel.",
        "Change Time": "Change in-game time.",
        "Quest Log": "Check quest details.",
        "Gem Crafting": "Craft gems from crystals.",
        "Affinity Chart": "Check affinity.",
        "Collectables": "Check all sorts of information.",
    };

    const [characters, setCharacters] = useState( [
        {"id": 1, "name": "Shulk", "level": "1", "health": "100", "skills": ["Humanity", "Integrity","Intuition"]},
        {"id": 2, "name": "Reyn", "level": "1", "health": "100", "skills": ["Enthusiasm", "Spirit", "Diligence"]},
        {"id": 3, "name": "Fiora", "level": "1", "health": "100", "skills": ["", "", ""]},
        {"id": 4, "name": "Sharla", "level": "1", "health": "100", "skills": ["Perseverance", "Devotion", "Confidence"]},
        {"id": 5, "name": "Dunban", "level": "1", "health": "100", "skills": ["Wisdom", "Bravery", "Prudence"]},
        {"id": 6, "name": "Riki", "level": "1", "health": "100", "skills": ["Innocence", "Vivacity", "Flexibility"]},
        {"id": 7, "name": "Melia", "level": "1", "health": "100", "skills": ["Honesty", "Serenity", "Reliability"]},
    ]);
    const [charOrder, setCharOrder] = useState([1, 2, 3, 4, 5, 6, 7]);
    const mainParty = characters.slice(0, 3);
    const sideParty = characters.slice(3);
    const [hoveredOption, setHoveredOption] = useState(null);

    //POSSIBLE FUTURE USE FOR PAGE EXPANSION
    // const changeLevel = (id, level) => {
    //     setCharacters(prevChars =>
    //         prevChars.map(char =>
    //             char.id === id ? {...char, "level": char} : char
    //         )
    //     );
    // };

    return (
        <>
            <div className={`${styles.page} ${archivo.className}`}>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <div className={styles.blade__section}>
                            <Image src={headerblade} alt={"Header blade image"} width={550} height={90} />
                            <h1 className={styles.blade__text}>Main Menu</h1>
                        </div>
                        <div className={styles.data}>
                            <div className={styles.data__container}>
                                <div className={styles.data__goldimg}>
                                    <Image src={iconGold} alt={"Gold icon"} width={20} height={20} />
                                </div>
                                <div className={styles.data__goldnums}>
                                    <input className={styles.gold__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{9}"} maxLength={9} defaultValue={"000000000"} size={9} title={"Click to change the amount of gold held."}/>
                                </div>
                            </div>
                            <div className={styles.ring__headersection}>
                                <Image src={decRing} alt={"Ring decoration"} width={12} height={12} />
                                <div className={styles.ring__headerline} />
                            </div>
                            <div className={styles.data__container}>
                                <div className={styles.data__timeimg}>
                                    <Image src={iconClock} alt={"Clock icon"} width={18} height={18} />
                                </div>
                                <div className={styles.data__timenums}>
                                    <input className={styles.time__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={"000"} size={3} title={"Click to change the set time hours."}/>
                                    <h3>:</h3>
                                    <input className={styles.time__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{2}"} maxLength={2} defaultValue={"00"} size={2} title={"Click to change the set time minutes."}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.body}>
                        <div className={styles.menubuttons}>
                            <div className={styles.menuoptions}>
                                {Object.keys(menuOptions).map(key => {
                                    return (
                                        <div key={key} className={styles.menuoption} onMouseEnter={() => setHoveredOption(key)} onMouseLeave={() => setHoveredOption(null)}>
                                            <h2>{key}</h2>
                                            <div className={styles.menuoption__end}>
                                                {key === "Collectables" &&
                                                    <h2> {">"} </h2>
                                                }
                                                <div className={styles.circles}>
                                                    <div className={styles.circle__out}/>
                                                    <div className={styles.circle__mid}/>
                                                    <div className={styles.circle__in}/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.systembutton}>
                                <Image src={iconSystemPlus} alt={"System Plus icon"} width={20} height={20} />
                                <h4>System Menu</h4>
                            </div>
                        </div>
                        <div className={styles.party__main}>
                            {mainParty.map(char => {
                                return (
                                    <div key={char.id} className={styles.party__mainoption}>
                                        <div className={styles.party__mainheader}>
                                            <div className={styles.iconorder}>
                                                <Image src={iconOrder} alt={"Order icon"} width={56} height={56} />
                                                <h2 className={styles.iconorder__number}>{char.id}</h2>
                                            </div>
                                            {char.id === 1 &&
                                                <h2 className={styles.leader}>Leader</h2>
                                            }
                                        </div>
                                        <Image src={"/images/image.svg"} alt={"Placeholder"} width={150} height={150} />
                                        <div className={styles.party__maintext}>
                                            <h4 className={styles.skill} >{char.skills[0]}</h4>
                                            <h1>{char.name}</h1>
                                            <div className={styles.ring__partysection}>
                                                <Image src={decRing} alt={"Ring decoration"} width={10} height={10} />
                                                <div className={styles.ring__partyline} />
                                                <Image src={decRing} alt={"Ring decoration"} width={10} height={10} />
                                            </div>
                                            <div className={styles.main__level}>
                                                <h3 className={styles.party__label}>Lv</h3>
                                                <input className={styles.main__levelinput} type={"text"} inputMode={"numeric"} pattern={"[0-9]{2}"} maxLength={2} defaultValue={char.level} size={2} title={`Click to change ${char.name}'s level.`}/>
                                            </div>
                                            <div className={styles.main__health}>
                                                <h3 className={styles.party__label}>HP</h3>
                                                <input className={styles.gold__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={char.health} size={4} title={`Click to change ${char.name}'s health.`}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.party__sub}>
                            {sideParty.map(char => {
                                return (
                                    <div key={char.id} className={styles.party__suboption}>
                                        <Image src={"/images/image.svg"} alt={"Placeholder"} width={100} height={100} />
                                        <div className={styles.party__subtext}>
                                            <h4 className={styles.skill}>{char.skills[0]}</h4>
                                            <h2>{char.name}</h2>
                                            <div className={styles.sub__level}>
                                                <h3 className={styles.party__label}>Lv</h3>
                                                <input className={styles.sub__levelinput} type={"text"} inputMode={"numeric"} pattern={"[0-9]{2}"} maxLength={2} defaultValue={char.level} size={2} title={`Click to change ${char.name}'s level.`}/>
                                            </div>
                                            <div className={styles.sub__health}>
                                                <h3 className={styles.party__label}>HP</h3>
                                                <input className={styles.sub__healthinput} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={char.health} size={4} title={`Click to change ${char.name}'s health.`}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className={styles.party__guestsection}>
                                <h3>Guests</h3>
                                <div className={styles.guests}>
                                    <div className={styles.guest}>
                                        <Image src={"/images/image.svg"} alt={"Placeholder"} width={20} height={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.menuoption__desc}>
                        <h3 className={styles.menuoption__text}>{menuOptions[hoveredOption]}&nbsp;</h3>
                    </div>
                    <div className={styles.footer}>
                    </div>
                </div>
            </div>
        </>
    )
}