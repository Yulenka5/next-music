"use client"
import styles from "../../app/page.module.css"
import Filter from "@/components/Filter/Filter";
import TrackList from "@/components/TrackList/TrackList";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {useEffect} from "react";
import {setInitialPlaylist, setVisiblePlaylist} from "@/store/features/playerSlice";
import {TrackType} from "@/types/tracks";

type Props = {
    tracks: TrackType[]
    title: string
}

export default function PageContent({tracks, title}: Props) {
    const dispatch = useAppDispatch()
    const {visiblePlaylist, filteredPlaylist} = useAppSelector((state) => state.player)

    useEffect(() => {
        dispatch(setInitialPlaylist(tracks))
        dispatch(setVisiblePlaylist(tracks))
    }, [])

    return (<>
            <h2 className={styles.centerblockH2}>{title}</h2>
            <Filter tracks={visiblePlaylist}/>
            <TrackList tracks={filteredPlaylist}/>
        </>

    );
}
