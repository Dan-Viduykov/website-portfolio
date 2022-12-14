import { FC } from "react";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Button from "@/UI/Button";
import animeMe from "@/assets/img/anime-me2.png";
import styles from "./Home.module.scss";
import LayoutSection from "@/components/LayoutSection";

const Home: FC = () => {
    return (
        <Layout>
            <LayoutSection className={styles.firstScreen}>
                <div className={styles.info}>
                    <p className={styles.text}>ПРИВЕТ</p>
                    <h1 className={styles.fullname}>я ДАНИЛ ВИДЮКОВ</h1>
                    <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero!</p>
                    <Button className={styles.button}>Связаться со мной</Button>
                </div>
                <div className={styles.imageBlock}>
                    <img className={styles.img} src={animeMe} alt="danil" />
                    <div className={styles.circle}/>
                </div>
            </LayoutSection>
            <section className={styles.technologes}>
                <Container>
                    <ul className={styles.list}>
                        <li className={styles.item}></li>
                    </ul>
                </Container>
            </section>
        </Layout>
    )
}

export default Home