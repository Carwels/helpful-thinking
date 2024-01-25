import React from 'react'

import styles from "./Homepage.module.scss"

function Homepage() {

  return (
    <div className={styles.main} id="homepage">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.subtitle}>Salud Mental Online</div>
          <div className={styles.title}>psiquiatras y psicólog@s</div>
          <div className={styles.description}>a un click de ti</div>
          <button className={styles.startBtn}>
            Empezar</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage