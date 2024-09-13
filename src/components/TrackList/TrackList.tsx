import Track from "@/components/Track/Track";
import styles from "./TrackList.module.css";
import classNames from "classnames";

function TrackList () {
    return (
        <div className={styles.centerblockContent}>
            <div className={styles.contentTitle}>
                <div className={classNames(styles.playlistCol, styles.col01)}>Трек</div>
                <div className={classNames(styles.playlistCol, styles.col02)}>Исполнитель</div>
                <div className={classNames(styles.playlistCol, styles.col03)}>Альбом</div>
                <div className={classNames(styles.playlistCol, styles.col04)}>
                    <svg>
                        <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                    </svg>
                </div>
            </div>
            <Track />
     </div>
    )
}

export default TrackList;