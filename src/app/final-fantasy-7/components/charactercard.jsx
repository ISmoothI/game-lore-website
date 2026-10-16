'use client'

import Image from "next/image";

import {useState} from "react";

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
    const [statColor, setStatColor] = useState("white");

    const changeHealthValues = (newHealthVal, inputVar) => {
        let currHealthValue = currHealth;
        let maxHealthValue = maxHealth;

        if(inputVar === "current") {
            setCurrHealth(newHealthVal);
            currHealthValue = newHealthVal;
        }
        else if(inputVar === "max") {
            setMaxHealth(newHealthVal);
            maxHealthValue = newHealthVal;
        }

        if(currHealthValue <= 0) {
            setHealthColor("red");
            setMagicColor("red");
            setStatColor("red");
        }
        else if(currHealthValue <= Math.round(maxHealthValue / 3)) {
            setHealthColor("yellow");
            changeMagicValues(currMagic, "current");
            setStatColor("white");
        }
        else {
            setHealthColor("white");
            changeMagicValues(currMagic, "current");
            setStatColor("white");
        }
    }
    const changeMagicValues = (newMagicVal, inputVar) => {
        let currMagicValue = currMagic;
        let maxMagicValue = maxMagic;

        if(inputVar === "current") {
            setCurrMagic(newMagicVal);
            currMagicValue = newMagicVal;
        }
        else if(inputVar === "max") {
            setMaxMagic(newMagicVal);
            maxMagicValue = newMagicVal;
        }

        if(currHealth === 0) {
            return;
        }

        if(currMagicValue <= 0) {
            setMagicColor("red");
        }
        else if(currMagicValue <= Math.round(maxMagicValue / 3)) {
            setMagicColor("yellow");
        }
        else {
            setMagicColor("white");
        }
    }
    const percentageCalc = (currVal, maxVal) => {
        let maxNum = Math.max(0, (maxVal > 0 ? (currVal / maxVal) * 100 : 0));

        return Math.min(100, maxNum);
    }
    const nextLevelIncrement = () => {
        if(nextLevel < 100) {
            setNextLevel(nextLevel + 10);
        }
        else {
            setNextLevel(0);
            setLevel(curr => Math.min(curr + 1, 99));
        }
    }
    const limitLevelIncrement = () => {
        if(limitLevel < 100) {
            setLimitLevel(limitLevel + 10);
        }
        else {
            setLimitLevel(0);
        }
    }

    return (
        <>
            <div className={styles.image__container} style={{justifyContent: positions[positionIndex]}} onClick={() => setPositionIndex((positionIndex + 1) % 2)}>
                <Image className={styles.char__image} src={character.img} alt={`Icon image of ${character.name}`} />
            </div>
            <div className={styles.char__stats} style={{color: statColor}}>
                <input className={styles.name__input} type={"text"} inputMode={"text"} maxLength={9} defaultValue={character.name} size={9} title={`Click to change ${character.name}'s name.`} />
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
                                    <input className={styles.number__input} style={{color: healthColor}} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.health} size={4} title={`Click to change ${character.name}'s health.`} onChange={(e) => changeHealthValues(parseInt(e.target.value), "current")}/>
                                    <h2 style={{color: "white"}}>/</h2>
                                    <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.health} size={4} title={`Click to change ${character.name}'s health.`} onChange={(e) => changeHealthValues(parseInt(e.target.value), "max")}/>
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
                                    <input className={styles.number__input} style={{color: magicColor}} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.magic} size={4} title={`Click to change ${character.name}'s magic.`} onChange={(e) => changeMagicValues(parseInt(e.target.value), "current")}/>
                                    <h2 style={{color: "white"}}>/</h2>
                                    <input className={styles.number__input} type={"text"} inputMode={"numeric"} pattern={"[0-9]{4}"} maxLength={4} defaultValue={character.magic} size={4} title={`Click to change ${character.name}'s magic.`} onChange={(e) => changeMagicValues(parseInt(e.target.value), "max")}/>
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
                            <div className={`${styles.limitlevel__bar} ${limitLevel === 100 ? styles.fullmeter : ""}`} style={{width: `${limitLevel}%`}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}