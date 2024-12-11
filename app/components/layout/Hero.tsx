"use client";
import Image from "next/image";

import { heroSlides } from "@app/data";
import { StarIcon } from "@app/assets/images/icons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
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
          <div key={slide.link} className="embla__slide">
            <Link
              href={slide.link}
              className="hero-slide"
              style={{ backgroundColor: slide.backgroundColor }}
            >
              <div className="hero-slide__content">
                <div className="hero-slide__text">
                  <div className="hero-slide__title">{slide.title}</div>
                  <div className="hero-slide__category">{slide.category}</div>
                  <div className="hero-slide__rate">
                    <StarIcon />
                    {slide.rate}
                  </div>
                </div>
                <div className="hero-slide__logo">
                  <Image
                    src={slide.slideLogo}
                    alt={slide.title}
                    width={80}
                    height={80}
                  />
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
