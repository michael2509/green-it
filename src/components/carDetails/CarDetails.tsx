import styles from "./CarDetails.module.css";

const CarDetails = (car: any) => {
  return (
    <section style={{ padding: "0 30px" }}>
      <div class={styles.carDetails}>
        <span class={styles.carInfos}>Informations sur le véhicule</span>
        <div
          style={{
            display: "flex",
            "justify-content": "space-evenly",
            width: "100%",
          }}
        >
          <ul class={styles.ulInfos}>
            <li>
              <span class={styles.spanInfoLeft}>Mise en circulation</span>
              <span class={styles.spanInfoRight}>{car.car.year}</span>
            </li>
            <li>
              <span class={styles.spanInfoLeft}>Motorisation</span>
              <span class={styles.spanInfoRight}>
                {car.car.isGasoil ? "Gasoil" : "Essence"}
              </span>
            </li>
            <li>
              <span class={styles.spanInfoLeft}>Boîte de vitesse</span>
              <span class={styles.spanInfoRight}>
                {car.car.isManual ? "Manuel" : "Automatique"}
              </span>
            </li>
          </ul>
          <ul class={styles.ulInfos}>
            <li>
              <span class={styles.spanInfoLeft}>Kilométrage</span>
              <span class={styles.spanInfoRight}>{car.car.kilometer} km</span>
            </li>
            <li>
              <span class={styles.spanInfoLeft}>Consommation (L/100km)</span>
              <span class={styles.spanInfoRight}>{car.car.conso}</span>
            </li>
            <li>
              <span class={styles.spanInfoLeft}>Prix</span>
              <span class={styles.spanInfoRight}>{car.car.price} €</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
