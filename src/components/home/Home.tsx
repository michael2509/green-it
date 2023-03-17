import type { Component } from "solid-js";
import styles from "./Home.module.css";
import banner from "../../assets/images/home-banner.webp";

const Home: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        {/* <span class={styles.bannerTitle}>Concessionnaire Automobile</span> */}
        <picture>
          <source srcset={banner} media="(min-width: 800px)"></source>
          <source srcset={banner} media="(min-width: 600px)"></source>
          <img src={banner} alt="MDN" />
        </picture>
      </header>
    </div>
  );
};

export default Home;