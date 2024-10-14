import { useEffect } from "react"
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {getFavoriteTrack} from "@/store/features/playlistSlice";


export function useInitFavoriteTracks() {
    const dispatch = useAppDispatch()
    const tokens   = useAppSelector((state) => state.user.tokens)

    useEffect(() => {
        if (tokens.access)
            dispatch(getFavoriteTrack(tokens))
    }, [tokens, dispatch])
}