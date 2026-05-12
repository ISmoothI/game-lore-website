import styles from "./journal.module.css"

export default function JournalLoop({ colors = "BlueBlue" }) {
    const journalLoopClass = `${styles.loopBg} ${styles[colors]}`

    return(
        <div className={"flex-container-row"}>
            <div className={journalLoopClass}>
                <div className={styles.loop}></div>
                <div className={styles.loopCircle}></div>
            </div>
        </div>
    )
}