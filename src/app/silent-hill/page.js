'use client';

import Image from "next/image";

import { Libre_Baskerville } from "next/font/google";
import {Suspense, useEffect, useRef, useState} from "react";
import MenuOption from "@/app/silent-hill/components/menuoption/menuoption";
import {Canvas, useFrame} from "@react-three/fiber";

import harryImage from "./assets/HarryMasonStatus.svg";
import {Models} from "@/app/silent-hill/assets/models";
import {prefix} from "@/lib/prefix";
import styles from "./page.module.css";

const libreBaskerville = Libre_Baskerville({
    weight: ["400", "700"],
    subsets: ["latin"]
});

export default function PauseMenu() {
    const [items, setItems] = useState([
        { id: 1, name: "", src: Models[0], commands: [""], stock: null, maxStock: null, description: "" },
        { id: 2, name: "Health drink(s)", src: Models[1], commands: ["Use"], stock: 20, maxStock: 999, description: "Supplies nutrition to recover a small amount of stamina." },
        { id: 3, name: "First aid kit(s)", src: Models[2], commands: ["Use"], stock: 15, maxStock: 999, description: "Heals injury to provide moderate stamina recovery." },
        { id: 4, name: "Ampoule(s)", src: Models[3], commands: ["Use"], stock: 10, maxStock: 999, description: "Relieve pain to recover stamina to high. Effect lasts for a while." },
        { id: 5, name: "Handgun", src: Models[4], commands: ["Equip", "Reload"], stock: 15, maxStock: 15, description: "Handgun received from Cybil. Holds up to 15 rounds." },
        { id: 6, name: "Handgun bullets", src: Models[5], commands: ["Reload"], stock: 100, maxStock: 999, description: "Ammo for the handgun." },
        { id: 7, name: "Kitchen knife", src: Models[6], commands: ["Equip"], stock: null, maxStock: null, description: "Hard to use, but better than nothing." },
        { id: 8, name: "Steel pipe", src: Models[7], commands: ["Equip"], stock: null, maxStock: null, description: "3' long steel pipe. Long range but of limited use." },
        { id: 9, name: "Flashlight", src: Models[8], commands: [""], stock: null, maxStock: null, description: "One touch on/off switch. In the chest pocket." },
        { id: 10, name: "Pocket radio", src: Models[9], commands: ["On", "Off"], stock: null, maxStock: null, description: "Portable radio that emits static when monsters are near." },
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

    function RotatingMesh({index}) {
        const meshRef = useRef();
        useFrame((state, delta) => {
            meshRef.current.rotation.y += delta;
        });

        return (
            <group ref={meshRef}>
                <group rotation={[-0.6, 0, 0]}>
                    {Models[index]}
                </group>
            </group>
        )
    }

    return(
        <div className={`${styles.page} ${libreBaskerville.className}`}>
            <div className={styles.main}>
                <div className={styles.top__row}>
                    <MenuOption text={"Status"} mode={difficultyModes[currDifficultyIndex]} onClick={() => setCurrHealthIndex((currHealthIndex + 1) % healthColors.length)}>
                        <div className={styles.status__container}>
                            <div className={styles.status__health} style={healthOptions} />
                            <Image className={styles.status__image} src={harryImage} alt={"Harry Mason image"}/>
                            <div className={styles.status__blur} />
                        </div>
                    </MenuOption>
                    <MenuOption text={"Equipment"} mode={difficultyModes[currDifficultyIndex]} onClick={() => { if(equippedItem.stock !== null) decrementStock(equippedItem.id);} }>
                        <div className={styles.equipment__container}>
                            <Canvas>
                                <Suspense>
                                    <ambientLight intensity={4}/>
                                    <RotatingMesh index={equippedItem.id - 1} />
                                </Suspense>
                            </Canvas>
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
                    <div className={styles.arrows__container}>
                        <Canvas camera={{position: [0, 1, 5]}}>
                            <ambientLight intensity={4}/>
                            <Suspense>
                                <group position={[-12, 0, -2]} rotation={[-0.3, 0, 0]}>
                                    {Models[(currIndex - 2 + totalItems) % totalItems]}
                                </group>
                                <group position={[-6, 0, -1]} rotation={[-0.3, 0, 0]}>
                                    {Models[(currIndex - 1 + totalItems) % totalItems]}
                                </group>
                                <RotatingMesh index={currIndex} />
                                <group position={[6, 0, -1]} rotation={[-0.3, 0, 0]}>
                                    {Models[(currIndex + 1) % totalItems]}
                                </group>
                                <group position={[12, 0, -2]} rotation={[-0.3, 0, 0]}>
                                    {Models[(currIndex + 2) % totalItems]}
                                </group>
                            </Suspense>
                        </Canvas>

                        <div className={styles.outer__border}>
                            <div className={styles.inner__border}>
                            </div>
                        </div>

                        <div className={styles.arrows__leftcontainer} onClick={() => setCurrIndex((currIndex - 1 + totalItems) % totalItems)}>
                            <div className={styles.arrow__left} />
                            <div className={styles.arrow__left} />
                        </div>
                        <div className={styles.arrows__rightcontainer} onClick={() => setCurrIndex((currIndex + 1) % totalItems)}>
                            <div className={styles.arrow__right} />
                            <div className={styles.arrow__right} />
                        </div>
                    </div>
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