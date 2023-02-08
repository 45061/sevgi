/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../../styles/pages/room.module.scss";
import Image from "next/image";
import TargetServices from "../../components/TargetServices";

export default function room2() {
  return (
    <div className={styles.container}>
      <div className={styles.container__data}>
        <div className={styles.data__title}>
          <h1>Habitación Triple Baño Privado</h1>
          <h2>Capacidad para 3 personas</h2>
          <p>
            Espectacular habitación con una capacidad de 3 personas, las cuales
            ocuparían una cama doble y una cama sencilla, esta habitación es
            ideal para familias o grupos de amigos pequeños que viajan juntos,
            cuenta con un baño privado.
          </p>
        </div>
      </div>
      <div className={styles.data__image2}>
        <Image src="/201.jpg" alt="room two" width={850} height={500} />
      </div>
      <div className={styles.data__image}>
        <Image src="/201.jpg" alt="room one" width={350} height={230} />
      </div>
      <div className={styles.data__roomInfo}>
        <div className={styles.roomInfo__room}>
          <h2>En el baño encuentras:</h2>
          <p>Toallas</p>
          <p>Ducha de Agua Caliente</p>
          <p>Papel higienico</p>
          <p>Jabon de manos</p>
          <p>Espejos</p>
        </div>
        <div className={styles.roomInfo__room}>
          <h2>Equipamiento Habitación:</h2>
          <p> Ropa de Cama</p>
          <p>Servicio de despertador</p>
          <p>Toallas</p>
          <p>Artículos de aseo Gratis</p>
          <p>Recepción 24h</p>
        </div>
      </div>
      <TargetServices />
    </div>
  );
}
