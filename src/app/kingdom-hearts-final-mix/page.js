'use client'

import localFont from "next/font/local";
import {useEffect, useState} from "react";
import MenuOption from "./components/menuoption/menuoption";
import styles from "@/app/kingdom-hearts-final-mix/page.module.css";
import StatusBox from "./components/statusbox/statusbox";

const menuFont = localFont({
    src: './assets/fonts/KHMenu.woff2'
})
const gummiFont = localFont({
    src: './assets/fonts/KHGummi.woff2'
})

export default function MainMenu() {
    const worldAreas = {
        "Dive to the Heart": ["Snow White Pillar", "Cinderella Pillar", "Three Princesses Pillar", "Destiny Islands", "Sleeping Beauty Pillar", "Belle Pillar"],
        "Destiny Islands": ["Seashore", "Cove", "Seaside Shack", "Secret Place"],
        "Traverse Town": ["First District", "Item Shop", "Item Workshop", "Item Accessory Shop", "Second District", "Alleyway", "Gizmo Shop", "Hallway (Hotel)", "Green Room (Hotel)", "Red Room (Hotel)", "Piano Room (Dalmation's House)", "Living Room (Dalmation's House)", "Dining Room (Dalmation's House)", "Dalmation's Den (Dalmation's House)", "Third District", "Small House", "Mystical House", "Magician's Study"],
        "Wonderland": [],
        "Olympus Coliseum": [],
        "Deep Jungle": [],
        "Agrabah": [],
        "Monstro": [],
        "Halloween Town": [],
        "Atlantica": [],
        "Neverland": [],
        "100 Acre Wood": [],
        "Hollow Bastion": [],
        "The End of the World": []
    };
    const descriptions = {
        Items: "Use or equip items the party has obtained.",
        Equipment: "Equip weapons and accessories.",
        Abilities: "Assign abilities to the party members.",
        Customize: "Customize party members' action patterns.",
        Status: "Displays party members' attributes.",
        Journal: "Read Jiminy's journal, which contains his notes and other records.",
        Config: "Configure game settings.",
        Save: "Displays save menu.",
    };
    const [selectedWorld, setSelectedWorld] = useState("Dive to the Heart");
    const [selectedArea, setSelectedArea] = useState("");
    const [hoveredKey, setHoveredKey] = useState(null);
    const [time, setTime] = useState("");

    useEffect(() => {
        const timeFormat = () => {
            setTime(new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }));
        };

        timeFormat();

        const timer = setInterval(timeFormat, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className={`${styles.page} ${menuFont.className}`}>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h2 className={gummiFont.className}>MENU</h2>
                        <select className={styles.area__select} value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
                            {worldAreas[selectedWorld]?.map((value) => (
                                <option className={styles.area__option} key={value} value={value}>
                                    || {value}
                                </option>
                            ))}
                        </select>
                        <select className={styles.world__select} value={selectedWorld} onChange={(e) => setSelectedWorld(e.target.value)}>
                            {Object.keys(worldAreas).map(key => (
                                <option className={styles.world__option} key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.menu__options}>
                            {Object.keys(descriptions).map(key => {
                                let colorOption = (key === "Save") ? "green" : "red";

                                return(
                                    <MenuOption key={key} text={key} color={colorOption}
                                                onMouseEnter={() => setHoveredKey(key)}
                                                onMouseLeave={() => setHoveredKey(null)}
                                    />
                                )
                            })}
                        </div>
                        <div className={styles.status__container}>
                            {/*  STATS ROW  */}
                            <div className={styles.header__column}>
                                <div className={styles.empty__header}>
                                    <h4> </h4>
                                </div>
                                <div className={styles.label__container}>
                                    <h4 className={styles.level}>LV</h4>
                                    <h4 className={styles.health}>HP</h4>
                                    <h4 className={styles.magic}>MP</h4>
                                </div>
                            </div >
                            <StatusBox name={"Sora"} level={0} />
                            <StatusBox name={"Donald"} level={0} />
                            <StatusBox name={"Goofy"} level={0} />
                            <div className={styles.stats__footer}>
                                <h4> </h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.footer__stats}>
                            <div className={styles.munny}>
                                <h4 className={styles.munny__header}>munny</h4>
                                <h4 className={styles.munny__amount}>00000</h4>
                            </div>
                            <div className={styles.time}>
                                <h4 className={styles.time__header}>time</h4>
                                <h4 className={styles.time__amount}>{time}</h4>
                            </div>
                        </div>
                        <div className={styles.footer__description}>
                            <h4>{descriptions[hoveredKey]}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}