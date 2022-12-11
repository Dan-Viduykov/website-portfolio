import { FC } from "react";
import Container from "@/components/Container";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <div className={styles.main}>
            <Container className={styles.container}>
                Home
            </Container>
        </div>
    )
}

export default Home