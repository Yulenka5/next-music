import TrackPlay from "@/components/TrackPlay/TrackPlay";
import styles from "./Player.module.css";

function Player () {
    return (
        <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
                <div className={styles.playerBtnPrev}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                </div>
                <div className={styles.playerBtnPlay}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                    </svg>
                </div>
                <div className={styles.playerBtnNext}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                    </svg>
                </div>
                <div className={styles.playerBtnRepeat}>
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
            <TrackPlay />
        </div>
    )

}

export default Player;