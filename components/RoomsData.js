import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.scss";

import { useDispatch } from "react-redux";

import { showHamburgerNav } from "../store/actions/modalAction";

export default function RoomsData() {
  const dispatch = useDispatch();

  const handleClic = () => {
    dispatch(showHamburgerNav());
  };

  return (
    <div className={styles.thirdBox__rooms}>
      <Link href="/apartaEstudio">
        <div className={styles.rooms__bookingRoom}>
          <Image
            className={styles.bookingRoom__Image}
            src="/apartaEstudio.jpg"
            alt="Aparta Estudio"
            width={300}
            height={220}
          />
          <h3>Aparta Estudio</h3>
          <h4>Capacidad 4 Personas</h4>
        </div>
      </Link>
      <Link href="/cuadruple">
        <div className={styles.rooms__bookingRoom}>
          <Image
            className={styles.bookingRoom__Image}
            src="/cuadruple.jpeg"
            alt="habitacion cuadruple"
            width={300}
            height={220}
          />
          <h3>Habitación Cuadruple</h3>
          <h4>Capacidad 4 Personas</h4>
        </div>
      </Link>
      <Link href="/triple">
        <div className={styles.rooms__bookingRoom}>
          <Image
            className={styles.bookingRoom__Image}
            src="/triple.jpg"
            alt="habitacion triple"
            width={300}
            height={220}
          />
          <h3>Habitación Triple</h3>
          <h4>Capacidad 3 Personas</h4>
        </div>
      </Link>
      <Link href="/doble">
        <div className={styles.rooms__bookingRoom}>
          <Image
            className={styles.bookingRoom__Image}
            src="/doble.jpg"
            alt="habitacion doble"
            width={300}
            height={220}
          />
          <h3>Habitación Doble</h3>
          <h4>Capacidad 2 Personas</h4>
        </div>
      </Link>
      <Link href="/dobleDelux">
        <div className={styles.rooms__bookingRoom}>
          <Image
            className={styles.bookingRoom__Image}
            src="/dobleDelux.jpg"
            alt="habitacion doble delux"
            width={300}
            height={220}
          />
          <h3>Habitación Doble Delux</h3>
          <h4>Capacidad 2 Personas</h4>
        </div>
      </Link>
    </div>
  );
}
