"use client"
import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {TrackType} from "@/types/tracks";

type CurrentTrackContextValue = {
    currentTrack: TrackType | null,
    setCurrentTrack: Dispatch<SetStateAction<TrackType | null>>;
}
const CurrentTrackContext = createContext<CurrentTrackContextValue | null>(null)

type CurrentTrackProvider = {
    children: ReactNode
}

export function CurrentTrackProvider({children}: CurrentTrackProvider) {
    const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null)
    return <CurrentTrackContext.Provider
        value={{currentTrack, setCurrentTrack}}>{children}</CurrentTrackContext.Provider>
}

export function useCurrentTrack() {
    return useContext(CurrentTrackContext)
}