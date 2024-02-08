import React, { useContext } from 'react'
import { FormContext } from '@/contexts/FormContext';
import styles from "./Homepage.module.scss"
import GlobalForm from '../GlobalForm/GlobalForm';
import useGlobalForm from '@/hooks/useGlobalForm';

function Homepage() {
  const openForm = useGlobalForm();

  return (
    <div className={styles.main} id="homepage">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.subtitle}>Salud Mental Online</div>
          <div className={styles.title}>psiquiatras y psicólog@s</div>
          <div className={styles.description}>a un click de ti</div>
          <GlobalForm />
          <button className={styles.startBtn} onClick={openForm}>
            Empezar</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage