import Image from "next/image";
import styles from "../styles/Home.module.scss";

import CardTourism from "../components/CardTourism";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__firtsBox}></div>
      <div className={styles.container__secondBox}>
        <h2>Bienvenido a Sevgi Sense Bogotá</h2>
        <p>
          El Hostal Sevgi Sense está situado a sólo 15 minutos del aeropuerto
          internacional El Dorado. Nuestros huéspedes encontrarán un nuevo
          estilo de hospitalidad con una cálida bienvenida, instalaciones
          modernas, acceso ilimitado a Internet en todo el hostal, habitaciones
          confortables con ventanas y luz natural. Nuestros huéspedes pueden
          estar encantados con nuestros deliciosos desayunos. Cerca del hostal
          se encuentra el Centro Comercial Hayuelos, la Embajada de los Estados
          Unidos, Corferias y el Centro Deportivo de Alto Rendimiento. Además,
          el área financiera de la calle 26 donde se encuentran empresas
          globales como Unilever, Marsh, Daimler, GSK y Coca Cola. Por otro
          lado, si nuestros huéspedes están buscando un poco de diversión, cerca
          encontraran el centro comercial Salitre Plaza, Jardín Botánico, Centro
          Interactivo Maloka y Pricesmart. En coche y a 5 minutos se encuentran
          el centro comercial Gran Estación, el Parque Metropolitano Simón
          Bolívar y el parque de atracciones Salitre Mágico.
        </p>
      </div>
      <div className={styles.container__thirdBox}>
        <h2>Nuestras Habitaciones</h2>
        <div className={styles.thirdBox__rooms}>
          <Link href="/room1">
            <div className={styles.rooms__bookingRoom}>
              <Image
                className={styles.bookingRoom__Image}
                src="/101.jpg"
                alt="first Room"
                width={400}
                height={320}
              />
              <h3>Habitación Familiar</h3>
              <h4>Capacidad 5 Personas</h4>
            </div>
          </Link>
          <Link href="/room2">
            <div className={styles.rooms__bookingRoom}>
              <Image
                className={styles.bookingRoom__Image}
                src="/201.jpg"
                alt="second Room"
                width={400}
                height={320}
              />
              <h3>Habitación Triple Baño Privado</h3>
              <h4>Capacidad 3 Personas</h4>
            </div>
          </Link>
          <Link href="/room3">
            <div className={styles.rooms__bookingRoom}>
              <Image
                className={styles.bookingRoom__Image}
                src="/202.jpg"
                alt="first Room"
                width={400}
                height={320}
              />
              <h3>Habitación Triple Baño Compartido</h3>
              <h4>Capacidad 3 Personas</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.quarterBox__rooms}>
        <div className={styles.oporto__tourism}>
          <div className={styles.tourism__title}>
            <h2>Descubre lugares inolvidables</h2>
          </div>
          <div className={styles.tourism__card}>
            <CardTourism
              title="Centro Histórico La Candelaria"
              body="La Candelaria es el centro vibrante de Bogotá, con lugares icónicos como una catedral de la época colonial y el Capitolio neoclásico que flanquea la Plaza Bolívar. Estrechas calles llenas de tiendas que venden esmeraldas y artesanías conducen a lugares de interés cultural."
              image="https://res.cloudinary.com/dtwhiptf2/image/upload/v1658603368/centro_ibwkg7.jpg"
            />
            <CardTourism
              title="Monserrate"
              body="El cerro de Monserrate es el más conocido de los cerros Orientales de Bogotá. Junto a Guadalupe es uno de los cerros tutelares de la ciudad. Monserrate tiene una altitud de 3152 m y se ubica sobre la cordillera oriental."
              image="https://res.cloudinary.com/dtwhiptf2/image/upload/v1658601112/monserrate_y93g3n.jpg"
            />
            <CardTourism
              title="Museo del Oro"
              body="El Museo del Oro del Banco de la República de Colombia es una institución pública la cual su fin es la adquisición, conservación y exposición de piezas de orfebrería y alfarería de culturas indígenas del periodo precolombino de la actual Colombia."
              image="https://res.cloudinary.com/dtwhiptf2/image/upload/v1658608756/museo_iq8j7b.jpg"
            />
            <CardTourism
              title="Parque Mirador de los Nevados"
              body="El Parque Mirador de los Nevados es un parque metropolitano ubicado en la localidad de Suba, al Norte de Bogotá en Colombia. Presenta una extensión de 6 hectáreas y cuenta con senderos, mirador sobre el occidente de la ciudad y relictos de flora y fauna nativa."
              image="/parque.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
