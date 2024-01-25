import React from 'react'


import styles from "./Faqs.module.scss"

function Faqs() {
    return (
        <div className={styles.main} id="faqs">
            <div className={styles.container}>
                <div className={styles.title}>FAQ</div>
                <div className={styles.accordionContainer}>
                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            <div className={styles.summaryTitle}>¿Qué es Helpful Thinking?</div>
                        </summary>
                        <p className={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </details>
                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            <div className={styles.summaryTitle}>¿Cómo funciona Helpful Thinking?</div>
                        </summary>
                        <p className={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </details>
                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            <div className={styles.summaryTitle}>¿Cómo agendar mi primera cita?</div>
                        </summary>
                        <p className={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </details>
                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            <div className={styles.summaryTitle}>¿Cómo acudir a Helpful Thinking?</div>
                        </summary>
                        <p className={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </details>
                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            <div className={styles.summaryTitle}>¿La terapia en línea es efectiva?</div>
                        </summary>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </details>
                </div>
                <div className={styles.subtitle}>
                    ¿No encuentras respuesta a tu pregunta? envíanos un email a
                </div>
                <div className={styles.mail}>hello@helpful-thinking.com</div>
            </div>
        </div>
    )
}

export default Faqs