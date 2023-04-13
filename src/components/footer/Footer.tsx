import type { Component } from "solid-js";
import facebookIcon from "../../assets/icons/facebook-icon.webp";
import instagramIcon from "../../assets/icons/instagram-icon.webp";
import linkedinIcon from "../../assets/icons/linkedin-icon.webp";
import twitterIcon from "../../assets/icons/twitter-icon.webp";
import styles from "./Footer.module.css";

const Footer: Component = () => {
    return (
        <footer class={styles.footer}>
            <div class={styles.container}>
                <div class={styles.carDealerInfos}>
                    <div class={styles.carDealerLocation}>
                        <p>GROUPE CHOPARD AUTOMOBILE</p>
                        <p>Le Trigone, 6 Rue Gérard Mantion</p>
                        <p>25000 Besançon</p>
                        <p>FRANCE</p>
                        <div class={styles.carDealerSocialMedia}>
                            <ul class={styles.socialMediaList}>
                                <li>
                                    <a href="https://fr-fr.facebook.com/groupe.chopard" class={styles.socialMediaIcon}>
                                        <img class={styles.iconImg} width={16} height={16} src={facebookIcon} alt="logo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/groupe-chopard/" class={styles.socialMediaIcon}>
                                        <img class={styles.iconImg} width={16} height={16} src={linkedinIcon} alt="logo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/groupe.chopard/" class={styles.socialMediaIcon}>
                                        <img class={styles.iconImg} width={16} height={16} src={instagramIcon} alt="logo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/chopardauto/?lang=fr" class={styles.socialMediaIcon}>
                                        <img class={styles.iconImg} width={16} height={16} src={twitterIcon} alt="logo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class={styles.carDealerPresentation}>
                        <p>Le groupe Chopard est un acteur incontournable de l’automobile en France et profite de ses plus de 60 ans d’expérience dans la distribution automobile pour vous offrir la meilleure expérience quels que soient vos demandes et vos besoins.</p>
                    </div>
                </div>
                <div class={styles.externalLinks}>
                    <a href="http://www.gforces.co.uk/">NetDirector®</a>
                    <span class={styles.separator}> - </span>
                    <a href="https://www.datacar-digital.com/"> Automotive Ecommerce intégré par Datafirst</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;