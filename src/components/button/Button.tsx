import type { Component } from "solid-js";
import styles from "./Button.module.css";

interface ButtonProps {
    linkTo?: string;
    rounded?: boolean;
    children: string;
}

const Button: Component<ButtonProps> = (props: ButtonProps) => {
    const button = (
        <button class={`${styles.primaryBtn} ${props.rounded ? styles.rounded : ''}`}>
            {props.children}
        </button>
    );

    const buttonOrLink = props.linkTo ? <a href={props.linkTo}>{button}</a> : button;

    return buttonOrLink;
};

export default Button;