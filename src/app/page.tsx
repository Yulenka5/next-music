import Bar from "@/components/Bar/Bar";
import Main from "@/components/Main/Main";
import styles from "./page.module.css";

export default function Home() {
    return (<div className={styles.wrapper}>
            <div className={styles.container}>
                <Main />
                <Bar />
                <footer className={styles.footer}></footer>
            </div>
        </div>
    );
}
