'use client'

import styles from "@/components/accordian/accordian.module.css";

export default function Accordion({ question, answer }) {
    return (
        <details className={styles.details}>
            <summary className={styles.summary}>
                <h3 className={styles.question}>{question}</h3>
            </summary>
            <h4 className={styles.answer}>{answer}</h4>
        </details>
    );
}