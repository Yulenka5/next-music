import TrackPlay from "@/components/TrackPlay/TrackPlay";
import styles from "./Player.module.css";
import {useCurrentTrack} from "@/contexts/CurrentTrackProvider";
import classNames from "classnames";

type PlayerProps = {
    handlePlay: () => void,
    handleLoop: () => void,
    isPlaying: boolean,
    isLoop: boolean
}

function Player({handlePlay, handleLoop, isPlaying, isLoop}: PlayerProps) {
    const {currentTrack} = useCurrentTrack()
    if (!currentTrack) {
        return null
    }
    const {name, author} = currentTrack

    return (
        <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
                <div className={styles.playerBtnPrev}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                </div>
                <div className={styles.playerBtnPlay} onClick={handlePlay}>
                    {isPlaying ?
                        (<svg>
                            <use xlinkHref="/img/icon/sprite.svg#icon-pause"></use>
                        </svg>) :
                        (<svg>
                            <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                        </svg>)}
                </div>
                <div className={styles.playerBtnNext}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                    </svg>
                </div>
                <div className={classNames(styles.playerBtnRepeat, {[styles.active]: isLoop})} onClick={handleLoop}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                </div>
                <div className={styles.playerBtnShuffle}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                </div>
            </div>
            <TrackPlay name={name} author={author}/>
        </div>
    )

}

export default Player;