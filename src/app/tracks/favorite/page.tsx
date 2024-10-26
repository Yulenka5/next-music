"use client"
import styles from "../../page.module.css";
import Filter from "@/components/Filter/Filter";
import TrackList from "@/components/TrackList/TrackList";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {useEffect} from "react";
import {setVisiblePlaylist} from "@/store/features/playerSlice";


export default function FavoritePage() {
    const dispatch = useAppDispatch()
    const {visiblePlaylist, filteredPlaylist, favoritePlaylist} = useAppSelector((state)=> state.player)

    useEffect(() => {
                dispatch(setVisiblePlaylist(favoritePlaylist))
    }, [])

    return (<>
            <h2 className={styles.centerblockH2}>Избранные треки</h2>
            <Filter tracks={visiblePlaylist}/>
            <TrackList tracks={filteredPlaylist}/>
        </>

    );
}
