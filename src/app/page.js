'use client'

import {useEffect, useState} from "react";

import Image from "next/image";

import Accordion from "@/components/accordian/accordion";
import Card from "@/components/card/card";

import {prefix} from "../lib/prefix";
import styles from "./page.module.css";

export default function Home() {
    const words = ["told", "enjoyed", "remembered"]
    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            i = (i + 1) % words.length;

            setCurrentWord(words[i]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.warning}>
                    <h5>This website is actively being developed! Your patience is appreciated!</h5>
                </div>
                <div className={styles.intro}>
                    <h1>
                        Stories made to be<br/>
                        &nbsp;{currentWord}.
                    </h1>
                    <h3>
                        View an archive of video game data spanning throughout several years.<br/>
                        All in one place. (Kind of)
                    </h3>
                    <div className={styles.stats__container}>
                        <Card className={styles.card__centered}>
                            <Image src={`${prefix}/images/checkmark.svg`} alt={"Checkmark"} width="100" height="70" />
                            <h3>Completed</h3>
                            <h4>0</h4>
                        </Card>
                        <Card className={styles.card__centered}>
                            <Image src={`${prefix}/images/exclamation.svg`} alt={"Exclamation"} width="100" height="70" />
                            <h3>In Progress</h3>
                            <h4>1</h4>
                        </Card>
                    </div>
                </div>
                <div className={styles.content__section}>
                    <h2>Content tailored for each individual game</h2>
                    <h3>Enjoy and discover several personalized sections for each entry that include...</h3>
                    <div className={styles.cards__container}>
                        <Card className={styles.card__centered}>
                            <h4>Menu Playgrounds</h4>
                            <p>Interact with an almost 1:1 recreation of several video game menus.</p>
                        </Card>
                        <Card className={styles.card__centered}>
                            <h4>Achievements</h4>
                            <p>View trackable achievement info such as required conditions and rarity.</p>
                        </Card>
                    </div>
                </div>
                <div className={styles.future__section}>
                    <h2>Future updates to each entry may also include...</h2>
                    <Card>
                        <div className={styles.table}>
                            <div className={styles.table__celldotted}>
                                <h4>Info Pages</h4>
                                <p>A page displaying general video game info such as release dates, publishers, developers, etc.</p>
                            </div>
                            <div className={styles.table__celldotted}>
                                <h4>Walkthroughs</h4>
                                <p>Follow along with a basic walkthrough for a seamless experience.</p>
                            </div>
                            <div className={styles.table__cell}>
                                <h4>Interactive Maps</h4>
                                <p>Viewable maps with filterable data to make exploration easier.</p>
                            </div>
                        </div>
                    </Card>
                    <div>
                        <h2>And More!</h2>
                        <h3>More features/updates may be added to entries in the future.</h3>
                    </div>
                </div>
                <div className={styles.faq}>
                    <Card className={styles.faq__card}>
                        <h2 className={styles.faq__header}>Frequently Unasked Questions</h2>
                        <div className={styles.faq__content}>
                            <Accordion question={"What is the point of this website?"} answer={"For the most part, this website serves as a passion project that is planned on being worked on for years to come."}></Accordion>
                            <Accordion question={"Why are there only a handful of entries?"} answer={"A lot of time is spent designing, gathering information, and validating. It's a lengthy process, but this ensures the best quality is being presented when ready."}></Accordion>
                            <Accordion question={"Why are some sections missing for different games?"} answer={"Depending on the length of a video game, sometimes entries will have their entries filled out by section in order to release information as soon as it is ready."}></Accordion>
                            <Accordion question={"How long do I have to wait until a game entry is finished?"} answer={"The wait time for a game entry to be completed is usually dependent on its time length."}></Accordion>
                            <Accordion question={"How is the next game chosen?"} answer={"The next game being worked on is usually a random pick."}></Accordion>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    );
}
