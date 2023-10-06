/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../styles/pages/room.module.scss";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import {
  DotButton,
  PrevButton,
  NextButton,
} from "./EmblaCarouselArrowsDotsButtons";
import { useCallback, useEffect, useState } from "react";
import image101 from "../public/101.jpg";

export default function Carousel({ foto1, foto2, foto3, foto4, foto5, foto6 }) {
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
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src={`/${foto1}`}
              alt="foto habitacion Natural Sevgi"
            />
          </div>
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src={`/${foto2}`}
              alt="foto habitacion Natural Sevgi"
            />
          </div>
          <div className="embla__slide">
            <img
              className="embla__slide__img"
              src={`/${foto3}`}
              alt="foto habitacion Natural Sevgi"
            />
          </div>
          {foto4 && (
            <div className="embla__slide">
              <img
                className="embla__slide__img"
                src={`/${foto4}`}
                alt="foto habitacion Natural Sevgi"
              />
            </div>
          )}
          {foto5 && (
            <div className="embla__slide">
              <img
                className="embla__slide__img"
                src={`/${foto5}`}
                alt="foto habitacion Natural Sevgi"
              />
            </div>
          )}
          {foto6 && (
            <div className="embla__slide">
              <img
                className="embla__slide__img"
                src={`/${foto6}`}
                alt="foto habitacion Natural Sevgi"
              />
            </div>
          )}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
