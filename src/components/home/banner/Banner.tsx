import { Component, createSignal } from "solid-js";
import styles from "./Banner.module.css";
import banner from "../../../assets/images/home-banner-desktop.webp";
import bannerMobile from "../../../assets/images/home-banner-mobile.png";
import Button from "../../button/Button";

const Banner: Component = () => {
    const [isSmallScreen, setIsSmallScreen] = createSignal(window.innerWidth <= 860);

    window.addEventListener("resize", () => {
        setIsSmallScreen(window.innerWidth <= 860);
    });

    return (
        <header class={styles.header}>
            <span class={styles.bannerTitle}>CONCESSIONNAIRE AUTOMOBILE</span>
            <span class={styles.bannerSubTitle1}>Offres de voitures neuves ou d'occasions</span>
            <span class={styles.bannerSubTitle2}>Rachat de vos véhicules</span>
            <span class={styles.bannerBtn}>
                <Button linkTo="/car/1" small={isSmallScreen()}>Voir une offre</Button>
            </span>
            <picture>
                <source class={styles.bannerImg} srcset={bannerMobile} media="(max-width: 860px)"></source>
                <img class={styles.bannerImg} src={banner} alt="MDN" />
            </picture>
        </header>
    );
};

export default Banner;