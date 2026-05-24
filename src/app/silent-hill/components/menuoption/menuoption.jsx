'use client'

import styles from "./menuoption.module.css";

export default function MenuOption({ children, className, borders = true, color = "blue", text = "---", onClick, onMouseEnter, onMouseLeave }) {
    const colorOptions = {
        '--dynamic-bg': `var(--bg-${color})`,
        '--dynamic-border': `var(--border-${color})`,
    }

    return (
        <>
            {borders &&
                <div className={styles.spinning__border}>
                    <div className={styles.container}>
                        <div className={styles.menu__option} style={colorOptions}>
                            <h2>{text}</h2>
                        </div>
                        {children}
                    </div>
                </div>
            }
            {!borders &&
                <div className={styles.submenu__option} style={colorOptions}>
                    <h2>{text}</h2>
                </div>
            }

        </>
    );
}