'use client'

import Image from "next/image";

import {useState} from "react";

import img from "../assets/placeholder.svg";

import styles from "./charactercard.module.css"

export default function CharacterCard({ character }) {
    const positions = ["start", "end"];
    const [positionIndex, setPositionIndex] = useState(0);
    const [level, setLevel] = useState(character.level);
    const [currHealth, setCurrHealth] = useState(character.health);
    const [maxHealth, setMaxHealth] = useState(character.health);
    const [currMagic, setCurrMagic] = useState(character.magic);
    const [maxMagic, setMaxMagic] = useState(character.magic);
    const [nextLevel, setNextLevel] = useState(character.nextlevel);
    const [limitLevel, setLimitLevel] = useState(character.limitlevel);
    const [healthColor, setHealthColor] = useState("white");
    const [magicColor, setMagicColor] = useState("white");

    const changeHealthValues = (e, inputVar) => {
        let currHealthValue = currHealth;
        let maxHealthValue = maxHealth;

        if(inputVar === "current") {
            setCurrHealth(parseInt(e.target.value));
            currHealthValue = parseInt(e.target.value);
        }
        else if(inputVar === "max") {
            setMaxHealth(parseInt(e.target.value));
            maxHealthValue = parseInt(e.target.value);
        }

        if(currHealthValue <= 0) {
            setHealthColor("red");
        }
        else if(currHealthValue > Math.round(maxHealthValue / 3)) {
            setHealthColor("white");
        }
        else {
            setHealthColor("yellow");
        }
    }
    const changeMagicValues = (e, inputVar) => {
        let currMagicValue = currMagic;
        let maxMagicValue = maxMagic;

        if(inputVar === "current") {
            setCurrMagic(parseInt(e.target.value));
            currMagicValue = parseInt(e.target.value);
        }
        else if(inputVar === "max") {
            setMaxMagic(parseInt(e.target.value));
            maxMagicValue = parseInt(e.target.value);
        }

        if(currMagicValue <= 0) {
            setMagicColor("red");
        }
        else if(currMagicValue > Math.round(maxMagicValue / 3)) {
            setMagicColor("white");
        }
        else {
            setMagicColor("yellow");
        }
    }
    const percentageCalc = (currVal, maxVal) => {
        let maxNum = Math.max(0, (maxVal > 0 ? (currVal / maxVal) * 100 : 0));

        return Math.min(100, maxNum);
    }
    const nextLevelIncrement = () => {
        if(nextLevel <= 90) {
            setNextLevel(curr => curr + 10);
        }
        else {
            setNextLevel(0);
            setLevel(curr => Math.min(curr + 1, 99));
        }
    }
    const limitLevelIncrement = () => {
        if(limitLevel <= 90) {
            setLimitLevel(curr => curr + 10);
        }
        else {
            setLimitLevel(0);
        }
    }

    return (
        <>
            <div className={styles.image__container} style={{justifyContent: positions[positionIndex]}} onClick={() => setPositionIndex((positionIndex + 1) % 2)}>
                <Image src={img} alt={`Image of ${character.name}`} width={140} height={140} />
            </div>
            <div className={styles.char__stats}>
                <h2>{character.name}</h2>
                <div className={styles.stats}>
                    <div>
                        <div className={styles.level}>
                            <h2 className={styles.stattext__blue}>LV</h2>
                            <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{2}"} maxLength={2} value={level} size={2} title={`Click to change ${character.name}'s level.`} onChange={(e) => setLevel(isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value))} />
                        </div>
                        <div className={styles.health}>
                            <h2 className={styles.stattext__blue}>HP</h2>
                            <div className={styles.data__section}>
                                <div className={styles.data}>
                                    <input className={styles.number__input} style={{color: healthColor}} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.health} size={4} title={`Click to change ${character.name}'s health.`} onChange={(e) => changeHealthValues(e, "current")}/>
                                    <h2>/</h2>
                                    <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.health} size={4} title={`Click to change ${character.name}'s health.`} onChange={(e) => changeHealthValues(e, "max")}/>
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
                                    <input className={styles.number__input} style={{color: magicColor}} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.magic} size={4} title={`Click to change ${character.name}'s magic.`} onChange={(e) => changeMagicValues(e, "current")}/>
                                    <h2>/</h2>
                                    <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.magic} size={4} title={`Click to change ${character.name}'s magic.`} onChange={(e) => changeMagicValues(e, "max")}/>
                                </div>
                                <div className={styles.point__container}>
                                    <div className={styles.magic__bar} style={{width: `${percentageCalc(currMagic, maxMagic)}%`}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.char__levels}>
                        <h2>next level</h2>
                        <div className={styles.level__container} onClick={nextLevelIncrement}>
                            <div className={styles.nextlevel__bar} style={{width: `${nextLevel}%`}} />
                        </div>
                        <div className={styles.limitlevel__container}>
                            <h2>Limit level </h2>
                            <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-4]{1}"} maxLength={1} defaultValue={1} size={1} title={`Click to change ${character.name}'s limit level.`} />
                        </div>
                        <div className={styles.level__container} onClick={limitLevelIncrement}>
                            <div className={styles.limitlevel__bar} style={{width: `${limitLevel}%`}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}