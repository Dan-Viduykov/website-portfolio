import { FC, PropsWithChildren } from "react";
import Container from "@/components/Container";
import styles from "./LayoutSection.module.scss";

interface LayoutSectionProps {
    classNameSection?: string;
    className?: string;
}

const LayoutSection: FC<PropsWithChildren<LayoutSectionProps>> = ({ children, classNameSection, className }) => {
    return (
        <section className={classNameSection}>
            <Container className={className}>
                {children}
            </Container>
        </section>
    )
}

export default LayoutSection