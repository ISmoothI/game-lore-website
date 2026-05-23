'use client'

import Image from "next/image";

import {prefix} from "@/lib/prefix";
import styles from './no-achievements-page.module.css';

export default function NoAchievementsPage() {
    return (
        <div className={styles.page}>
            <div className={styles.main}>
                <div className={styles.content}>
                    <h1> There are no official achievements to be displayed.</h1>
                    <Image src={`${prefix}/images/exclamation.svg`} alt={"Exclamation"} width={100} height={100} />
                    <h2> This usually means achievements were not supported at the time or the studio has chosen not to add achievements to the game.</h2>
                </div>
            </div>
        </div>
    )
}