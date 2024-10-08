import styles from "./TrackPlay.module.css";
import shared from "@/components/SharedButtons/SharedButtons.module.css";
import classNames from "classnames"

type TrackPlayProps = {
    name: string,
    author: string
}
function TrackPlay ({name, author}: TrackPlayProps) {
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
                    >{name}</a
                    >
                </div>
                <div className={styles.trackPlayAlbum}>
                    <a className={styles.trackPlayAlbumLink} href="http://">{author}</a>
                </div>
            </div>

            <div className={styles.trackLikeConteiner}>
                <div className={classNames(styles.trackLike, shared.btnIcon)}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                </div>
                <div className={classNames(styles.trackDislike, shared.btnIcon)}>
                    <svg>
                        <use
                            xlinkHref="/img/icon/sprite.svg#icon-dislike"
                        ></use>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default TrackPlay;