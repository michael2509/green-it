import type { Component } from "solid-js";
import facebookIcon from "../../assets/images/facebook-icon.webp";
import instagramIcon from "../../assets/images/instagram-icon.webp";
import linkedinIcon from "../../assets/images/linkedin-icon.webp";
import twitterIcon from "../../assets/images/twitter-icon.webp";
import "./Footer.css";

const Footer: Component = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="car-dealer-infos">
                    <div class="car-dealer-location">
                        <p>GROUPE CHOPARD AUTOMOBILE</p>
                        <p>Le Trigone, 6 Rue Gérard Mantion</p>
                        <p>25000 Besançon</p>
                        <p>FRANCE</p>
                        <div class="car-dealer-social-media">
                            <ul class="social-media-list">
                                <li>
                                    <a class="social-media-icon">
                                        <img class="icon-img" src={facebookIcon} alt="logo" />
                                    </a>
                                </li>
                                <li>
                                    <a class="social-media-icon">
                                        <img class="icon-img" src={linkedinIcon} alt="logo" />
                                    </a>
                                </li>
                                <li>
                                    <a class="social-media-icon">
                                        <img class="icon-img" src={instagramIcon} alt="logo" />
                                    </a>
                                </li>
                                <li>
                                    <a class="social-media-icon">
                                        <img class="icon-img" src={twitterIcon} alt="logo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="car-dealer-presentation">
                        <p>Le groupe Chopard est un acteur incontournable de l’automobile en France et profite de ses plus de 60 ans d’expérience dans la distribution automobile pour vous offrir la meilleure expérience quels que soient vos demandes et vos besoins.</p>
                    </div>
                </div>
                <div class="external-links">
                    <a href="https://www.chopard-automobile.com/">NetDirector®</a>
                    <span> - </span>
                    <a href="https://www.chopard-automobile.com/mentions-legales/"> Automotive Ecommerce intégré par Datafirst</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;