'use client'

import Image from "next/image";

import {useState} from "react";
import {Archivo} from "next/font/google";
import {CharacterCard} from "@/app/xenoblade-chronicles-definitive-edition/components/charactercard/charactercard";

import headerblade from "./assets/bladeheader.svg";
import iconGold from "./assets/icon_gold.svg";
import iconClock from "./assets/icon_clock.svg";
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

    return (
        <>
            <div className={`${styles.page} ${archivo.className}`}>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <div className={styles.blade__section}>
                            <Image className={styles.headerblade} src={headerblade} alt={"Header blade image"} />
                            <h1 className={styles.blade__text}>Main Menu</h1>
                        </div>
                        <div className={styles.data}>
                            <div className={styles.data__container}>
                                <div className={styles.data__goldimg}>
                                    <Image className={styles.gold__img} src={iconGold} alt={"Gold icon"} />
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
                                    <input className={styles.time__hourinput} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={"000"} size={3} title={"Click to change the set time hours."}/>
                                    <h3>:</h3>
                                    <input className={styles.time__minuteinput} type={"text"} inputMode={"numeric"} pattern={"[0-9]{2}"} maxLength={2} defaultValue={"00"} size={2} title={"Click to change the set time minutes."}/>
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
                                            <h2 className={styles.menuoption__text}>{key}</h2>
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
                                    <CharacterCard key={char.id} char={char} isMainParty={true} />
                                )
                            })}
                        </div>
                        <div className={styles.party__sub}>
                            {sideParty.map(char => {
                                return (
                                    <CharacterCard key={char.id} char={char} isMainParty={false} />
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
                        <h3 className={styles.menuoption__desctext}>{menuOptions[hoveredOption]}&nbsp;</h3>
                    </div>
                    <div className={styles.footer}>
                    </div>
                </div>
            </div>
        </>
    )
}