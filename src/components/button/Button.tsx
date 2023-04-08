import type { Component } from "solid-js";
import styles from "./Button.module.css";

const Button: Component = (props: any) => {
    const button = (
        <button class={`${styles.primaryBtn} ${props.rounded ? styles.rounded : ''}`}>
            {props.children}
        </button>
    );

    const buttonOrLink = props.linkTo ? <a href={props.linkTo}>{button}</a> : button;

    return buttonOrLink;
};

export default Button;