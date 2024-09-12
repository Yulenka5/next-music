import styles from "./Track.module.css";

function Track () {
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
                            <a className={styles.trackTitleLink} href="http://"
                            >Guilt <span></span
                            ></a>
                        </div>
                    </div>
                    <div className={styles.trackAuthor}>
                        <a className={styles.trackAuthorLink} href="http://">Nero</a>
                    </div>
                    <div className={styles.trackAlbum}>
                        <a className={styles.trackAlbumLink} href="http://"
                        >Welcome Reality</a
                        >
                    </div>
                    <div className={styles.trackTime}>
                        <svg>
                            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                        </svg>
                        <span className={styles.trackTimeText}>4:44</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export  default Track;