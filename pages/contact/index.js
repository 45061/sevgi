import TargetServices from "../../components/TargetServices";
import styles from "../../styles/pages/contact.module.scss";

export default function contact() {
  return (
    <div className={styles.container}>
      <div className={styles.container__data}>
        <h1>Contacto</h1>
        <div className={styles.data__contact}>
          <div className={styles.contac__loc}>
            <h2>Dirección:</h2>
            <p>Calle 23 # 83 - 33</p>
            <h2>Barrio:</h2>
            <p>Modelia</p>
            <h2>Horario:</h2>
            <p>Siempre abierto</p>
            <h2>Bogotá - Colombia</h2>
          </div>
          <div className={styles.contac__info}>
            <h2>Telefono y WhatsApp:</h2>
            <p> +57 305 801 0485</p>
            <h2>Email</h2>
            <p>naturalsevgihostel@gmail.com</p>
          </div>
        </div>
        <TargetServices />
        <h1>Ubicación</h1>
        <div className={styles.data__loc}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3976.5924216836224!2d-74.12565672603897!3d4.666526207118503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9d5935716901%3A0x659cee1967f74a91!2sHotel%20Natural%20Sevgi!5e0!3m2!1ses!2sco!4v1696549547505!5m2!1ses!2sco"
            width="600"
            height="450"
          ></iframe>
        </div>
        <div className={styles.data__loc2}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3976.5924216836224!2d-74.12565672603897!3d4.666526207118503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9d5935716901%3A0x659cee1967f74a91!2sHotel%20Natural%20Sevgi!5e0!3m2!1ses!2sco!4v1696549547505!5m2!1ses!2sco"
            width="360"
            height="250"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
