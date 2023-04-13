import { Component, createSignal } from "solid-js";
import styles from "./Banner.module.css";
import banner from "../../../assets/home_banner/home-banner-desktop.webp";
import bannerMobile from "../../../assets/home_banner/home-banner-mobile.avif";
import Button from "../../button/Button";

const Banner: Component = () => {
    const [isSmallScreen, setIsSmallScreen] = createSignal(window.innerWidth <= 480);
    const [isMediumScreen, setIsMediumScreen] = createSignal(window.innerWidth <= 768);

    window.addEventListener("resize", () => {
        setIsSmallScreen(window.innerWidth <= 480);
        setIsMediumScreen(window.innerWidth <= 768);
    });

    return (
        <header class={styles.header}>
            <h1 class={styles.bannerTitle}>CONCESSIONNAIRE AUTOMOBILE</h1>
            {!isSmallScreen() && (
                <>
                    <span class={styles.bannerSubTitle1}>Offres de voitures neuves ou d'occasions</span>
                    <span class={styles.bannerSubTitle2}>Rachat de vos véhicules</span>
                </>
            )}
            <span class={styles.bannerBtn}>
                <Button linkTo="/car/1" small={isMediumScreen()}>Voir une offre</Button>
            </span>
            <picture>
                <source class={styles.bannerImg} srcset={bannerMobile} media="(max-width: 768px)"></source>
                <img class={styles.bannerImg} width='1536' height='439' src={banner} alt="MDN" />
            </picture>
        </header>
    );
};

export default Banner;