import styles from "./TimeBlock.module.css"
import {timeFormat} from "@/utils/helpers";

type TimeProps = {
    currentTime: number,
    duration: number
}

function TimeBlock ({currentTime, duration}: TimeProps) {
    const allTimeBar = timeFormat(duration)
    const currentTimeBar = timeFormat(currentTime)

    return (
        <div className={styles.timeBlock}>{`${currentTimeBar} / ${allTimeBar}`}</div>
    )
}

export default TimeBlock;