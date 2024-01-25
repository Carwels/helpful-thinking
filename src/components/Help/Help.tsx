import React from 'react'

import styles from "./Help.module.scss"

function Help() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>Tú quieres encontrarte mejor, nosotr@s podemos ayudarte.</div>
                </div>
                <button className={styles.startBtn}>Empezar</button>
            </div>
        </div>

    )
}

export default Help