import styles from "../journal.module.css"

export default function NoteTextBox({ color = "noteBlue", text }) {
    if (!text) {
        text = "."
        color = "noteWhite"
    }

    const noteBoxClass = `${styles.noteTextBox} ${styles[color]}`

    return (
        <>
            <div>
                <div className={noteBoxClass}>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}