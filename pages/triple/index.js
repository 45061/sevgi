/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../../styles/pages/room.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  DotButton,
  PrevButton,
  NextButton,
} from "../../components/EmblaCarouselArrowsDotsButtons";
import { useCallback, useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import TargetServices from "../../components/TargetServices";

export default function room() {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className={styles.container}>
      <div className={styles.container__data}>
        <div className={styles.data__title}>
          <h1>Habitación Triple</h1>
          <h2>Capacidad para 3 personas</h2>
          <p>
            Espectacular habitación triple con una capacidad de 3 personas, las
            cuales ocuparían una camas doble y una cama sencilla, cuenta con un
            baño con todos sus implementos, esta habitación es ideal para
            familias o grupos de amigos que viajan juntos, cuenta con televisor
            SmartTV y TDT.
          </p>
        </div>
        <div className={styles.data__carousel}>
          <div className="sandbox">
            <section className="sandbox__carousel">
              <Carousel
                foto1="triple.jpg"
                foto2="triple2.jpg"
                foto3="triple3.jpg"
              />
            </section>
          </div>
        </div>
      </div>
      <div className={styles.data__roomInfo}>
        <div className={styles.roomInfo__room}>
          <h2>En el baño encuentras:</h2>
          <p>Toallas</p>
          <p>Ducha de Agua Caliente</p>
          <p>Papel higienico</p>
          <p>Jabon de manos</p>
          <p>Espejos</p>
          <p>Jabon de cuerpo</p>
          <p>Shampoo</p>
        </div>
        <div className={styles.roomInfo__room}>
          <h2>Equipamiento de la habitación triple:</h2>
          <p>Ropa de Cama</p>
          <p>Servicio de despertador</p>
          <p>Toallas</p>
          <p>Recepción 24h</p>
        </div>
      </div>
      <TargetServices />
    </div>
  );
}
