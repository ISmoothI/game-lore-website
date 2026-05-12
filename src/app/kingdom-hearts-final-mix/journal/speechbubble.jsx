import styles from "./journal.module.css"

export default function SpeechBubble({ text }) {
    return (
        <>
            <div>
                <div className={styles.bubble}>
                    <p className={styles.p}>{text}</p>
                </div>
                <div className={"flex-container-row"}>

                </div>
            </div>
        </>
    )
}