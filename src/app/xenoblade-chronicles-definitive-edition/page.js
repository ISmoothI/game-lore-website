'use client'

import Image from "next/image";

import {Archivo} from "next/font/google";

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
            {"id": 6, "name": "Riki", "skills": ["", "",""]},
            {"id": 7, "name": "Melia", "skills": ["", "",""]},
    ];

    return (
        <>
            <div className={`${styles.page} ${archivo.className}`}>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <div className={styles.section__text}>
                            <h1>Main Menu</h1>
                        </div>
                        <div className={styles.data}>
                            <div className={styles.data__container}>
                                <div className={styles.data__goldimg}>
                                    <Image src={"/images/image.svg"} alt={"Placeholder"} width={16} height={16} />
                                </div>
                                <div className={styles.data__goldnums}>
                                    <h3>000000000</h3>
                                </div>
                            </div>

                            <div className={styles.data__container}>
                                <div className={styles.data__timeimg}>
                                    <Image src={"/images/image.svg"} alt={"Placeholder"} width={16} height={16} />
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
                                            <div className={styles.circles}>
                                                <div className={styles.circle__out}/>
                                                <div className={styles.circle__mid}/>
                                                <div className={styles.circle__in}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.systembutton}>
                                <Image src={"/images/image.svg"} alt={"Placeholder"} width={20} height={20} />
                                <h4>System Menu</h4>
                            </div>
                        </div>
                        <div className={styles.party__main}>
                            <div className={styles.party__mainoption}>
                                <div className={styles.party__mainheader}>
                                    <Image src={"/images/image.svg"} alt={"Placeholder"} width={30} height={30} />
                                    <h3 className={styles.leader}>Leader</h3>
                                </div>
                                <Image src={"/images/image.svg"} alt={"Placeholder"} width={100} height={100} />
                                <div className={styles.party__maintext}>
                                    <h4 className={styles.skill}>Skill</h4>
                                    <h1>Name</h1>
                                    <div className={styles.level}>
                                        <h3 className={styles.party__label}>Lv</h3>
                                        <h3>1</h3>
                                    </div>
                                    <div className={styles.health}>
                                        <h3 className={styles.party__label}>HP</h3>
                                        <h3>1</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.party__sub}>
                            <div className={styles.party__suboption}>
                                <Image src={"/images/image.svg"} alt={"Placeholder"} width={100} height={100} />
                                <div className={styles.party__subtext}>
                                    <h4 className={styles.skill}>Skill</h4>
                                    <h1>Name</h1>
                                    <div className={styles.level}>
                                        <h3 className={styles.party__label}>Lv</h3>
                                        <h3>1</h3>
                                    </div>
                                    <div className={styles.health}>
                                        <h3 className={styles.party__label}>HP</h3>
                                        <h3>1</h3>
                                    </div>
                                </div>
                            </div>
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