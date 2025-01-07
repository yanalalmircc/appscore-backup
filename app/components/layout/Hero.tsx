"use client";
import Image from "next/image";

import { heroSlides } from "@app/data";
import { StarIcon } from "@app/assets/icons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="hero embla" ref={emblaRef}>
      <div
        id="heroSlider"
        className="embla__container"
        aria-label="Top Score Apps"
      >
        {heroSlides.map((slide) => (
          <div key={slide.id} className="embla__slide">
            <div className="hero-slide">
              <div
                className="hero-slide__content"
                style={{ backgroundColor: slide.backgroundColor }}
              >
                <div className="hero-slide__text">
                  <div className="hero-slide__title">{slide.title}</div>
                  <div className="hero-slide__category">{slide.category}</div>
                  <div className="hero-slide__rate">
                    <StarIcon />
                    {slide.rate}
                  </div>
                </div>
                <div className="hero-slide__logo">
                  <slide.slideLogo />
                </div>
              </div>
              <div className="hero-slide__image">
                <div className="hero-slide__image-in">
                  <div className="hero-slide__image-gradient" />
                  <Image
                    src={slide.slideImage}
                    alt={slide.title}
                    width={500}
                    height={320}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
