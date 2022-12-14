import { FC, PropsWithChildren, ButtonHTMLAttributes, forwardRef, Ref } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = forwardRef((props, ref: Ref<HTMLButtonElement>) => {
    const { className, children, ...otherProps } = props;
    
    return (
        <button
            className={`${styles.button} ${className}`}
            ref={ref}
            {...otherProps}
        >
            {children}
        </button>
    )
})

export default Button