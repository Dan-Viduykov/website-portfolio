import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";

interface containerProps {
    className?: string;
}

const Container: FC<PropsWithChildren<containerProps>> = ({ children, className }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            {children}
        </div>
    )
}

export default Container