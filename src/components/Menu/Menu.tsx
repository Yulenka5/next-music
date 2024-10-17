"use client"
import Image from "next/image";
import styles from "./Menu.module.css"
import Link from "next/link";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {logout} from "@/store/features/userSlice";

function Menu() {
    const dispatch = useAppDispatch()
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const tokens = useAppSelector((state) => state.user.tokens)

    function handleLogout() {
        dispatch(logout())
    }

    return (
        <nav className={styles.mainNav}>
            <Link href="/tracks">
                <div className={styles.navLogo}>
                    <Image className={styles.logoImage} src="/img/logo.png" alt="Logo"
                           width={114} height={17}/>
                </div>
            </Link>
            <div className={styles.navBurger} onClick={() => setIsOpened((prev) => !prev)}>
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
            </div>
            {isOpened && (<div className={styles.navMenu}>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem}>
                        <Link href="/tracks" className={styles.menuLink}>Главное</Link>
                    </li>
                    {tokens.access && (<li className={styles.menuItem}>
                        <Link href="/tracks/favorite" className={styles.menuLink}>Мой плейлист</Link>
                    </li>)}
                    <li className={styles.menuItem}>
                        {tokens.access ? (
                            <Link href="#" className={styles.menuLink} onClick={handleLogout}>Выйти</Link>) : (
                            <Link href="/login" className={styles.menuLink}>Войти</Link>)}
                    </li>
                </ul>
            </div>)}
        </nav>
    )
}

export default Menu;