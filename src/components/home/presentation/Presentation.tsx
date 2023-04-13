import { Component, createSignal } from "solid-js";
import styles from "./Presentation.module.css";
import previewVideoImg from "../../../assets/video/video-preview-img.avif";

const Presentation: Component = () => {
    const [showVideo, setShowVideo] = createSignal(false);

    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <div class={styles.section}>
            <h2>UN RÉSEAU DE CONCESSIONS AUTOMOBILES DE TROYES À NICE</h2>
            <p>Le Groupe Chopard vous propose l'un des <strong>choix de véhicules d'occasion multimarques les plus importants en France</strong> : son réseau de concessionnaires tient actuellement <strong>3 449 occasions à votre disposition</strong>. Toutes les voitures d'occasion vendues par le groupe Chopard sont entièrement <strong>révisées et garanties entre 6 et 24 mois</strong>. Pour votre confort, demandez la <strong>reprise de votre voiture actuelle, réservez votre occasion en ligne et faites vous livrer</strong> à l'adresse qui vous convient !</p>
            <p>Profitez de <strong>tous les services d'un des principaux groupes automobiles en France</strong> : Vente de voitures, motos, scooters, véhicules utilitaires, poids lourds neufs et d'occasion essence, diesel et électriques, reprise, offres portant sur les véhicules neufs, accessoires et services, financement, service atelier et SAV, Pièces de rechange garanties d'origine...</p>

            {!showVideo() && (
                <div class={styles.videoContainer} onClick={handleClick}>
                    <img loading="lazy" width="560" height="315" src={previewVideoImg} alt="Prévisualisation de la vidéo" />
                </div>
            )}
            {showVideo() && (
                <div class={styles.videoContainer}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/X2P1Gbra3Oo?autoplay=1&mute=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default Presentation;
