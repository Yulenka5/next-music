import Menu from "@/components/Menu/Menu";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import TrackList from "@/components/TrackList/TrackList";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./Main.module.css";
import {getTracks} from "@/api/track";
import {TrackType} from "@/types/tracks";

async function Main() {
    let tracks: TrackType[] = []
    let error = ""
    try {
        tracks = await getTracks()
    } catch (err: unknown) {
        error = err instanceof Error ? "ошибка при загрузке треков" + err.message : "неизвестаная ошибка"
    }

    return (
        <main className={styles.main}>
            <Menu/>
            <div className={styles.mainCenterblock}>
                <Search/>
                <h2 className={styles.centerblockH2}>Треки</h2>
                <Filter tracks={tracks}/>
                <TrackList tracks={tracks}/>
            </div>
            <Sidebar/>
        </main>
    )
}

export default Main;