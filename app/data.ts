import { HeroSlide, App } from "@app/types";
import { StarIcon } from "@app/assets/images/icons";
import logo11 from "@assets/images/logos/11.png";
import logo5 from "@assets/images/logos/05.png";
import logo12 from "@assets/images/logos/12.png";
import hero1 from "@assets/images/hero/hero-1.webp";
import hero2 from "@assets/images/hero/hero-2.webp";
import hero3 from "@assets/images/hero/hero-3.webp";
import hero4 from "@assets/images/hero/hero-4.webp";

export const heroSlides: HeroSlide[] = [
  {
    link: "/google_home",
    title: "Google Home",
    category: "Lifestyle",
    rateImage: StarIcon,
    rate: 4.9,
    slideLogo: logo11,
    slideImage: hero1,
    backgroundColor: "",
  },
  {
    link: "/klarna_shop_now_pay_later",
    title: "Klarna | Shop now. Pay later.",
    category: "Shopping",
    rateImage: StarIcon,
    rate: 4.7,
    slideLogo: logo5,
    slideImage: hero2,
    backgroundColor: "rgba(255, 236, 244, 1)",
  },
  {
    link: "/amazon_alexa",
    title: "Amazon Alexa",
    category: "Lifestyle",
    rateImage: StarIcon,
    rate: 4.4,
    slideLogo: logo5,
    slideImage: hero3,
    backgroundColor: "rgba(237, 251, 255, 1)",
  },
  {
    link: "/parkmobile_park_pay_go",
    title: "ParkMobile: Park. Pay. Go.",
    category: "Auto & Vehicles",
    rateImage: StarIcon,
    rate: 4.9,
    slideLogo: logo12,
    slideImage: hero4,
    backgroundColor: "rgba(240, 250, 243, 1)",
  },
];

export const defaultApp: App = {
  id: "default-id",
  category: {
    id: "default-category-id",
    name: "Default Category",
  },
  name: "Default App Name",
  logo: "/default-logo.png",
  images: "",
  description: "Default description",
  summary: "Default summary",
  linkIos: "#",
  linkAndroid: "#",
  rating: 0,
  reviews: 0,
  active: false,
};
