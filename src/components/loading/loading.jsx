'use client'

import Image from "next/image";

import styles from "@/components/loading/loading.module.css";

export default function Loading() {
    return (
        <>
            <div className={styles.container}>
                <Image src="/images/exclamation.svg" alt={"Exclamation"} height={100} width={100} />
                <h2 className={styles.text}>Loading...</h2>
            </div>
        </>
    );
}