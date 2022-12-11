import { FC, PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header className={styles.header} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer className={styles.footer} />
        </div>
    )
}

export default Layout