'use client';

import Image from "next/image";

import { Libre_Baskerville } from "next/font/google";
import {useState} from "react";
import MenuOption from "@/app/silent-hill/components/menuoption/menuoption";

import {prefix} from "@/lib/prefix";
import styles from "./page.module.css";

const libreBaskerville = Libre_Baskerville({
    weight: ["400", "700"],
    subsets: ["latin"]
});

export default function PauseMenu() {
    const items = [
        { name: "Hammer", commands: ["Equip"], description: "Emergency hammer. Highly damaging, but hard to use." },
        { name: "Test 1", commands: ["Use"], description: "Test 1" },
        { name: "Test 2", commands: ["Equip", "Reload"], description: "Test 2" },
        { name: "Test 3", commands: [""], description: "Test 3" },
    ];

    const totalItems = items.length;
    const [index, setIndex] = useState(0);
    const [currentItem, setCurrentItem] = useState(Object.entries(items)[index]);
    // console.log(Object.entries(items)[index])
    // console.log(items.at(index).commands.entries())

    return(
        <div className={`${styles.page} ${libreBaskerville.className}`}>
            <div className={styles.main}>
                <div className={styles.top__row}>
                    <MenuOption text={"Status"}>
                        <div className={styles.status__container}>
                            <Image src={`${prefix}/images/image.svg`} alt={"Placeholder"} width={160} height={160} />
                        </div>
                    </MenuOption>
                    <MenuOption text={"Equipment"}>
                        <div className={styles.equipment__container}>
                            <Image src={`${prefix}/images/image.svg`} alt={"Placeholder"} width={160} height={160} />
                        </div>
                    </MenuOption>
                    <MenuOption text={"Command"}>
                        <div className={styles.command__container}>
                            {items.at(index).commands.map((command, index) => (
                                <MenuOption key={index} borders={false} text={command} />
                            ))}
                        </div>
                    </MenuOption>
                </div>
                <div className={styles.items}>
                    <div className={styles.arrows__container} onClick={() => setIndex((index - 1 + totalItems) % totalItems)}>
                        <div className={styles.arrow__left} />
                        <div className={styles.arrow__left} />
                    </div>

                    <Image src={`${prefix}/images/image.svg`} alt={"Placeholder"} width={160} height={160} />
                    <Image src={`${prefix}/images/image.svg`} alt={"Placeholder"} width={160} height={160} />
                    <Image src={`${prefix}/images/image.svg`} alt={"Placeholder"} width={160} height={160} />
                    <Image src={`${prefix}/images/image.svg`} alt={"Placeholder"} width={160} height={160} />
                    <Image src={`${prefix}/images/image.svg`} alt={"Placeholder"} width={160} height={160} />

                    <div className={styles.arrows__container} onClick={() => setIndex((index + 1) % totalItems)}>
                        <div className={styles.arrow__right} />
                        <div className={styles.arrow__right} />
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.item__header}>
                        <h2>No. {index}</h2>
                        <h2>Name: {items.at(index).name}</h2>
                    </div>
                    <div className={styles.item__description}>
                        <h2>{items.at(index).description}</h2>
                    </div>
                </div>
                <div className={styles.top__row}>
                    <MenuOption text={"Option"} />
                    <MenuOption text={"Exit"} />
                    <MenuOption text={"Map"} />
                </div>
            </div>
        </div>
    );
}