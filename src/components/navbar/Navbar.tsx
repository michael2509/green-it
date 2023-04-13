import { Component } from "solid-js";
import styles from "./Navbar.module.css";
import brandLogo from "../../assets/chopard-logo.avif";
import { A } from "@solidjs/router";

const Navbar: Component = () => {
  return (
    <nav class={styles.Navbar}>
      <A href="/">
        <img src={brandLogo} width="188" height="50" alt="Chopard Logo" />
      </A>
      <ul class={styles.NavbarList}>
        <li>
          <A href="/">Accueil</A>
        </li>
        <li>
          <A href="/car/1">Offre</A>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
