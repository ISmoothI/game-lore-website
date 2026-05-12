'use client'

import localFont from "next/font/local";

import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

import {worldImages} from "./assets/images/worlds";
import MenuOption from "./components/menuoption/menuoption";
import StatusBox from "./components/statusbox/statusbox";

import styles from "./page.module.css";

const menuFont = localFont({
    src: './assets/fonts/KHMenu.woff2'
})
const gummiFont = localFont({
    src: './assets/fonts/KHGummi.woff2'
})

export default function MainMenu() {
    const worldAreas = {
        "Dive to the Heart": {
            icon: worldImages.diveIcon,
            areas: ["Snow White Pillar", "Cinderella Pillar", "Three Princesses Pillar", "Destiny Islands", "Sleeping Beauty Pillar", "Belle Pillar", "Awakening"]
        },
        "Destiny Islands": {
            icon: worldImages.destinyIcon,
            areas: ["Seashore", "Cove", "Seaside Shack", "Secret Place"]
        },
        "Traverse Town": {
            icon: worldImages.traverseIcon,
            areas: ["1st District", "Item Shop", "Item Workshop", "Accessory Shop", "Geppetto's House", "2nd District", "Alleyway", "Hotel", "Hallway", "Green Room", "Red Room", "Gizmo Shop", "Dalmation's House", "Piano Room", "Living Room", "Dining Room", "Dalmation's Den", "3rd District", "Small House", "Mystical House", "Magician's Study", "Secret Waterway"]
        },
        "Wonderland": {
            icon: worldImages.wonderlandIcon,
            areas: ["Rabbit Hole", "Bizarre Room", "Queen's Castle", "Lotus Forest", "Tea Party Garden"]
        },
        "Olympus Coliseum": {
            icon: worldImages.olympusIcon,
            areas: ["Coliseum Gates", "Coliseum: Lobby"]
        },
        "Deep Jungle": {
            icon: worldImages.jungleIcon,
            areas: ["Tree House", "Climbing Trees", "Treetop", "Jungle: Tunnel", "Jungle: Vines", "Jungle: Vines 2", "Hippos' Lagoon", "Camp", "Camp: Tent", "Bamboo Thicket", "Jungle: Cliff", "Waterfall Cavern", "Cavern of Hearts"]
        },
        "Agrabah": {
            icon: worldImages.agrabahIcon,
            areas: ["Agrabah: Storage", "Agrabah: Plaza", "Agrabah: Main Street", "Aladdin's House", "Agrabah: Alley", "Palace Gates", "Desert: Cave", "Cave: Entrance", "Cave: Hall", "Bottomless Hall", "Dark Chamber", "Relic Chamber", "Silent Chamber", "Hidden Room", "Treasure Hall", "Lamp Chamber"]
        },
        "Monstro": {
            icon: worldImages.monstroIcon,
            areas: ["Monstro: Mouth", "Monstro: Chamber 1", "Monstro: Chamber 2", "Monstro: Chamber 3", "Monstro: Chamber 4", "Monstro: Chamber 5", "Monstro: Chamber 6", "Monstro: Bowels", "Monstro: Throat", "Monstro: Stomach"]
        },
        "Halloween Town": {
            icon: worldImages.halloweenIcon,
            areas: ["Guillotine Gate", "Guillotine Square", "Lab Entryway", "Research Lab", "Graveyard", "Boneyard", "Moonlight Hill", "Cemetery", "Bridge", "Manor Ruins"]
        },
        "Atlantica": {
            icon: worldImages.atlanticaIcon,
            areas: ["Triton's Throne", "Triton's Palace", "Undersea Gorge", "Ariel's Grotto", "Undersea Garden", "Undersea Cave", "Calm Depths", "Atlantica", "Tranquil Grotto", "Sunken Ship", "Below Deck", "Den of Tides", "Cavern Nook", "Tidal Abyss", "Ursula's Lair"]
        },
        "Neverland": {
            icon: worldImages.neverlandIcon,
            areas: ["Ship: Hold", "Ship: Galley", "Ship: Freezer", "Ship: Cabin", "Captain's Cabin", "Pirate Ship", "Clock Tower"]
        },
        "100 Acre Wood": {
            icon: worldImages.acreIcon,
            areas: ["100 Acre Wood", "Pooh's House", "Pooh's Room", "Rabbit's House", "Rabbit's Room", "Hunny Tree", "Bouncing Spot", "Muddy Path", "Wood: Meadow", "Wood: Hill"]
        },
        "Hollow Bastion": {
            icon: worldImages.bastionIcon,
            areas: ["Rising Falls", "Castle Gates", "Base Level", "Waterway", "Dungeon", "Entrance Hall", "Library", "Lift Stop", "Great Crest", "High Tower", "Castle Chapel", "Grand Hall", "Dark Depths"]
        },
        "The End of the World": {
            icon: worldImages.endIcon,
            areas: ["Gate to the Dark", "Final Dimension", "Giant Crevasse", "World Terminus", "Evil Grounds", "Crater", "Volcanic Crater", "Linked Worlds", "Final Rest", "Homecoming"]
        }
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
    const [isOpen, setIsOpen] = useState(true);
    const [showList, setShowList] = useState(false);
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
                        <div className={styles.header__menu}>
                            <h2 className={gummiFont.className}>MENU</h2>
                        </div>
                        <select className={styles.area__select} value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
                            {worldAreas[selectedWorld]["areas"]?.map((value) => (
                                <option className={styles.area__option} key={value} value={value}>
                                    || {value}
                                </option>
                            ))}
                        </select>
                        <div className={styles.header__world}>
                            <div onClick={() => setShowList(!showList)} className={styles.world__select}>
                                <Image className={styles.world__icon} src={worldAreas[selectedWorld]["icon"]} alt={`${selectedWorld}`}/>
                                <h4 className={styles.world__arrow}>v</h4>
                            </div>
                            {showList && (
                                <ul className={styles.world__options}>
                                    {Object.keys(worldAreas).map(key => (
                                        <li className={styles.world__option} key={key} value={key} onClick={() => {setSelectedWorld(key); setShowList(!showList);}}>
                                            {key}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className={styles.content}>
                        {isOpen && (
                            <>
                                <div className={styles.banner}>
                                    <h5>
                                        Special thanks to the
                                        <a href="https://github.com/Televo/kingdom-hearts-recollection"> Kingdom Hearts Re:Collection </a>
                                        team for creating the font and image assets that made this page possible!
                                    </h5>
                                    <button className={styles.banner__button} type={"button"} onClick={() => setIsOpen(!isOpen)}>X</button>
                                </div>
                            </>
                        )}
                        <div className={styles.menu__options}>
                            {Object.keys(descriptions).map(key => {
                                let colorOption = (key === "Save") ? "green" : "red";

                                return(
                                    <MenuOption key={key} text={key} color={colorOption} onMouseEnter={() => setHoveredKey(key)} onMouseLeave={() => setHoveredKey(null)}/>
                                )
                            })}
                        </div>
                        <div className={styles.status__container}>
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
                            <StatusBox name={"Sora"}/>
                            <StatusBox name={"Donald"}/>
                            <StatusBox name={"Goofy"}/>
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