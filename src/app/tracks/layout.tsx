import Bar from "@/components/Bar/Bar";
import styles from "../page.module.css";
import {CurrentTrackProvider} from "@/contexts/CurrentTrackProvider";
import Menu from "@/components/Menu/Menu";
import Search from "@/components/Search/Search";
import Sidebar from "@/components/Sidebar/Sidebar";
import {TrackType} from "@/types/tracks";
import {getTracks} from "@/api/track";


export default async function Home({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>)  {
    let tracks: TrackType[] = []
    let error = ""
    try {
        tracks = await getTracks()
    } catch (err: unknown) {
        error = err instanceof Error ? "ошибка при загрузке треков" + err.message : "неизвестаная ошибка"
    }

    return (<div className={styles.wrapper}>
            <div className={styles.container}>
                <CurrentTrackProvider>
                    <main className={styles.main}>
                        <Menu/>
                        <div className={styles.mainCenterblock}>
                            <Search/>
                            {children}
                        </div>
                        <Sidebar/>
                    </main>
                    <Bar />
                </CurrentTrackProvider>
                <footer className={styles.footer}></footer>
            </div>
        </div>
    );
}
