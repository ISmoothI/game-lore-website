'use client'

import styles from "./menuoption.module.css";
import {useState} from "react";

export default function MenuOption({ children, className, borders = true, mode = "normal", text = "---", onClick }) {
    const difficultyOptions = {
        '--dynamic-difficulty': `var(--difficulty-${mode})`,
    }

    return (
        <>
            {borders &&
                <div className={styles.outer__border} onClick={onClick}>
                    <div className={styles.container}>
                        <div className={styles.menu__option} style={difficultyOptions}>
                            <h2 className={styles.menu__text}>{text}</h2>
                        </div>
                        {children}
                    </div>
                </div>
            }
            {!borders &&
                <div className={styles.submenu__option} onClick={onClick}>
                    <h2>{text}</h2>
                </div>
            }

        </>
    );
}