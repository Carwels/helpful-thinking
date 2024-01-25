import React from 'react'
import Image from 'next/image'

import styles from "./Treatment.module.scss"
import treat1 from "@/assets/images/treat1.png"
import treat2 from "@/assets/images/treat2.png"
import treat3 from "@/assets/images/treat3.png"
import treat4 from "@/assets/images/treat4.png"
import treat5 from "@/assets/images/treat5.png"
import treat6 from "@/assets/images/treat6.png"
import treat7 from "@/assets/images/treat7.png"
import treat8 from "@/assets/images/treat8.png"
import treat9 from "@/assets/images/treat9.png"
import treat10 from "@/assets/images/treat10.png"

function Treatment() {
    return (
        <div className={styles.main} id="tratamiento">
            <div className={styles.container}>
                <div className={styles.title}> Áreas de tratamiento </div>
                <div className={styles.cardsContainer}>
                    <div className={styles.top}>
                        <div className={styles.card}>
                        <Image
                            src={treat1}
                            alt="Treatment1"
                            className={styles.iconImage}
                        />
                            <div className={styles.text}>Ansiedad y preocupaciones excesivas</div>
                        </div>
                        <div className={styles.card}>
                        <Image
                            src={treat2}
                            alt="Treatment2"
                            className={styles.iconImage}
                        />
                            <div className={styles.text}>Crisis de pareja o domésticas</div>
                        </div>
                        <div className={styles.card}>
                        <Image
                            src={treat3}
                            alt="Treatment3"
                            className={styles.iconImage}
                        />
                            <div className={styles.text}>Depresión y problemas con la regulación emocional</div>
                        </div>
                        <div className={styles.card}>
                        <Image
                            src={treat4}
                            alt="Treatment4"
                            className={styles.iconImage}
                        />
                            <div className={styles.text}>Estrés laboral</div>
                        </div>
                        <div className={styles.card}>
                        <Image
                            src={treat5}
                            alt="Treatment5"
                            className={styles.iconImage}
                        />
                            <div className={styles.text}>Dificultades de adaptación y resolución de conflictos</div>
                        </div>

                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.card}>
                        <Image
                            src={treat6}
                            alt="Treatment6"
                            className={styles.iconImage}
                        />
                            <div className={styles.text}>Adicciones</div>
                        </div>
                        <div className={styles.card}>
                        <Image
                            src={treat7}
                            alt="Treatment7"
                            className={styles.iconImage}
                        />
                            <div className={styles.text}>Desarrollo profesional o realización de objetivos</div>
                        </div>
                        <div className={styles.card}>
                        <Image
                            src={treat8}
                            alt="Treatment8"
                            className={styles.iconImage}
                        />
                            <div className={styles.text}>Problemas alimentarios y de sensibilización corporal</div>
                        </div>
                        <div className={styles.card}>
                        <Image
                            src={treat9}
                            alt="Treatment9"
                            className={styles.iconImage}
                        />
                            <div className={styles.text}>Atención a población infantil y juvenil</div>
                        </div>
                        <div className={styles.card}>
                        <Image
                            src={treat10}
                            alt="Treatment10"
                            className={styles.iconImage2}
                        />
                            <div className={styles.text}>Otros</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Treatment