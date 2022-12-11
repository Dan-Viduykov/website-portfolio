import { FC } from "react";
import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import styles from "./Header.module.scss";

interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`${styles.header} ${className}`}>
            <Container className={styles.container}>
                <a href={'/'} className={styles.logo}>
                    <p className={styles.logoText}>Viduykov</p>
                </a>
                <Navigation className={styles.navigation} /> 
            </Container>
        </header>
    )
}

export default Header