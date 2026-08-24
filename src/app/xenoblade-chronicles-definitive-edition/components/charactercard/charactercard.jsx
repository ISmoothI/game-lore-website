'use client';

import {useState} from 'react';
import Image from "next/image";

import iconOrder from "@/app/xenoblade-chronicles-definitive-edition/assets/icon_order.svg";
import decRing from "@/app/xenoblade-chronicles-definitive-edition/assets/dec_ring.svg";

import styles from "./charactercard.module.css";

export function CharacterCard({ char, isMainParty }) {
    const [currSkillIndex, setCurrSkillIndex] = useState(0);

    return (
        <>
            {isMainParty &&
                <div key={char.id} className={styles.party__mainoption}>
                    <div className={styles.party__mainheader}>
                        <div className={styles.iconorder}>
                            <Image className={styles.iconorder__img} src={iconOrder} alt={"Order icon"} />
                            <h2 className={styles.iconorder__number}>{char.id}</h2>
                        </div>
                        {char.id === 1 &&
                            <h2 className={styles.leader}>Leader</h2>
                        }
                    </div>
                    <Image className={styles.main__img} src={iconOrder} alt={"Placeholder"} />
                    <div className={styles.party__maintext}>
                        <h3 className={styles.skill} onClick={() => setCurrSkillIndex((currSkillIndex + 1) % 3)}>{char.skills[currSkillIndex]}</h3>
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
                            <input className={styles.main__healthinput} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={char.health} size={4} title={`Click to change ${char.name}'s health.`}/>
                        </div>
                    </div>
                </div>
            }
            {!isMainParty &&
                <div key={char.id} className={styles.party__suboption}>
                    <Image className={styles.sub__img} src={iconOrder} alt={"Placeholder"} />
                    <div className={styles.party__subtext}>
                        <h3 className={styles.skill} onClick={() => setCurrSkillIndex((currSkillIndex + 1) % 3)}>{char.skills[currSkillIndex]}</h3>
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
            }
        </>
    )
}