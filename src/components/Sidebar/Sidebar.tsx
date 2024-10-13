"use client"
import Image from "next/image";
import styles from "./Sidebar.module.css"
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {logout} from "@/store/features/userSlice";
import Link from "next/link";
import {useInitFavoriteTracks} from "@/hooks/useInitFavoriteTracks";

function Sidebar () {
    useInitFavoriteTracks()

    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state) => state.user)
    function handleLogout() {
        dispatch(logout())
    }

    return (
        <div className={styles.mainSidebar}>
            {user ? (<div className={styles.sidebarPersonal}>
                <p className={styles.sidebarPersonalName}>{user.username}</p>
                <div className={styles.sidebarIcon} onClick={handleLogout}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-logout"></use>
                    </svg>
                </div>
            </div>) : ("")}
            <div className={styles.sidebarBlock}>
                <div className={styles.sidebarList}>
                    <div className={styles.sidebarItem}>
                        <Link className={styles.sidebarLink} href="#">
                            <Image
                                className={styles.sidebarImg}
                                src="/img/playlist01.png"
                                alt="day's playlist"
                                width={250}
                                height={150}
                            />
                        </Link>
                    </div>
                    <div className={styles.sidebarItem}>
                        <Link className={styles.sidebarLink} href="#">
                            <Image
                                className={styles.sidebarImg}
                                src="/img/playlist02.png"
                                alt="day's playlist"
                                width={250}
                                height={150}
                            />
                        </Link>
                    </div>
                    <div className={styles.sidebarItem}>
                        <Link className={styles.sidebarLink} href="#">
                            <Image
                                className={styles.sidebarImg}
                                src="/img/playlist03.png"
                                alt="day's playlist"
                                width={250}
                                height={150}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar;