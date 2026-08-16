'use client'

import styles from './page.module.css';

export default function MainMenu() {
    const menuOptions = {
        "Change Equipment": "Adjust your party members' equipment.",
        "Party": "",
        "Skill Trees": "",
        "Arts": "",
        "Area Maps": "",
        "Change Time": "",
        "Quest Log": "",
        "Affinity Chart": "",
        "Collectables": "",
    };

    return (
        <>
            <div className={`${styles.page}`}>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <div className={styles.section__text}>

                        </div>
                        <div className={styles.data}>
                            <div className={styles.data__gold}>
                                <div className={styles.data__goldimg}>

                                </div>
                                <div className={styles.data__goldnums}>

                                </div>
                            </div>

                            <div className={styles.data__time}>
                                <div className={styles.data__timeimg}>

                                </div>
                                <div className={styles.data__timenums}>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.body}>
                        <div className={styles.menubuttons}>
                            <div className={styles.menuoptions}>
                                {Object.keys(menuOptions).map(key => {
                                    return (
                                        <div key={key} className={styles.menuoption}>
                                            <h2>{key}</h2>
                                            <div className={styles.circles}>
                                                <div className={styles.circle__out}/>
                                                <div className={styles.circle__mid}/>
                                                <div className={styles.circle__in}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.systembutton}>

                            </div>
                        </div>
                        <div className={styles.party__main}>

                        </div>
                        <div className={styles.party__sub}>

                        </div>
                    </div>

                    <div className={styles.menuoption__desc}>
                        <h3>MENU DESC</h3>
                    </div>
                    <div className={styles.footer}>
                    </div>
                </div>
            </div>
        </>
    )
}