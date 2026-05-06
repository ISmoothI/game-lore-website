'use client'

import SpeechBubble from "../speechbubble"
import styles from "../journal.module.css"
import MenuBox from "@/app/kingdom-hearts-final-mix/journal/menuBox";
import JournalLoop from "@/app/kingdom-hearts-final-mix/journal/journalloop";
import Link from "next/link";
import NoteTextBox from "@/app/kingdom-hearts-final-mix/journal/chronicles/notetextbox";

export default function Chronicles() {
    return (
        <>
            <div className={styles.journalSection}>
                <div className={"flex-container-column"}>
                    <div className={"flex-container-row"}>
                        <h2 className={styles.headerMenu}>Menu</h2>
                    </div>
                    <div className={styles.headerContainer}>
                        <Link href={"/kingdom-hearts-final-mix/journal"}>
                            <MenuBox text={"Journal"}></MenuBox>
                        </Link>
                        <h2 className={styles.titleText}>|| Chronicles</h2>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={"flex-container-column"}>
                        <div className={styles.journalOpenCoverBg}>
                            <SpeechBubble text={"What would you like to read?"} />
                        </div>
                    </div>
                    <div className={"flex-container-row"}>
                        <div className={"flex-container-column"}>
                            <JournalLoop colors={"BlueWhite"}></JournalLoop>
                            <JournalLoop colors={"BlueWhite"}></JournalLoop>
                            <JournalLoop colors={"BlueWhite"}></JournalLoop>
                            <JournalLoop colors={"BlueWhite"}></JournalLoop>
                            <JournalLoop colors={"BlueWhite"}></JournalLoop>
                            <JournalLoop colors={"BlueWhite"}></JournalLoop>
                            <JournalLoop colors={"BlueWhite"}></JournalLoop>
                            <JournalLoop colors={"BlueWhite"}></JournalLoop>
                            <JournalLoop colors={"BlueWhite"}></JournalLoop>
                            <JournalLoop colors={"BlueWhite"}></JournalLoop>
                        </div>
                        <div className={"flex-container-column"}>
                            <div className={styles.journalOpenPageRightBg}>
                                <Link href={"/kingdom-hearts-final-mix/journal/chronicles/sorasstory/"}>
                                    <NoteTextBox text={"Sora's Story"}></NoteTextBox>
                                </Link>
                                <NoteTextBox text={""}></NoteTextBox>
                                <Link href={"/kingdom-hearts-final-mix/journal/chronicles/wonderland"}>
                                    <NoteTextBox text={"Wonderland"}></NoteTextBox>
                                </Link>
                                <NoteTextBox text={""}></NoteTextBox>
                                <NoteTextBox text={"Olympus Coliseum"}></NoteTextBox>
                                <NoteTextBox text={""}></NoteTextBox>
                                <NoteTextBox text={"Deep Jungle"}></NoteTextBox>
                                <NoteTextBox text={""}></NoteTextBox>
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