import TrackPlay from "@/components/TrackPlay/TrackPlay";
import styles from "./Player.module.css";
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {setIsShuffle, setNextTrack, setPrevTrack} from "@/store/features/playlistSlice";

type PlayerProps = {
    handlePlay: () => void,
    handleLoop: () => void,
    isLoop: boolean
}

function Player({handlePlay, handleLoop, isLoop}: PlayerProps) {
    const {currentTrack, isPlaying, isShuffle} = useAppSelector((state) => state.playlist)
    const dispatch = useAppDispatch()
    if (!currentTrack) {
        return null
    }
    const {name, author} = currentTrack

    const handleClickPrev = () => {
        dispatch(setPrevTrack())
    }

    const handleClickNext = () => {
        dispatch(setNextTrack())
    }

    const handleClickShuffle = () => {
        dispatch(setIsShuffle(null))
    }

    return (
        <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
                <div className={styles.playerBtnPrev} onClick={handleClickPrev}>
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
                <div className={styles.playerBtnNext} onClick={handleClickNext}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                    </svg>
                </div>
                <div className={classNames(styles.playerBtnRepeat, {[styles.active]: isLoop})} onClick={handleLoop}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                </div>
                <div className={classNames(styles.playerBtnShuffle, {[styles.active]: isShuffle})} onClick={handleClickShuffle}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                </div>
            </div>
            <TrackPlay track={currentTrack} />
        </div>
    )

}

export default Player;