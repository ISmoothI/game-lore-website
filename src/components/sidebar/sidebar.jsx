'use client'

import {useState} from "react";

import styles from "../../app/[game]/achievements/page.module.css";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {!isOpen && (
                <div className={styles.sidebar__closed}>
                    <button className={styles.sidebar__button} type='button' onClick={toggle}>=</button>
                </div>
            )}

            {isOpen && (
                <div className={styles.sidebar__open}>
                    <button className={styles.sidebar__button} type='button' onClick={toggle}>x</button>
                    <p>Image</p>
                    <p>GAME TITLE</p>
                    <a>Menu Sandbox</a>
                    <p>Achievements</p>
                </div>
            )}
        </div>
    )
}