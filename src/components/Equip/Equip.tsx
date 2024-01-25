import React from 'react'
import Image from 'next/image'

import styles from "./Equip.module.scss"

import picture1 from "@/assets/images/picture1.png"

function Equip() {
    return (
        <div className={styles.wrapper} id="equipo">
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.title}>Quiénes somos</div>
                    <div className={styles.description}>
                        Helpful Thinking ofrece terapia de salud mental online. Contamos con un equipo internacional de psicólogos y psiquiatras con experiencia asistencial, que garantiza una atención profesional y personalizada, donde quieras y cuando o necesites.
                    </div>
                    <div className={styles.descriptionBot}>
                        Modernizamos la forma de ayudar y apoyar el bienestar
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Equip