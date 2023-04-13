import { Component } from "solid-js";
import styles from "./Navbar.module.css";
import brandLogo from "../../assets/chopard-logo.avif";

const Navbar: Component = () => {
  return (
    <nav class={styles.Navbar}>
      <a href="/">
        <img src={brandLogo} width="188" height="50" alt="Chopard Logo" />
      </a>
      <ul class={styles.NavbarList}>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/about">Nous découvrir</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
