import Menu from "@/components/Menu/Menu";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import TrackList from "@/components/TrackList/TrackList";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./Main.module.css";

function Main () {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.mainCenterblock}>
                <Search />
                <h2 className={styles.centerblockH2}>Треки</h2>
                <Filter />
                <TrackList />
            </div>
            <Sidebar/>
        </main>
    )
}

export default Main;