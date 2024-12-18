import {UserType} from "@/types/user";

export type TrackType = {
    _id: number
    name: string
    author: string
    release_date: string
    genre: string[]
    duration_in_seconds: number
    album: string
    logo: string | null
    track_file: string
    stared_user: UserType[]
}

export type PlaylistType = TrackType[]

export enum FilterKind {
    artist = "исполнителю",
    year   = "году выпуска",
    genre  = "жанру"
}

export type CategoryType = {
    name: string
    items: number[]
}