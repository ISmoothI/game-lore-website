'use client'

import {use, useState} from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./layout.module.css";

export default function SidebarLayout({ params, children }) {
    const { game } = use(params);
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div className={styles.children}>
                <div className={styles.sidebar}>
                    {!isOpen && (
                        <div className={styles.sidebar__closed}>
                            <button className={styles.sidebar__button} type={"button"} onClick={toggle}>=</button>
                        </div>
                    )}
                    {isOpen && (
                        <div className={styles.sidebar__open}>
                            <div className={styles.sidebar__header}>
                                <h3>Content</h3>
                                <button className={styles.sidebar__button} type={"button"} onClick={toggle}>x</button>
                            </div>
                            {/*<div>*/}
                            {/*    <Image src={image} alt={"Image placeholder"} />*/}
                            {/*    <p className={styles.sidebar__title}>{gameTitle}</p>*/}
                            {/*</div>*/}
                            <div className={styles.sidebar__options}>
                                <div className={styles.sidebar__option}>
                                    <Link className={styles.sidebar__link} href="/">
                                        <Image src={"/images/menu_icon.svg"} alt={"Menu Icon"} width={100} height={100} />
                                        Menu Sandbox
                                    </Link>
                                </div>
                                <div className={styles.sidebar__option}>
                                    <Link className={styles.sidebar__link} href={`/${game}/achievements`}>
                                        <Image src={"/images/trophy.svg"} alt={"Trophy Icon"} width={100} height={100} />
                                        Achievements
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {children}
            </div>
        </>
    );
}
