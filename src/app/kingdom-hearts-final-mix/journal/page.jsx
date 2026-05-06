'use client'

import SpeechBubble from "./speechbubble"
import styles from "./journal.module.css"
import MenuBox from "@/app/kingdom-hearts-final-mix/journal/menuBox";
import JournalLoop from "@/app/kingdom-hearts-final-mix/journal/journalloop";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className={styles.journalSection}>
                <div className={"flex-container-column"}>
                    <div className={"flex-container-row"}>
                        <h2 className={styles.headerMenu}>Menu</h2>
                    </div>
                    <div className={styles.headerContainer}>
                        <MenuBox text={"Journal"}></MenuBox>
                        <h2 className={styles.titleText}>|| Chronicles</h2>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={"flex-container-column"}>
                        <SpeechBubble text={"What would you like to read?"} />
                    </div>
                    <div className={"flex-container-row"}>
                        <div className={"flex-container-column"}>
                            <JournalLoop></JournalLoop>
                            <JournalLoop></JournalLoop>
                            <JournalLoop></JournalLoop>
                            <JournalLoop></JournalLoop>
                            <JournalLoop></JournalLoop>
                            <JournalLoop></JournalLoop>
                            <JournalLoop></JournalLoop>
                            <JournalLoop></JournalLoop>
                            <JournalLoop></JournalLoop>
                            <JournalLoop></JournalLoop>
                        </div>
                        <div className={"flex-container-column"}>
                            <div className={styles.journalBookBg}>
                                <div className={styles.journalBookLine}>
                                    <div className={styles.journalBookInnerBg}>
                                        <div className={styles.journalBookTextBg}>
                                            <Link href={"/kingdom-hearts-final-mix/journal/chronicles"}>Chronicles</Link>
                                            <p>Ansem's Report</p>
                                            <p>Characters</p>
                                            <p>101 Dalmatians</p>
                                            <p>Trinity List</p>
                                            <p>Mini Games</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex-container-column-bg"}>
                    <p>Hi</p>
                </div>
            </div>
        </>
    )
}