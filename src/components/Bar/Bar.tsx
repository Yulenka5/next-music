"use client"
import Player from "@/components/Player/Player";
import Volume from "@/components/Volume/Volume";
import styles from "./Bar.module.css";
import {useCurrentTrack} from "@/contexts/CurrentTrackProvider";
import {useRef, useState} from "react";
import ProgressBar from "@/components/Bar/ProgressBar/ProgressBar";

function Bar() {
    const {currentTrack} = useCurrentTrack()
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const duration = audioRef.current?.duration || 0

    const handlePlay = () => {
        const audio = audioRef.current
        if (audio) {
            if (isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }
        setIsPlaying((prev) => !prev)
    }

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Number (e.target.value)
        }
    }

    return (
        <div className={styles.bar}>
            <div className={styles.barContent}>
                <audio className={styles.audio} ref={audioRef}></audio>
                <ProgressBar max={duration} value={currentTime} step={0.01} onChange={handleSeek}/>
                <div className={styles.barPlayerBlock}>
                    <Player/>
                    <Volume/>
                </div>
            </div>
        </div>
    )
}

export default Bar;