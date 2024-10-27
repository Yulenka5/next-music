"use client"
import styles from "./Volume.module.css";
import classNames from "classnames";
import shared from "@/components/SharedButtons/SharedButtons.module.css";
import React, {ChangeEvent, RefObject, useEffect, useState} from "react";

type VolumeProps = {
    audioRef: RefObject<HTMLAudioElement>
}

function Volume({audioRef}: VolumeProps) {
    const [volume, setVolume] = useState(0.5)

    useEffect(() => {
        if (audioRef.current)
            audioRef.current.volume = volume
    }, [volume, audioRef])

    const handleClickVolume = (e: ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value))
    }
    return (
        <div className={styles.barVolume}>
            <div className={styles.volumeContent}>
                <div className={styles.volumeImage}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                </div>
                <div className={classNames(styles.volumeProgress, shared.btn)}>
                    <input
                        className={classNames(styles.volumeProgressLine, shared.btn)}
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={handleClickVolume}
                    />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Volume);
