import styles from "./journal.module.css"

export default function MenuBox({ color = "maroon", text }) {
    const menuBoxClass = `${styles.menuBox} ${styles[color]}`

    return (
        <>
            <div>
                <div className={menuBoxClass}>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}