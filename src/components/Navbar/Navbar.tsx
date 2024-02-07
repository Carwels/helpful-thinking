import React, { useState, useEffect } from 'react'
import styles from "./Navbar.module.scss"
import Image from 'next/image'
import Link from 'next/link'

import logo from "@/assets/images/HTlogo.png"

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    //This function is to remove the flickering when scrolling
    function throttle(func: Function, delay: number) {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;
        return function (this: any, ...args: any[]) {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    timeoutId = null;
                }, delay);
            }
        };
    }

    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 991.98);
        };

        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);

        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    useEffect(() => {
        const handleScroll = throttle(() => {
            setScrollY(window.scrollY);
        }, 100);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarHeight = scrollY > 0 ? 72 : 120;
    const logoImageWidth = scrollY > 0 ? '15rem' : '25rem';

    return (
        <div className={`${styles.main} ${styles.active}`} style={{ height: navbarHeight }}>
            <ul className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link href="#">
                        <Image
                            src={logo}
                            alt="Logo"
                            className={styles.logoImage}
                            style={{ width: logoImageWidth }}
                        />
                    </Link>
                </div>

                {!isSmallScreen && (
                    <React.Fragment>
                        <nav className={styles.navContainer}>
                            <Link href="#funcionamiento">Funcionamiento</Link>
                            <Link href="#tratamiento">Áreas de tratamiento</Link>
                            <Link href="#equipo">Quiénes somos</Link>
                            <Link href="#faqs">FAQ's</Link>
                            <Link href="#contacto">Contacto</Link>
                        </nav>
                        <button className={styles.startBtn}>Empezar</button>
                    </React.Fragment>
                )}

                <button
                    className={`${styles.hamburger} ${isActive ? styles.isActive : ''}`}
                    onClick={() => setIsActive(prevIsActive => !prevIsActive)}
                >
                    <div className={styles.bar}></div>
                </button>
                <nav className={`${styles.mobileNav} ${isActive ? styles.isActive : ''}`}>
                    <Link href="#funcionamiento" onClick={() => setIsActive(false)}>Funcionamiento</Link>
                    <Link href="#tratamiento" onClick={() => setIsActive(false)}>Áreas de tratamiento</Link>
                    <Link href="#equipo" onClick={() => setIsActive(false)}>Quiénes somos</Link>
                    <Link href="#faqs" onClick={() => setIsActive(false)}>FAQ's</Link>
                    <Link href="#contacto" onClick={() => setIsActive(false)}>Contacto</Link>
                </nav>
            </ul>
        </div>
    )
}

export default Navbar