"use client";
import { App, ImageType } from "@app/types";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { PrevIcon, NextIcon } from "@app/assets/icons";
import Link from "next/link";

export const AppCarousel = ({ app }: { app: App }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const images: ImageType[] = JSON.parse(app.images.replace(/'/g, '"')); // Replace single quotes with double quotes for valid JSON

  return (
    <div className="gallery">
      <button
        className="embla__prev"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <PrevIcon className="embla__prev-icon" />
      </button>

      <div className="gallery-in embla" ref={emblaRef}>
        <div
          id="gallerySlider"
          className="embla__container"
          aria-label={app.name + " Gallery"}
          style={{ display: "flex", gap: "1rem" }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className="embla__slide"
              style={{ flex: "0 0 25%" }}
            >
              <Link href="#" className="gallery-slide">
                <Image
                  src={image.value}
                  alt={`${app.name} screenshot ${index + 1}`}
                  width={120}
                  height={120}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__next"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <NextIcon className="embla__next-icon" />
      </button>
    </div>
  );
};
