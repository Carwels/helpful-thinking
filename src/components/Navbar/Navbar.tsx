import React, { useState, useEffect } from 'react'
import styles from "./Navbar.module.scss"
import Image from 'next/image'

import logo from "@/assets/images/HTlogo.png"
import Link from 'next/link'

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // const [navbar, setNavbar] = useState(false);

    // const changeBackground = () => {
    //     console.log('Window scroll event detected:', window.scrollY);
    //   };
    
    //   useEffect(() => {
    //     console.log('Adding scroll event listener...');
    //     window.addEventListener('scroll', changeBackground);
    
    //     // Simulate a scroll event to check if the function logs
    //     console.log('Simulating scroll event...');
    //     changeBackground();
    
    //     return () => {
    //       console.log('Removing scroll event listener...');
    //       window.removeEventListener('scroll', changeBackground);
    //     };
    //   }, []); 

    const handleMenuClick = () => {
        setIsDropdownOpen(false)
        setIsActive((prevIsActive) => !prevIsActive);
    };

    const closeMobileNav = () => {
        setIsActive(false);
    };

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 991.98);
        };

        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);

        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    // const changeBackground = () => {
    //     console.log(window.scrollY)
    // }

    // window.addEventListener('scroll', changeBackground)

    return (
        <div className={`${styles.main} ${styles.active}`}>
            <ul className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link href="#homepage">
                        <Image
                            src={logo}
                            alt="Logo"
                            className={styles.logoImage}
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
                    onClick={handleMenuClick}
                >
                    <div className={styles.bar}></div>
                </button>
                <nav className={`${styles.mobileNav} ${isActive ? styles.isActive : ''}`}>
                    <Link href="#funcionamiento" onClick={closeMobileNav}>Funcionamiento</Link>
                    <Link href="#faqs" onClick={closeMobileNav}>Áreas de tratamiento</Link>
                    <Link href="#equipo" onClick={closeMobileNav}>Quiénes somos</Link>
                    <Link href="#faqs" onClick={closeMobileNav}>FAQ's</Link>
                    <Link href="#contacto" onClick={closeMobileNav}>Contacto</Link>
                </nav>
            </ul>
        </div>
    )
}

export default Navbar