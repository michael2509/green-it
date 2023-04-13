import { Component } from "solid-js";
import styles from "./Brands.module.css";
import peugeotImg from "../../../assets/brands/desktop_logo_peugeot.webp";
import mercedesImg from "../../../assets/brands/desktop_logo_mercedes.webp";
import citroenImg from "../../../assets/brands/desktop_logo_citroen.webp";
import dsImg from "../../../assets/brands/desktop_logo_ds.webp";
import renaultImg from "../../../assets/brands/desktop_logo_renault.webp";
import opelImg from "../../../assets/brands/desktop_logo_opel.webp";

const Brands: Component = () => {
    const brands = [
        { name: "Peugeot", imgPath: peugeotImg },
        { name: "Mercedes-Benz", imgPath: mercedesImg },
        { name: "Citroën", imgPath: citroenImg },
        { name: "DS Automobiles", imgPath: dsImg },
        { name: "Renault", imgPath: renaultImg },
        { name: "Opel", imgPath: opelImg }
    ]

    return (
        <div class={styles.section}>
            <h2>NOS MARQUES DE VOITURES D'OCCASION LES PLUS POPULAIRES</h2>
            <div class={styles.gridContainer}>
                {brands.map(brand => (
                    <div class={styles.gridItem}>
                        <img src={brand.imgPath} width={179} height={119} alt={brand.name} />
                        <p class="caption">Voitures {brand.name}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Brands;