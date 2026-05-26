'use client';

import Image from "next/image";

import { Libre_Baskerville } from "next/font/google";
import {useEffect, useState} from "react";
import MenuOption from "@/app/silent-hill/components/menuoption/menuoption";

import {prefix} from "@/lib/prefix";
import styles from "./page.module.css";
import {white} from "next/dist/lib/picocolors";

const libreBaskerville = Libre_Baskerville({
    weight: ["400", "700"],
    subsets: ["latin"]
});

export default function PauseMenu() {
    const items = [
        { name: "", src: `${prefix}/images/image.svg`, commands: [""], description: "" },
        { name: "Hammer", src: `${prefix}/images/checkmark.svg`, commands: ["Equip"], description: "Emergency hammer. Highly damaging, but hard to use." },
        { name: "Test 1", src: `${prefix}/images/exclamation.svg`, commands: ["Use"], description: "Test 1" },
        { name: "Test 2", src: `${prefix}/images/image.svg`, commands: ["Equip", "Reload"], description: "Test 2" },
        { name: "Test 3", src: `${prefix}/images/trophy.svg`, commands: [""], description: "Test 3" },
        { name: "Test 4", src: `${prefix}/images/menu_icon.svg`, commands: [""], description: "Test 4" },
    ];

    const totalItems = items.length;
    const [currIndex, setCurrIndex] = useState(0);
    const [equippedItem, setEquippedItem] = useState(items.at(0));

    return(
        <div className={`${styles.page} ${libreBaskerville.className}`}>
            <div className={styles.main}>
                <div className={styles.top__row}>
                    <MenuOption text={"Status"}>
                        <div className={styles.status__container}>
                            <div className={styles.status__health} />
                            <Image src={`${prefix}/images/image.svg`} alt={"Placeholder"} width={160} height={160} />
                            <div className={styles.status__blur} />
                        </div>
                    </MenuOption>
                    <MenuOption text={"Equipment"}>
                        <div className={styles.equipment__container}>
                            <Image src={equippedItem.src} alt={equippedItem.name} width={160} height={160} />
                        </div>
                    </MenuOption>
                    <MenuOption text={"Command"}>
                        <div className={styles.command__container}>
                            {items.at(currIndex).commands.map((command, index) => {
                                const handleClick = (e) => {
                                    if(e.target.innerText === "Equip") {
                                        setEquippedItem(items.at(currIndex));
                                        e.target.innerText = "Unequip";
                                    }
                                    else if(e.target.innerText === "Unequip") {
                                        setEquippedItem(items.at(0));
                                        e.target.innerText = "Equip";
                                    }
                                }

                                if(command === "Equip" && items.at(currIndex).name === equippedItem.name) {
                                    return <MenuOption key={index} borders={false} text={"Unequip"} onClick={handleClick}/>
                                }
                                else {
                                    return <MenuOption key={index} borders={false} text={command} onClick={handleClick}/>
                                }
                            })}
                        </div>
                    </MenuOption>
                </div>
                <div className={styles.items}>
                    <Image src={items.at((currIndex - 2 + totalItems) % totalItems).src} style={{background: "white"}} alt={`${items.at((currIndex - 2 + totalItems) % totalItems).name} model`} width={160} height={160} />
                    <Image src={items.at((currIndex - 1 + totalItems) % totalItems).src} style={{background: "white"}} alt={`${items.at((currIndex - 1 + totalItems) % totalItems).name} model`} width={160} height={160} />
                    <div className={styles.arrows__container}>
                        <div className={styles.arrows__leftcontainer} onClick={() => setCurrIndex((currIndex - 1 + totalItems) % totalItems)}>
                            <div className={styles.arrow__left} />
                            <div className={styles.arrow__left} />
                        </div>
                        <div className={styles.outer__border}>
                            <div className={styles.container}>
                                <Image src={items.at(currIndex).src} style={{background: "white"}} alt={`${items.at(currIndex).name} model`} width={160} height={160} />
                            </div>
                        </div>
                        <div className={styles.arrows__rightcontainer} onClick={() => setCurrIndex((currIndex + 1) % totalItems)}>
                            <div className={styles.arrow__right} />
                            <div className={styles.arrow__right} />
                        </div>
                    </div>
                    <Image src={items.at((currIndex + 1) % totalItems).src} style={{background: "white"}} alt={`${items.at((currIndex + 1) % totalItems).name} model`} width={160} height={160} />
                    <Image src={items.at((currIndex + 2) % totalItems).src} style={{background: "white"}} alt={`${items.at((currIndex + 2) % totalItems).name} model`} width={160} height={160} />
                </div>
                <div className={styles.body}>
                    <div className={styles.item__header}>
                        <h2>No. {currIndex}</h2>
                        <h2>Name: {items.at(currIndex).name}</h2>
                    </div>
                    <div className={styles.item__description}>
                        <h2>{items.at(currIndex).description}</h2>
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