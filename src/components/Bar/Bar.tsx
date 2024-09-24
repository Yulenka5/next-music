"use client"
import Player from "@/components/Player/Player";
import Volume from "@/components/Volume/Volume";
import styles from "./Bar.module.css";
import {useCurrentTrack} from "@/contexts/CurrentTrackProvider";

function Bar () {
    const {currentTrack} = useCurrentTrack()
    return (
        <div className={styles.bar}>
            <div className={styles.barContent}>
                <div className={styles.barPlayerProgress}></div>
                <div className={styles.barPlayerBlock}>
                    <Player />
                    <Volume />
                </div>
            </div>
        </div>
    )
}

export default Bar;