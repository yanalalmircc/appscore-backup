import {
  StarIcon,
  SlideOneIcon,
  SlideTwoIcon,
  SlideThreeIcon,
  SlideFourIcon,
} from "@app/assets/icons";
import { HeroSlide } from "@app/types";
import hero1 from "@assets/images/hero-1.webp";
import hero2 from "@assets/images/hero-2.webp";
import hero3 from "@assets/images/hero-3.webp";
import hero4 from "@assets/images/hero-4.webp";

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    link: "/",
    title: "Google Home",
    category: "Lifestyle",
    rateImage: StarIcon,
    rate: 4.9,
    slideLogo: SlideOneIcon,
    slideImage: hero1,
    backgroundColor: "",
  },
  {
    id: 2,
    link: "/",
    title: "Klarna | Shop now. Pay later.",
    category: "Shopping",
    rateImage: StarIcon,
    rate: 4.7,
    slideLogo: SlideTwoIcon,
    slideImage: hero2,
    backgroundColor: "#f4b6c7",
  },
  {
    id: 3,
    link: "/",
    title: "Amazon Alexa",
    category: "Lifestyle",
    rateImage: StarIcon,
    rate: 4.4,
    slideLogo: SlideThreeIcon,
    slideImage: hero3,
    backgroundColor: "rgba(237, 251, 255, 1)",
  },
  {
    id: 4,
    link: "/",
    title: "ParkMobile: Park. Pay. Go.",
    category: "Auto & Vehicles",
    rateImage: StarIcon,
    rate: 4.9,
    slideLogo: SlideFourIcon,
    slideImage: hero4,
    backgroundColor: "rgba(240, 250, 243, 1)",
  },
];
