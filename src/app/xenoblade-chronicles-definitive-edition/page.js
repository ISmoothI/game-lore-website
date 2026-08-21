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
        "Party": "",
        "Skill Trees": "",
        "Arts": "",
        "Area Maps": "",
        "Change Time": "",
        "Quest Log": "",
        "Affinity Chart": "",
        "Collectables": "",
    };

    const characters = [
        {"id": 1, "name": "Shulk", "skills": ["", "",""]},
        {"id": 2, "name": "Reyn", "skills": ["", "",""]},
        {"id": 3, "name": "Fiora", "skills": ["", "",""]},
        {"id": 4, "name": "Sharla", "skills": ["", "",""]},
        {"id": 5, "name": "Dunban", "skills": ["", "",""]},
        {"id": 6, "name": "Melia", "skills": ["", "",""]},
        {"id": 7, "name": "Riki", "skills": ["", "",""]},
    ];
    const [charOrder, setCharOrder] = useState([1, 2, 3, 4, 5, 6, 7]);
    const mainParty = characters.slice(0, 3);
    const sideParty = characters.slice(3);

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
                                    <h3>000000000</h3>
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
                                    <h3>000:00</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.body}>
                        <div className={styles.menubuttons}>
                            <div className={styles.menuoptions}>
                                {Object.keys(menuOptions).map(key => {
                                    return (
                                        <div key={key} className={styles.menuoption}>
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
                                            <h4 className={styles.skill}>{char.skills[0]}</h4>
                                            <h1>{char.name}</h1>
                                            <div className={styles.ring__partysection}>
                                                <Image src={decRing} alt={"Ring decoration"} width={10} height={10} />
                                                <div className={styles.ring__partyline} />
                                                <Image src={decRing} alt={"Ring decoration"} width={10} height={10} />
                                            </div>
                                            <div className={styles.main__level}>
                                                <h3 className={styles.party__label}>Lv</h3>
                                                <h3>1</h3>
                                            </div>
                                            <div className={styles.main__health}>
                                                <h3 className={styles.party__label}>HP</h3>
                                                <h3>1</h3>
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
                                                <h3>1</h3>
                                            </div>
                                            <div className={styles.sub__health}>
                                                <h3 className={styles.party__label}>HP</h3>
                                                <h3>1</h3>
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
                        <h3>MENU DESC</h3>
                    </div>
                    <div className={styles.footer}>
                    </div>
                </div>
            </div>
        </>
    )
}