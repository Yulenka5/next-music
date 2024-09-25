import Bar from "@/components/Bar/Bar";
import Main from "@/components/Main/Main";
import styles from "./page.module.css";
import {CurrentTrackProvider} from "@/contexts/CurrentTrackProvider";

export default function Home() {
    return (<div className={styles.wrapper}>
            <div className={styles.container}>
                <CurrentTrackProvider>
                    <Main/>
                    <Bar/>
                </CurrentTrackProvider>
                <footer className={styles.footer}></footer>
            </div>
        </div>
    );
}
