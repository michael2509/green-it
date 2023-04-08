import type { Component } from "solid-js";
import styles from "./Button.module.css";

const Button: Component = (props: any) => {
    return (
        <button class={styles.primaryBtn}>{props.children}</button>
    );
};

export default Button;