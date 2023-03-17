import { useParams } from "@solidjs/router";
import { Component, createMemo, createSignal } from "solid-js";

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
      kilometer: 10000,
      price: 30000,
      isManual: true,
      isGasoil: true,
      images: [
        "berlingo1.avif",
        "berlingo2.avif",
        "berlingo3.avif",
        "berlingo4.avif",
      ],
    },
    {
      id: 2,
      name: "Mercedes",
      shortDescription: "Mercedes C200",
      year: 2019,
      kilometer: 10000,
      price: 30000,
      isManual: true,
      isGasoil: true,
      images: [
        "https://www.mercedes-benz.com/en/vehicles/passenger-cars/c-class/saloon/_jcr_content/root/slider/slidercontainer/slides/slide_0/images.MQ6.12.20190604105520.jpeg",
      ],
    },
    {
      id: 3,
      name: "Audi",
      shortDescription: "Audi A4",
      year: 2019,
      kilometer: 10000,
      price: 30000,
      isManual: true,
      isGasoil: true,
      images: [
        "https://www.audi.com/content/dam/nemo-international/audi_com/en/audi-com/audi-models/a4-sedan/2019/audi-a4-sedan-2019-model-overview-01.jpg/_jcr_content/renditions/cq5dam.resized.img.585.low.time1567642880000.jpg",
      ],
    },
  ]);

  /* 👇 Display the correct car with params */
  const [car] = createSignal(
    cars().find((car: ICar) => car.id === parseInt(params.id))
  );

  if (!car()) {
    return <h1>Car not found</h1>;
  }

  return (
    <div style={{ background: "white" }}>
      <section
        style={{
          padding: "0 10px",
          display: "flex",
          "justify-content": "center",
        }}
      >
        {/* TODO 🛠️: Use a optimized carousel to display all images WITH LAZY LOADING!! */}
        <img
          src={`/src/assets/cars/${car()?.images[0]}`}
          alt={car()?.name}
          style={{ "max-width": "60%", "object-fit": "cover" }}
        />
        <article
          style={{
            "max-width": "30%",
            padding: "16px",
            "margin-left": "16px",
            display: "flex",
            "flex-direction": "column",
            "justify-content": "center",
          }}
        >
          <h1>{car()?.name}</h1>

          <p style={{ "font-size": "0.9em" }}>{car()?.shortDescription}</p>
          <p>
            {car()?.year} | {car()?.kilometer}km
          </p>
          <p style={{ color: "#50AF31", "font-size": "1.2em" }}>
            {car()?.price}€
          </p>
        </article>
      </section>
    </div>
  );
};

export default Car;
