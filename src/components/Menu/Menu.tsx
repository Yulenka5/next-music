'use client'
import Image from "next/image";
import styles from "./Menu.module.css"
import Link from "next/link";
import { useState } from "react";

function Menu() {
const [isOpened, setIsOpened] = useState<boolean>(false)

    return (
        <nav className={styles.mainNav}>
            <div className={styles.navLogo}>
                <Image className={styles.logoImage} src="/img/logo.png" alt="Logo"
                       width={114} height={17}/>
            </div>
            <div className={styles.navBurger} onClick={() => setIsOpened((prev) => !prev)}>
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
            </div>
            {isOpened && (<div className={styles.navMenu}>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem}>
                        <Link href="#" className={styles.menuLink}>Главное</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="#" className={styles.menuLink}>Мой плейлист</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="../signin.html" className={styles.menuLink}>Войти</Link>
                    </li>
                </ul>
            </div>)}
        </nav>
    )
}

export default Menu;