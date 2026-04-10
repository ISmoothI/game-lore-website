'use client'

import styles from "@/components/card/card.module.css";

export default function Card({ className, children }) {

    return (
        <div className={`${styles.base} ${className}`}>
            {children}
        </div>
    );
}