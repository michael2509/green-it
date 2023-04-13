import { Component } from "solid-js";
import styles from "./PopularCars.module.css";
import berlingoImg from "../../../assets/popular_cars/berlingo.avif";
import mercoImg from "../../../assets/popular_cars/mercedes.avif";
import audiImg from "../../../assets/popular_cars/audi.avif";;
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
            name: "Peugeot Partner Fourgon",
            option: "STANDARD 650 KG BLUEHDI 75 BVM5 PREMIUM",
            price: "19 990 €",
            circulation: "2019",
            km: "10 671 km",
            fuel: "Diesel",
            transmission: "Manuelle",
            imgPath: berlingoImg
        },
        {
            id: 2,
            name: "Mercedes-Benz classe B",
            option: "180 D 7G-DCT STYLE LINE EDITION",
            price: "25 990 €",
            circulation: "2020",
            km: "61 604 km",
            fuel: "Diesel",
            transmission: "Automatique",
            imgPath: mercoImg
        },
        {
            id: 3,
            name: "Audi A1 Sportback Business",
            option: "A1 SPORTBACK 1.4 TFSI 122 BUSINESS LINE",
            price: "13 990 €",
            circulation: "2014",
            km: "114 088 km",
            fuel: "Essence",
            transmission: "Automatique",
            imgPath: audiImg
        }
    ]

    return (
        <div class={styles.popularCarSection}>
            <h2 class={styles.popularCarTitle}>Les occasions les plus populaires</h2>
            <div class={styles.container}>
                {popularCars.map(car => (
                    <div class={styles.popularCar}>
                        <picture>
                            <img src={car.imgPath} width={400} height={300} alt={car.name} />
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