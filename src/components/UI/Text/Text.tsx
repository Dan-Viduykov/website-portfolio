import { FC, PropsWithChildren } from "react";
import styles from "./Text.module.scss";

const enum TextTypes {
    'text_white',
    'text_orange',
    'base',
    'skills',
    'button',
    'icon',
}

interface TextProps {
    textStyle?: keyof typeof TextTypes;
    className?: string;
}

const Text: FC<PropsWithChildren<TextProps>> = (props) => {
    const { children, textStyle, className } = props;

    return (
        <p className={`
            ${styles.text} 
            ${textStyle ? styles[textStyle] : null}
            ${className}
        `}>
            {children}
        </p>
    )
}

export default Text