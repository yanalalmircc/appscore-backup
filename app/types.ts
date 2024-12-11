import { StaticImageData } from "next/image";
import { FC } from "react";
export type HeroSlide = {
  link: string;
  title: string;
  category: string;
  rateImage: FC;
  rate: number;
  slideLogo: StaticImageData;
  slideImage: StaticImageData;
  backgroundColor: string;
};
export type App = {
  id: string;
  category: {
    id: string;
    name: string;
  };
  name: string;
  logo: string;
  images: string;
  description: string;
  summary: string;
  linkIos: string;
  linkAndroid: string;
  rating: number;
  reviews: number;
  active: boolean;
};
export type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  scrollToId?: string;
  disabled?: boolean;
};
export type ImageType = {
  id: string;
  value: string;
};
