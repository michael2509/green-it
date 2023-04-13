import { useParams } from "@solidjs/router";
import { Component, createMemo, createSignal } from "solid-js";
import styles from "./Car.module.css";
import { Meta } from "@solidjs/meta";
import "solid-slider/slider.css";
import { Slider, SliderButton, SliderProvider } from "solid-slider";

const Car: Component = () => {
    const params = useParams();

    interface ICar {
        id: number;
        name: string;
        shortDescription: string;
        year: number;
        kilometer: number;
        price: number;
        isManual: boolean;
        isGasoil: boolean;
        images: Array<string>;
    }

    const cars = createMemo(() => [
        {
            id: 1,
            name: "Peugeot Partner Fourgon",
            shortDescription: "STANDARD 650 KG BLUEHDI 75 BVM5 PREMIUM",
            year: 2019,
            kilometer: 10671,
            price: 19990,
            isManual: true,
            isGasoil: true,
            images: ["berlingo1.avif", "berlingo2.avif", "berlingo3.avif"],
        },
        {
            id: 2,
            name: "Mercedes-Benz classe B",
            shortDescription: "180 D 7G-DCT STYLE LINE EDITION",
            year: 2020,
            kilometer: 61604,
            price: 25990,
            isManual: false,
            isGasoil: true,
            images: ["mercedes1.avif", "mercedes2.avif", "mercedes3.avif"],
        },
        {
            id: 3,
            name: "Audi A1 Sportback Business",
            shortDescription: "A1 SPORTBACK 1.4 TFSI 122 BUSINESS LINE",
            year: 2014,
            kilometer: 114088,
            price: 13990,
            isManual: false,
            isGasoil: false,
            images: ["audi1.avif", "audi2.avif", "audi3.avif"],
        },
    ]);

    /* 👇 Display the correct car with params */
    const [car] = createSignal(
        cars().find((car: ICar) => car.id === parseInt(params.id))
    );

    if (!car()) {
        return (
            <h1
                style={{
                    display: "flex",
                    "justify-content": "center",
                    height: "75vh",
                    "align-items": "center",
                    "margin-top": "-100px",
                }}
            >
                Aucun véhicule trouvé 🤷‍♂️
            </h1>
        );
    }

    return (
        <>
            <Meta name="description" content={car()?.shortDescription} />
            <section
                class={styles.carSection}
                style={{
                    // tricks for sticky footer
                    "min-height": "75vh",
                    "align-items": "center",
                }}
            >
                <SliderProvider>
                    <SliderButton prev>Previous</SliderButton>
                    <Slider options={{ loop: true }}>
                        <img
                            loading="lazy"
                            src={`/src/assets/cars/${car()?.images[0]}`}
                            alt={car()?.name}
                            class={styles.carImage}
                        />
                        <img
                            loading="lazy"
                            src={`/src/assets/cars/${car()?.images[1]}`}
                            alt={car()?.name}
                            class={styles.carImage}
                        />
                        <img
                            loading="lazy"
                            src={`/src/assets/cars/${car()?.images[2]}`}
                            alt={car()?.name}
                            class={styles.carImage}
                        />
                    </Slider>
                    <SliderButton next>Next</SliderButton>
                </SliderProvider>
                <article class={styles.carDetails}>
                    <h1>{car()?.name}</h1>

                    <p style={{ "font-size": "0.9em" }}>
                        {car()?.shortDescription}
                    </p>
                    <p>
                        {car()?.year} | {car()?.kilometer}km
                    </p>
                    <p class={styles.carPrice}>{car()?.price}€</p>
                </article>
            </section>
            <section class={styles.carBreadcrumbs}>
                <button class={styles.carBreadcrumbsButton}>
                    Plus d'infos
                </button>
                <button class={styles.carBreadcrumbsButton}>
                    Demande de devis
                </button>
            </section>
        </>
    );
};

export default Car;
