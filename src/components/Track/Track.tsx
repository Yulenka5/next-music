import styles from "./Track.module.css";
import { TrackType } from "@/types/tracks";
import {timeFormat} from "@/utils/helpers";
import {useCurrentTrack} from "@/contexts/CurrentTrackProvider";

type TrackProps = {
    track: TrackType
}

function Track ({track}: TrackProps) {
    const {name, author, album, duration_in_seconds} = track
    const time = timeFormat(duration_in_seconds)

    const {setCurrentTrack} = useCurrentTrack()
    const handleTrackClick = ()=> {
        setCurrentTrack
    }

    return (
        <div className={styles.contentPlaylist}>
            <div className={styles.playlistItem}>
                <div className={styles.playlistTrack}>
                    <div className={styles.trackTitle}>
                        <div className={styles.trackTitleImage}>
                            <svg>
                                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                            </svg>
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
                    <div className={styles.trackTime}>
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