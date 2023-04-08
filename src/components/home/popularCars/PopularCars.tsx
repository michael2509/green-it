import { Component } from "solid-js";
import styles from "./PopularCars.module.css";
import carOne from "../../../assets/images/popular-car-one.avif";
import Button from "../../button/Button";

interface PopularCar {
    id: number;
    name: string;
    option: string;
    price: string;
    circulation: string;
    km: string;
    fuel: string;
    transmission: string;
    imgPath: string;
}

const PopularCars: Component = () => {
    const popularCars: PopularCar[] = [
        {
            id: 1,
            name: "Citroën C5 Aircross",
            option: "bluehdi 180 s&amp;s eat8 Shine",
            price: "23 990 €",
            circulation: "05.2019",
            km: "88 115 km",
            fuel: "Diesel",
            transmission: "automatique",
            imgPath: carOne
        },
        {
            id: 2,
            name: "Citroën C5 Aircross",
            option: "bluehdi 180 s&amp;s eat8 Shine",
            price: "23 990 €",
            circulation: "05.2019",
            km: "88 115 km",
            fuel: "Diesel",
            transmission: "automatique",
            imgPath: carOne
        },
        {
            id: 3,
            name: "Citroën C5 Aircross",
            option: "bluehdi 180 s&amp;s eat8 Shine",
            price: "23 990 €",
            circulation: "05.2019",
            km: "88 115 km",
            fuel: "Diesel",
            transmission: "automatique",
            imgPath: carOne
        }
    ]

    return (
        <div class={styles.popularCarSection}>
            <h2 class={styles.popularCarTitle}>Les occasions les plus populaires</h2>
            <div class={styles.container}>
                {popularCars.map(car => (
                    <div class={styles.popularCar}>
                        <picture>
                            <img src={car.imgPath} alt={car.name} />
                        </picture>
                        <div class={styles.popularCarContent}>
                            <p class={styles.popularCarName}>{car.name}</p>
                            <span class={styles.popularCarOption}> {car.option}</span>
                            <p class={styles.price}>{car.price}</p>
                            <div class={styles.popularCarInfo}>
                                <span class={styles.label}>Mise en Circulation :</span>
                                <span class={styles.value}>{car.circulation}</span>
                            </div>
                            <div class={styles.popularCarInfo}>
                                <span class={styles.label}>Kilométrage :</span>
                                <span class={styles.value}>{car.km}</span>
                            </div>
                            <div class={styles.popularCarInfo}>
                                <span class={styles.label}>Type de carburant :</span>
                                <span class={styles.value}>{car.fuel}</span>
                            </div>
                            <div class={styles.popularCarInfo}>
                                <span class={styles.label}>Transmission :</span>
                                <span class={styles.value}>{car.transmission}</span>
                            </div>
                            <div class={styles.annonceBtn}>
                                <Button linkTo={`/car/${car.id}`} rounded>Voir l'annonce</Button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default PopularCars;