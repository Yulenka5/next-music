import {TrackType} from "@/types/tracks";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {dislikeTrack, likeTrack} from "@/api/track";
import {setDislikeTrack, setLikeTrack} from "@/store/features/playlistSlice";

export const useLikeTrack = (track: TrackType) => {
    const tokens = useAppSelector((state) => state.user.tokens);
    const trackId = track._id;
    const dispatch = useAppDispatch();
    const likedTracks = useAppSelector((state) => state.playlist.favoritePlaylist);
    const isLiked = (tokens.access && tokens.refresh) && !!likedTracks.find(
        (track: TrackType) => track._id === trackId
    )

    const handleLike = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!tokens.access || !tokens.refresh) return alert("Вы не авторизованы");

        const action = isLiked ? dislikeTrack : likeTrack;

        try {
            await action({ trackId, access: tokens.access, refresh: tokens.refresh });
            if (isLiked) {
                dispatch(setDislikeTrack(track));
            } else {
                dispatch(setLikeTrack(track));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return { handleLike, isLiked };
}