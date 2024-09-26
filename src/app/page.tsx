"use client"
import Bar from "@/components/Bar/Bar";
import Main from "@/components/Main/Main";
import styles from "./page.module.css";
import {CurrentTrackProvider, useCurrentTrack} from "@/contexts/CurrentTrackProvider";

export default function Home() {
    const {currentTrack} = useCurrentTrack()
    return (<div className={styles.wrapper}>
            <div className={styles.container}>
                <CurrentTrackProvider>
                    <Main/>
                    {currentTrack && <Bar />}
                </CurrentTrackProvider>
                <footer className={styles.footer}></footer>
            </div>
        </div>
    );
}
