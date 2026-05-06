'use client'

import styles from './statusbox.module.css';

export default function StatusBox({ name, level }) {


    return(
        <>
            <div className={styles.statusbox}>
                <div className={styles.name__container}>
                    <h4 className={styles.name}>{name}</h4>
                </div>
                <div className={styles.stats__container}>
                    <input className={styles.level} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={1} size={3} title={"Click to change the level of the character."}/>
                    <div className={styles.stat__row}>
                        <input className={styles.health} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={18} size={3} title={"Click to change the health points of the character."}/>
                        <span className={styles.health__slash}>/</span>
                        <input className={styles.health} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={18} size={3} title={"Click to change the health points of the character."}/>
                    </div>
                    <div className={styles.stat__row}>
                        <input className={styles.magic} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={2} size={3} title={"Click to change the magic points of the character."}/>
                        <span className={styles.magic__slash}>/</span>
                        <input className={styles.magic} type={"text"} inputMode={"numeric"} pattern={"[0-9]{3}"} maxLength={3} defaultValue={2} size={3} title={"Click to change the magic points of the character."}/>
                    </div>
                </div>
            </div>
        </>
    )
}