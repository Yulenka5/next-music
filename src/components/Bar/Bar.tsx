"use client"
import Player from "@/components/Player/Player";
import Volume from "@/components/Volume/Volume";
import styles from "./Bar.module.css";
import {useCurrentTrack} from "@/contexts/CurrentTrackProvider";
import {useEffect, useRef, useState} from "react";
import ProgressBar from "@/components/Bar/ProgressBar/ProgressBar";
import TimeBlock from "@/components/Bar/TimeBlock/TimeBlock";

function Bar() {
    const {currentTrack} = useCurrentTrack()
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [isLoop, setIsLoop] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number>(0)


    const audioRef = useRef<HTMLAudioElement | null>(null)
    const duration = audioRef.current?.duration || 0;

    useEffect(()=>{
        if(currentTrack) {
            audioRef.current?.play()
            setIsPlaying(true)
        }
    }, [currentTrack])

    if (!currentTrack) {
        return null
    }

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

    const handleLoop = () => {
        const audio = audioRef.current
        if(audio) {
            audio.loop = !isLoop
            setIsLoop((prev)=> !prev)
        }
    }

    const handleTimeUpdate = (e: React.ChangeEvent<HTMLAudioElement>) => {
        setCurrentTime(e.currentTarget.currentTime)
    }


    return (
        <div className={styles.bar}>
            <div className={styles.barContent}>
                <audio className={styles.audio} ref={audioRef} src={currentTrack.track_file} onTimeUpdate={handleTimeUpdate} />
                <ProgressBar audioRef={audioRef} value={currentTime} />
                <div className={styles.barPlayerBlock}>
                    <Player handlePlay={handlePlay} isPlaying={isPlaying} handleLoop={handleLoop} isLoop={isLoop}/>
                    <Volume audioRef={audioRef}/>
                    <TimeBlock currentTime={currentTime} duration={duration} />
                </div>
            </div>
        </div>
    )
}

export default Bar;