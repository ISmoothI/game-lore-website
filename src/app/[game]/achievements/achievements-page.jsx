'use client'

import {useRef, useState} from "react";

import Image from "next/image";
import Link from "next/link";

import Loading from "@/components/loading/loading";

import styles from "./achievements-page.module.css";
import {prefix} from "../../../lib/prefix";

export default function AchievementsPage({ data }) {
    const image = `${prefix}/images/image.svg`
    const trophy = `${prefix}/images/trophy.svg`;

    const rarityPriority = { Platinum: 1, Gold: 2, Silver: 3, Bronze: 4 };

    const [gameTitle] = useState(data.title);
    const [trophies, setTrophies] = useState(data.achievements);
    const originalTrophiesRef = useRef(data.achievements);
    const [totalTrophies] = useState(data.achievements.length);
    const [completeTrophies, setCompleteTrophies] = useState(0);
    const [incompleteTrophies, setIncompleteTrophies] = useState(data.achievements.length);
    const [bronzeTrophies, setBronzeTrophies] = useState(0);
    const [silverTrophies, setSilverTrophies] = useState(0);
    const [goldTrophies, setGoldTrophies] = useState(0);


    const handleOnChange = (event, rarity) => {
        if(event.target.checked) {
            setCompleteTrophies(completeTrophies + 1);
            setIncompleteTrophies(incompleteTrophies - 1);

            if(rarity === "Bronze") {
                setBronzeTrophies(bronzeTrophies + 1);
            }
            else if(rarity === "Silver") {
                setSilverTrophies(silverTrophies + 1);
            }
            else if(rarity === "Gold") {
                setGoldTrophies(goldTrophies + 1);
            }

        }
        else {
            setCompleteTrophies(completeTrophies - 1);
            setIncompleteTrophies(incompleteTrophies + 1);

            if(rarity === "Bronze") {
                setBronzeTrophies(bronzeTrophies - 1);
            }
            else if(rarity === "Silver") {
                setSilverTrophies(silverTrophies - 1);
            }
            if(rarity === "Gold") {
                setGoldTrophies(goldTrophies - 1);
            }

        }
    }

    const trophySort = (event) => {
        // console.log(event.target.value);

        let sorted = [...trophies];

        if(event.target.value === "rarity") {
            sorted.sort((a, b) => rarityPriority[a.rarity] - rarityPriority[b.rarity]);
            setTrophies(sorted);
        }
        else if(event.target.value === "default") {
            setTrophies(originalTrophiesRef.current);
        }

    }

    // if(!trophies) return <Loading />;
    // if(trophies.error) return <Loading />;

    return (
        <div className={styles.page}>
            <div className={styles.main}>
                {/*<Image src={image} alt={"Image placeholder"}/>*/}
                <div className={styles.body}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <div className={styles.header__left}>
                                {/*<Image src={image} alt={"Image placeholder"} />*/}
                                <h2>{gameTitle}</h2>
                            </div>
                            <div className={styles.header__right}>
                                <div className={ styles.header__right }>
                                    <Image src={trophy} alt={"Trophy"} className={styles.trophy__platinum} width={50} height={50}/>
                                    <div>
                                        <p>Progress</p>
                                        <p>{Math.round((completeTrophies / totalTrophies) * 100)}%</p>
                                    </div>
                                    <div>
                                        <p>Earned</p>
                                        <p>{completeTrophies}/{totalTrophies}</p>
                                    </div>
                                </div>
                                <div className={ styles.header__right }>
                                    <Image src={trophy} alt={"Gold trophy"} className={styles.trophy__gold} width={24} height={24}/>
                                    <p>{goldTrophies}</p>
                                    <Image src={trophy} alt={"Silver trophy"} className={styles.trophy__silver} width={24} height={24}/>
                                    <p>{silverTrophies}</p>
                                    <Image src={trophy} alt={"Bronze trophy"} className={styles.trophy__bronze} width={24} height={24}/>
                                    <p>{bronzeTrophies}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.header}>
                            <div className={styles.subheader__left}>
                                <p>All trophies: {totalTrophies}</p>
                                <p>Completed trophies: {completeTrophies}</p>
                                <p>Incomplete trophies: {incompleteTrophies}</p>
                            </div>
                            <div className={styles.subheader__right}>
                                {/*<div className={styles.flex__row}>*/}
                                {/*    <input type={"checkbox"}/>*/}
                                {/*    <p>Select all</p>*/}
                                {/*</div>*/}
                                <div className={styles.sortby}>
                                    <p>Sort By: </p>
                                    <select className={styles.select} onChange={trophySort}>
                                        <option value={"default"}>Game Default</option>
                                        {/*<option>Not Earned</option>*/}
                                        <option value={"rarity"}>Rarity</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.trophies__container}>
                            {
                                trophies.map((entry) => {
                                    let trophyRarity = "";
                                    let cardBG = "";

                                    if (entry.rarity === "Bronze") {
                                        trophyRarity = "trophy__bronze"
                                        cardBG = "trophy__card_bronze"
                                    }
                                    else if (entry.rarity === "Silver") {
                                        trophyRarity = "trophy__silver"
                                        cardBG = "trophy__card_silver"
                                    }
                                    else if (entry.rarity === "Gold") {
                                        trophyRarity = "trophy__gold"
                                        cardBG = "trophy__card_gold"
                                    }
                                    else if (entry.rarity === "Platinum") {
                                        trophyRarity = "trophy__platinum"
                                        cardBG = "trophy__card_platinum"
                                    }

                                    return (
                                        <div className={`${styles.trophy__card} ${styles[cardBG]}`} key={entry.id}>
                                            <input type={"checkbox"} className={styles.checkbox} onChange={(event) => handleOnChange(event, entry.rarity)}></input>

                                            {entry.hidden ? (
                                                <>
                                                    <Image src={image} alt={"Image placeholder"} width={80}/>
                                                    <div className={styles.trophy__title}>
                                                        <h3>Hidden trophy</h3>
                                                        <div className={styles.trophy__rarity}>
                                                            <Image src={trophy} alt={`${entry.rarity} Trophy`} className={`${styles[trophyRarity]}`} width={16}/>
                                                            <p>{entry.rarity}</p>
                                                        </div>
                                                    </div>
                                                    <p>Click to reveal.</p>
                                                </>
                                            ) : (
                                                <>
                                                    {/*<Image src={image} alt={"Image placeholder"} width={80}/>*/}
                                                    <div className={styles.trophy__title}>
                                                        <h3>{entry.title}</h3>
                                                        <div className={styles.trophy__rarity}>
                                                            <Image src={trophy} alt={`${entry.rarity} Trophy`} className={`${styles[trophyRarity]}`} width={16} height={16}/>
                                                            <p>{entry.rarity}</p>
                                                        </div>
                                                    </div>
                                                    <p className={styles.trophy__description}>{entry.description}</p>
                                                    <div className={styles.trophy__gradient}/>
                                                </>
                                            )}

                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}