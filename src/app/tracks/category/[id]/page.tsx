"use client"
import styles from "../../../page.module.css";
import Filter from "@/components/Filter/Filter";
import TrackList from "@/components/TrackList/TrackList";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {useEffect} from "react";
import {getCategoryTracks, getTracks} from "@/api/track";
import {setInitialPlaylist, setPlaylistName, setVisiblePlaylist} from "@/store/features/playerSlice";

type CategoryProps = {
    params: {
        id: string
    }
}

export default function CategoryPage({params}: CategoryProps) {
    const dispatch = useAppDispatch()
    const {visiblePlaylist, playlistName} = useAppSelector((state) => state.player)

    useEffect(() => {
        Promise.all([
            getCategoryTracks(params.id),
            getTracks(),
        ])
            .then(([categoryData, tracksData]) => {
                const tracks = tracksData.filter((track)=> categoryData.items.includes(track._id))
                dispatch(setPlaylistName(categoryData.name))
                dispatch(setInitialPlaylist(tracksData))
                dispatch(setVisiblePlaylist(tracks))
            })
            .catch((error) => {
                console.error(error)
            })
    })

    return (<>
            <h2 className={styles.centerblockH2}>{playlistName}</h2>
            <Filter tracks={visiblePlaylist}/>
            <TrackList tracks={visiblePlaylist}/>
        </>

    );
}
