'use client'

import Image from "next/image";

import recoverySrc from "@/app/kingdom-hearts-final-mix/assets/images/potion.svg";
import statSrc from "@/app/kingdom-hearts-final-mix/assets/images/tent.svg";

import styles from "./menuoption.module.css";

export default function MenuOption({ className, color = "red", image, imageStart = false, text = "---", imageEnd = false, onClick, onMouseEnter, onMouseLeave }) {
    const imageOptions = {
        Recovery: recoverySrc,
        Stat: statSrc,
    }

    const colorOptions = {
        '--dynamic-bg': `var(--bg-${color})`,
        '--dynamic-border': `var(--border-${color})`,
    }

    return (
        <>
            <div className={styles.menu__option} style={colorOptions} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {imageStart &&
                    <Image src={imageOptions[image]} alt={"Placeholder"} width={20} height={20} />
                }
                <h4>{text}</h4>
                {imageEnd &&
                    <Image src={imageOptions[image]} alt={"Placeholder"} width={20} height={20} />
                }
            </div>
        </>
    )
}