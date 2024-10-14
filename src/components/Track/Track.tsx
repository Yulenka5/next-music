import styles from "./Track.module.css";
import classNames from "classnames";
import { TrackType } from "@/types/tracks";
import {timeFormat} from "@/utils/helpers";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {setCurrentTrack} from "@/store/features/playlistSlice";
import {useLikeTrack} from "@/hooks/useLikeTracks";

type TrackProps = {
    track: TrackType,
    tracks: TrackType[]
}

function Track ({track, tracks}: TrackProps) {
    const {currentTrack, isPlaying} = useAppSelector((state) => state.playlist)
    const {isLiked, handleLike} = useLikeTrack(track)
    const dispatch = useAppDispatch()
    const {_id, name, author, album, duration_in_seconds} = track
    const time = timeFormat(duration_in_seconds)
    const isCurrent = currentTrack ? currentTrack._id === _id : false

    const handleTrackClick = ()=> {
        dispatch(setCurrentTrack({track, tracks}))
    }

    return (
        <div className={styles.contentPlaylist}>
            <div className={styles.playlistItem} onClick={handleTrackClick}>
                <div className={styles.playlistTrack}>
                    <div className={styles.trackTitle}>
                        <div className={styles.trackTitleImage}>
                            {isCurrent ? <div className={classNames(styles.playingDot, {[styles.active]: isPlaying} )}/> : (<svg>
                                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                            </svg>)}
                        </div>
                        <div className={styles.trackTitleText}>
                            <span className={styles.trackTitleLink}
                            >{name}<span></span
                            ></span>
                        </div>
                    </div>
                    <div className={styles.trackAuthor}>
                        <span className={styles.trackAuthorLink}>{author}</span>
                    </div>
                    <div className={styles.trackAlbum}>
                        <span className={styles.trackAlbumLink}
                        >{album}</span
                        >
                    </div>
                    <div className={classNames(styles.trackTime, {[styles.active] : isLiked})} onClick={handleLike}>
                        <svg>
                            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                        </svg>
                        <span className={styles.trackTimeText}>{time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default Track;