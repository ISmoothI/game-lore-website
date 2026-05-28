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
    // const items = [
    //     { name: "", src: `${prefix}/images/image.svg`, commands: [""], description: "" },
    //     { name: "Health drink(s)", src: `${prefix}/images/image.svg`, commands: ["Use"], description: "Supplies nutrition to recover a small amount of stamina." },
    //     { name: "First aid kit(s)", src: `${prefix}/images/checkmark.svg`, commands: ["Use"], description: "Heals injury to provide moderate stamina recovery." },
    //     { name: "Ampoule(s)", src: `${prefix}/images/exclamation.svg`, commands: ["Use"], description: "Relieve pain to recover stamina to high. Effect lasts for a while." },
    //     { name: "Handgun", src: `${prefix}/images/image.svg`, commands: ["Equip", "Reload"], description: "Handgun received from Cybil. Holds up to 15 rounds." },
    //     { name: "Hangun bullets", src: `${prefix}/images/trophy.svg`, commands: ["Reload"], description: "Ammo for the handgun." },
    //     { name: "Kitchen knife", src: `${prefix}/images/menu_icon.svg`, commands: ["Equip"], description: "Hard to use, but better than nothing." },
    //     { name: "Steel pipe", src: `${prefix}/images/menu_icon.svg`, commands: ["Equip"], description: "3' long steel pipe. Long range but of limited use." },
    //     { name: "Flashlight", src: `${prefix}/images/menu_icon.svg`, commands: [""], description: "One touch on/off switch. In the chest pocket." },
    //     { name: "Pocket radio", src: `${prefix}/images/menu_icon.svg`, commands: ["On", "Off"], description: "Portable radio that emits static when monsters are near." },
    // ];

    const [items, setItems] = useState([
        { id: 1, name: "", src: `${prefix}/images/image.svg`, commands: [""], stock: null, maxStock: null, description: "" },
        { id: 2, name: "Health drink(s)", src: `${prefix}/images/image.svg`, commands: ["Use"], stock: 20, maxStock: 999, description: "Supplies nutrition to recover a small amount of stamina." },
        { id: 3, name: "First aid kit(s)", src: `${prefix}/images/checkmark.svg`, commands: ["Use"], stock: 15, maxStock: 999, description: "Heals injury to provide moderate stamina recovery." },
        { id: 4, name: "Ampoule(s)", src: `${prefix}/images/exclamation.svg`, commands: ["Use"], stock: 10, maxStock: 999, description: "Relieve pain to recover stamina to high. Effect lasts for a while." },
        { id: 5, name: "Handgun", src: `${prefix}/images/image.svg`, commands: ["Equip", "Reload"], stock: 15, maxStock: 15, description: "Handgun received from Cybil. Holds up to 15 rounds." },
        { id: 6, name: "Handgun bullets", src: `${prefix}/images/trophy.svg`, commands: ["Reload"], stock: 100, maxStock: 999, description: "Ammo for the handgun." },
        { id: 7, name: "Kitchen knife", src: `${prefix}/images/menu_icon.svg`, commands: ["Equip"], stock: null, maxStock: null, description: "Hard to use, but better than nothing." },
        { id: 8, name: "Steel pipe", src: `${prefix}/images/menu_icon.svg`, commands: ["Equip"], stock: null, maxStock: null, description: "3' long steel pipe. Long range but of limited use." },
        { id: 9, name: "Flashlight", src: `${prefix}/images/menu_icon.svg`, commands: [""], stock: null, maxStock: null, description: "One touch on/off switch. In the chest pocket." },
        { id: 10, name: "Pocket radio", src: `${prefix}/images/menu_icon.svg`, commands: ["On", "Off"], stock: null, maxStock: null, description: "Portable radio that emits static when monsters are near." },
    ]);
    const updateStock = (id, newStock) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? {...item, stock: newStock} : item
            )
        );
    };
    const decrementStock = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? {...item, stock: Math.max(0, item.stock - 1)} : item
            )
        );
    };

    const healthColors = ["green", "lightgreen", "orange", "red"];
    const [currHealthIndex, setCurrHealthIndex] = useState(0);
    const healthOptions = {
        '--dynamic-health': `var(--health-${healthColors[currHealthIndex]})`,
    }
    const [equippedItem, setEquippedItem] = useState(items[0]);
    const totalItems = items.length;
    const [currIndex, setCurrIndex] = useState(0);
    const difficultyModes = ["easy", "normal", "hard"];
    const [currDifficultyIndex, setCurrDifficultyIndex] = useState(1);

    return(
        <div className={`${styles.page} ${libreBaskerville.className}`}>
            <div className={styles.main}>
                <div className={styles.top__row}>
                    <MenuOption text={"Status"} mode={difficultyModes[currDifficultyIndex]} onClick={() => setCurrHealthIndex((currHealthIndex + 1) % healthColors.length)}>
                        <div className={styles.status__container}>
                            <div className={styles.status__health} style={healthOptions} />
                            <Image src={`${prefix}/images/image.svg`} alt={"Placeholder"} width={160} height={160} />
                            <div className={styles.status__blur} />
                        </div>
                    </MenuOption>
                    <MenuOption text={"Equipment"} mode={difficultyModes[currDifficultyIndex]} onClick={() => { if(equippedItem.stock !== null) decrementStock(equippedItem.id);} }>
                        <div className={styles.equipment__container}>
                            <Image src={equippedItem.src} alt={equippedItem.name} width={160} height={160} />
                        </div>
                    </MenuOption>
                    <MenuOption text={"Command"} mode={difficultyModes[currDifficultyIndex]} >
                        <div className={styles.command__container}>
                            {items[currIndex].commands.map((command, index) => {
                                const handleClick = (e) => {
                                    if(e.target.innerText === "Equip") {
                                        setEquippedItem(items[currIndex]);
                                        e.target.innerText = "Unequip";
                                    }
                                    else if(e.target.innerText === "Unequip") {
                                        setEquippedItem(items[0]);
                                        e.target.innerText = "Equip";
                                    }
                                    else if(command === "Use") {
                                        if((currIndex === 1 || currIndex === 2 || currIndex === 3) && items[currIndex].stock > 0) {
                                            setCurrHealthIndex(Math.max(0, currHealthIndex - currIndex));
                                            decrementStock(items[currIndex].id);
                                        }
                                    }
                                    else if(command === "Reload") {
                                        let weapon;
                                        let ammo;

                                        if(items[currIndex].id === 5) {
                                            weapon = items[currIndex];
                                            ammo = items[currIndex + 1];
                                        }
                                        else {
                                            weapon = items[currIndex - 1];
                                            ammo = items[currIndex];
                                        }

                                        let ammoNeeded = weapon.maxStock - weapon.stock;
                                        let ammoAdd = Math.min(ammoNeeded, ammo.stock);
                                        let newWeaponStock = weapon.stock + ammoAdd;
                                        let newAmmoStock = Math.max(0, ammo.stock - ammoNeeded);

                                        updateStock(weapon.id, newWeaponStock);
                                        updateStock(ammo.id, newAmmoStock);
                                    }
                                }

                                if(command === "Equip" && items[currIndex].id === equippedItem.id) {
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
                    <Image src={items[(currIndex - 2 + totalItems) % totalItems].src} style={{background: "white"}} alt={`${items[(currIndex - 2 + totalItems) % totalItems].name} model`} width={160} height={160} />
                    <Image src={items[(currIndex - 1 + totalItems) % totalItems].src} style={{background: "white"}} alt={`${items[(currIndex - 1 + totalItems) % totalItems].name} model`} width={160} height={160} />
                    <div className={styles.arrows__container}>
                        <div className={styles.arrows__leftcontainer} onClick={() => setCurrIndex((currIndex - 1 + totalItems) % totalItems)}>
                            <div className={styles.arrow__left} />
                            <div className={styles.arrow__left} />
                        </div>
                        <div className={styles.outer__border}>
                            <div className={styles.container}>
                                <Image src={items[currIndex].src} style={{background: "white"}} alt={`${items[currIndex].name} model`} width={160} height={160} />
                            </div>
                        </div>
                        <div className={styles.arrows__rightcontainer} onClick={() => setCurrIndex((currIndex + 1) % totalItems)}>
                            <div className={styles.arrow__right} />
                            <div className={styles.arrow__right} />
                        </div>
                    </div>
                    <Image src={items[(currIndex + 1) % totalItems].src} style={{background: "white"}} alt={`${items[(currIndex + 1) % totalItems].name} model`} width={160} height={160} />
                    <Image src={items[(currIndex + 2) % totalItems].src} style={{background: "white"}} alt={`${items[(currIndex + 2) % totalItems].name} model`} width={160} height={160} />
                </div>
                <div className={styles.body}>
                    <div className={styles.item__header}>
                        <h2>No. {currIndex}</h2>
                        <div className={styles.item__subheader}>
                            <h2>Name: {items[currIndex].name}</h2>
                            {items[currIndex].stock !== null &&
                                <h2>Stock: {items[currIndex].stock}</h2>
                            }
                        </div>
                    </div>
                    <div className={styles.item__description}>
                        <h2>{items[currIndex].description}</h2>
                    </div>
                </div>
                <div className={styles.top__row}>
                    <MenuOption text={"Option"} mode={difficultyModes[currDifficultyIndex]} onClick={() => setCurrDifficultyIndex((currDifficultyIndex + 1) % difficultyModes.length)} />
                    <MenuOption text={"Exit"} mode={difficultyModes[currDifficultyIndex]} />
                    <MenuOption text={"Map"} mode={difficultyModes[currDifficultyIndex]} />
                </div>
            </div>
        </div>
    );
}