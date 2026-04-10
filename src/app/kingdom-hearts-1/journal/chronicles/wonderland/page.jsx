'use client'

import styles from "@/app/kingdom-hearts-1/journal/journal.module.css"
import MenuBox from "@/app/kingdom-hearts-1/journal/menuBox";
import JournalLoop from "@/app/kingdom-hearts-1/journal/journalloop";
import Link from "next/link";
import NoteTextBox from "@/app/kingdom-hearts-1/journal/chronicles/notetextbox";
import {useState} from "react";

export default function Page() {
    const [pageNumber, setPageNumber] = useState(1);
    const maxPageNumber = 3;
    const textArray = [
        ["After falling through", "a deep hole,", "Sora and company", "arrived in Wonderland", "and followed", "a white rabbit all", "the way to the Queen", "of Hearts' castle.", "There they witnessed", "a trial in which", "the unreasonable", "queen falsely", "accused Alice.", "", "", ""],
        ["Angered by this", "injustice, Sora", "rushed in and", "challenged the", "queen. He and his", "friends found", "evidence proving", "Alice's innocence.", "But the queen simply", "accused them next,", "and ordered her card", "soldiers to seize them.", "", "", "", ""],
        ["After fighting them", "off, Sora noticed", "that Alice had", "disappeared from her", "cage. While looking", "for her, he and his", "friends ran into", "the Trickmaster.", "They defeated", "the powerful monster,", "but Alice's", "whereabouts", "remained unknown.", "", "", ""]
    ];

    return (
        <>
            <div className={styles.journalSection}>
                <div className={"flex-container-column"}>
                    <div className={"flex-container-row"}>
                        <h2 className={styles.headerMenu}>Menu</h2>
                    </div>
                    <div className={styles.headerContainer}>
                        <Link href={"/journal"}>
                            <MenuBox text={"Journal"}></MenuBox>
                        </Link>
                        <h2 className={styles.titleText}>|| Chronicles</h2>
                        <button onClick={() => {setPageNumber(pageNumber => Math.max(pageNumber - 1, 1))}}> &lt; </button>
                        <h2> {pageNumber} / {maxPageNumber} </h2>
                        <button onClick={() => {setPageNumber(pageNumber => Math.min(pageNumber + 1, maxPageNumber))}}> &gt; </button>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={"flex-container-column"}>
                        <div className={styles.journalOpenPageLeftBg}>
                            <NoteTextBox text={textArray[pageNumber - 1][0]}></NoteTextBox>
                            <NoteTextBox text={textArray[pageNumber - 1][1]}></NoteTextBox>
                            <NoteTextBox text={textArray[pageNumber - 1][2]}></NoteTextBox>
                            <NoteTextBox text={textArray[pageNumber - 1][3]}></NoteTextBox>
                            <NoteTextBox text={textArray[pageNumber - 1][4]}></NoteTextBox>
                            <NoteTextBox text={textArray[pageNumber - 1][5]}></NoteTextBox>
                            <NoteTextBox text={textArray[pageNumber - 1][6]}></NoteTextBox>
                            <NoteTextBox text={textArray[pageNumber - 1][7]}></NoteTextBox>
                        </div>
                    </div>
                    <div className={"flex-container-row"}>
                        <div className={"flex-container-column"}>
                            <JournalLoop colors={"WhiteWhite"}></JournalLoop>
                            <JournalLoop colors={"WhiteWhite"}></JournalLoop>
                            <JournalLoop colors={"WhiteWhite"}></JournalLoop>
                            <JournalLoop colors={"WhiteWhite"}></JournalLoop>
                            <JournalLoop colors={"WhiteWhite"}></JournalLoop>
                            <JournalLoop colors={"WhiteWhite"}></JournalLoop>
                            <JournalLoop colors={"WhiteWhite"}></JournalLoop>
                            <JournalLoop colors={"WhiteWhite"}></JournalLoop>
                            <JournalLoop colors={"WhiteWhite"}></JournalLoop>
                            <JournalLoop colors={"WhiteWhite"}></JournalLoop>
                        </div>
                        <div className={"flex-container-column"}>
                            <div className={styles.journalOpenPageRightBg}>
                                <NoteTextBox text={textArray[pageNumber - 1][8]}></NoteTextBox>
                                <NoteTextBox text={textArray[pageNumber - 1][9]}></NoteTextBox>
                                <NoteTextBox text={textArray[pageNumber - 1][10]}></NoteTextBox>
                                <NoteTextBox text={textArray[pageNumber - 1][11]}></NoteTextBox>
                                <NoteTextBox text={textArray[pageNumber - 1][12]}></NoteTextBox>
                                <NoteTextBox text={textArray[pageNumber - 1][13]}></NoteTextBox>
                                <NoteTextBox text={textArray[pageNumber - 1][14]}></NoteTextBox>
                                <NoteTextBox text={textArray[pageNumber - 1][15]}></NoteTextBox>
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