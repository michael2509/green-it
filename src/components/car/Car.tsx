import { useParams } from "@solidjs/router";
import { Meta } from "@solidjs/meta";
import { Component, Suspense, createMemo, createSignal, lazy } from "solid-js";
import "solid-slider/slider.css";
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import styles from "./Car.module.css";
import arrow from "../../assets/svg/arrow.svg";
import CarDetails from "../carDetails/CarDetails";

interface ICar {
  id: number;
  name: string;
  shortDescription: string;
  year: number;
  kilometer: number;
  price: number;
  isManual: boolean;
  isGasoil: boolean;
  conso: number;
  images: Array<string>;
}

const Car: Component = () => {
  const params = useParams();
  const CarDevis = lazy(() => import("../carDevis/CarDevis"));

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
      conso: 6.4,
      images: ["berlingo1.webp", "berlingo2.webp", "berlingo3.webp"],
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
      conso: 5.8,
      images: ["mercedes1.webp", "mercedes2.webp", "mercedes3.webp"],
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
      conso: 7.2,
      images: ["audi1.webp", "audi2.webp", "audi3.webp"],
    },
  ]);

  /* 👇 Display the correct car with params */
  const [car] = createSignal(
    cars().find((car: ICar) => car.id === parseInt(params.id))
  );

  // Create a state "current section selected"
  const [currentSection, setCurrentSection] = createSignal("details");

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
          <SliderButton prev>
            <img
              src={arrow}
              alt="previous image"
              width="16px"
              height="16px"
              style={{ transform: "rotate(-90deg)" }}
              class={styles.buttonSlider}
            />
          </SliderButton>
          <Slider options={{ loop: true }}>
            <img
              loading="lazy"
              width="100%"
              height="100%"
              src={`/src/assets/cars/${car()?.images[0]}`}
              alt={car()?.name}
              class={styles.carImage}
            />
            <img
              loading="lazy"
              width="100%"
              height="100%"
              src={`/src/assets/cars/${car()?.images[1]}`}
              alt={car()?.name}
              class={styles.carImage}
            />
            <img
              loading="lazy"
              width="100%"
              height="100%"
              src={`/src/assets/cars/${car()?.images[2]}`}
              alt={car()?.name}
              class={styles.carImage}
            />
          </Slider>
          <SliderButton next>
            <img
              src={arrow}
              alt="next image"
              width="16px"
              height="16px"
              style={{ transform: "rotate(90deg)" }}
              class={styles.buttonSlider}
            />
          </SliderButton>
        </SliderProvider>
        <article class={styles.carDetails}>
          <h1>{car()?.name}</h1>

          <p style={{ "font-size": "0.9em" }}>{car()?.shortDescription}</p>
          <p>
            {car()?.year} | {car()?.kilometer}km
          </p>
          <p class={styles.carPrice}>{car()?.price}€</p>
        </article>
      </section>
      <section class={styles.carBreadcrumbs}>
        <button
          onClick={() => setCurrentSection("details")}
          class={
            currentSection() === "details"
              ? styles.carBreadcrumbsButtonSelected
              : styles.carBreadcrumbsButton
          }
        >
          Plus d'infos
        </button>
        <button
          onClick={() => setCurrentSection("devis")}
          class={
            currentSection() === "devis"
              ? styles.carBreadcrumbsButtonSelected
              : styles.carBreadcrumbsButton
          }
        >
          Demande de devis
        </button>
      </section>
      {currentSection() === "details" && <CarDetails car={car()} />}

      {currentSection() === "devis" && (
        <Suspense
          fallback={<span class={styles.spanLoading}>Chargement...</span>}
        >
          <CarDevis />
        </Suspense>
      )}
    </>
  );
};

export default Car;
