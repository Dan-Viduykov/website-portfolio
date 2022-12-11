import { FC, PropsWithChildren } from "react";
import styles from "./TextField.module.scss";

const enum TextTypes {
    'text_white',
    'text_orange',
    'base',
    'skills',
    'button',
    'icon',
}

interface TextFieldProps {
    textStyle?: keyof typeof TextTypes;
    className?: string;
}

const TextField: FC<PropsWithChildren<TextFieldProps>> = (props) => {
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

export default TextField