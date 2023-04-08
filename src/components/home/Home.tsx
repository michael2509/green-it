import { Component } from "solid-js";
import styles from "./Home.module.css";
import PopularCars from "./popularCars/PopularCars";
import Banner from "./banner/Banner";
import Presentation from "./presentation/Presentation";

const Home: Component = () => {

  return (
    <div class={styles.App}>
      <Banner></Banner>
      <Presentation></Presentation>
      <PopularCars></PopularCars>
    </div>
  );
};

export default Home;