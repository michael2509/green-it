import { Component, createSignal } from "solid-js";
import styles from "./CarDevis.module.css";

const CarDevis: Component = () => {
  const [isSent, setIsSent] = createSignal(false);

  const [formData, setFormData] = createSignal({
    name: "",
    phone: "",
    moreInfos: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (formData().name && formData().phone) {
      setIsSent(true);
      console.log("submit", formData());
    }
  };

  return (
    <section style={{ padding: "0 30px" }}>
      <form class={styles.form}>
        <span class={styles.formSpan}>
          <label for="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData().name}
            onInput={(e) => {
              setFormData({ ...formData(), name: e.currentTarget.value });
            }}
          ></input>
        </span>
        <span class={styles.formSpan}>
          <label for="phone">Numéro de téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData().phone}
            onInput={(e) => {
              setFormData({ ...formData(), phone: e.currentTarget.value });
            }}
          ></input>
        </span>
        <span class={styles.formSpan}>
          <label for="moreInfos">
            Informations supplémentaires (optionnel)
          </label>
          <textarea
            id="moreInfos"
            name="moreInfos"
            style={{ "max-width": "420px" }}
            value={formData().moreInfos}
            onInput={(e) => {
              setFormData({ ...formData(), moreInfos: e.currentTarget.value });
            }}
          ></textarea>
        </span>
        <button
          disabled={isSent()}
          type="submit"
          onClick={handleSubmit}
          class={isSent() ? styles.formButtonDisabled : styles.formButton}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default CarDevis;
