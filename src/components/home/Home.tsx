import { Component } from "solid-js";
import styles from "./Home.module.css";
import PopularCars from "./popularCars/PopularCars";
import Banner from "./banner/Banner";
import Presentation from "./presentation/Presentation";
import Brands from "./brands/Brands";
import { Meta } from "@solidjs/meta";

const Home: Component = () => {

  return (
    <>
      <Meta name="description" content="Groupe Chopard Automobile, le spécialiste de l'automobile en Franche-Comté. Découvrez nos offres de véhicules neufs et d'occasions, nos services et nos marques." />
      <div class={styles.App}>
        <Banner></Banner>
        <Presentation></Presentation>
        <PopularCars></PopularCars>
        <Brands></Brands>
      </div>
    </>
  );
};

export default Home;