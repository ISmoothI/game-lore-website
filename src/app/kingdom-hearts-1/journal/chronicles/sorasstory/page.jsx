'use client'

import styles from "@/app/kingdom-hearts-1/journal/journal.module.css"
import MenuBox from "@/app/kingdom-hearts-1/journal/menuBox";
import JournalLoop from "@/app/kingdom-hearts-1/journal/journalloop";
import Link from "next/link";
import NoteTextBox from "@/app/kingdom-hearts-1/journal/chronicles/notetextbox";
import {useState} from "react";

export default function Page() {
    const [pageNumber, setPageNumber] = useState(1);
    const maxPageNumber = 4;
    const textArray = [
        ["The power of", "Kiari's heart was", "what saved Sora.", "The strong bond", "between them became", "a light that pulled", "him back from the", "darkness.", "Promising Kiari", "he would come back,", "Sora returned", "to Hollow Bastion to", "seal the final Keyhole", "and save Riku.", "", ""],
        ["The Keyhole was sealed,", "but Ansem and Riku", "were nowhere to be", "found. Ansem had left", "to fulfill his final plan.", "Sora and company", "followed him to a world", "shrouded in darkness.", "Destroying Ansem", "could restore all the,", "worlds taken by the", "Heartless, but it", "would also mean", "those worlds being", "disconnected, as", "they once were."],
        ["Once every world was", "isolated, divided", "from the others by", "impassable walls.", "The power of darkness", "demolished those walls.", "", "", "If the walls return,", "traveling to other", "worlds will no", "longer be possible.", "Sora may never see", "his friends again.", "", ""],
        ["Still, he's resolved", "to fight his way into", "the very core of", "darkness, where", "Ansem lies in wait.", "He believes no matter", "how deep the darkness,", "a light shines within", "", "", "", "", "", "", "", ""]
    ];

    return (
        <>
            <div className={styles.journalSection}>
                <div className={"flex-container-column"}>
                    <div className={"flex-container-row"}>
                        <h2 className={styles.headerMenu}>Menu</h2>
                    </div>
                    <div className={styles.headerContainer}>
                        <Link href={"/kingdom-hearts-1/journal"}>
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