import styles from "./Volume.module.css";
import classNames from "classnames";
import shared from "@/components/SharedButtons/SharedButtons.module.css";

function Volume () {
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
                        name="range"
                    />
                </div>
            </div>
        </div>
    )
}

export default Volume;
