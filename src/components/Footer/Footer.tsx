import { FC } from "react";
import Container from "@/components/Container";
import styles from "./Footer.module.scss";

interface FooterProps {
    className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <footer className={`${styles.footer} ${className}`}>
            <Container className={styles.container}>
                Footer
            </Container>
        </footer>
    )
}

export default Footer