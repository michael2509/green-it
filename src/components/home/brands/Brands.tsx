import { Component } from "solid-js";
import styles from "./Brands.module.css";

const Brands: Component = () => {
    const brands = [
        { name: "Peugeot", imgPath: "/src/assets/brands/desktop_logo_peugeot.webp" },
        { name: "Mercedes-Benz", imgPath: "/src/assets/brands/desktop_logo_mercedes.webp" },
        { name: "Citroën", imgPath: "/src/assets/brands/desktop_logo_citroen.webp" },
        { name: "DS Automobiles", imgPath: "/src/assets/brands/desktop_logo_ds.webp" },
        { name: "Renault", imgPath: "/src/assets/brands/desktop_logo_renault.webp" },
        { name: "Opel", imgPath: "/src/assets/brands/desktop_logo_opel.webp" },
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