import { Component } from "solid-js";
import styles from "./Home.module.css";
import banner from "../../assets/images/home-banner.webp";
import Button from "../button/Button";
import PopularCars from "./popularCars/PopularCars";

const Home: Component = () => {

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <span class={styles.bannerTitle}>CONCESSIONNAIRE AUTOMOBILE</span>
        <span class={styles.bannerSubTitle1}>Offres de voitures neuves ou d'occasions</span>
        <span class={styles.bannerSubTitle2}>Rachat de vos véhicules</span>
        <span class={styles.bannerBtn}>
          <Button linkTo="/car/1">Voir une offre</Button>
        </span>
        <picture>
          <source class={styles.bannerImg} srcset={banner} media="(min-width: 800px)"></source>
          <source class={styles.bannerImg} srcset={banner} media="(min-width: 600px)"></source>
          <img class={styles.bannerImg} src={banner} alt="MDN" />
        </picture>
      </header>
      <PopularCars></PopularCars>
    </div>
  );
};

export default Home;