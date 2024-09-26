import styles from "./ProgressBar.module.css"
import {RefObject} from "react";

type ProgressBarProps = {
    audioRef: RefObject<HTMLAudioElement>,
    value: number
}
function ProgressBar  ({ audioRef, value }: ProgressBarProps) {
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Number(e.target.value) || 0
        }
    }
    return (
        <input
            className={styles.styledProgressInput}
            type="range"
            min={0}
            max={audioRef.current?.duration || 0}
            value={value}
            step={0.01}
            onChange={handleSeek}
        />
    )
}

export default ProgressBar