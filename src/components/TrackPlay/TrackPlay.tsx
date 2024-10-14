import styles from "./TrackPlay.module.css";
import shared from "@/components/SharedButtons/SharedButtons.module.css";
import classNames from "classnames"
import {useLikeTrack} from "@/hooks/useLikeTracks";
import {TrackType} from "@/types/tracks";

type TrackPlayProps = {
    track: TrackType,
}

function TrackPlay ({track}: TrackPlayProps) {
    const {isLiked, handleLike} = useLikeTrack(track)

    return (
        <div className={styles.playerTrackPlay}>
            <div className={styles.trackPlayContain}>
                <div className={styles.trackPlayImage}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                    </svg>
                </div>
                <div className={styles.trackPlayAuthor}>
                    <a className={styles.trackPlayAuthorLink} href="http://"
                    >{track.name}</a
                    >
                </div>
                <div className={styles.trackPlayAlbum}>
                    <a className={styles.trackPlayAlbumLink} href="http://">{track.author}</a>
                </div>
            </div>

            <div className={styles.trackLikeConteiner}>
                <div className={classNames(styles.trackLike, shared.btnIcon, {[styles.active] : isLiked})} onClick={handleLike}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default TrackPlay;