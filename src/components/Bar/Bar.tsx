"use client"
import Player from "@/components/Player/Player";
import Volume from "@/components/Volume/Volume";
import styles from "./Bar.module.css";
import {useCallback, useEffect, useRef, useState} from "react";
import ProgressBar from "@/components/Bar/ProgressBar/ProgressBar";
import TimeBlock from "@/components/Bar/TimeBlock/TimeBlock";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {setIsPlaying, setNextTrack} from "@/store/features/playerSlice";

function Bar() {
    const {currentTrack, isPlaying} = useAppSelector((state) => state.player)
    const [isLoop, setIsLoop] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number>(0)

    const dispatch = useAppDispatch()
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const duration = audioRef.current?.duration || 0;

    useEffect(()=>{
        if(currentTrack) {
            audioRef.current?.play()
            dispatch(setIsPlaying(true))
        }
    }, [currentTrack])

    const handlePlay = () => {
        const audio = audioRef.current
        if (audio) {
            if (isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }
        dispatch(setIsPlaying(!isPlaying))
    }

    const handleLoop = () => {
        const audio = audioRef.current
        if(audio) {
            audio.loop = !isLoop
            setIsLoop((prev)=> !prev)
        }
    }

    const handleTimeUpdate = useCallback((e: React.ChangeEvent<HTMLAudioElement>) => {
        setCurrentTime(e.currentTarget.currentTime)
    }, [setCurrentTime])

    const handleTrackEnded = useCallback(() => {
        if(!isLoop) {
            dispatch(setNextTrack())
        }
    }, [isLoop])


    if (!currentTrack) {
        return null
    }

    return (
        <div className={styles.bar}>
            <div className={styles.barContent}>
                <audio className={styles.audio} ref={audioRef} src={currentTrack.track_file} onTimeUpdate={handleTimeUpdate} onEnded={handleTrackEnded}/>
                <ProgressBar audioRef={audioRef} value={currentTime} max={0}/>
                <div className={styles.barPlayerBlock}>
                    <Player handlePlay={handlePlay} handleLoop={handleLoop} isLoop={isLoop}/>
                    <Volume audioRef={audioRef}/>
                    <TimeBlock currentTime={currentTime} duration={duration} />
                </div>
            </div>
        </div>
    )
}

export default Bar;