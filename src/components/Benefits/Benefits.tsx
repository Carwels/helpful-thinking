import React from 'react'
import Image from 'next/image'

import styles from "./Benefits.module.scss"

import benefits1 from "@/assets/images/benefits1.png"
import benefits2 from "@/assets/images/benefits2.png"
import benefits3 from "@/assets/images/benefits3.png"

function Benefits() {
    return (
        <div className={styles.main} id="funcionamiento">
            <div className={styles.container}>
                <div className={styles.title}>Cómo funciona</div>
                <div className={styles.top}>
                    <div className={styles.stepContainer}>
                        <Image
                            src={benefits1}
                            alt="Benefits 1"
                            className={styles.logoImage}
                        />
                        <div className={styles.text}>Rellena el formulario de evaluación</div>
                    </div>
                    <div className={styles.stepContainer}>
                        <Image
                            src={benefits2}
                            alt="Benefits 2"
                            className={styles.logoImage}
                        />
                        <div className={styles.text}>Se te asigna a un profesional</div>
                    </div>
                    <div className={styles.stepContainer}>
                        <Image
                            src={benefits3}
                            alt="Benefits 3"
                            className={styles.logoImage}
                        />
                        <div className={styles.text}>Empieza tu terapia online</div>
                    </div>
                </div>
                <button className={styles.startBtn}>Empezar</button>
                <div className={styles.bottom}>
                    <div className={`${styles.title} ${styles.margin}`}>Beneficios</div>

                    <div className={styles.listContainer}>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Atención profesional personalizada
                        </div>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Sin tiempo de espera ni desplazamientos
                        </div>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Resolución de cualquier tipo de situación
                        </div>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Canal de comunicación seguro y confidencial
                        </div>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Prescripción de recetas online
                        </div>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Acceso a tu historial médico online
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Benefits