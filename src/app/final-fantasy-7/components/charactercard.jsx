'use client'

import Image from "next/image";

import {useState} from "react";

import img from "@/app/final-fantasy-7/assets/placeholder.svg";

import styles from "./charactercard.module.css"

export default function CharacterCard({ character }) {
    const [currHealth, setCurrHealth] = useState(character.health);
    const [maxHealth, setMaxHealth] = useState(character.health);
    const [currMagic, setCurrMagic] = useState(character.magic);
    const [maxMagic, setMaxMagic] = useState(character.magic);

    const percentageCalc = (currVal, maxVal) => {
        let maxNum = Math.max(0, (maxVal > 0 ? (currVal / maxVal) * 100 : 0));

        return Math.min(100, maxNum);
    }

    return (
        <>
            <div className={styles.image__container}>
                <Image src={img} alt={`Image of ${character.name}`} width={140} height={140} />
            </div>
            <div className={styles.char__stats}>
                <h2>{character.name}</h2>
                <div className={styles.stats}>
                    <div>
                        <div className={styles.level}>
                            <h2 className={styles.stattext__blue}>LV</h2>
                            <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{2}"} maxLength={2} defaultValue={character.level} size={2} title={`Click to change ${character.name}'s level.`}/>
                        </div>
                        <div className={styles.health}>
                            <h2 className={styles.stattext__blue}>HP</h2>
                            <div className={styles.data__section}>
                                <div className={styles.data}>
                                    <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.health} size={4} title={`Click to change ${character.name}'s health.`} onChange={e => setCurrHealth(e.target.value)}/>
                                    <h2>/</h2>
                                    <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.health} size={4} title={`Click to change ${character.name}'s health.`} onChange={e => setMaxHealth(e.target.value)}/>
                                </div>
                                <div className={styles.point__container}>
                                    <div className={styles.health__bar} style={{width: `${percentageCalc(currHealth, maxHealth)}%`}} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.magic}>
                            <h2 className={styles.stattext__blue}>MP</h2>
                            <div className={styles.data__section}>
                                <div className={styles.data}>
                                    <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.magic} size={4} title={`Click to change ${character.name}'s magic.`} onChange={e => setCurrMagic(e.target.value)}/>
                                    <h2>/</h2>
                                    <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.magic} size={4} title={`Click to change ${character.name}'s magic.`} onChange={e => setMaxMagic(e.target.value)}/>
                                </div>
                                <div className={styles.point__container}>
                                    <div className={styles.magic__bar} style={{width: `${percentageCalc(currMagic, maxMagic)}%`}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.char__levels}>
                        <h2>next level</h2>
                        <div className={styles.level__container}>
                            <div className={styles.nextlevel__bar} />
                        </div>
                        <div className={styles.limitlevel__container}>
                            <h2>Limit level </h2>
                            <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-4]{1}"} maxLength={1} defaultValue={character.limitlevel} size={1} title={`Click to change ${character.name}'s limit level.`} />
                        </div>
                        <div className={styles.level__container}>
                            <div className={styles.limitlevel__bar} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}