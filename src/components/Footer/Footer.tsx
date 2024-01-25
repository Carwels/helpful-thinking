import React from 'react'
import Image from 'next/image'
import styles from "./Footer.module.scss"
import logo from "@/assets/images/HTlogo.png"
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.main} id="contacto">
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <div className={styles.logo}>
            <Link href="#">
              <Image
                src={logo}
                alt="Logo"
                className={styles.logoImage}
              />
            </Link>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.buttonsContainer}>
            <a>Funcionamiento</a>
            <a>Áreas de tratamiento</a>
            <a>Quiénes somos</a>
            <a>FAQ's</a>
            <a>Contacto</a>
          </div>
        </div>
        <div className={styles.sectionThree}>
          <div className={styles.contact}>
            <div className={styles.textTitle}>Contáctanos</div>
            <div className={styles.text}>hello@helpful-thinking.com</div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.copyright}>© 2023 Day Care Services</div>
        </div>
      </div>
    </div>
  )
}

export default Footer