"use client"
import styles from "../../page.module.css";
import Filter from "@/components/Filter/Filter";
import TrackList from "@/components/TrackList/TrackList";
import {useAppSelector} from "@/hooks/hooks";


export default function FavoritePage() {
    const favoritePlaylist = useAppSelector((state)=> state.player.favoritePlaylist)

    return (<>
            <h2 className={styles.centerblockH2}>Избранные треки</h2>
            <Filter tracks={favoritePlaylist}/>
            <TrackList tracks={favoritePlaylist}/>
        </>

    );
}
