import { FC } from "react";
import TextField from "@/UI/Text";
import styles from "./Navigation.module.scss";

interface NavigationProps {
    className?: string;
    mode?: 'row' | 'column';
}

const Navigation: FC<NavigationProps> = ({ className, mode = 'row' }) => {
    return (
        <nav className={`
            ${styles.navigation}
            ${className}
            ${mode === 'column' ? styles.navigation_column : null}
        `}>
            <a className={styles.link} href="/"><TextField>Главная</TextField></a>
            <a className={styles.link} href="/"><TextField>Обо мне</TextField></a>
            <a className={styles.link} href="/"><TextField>Портфолио</TextField></a>
            <a className={styles.link} href="/"><TextField>Контакты</TextField></a>
        </nav>
    )
}

export default Navigation