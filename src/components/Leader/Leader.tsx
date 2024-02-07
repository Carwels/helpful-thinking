import React from 'react'
import Image from 'next/image'

import styles from "./Leader.module.scss"
import profile from "@/assets/images/profile.jpeg"

import comilla1 from "@/assets/images/comilla1.png"
import comilla2 from "@/assets/images/comilla2.png"

function Leader() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.left}>
                        <Image
                            src={profile}
                            alt="Profile picture"
                            className={styles.logoImage}
                        />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.descriptionBot}>
                            Equipo liderado por
                        </div>
                        <div className={styles.title}>Ezequiel Jesús Pérez Sánchez</div>
                        <div className={styles.subtitle}>Director médico y socio fundador de <span className={styles.boldText}>Helpful Thinking</span></div>
                        <div className={styles.description}>
                            Soy médico especialista en Psiquiatría. Lo que más me gusta de mi profesión es la parte clínica, entender y resolver los problemas de mis pacientes. Esto es algo que compagino con mi labor como docente, en gestión e investigación
                        </div>
                        <div className={styles.visionContainer}>
                            <div className={styles.comillaWrapper}>
                                <Image
                                    src={comilla1}
                                    alt="Logo"
                                    className={styles.comillaImg}
                                />
                            </div>
                            <div className={styles.visionTextContainer}>
                                <div className={styles.visionText}>
                                    Mi visión de la salud mental es global e integradora y me gusta ayudar a la persona entendiendo sus circunstancias.
                                </div>
                            </div>
                            <div className={styles.comillaWrapper}>
                                <Image
                                    src={comilla2}
                                    alt="Logo"
                                    className={styles.comillaImg}
                                />
                            </div>
                        </div>
                        <div className={styles.btnContainer}>
                            <button className={styles.btn}>Saber más</button>
                            <button className={styles.btn}>Conoce al equipo</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Leader