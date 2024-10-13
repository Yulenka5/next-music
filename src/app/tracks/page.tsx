import styles from "../page.module.css";
import Filter from "@/components/Filter/Filter";
import TrackList from "@/components/TrackList/TrackList";
import {TrackType} from "@/types/tracks";
import {getTracks} from "@/api/track";


export default async function HomePage() {
    let tracks: TrackType[] = []
    let error = ""
    try {
        tracks = await getTracks()
    } catch (err: unknown) {
        error = err instanceof Error ? "ошибка при загрузке треков" + err.message : "неизвестаная ошибка"
    }

    return (<>
            <h2 className={styles.centerblockH2}>Треки</h2>
            <Filter tracks={tracks}/>
            <TrackList tracks={tracks}/>
        </>

    );
}
