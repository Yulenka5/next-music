import {TrackType} from "@/types/tracks";
import {getTracks} from "@/api/track";
import PageContent from "@/components/PageContent/PageContent";


export default async function HomePage() {
    let tracks: TrackType[] = []
    let error = ""
    try {
        tracks = await getTracks()
    } catch (err: unknown) {
        error = err instanceof Error ? "ошибка при загрузке треков" + err.message : "неизвестаная ошибка"
    }

    return (<PageContent tracks={tracks} title={"Треки"} />)
}
