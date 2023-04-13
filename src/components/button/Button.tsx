import type { Component } from "solid-js";
import styles from "./Button.module.css";
import { A } from "@solidjs/router";

interface ButtonProps {
    linkTo?: string;
    rounded?: boolean;
    small?: boolean;
    children: string;
}

const Button: Component<ButtonProps> = (props: ButtonProps) => {
    const button = (
        <button class={`${styles.primaryBtn} ${props.rounded ? styles.rounded : ''} ${props.small ? styles.small : ''}`}>
            {props.children}
        </button>
    );

    const buttonOrLink = props.linkTo ? <A href={props.linkTo}>{button}</A> : button;

    return buttonOrLink;
};

export default Button;