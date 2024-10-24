import { LadingBanner1, LadingBanner2, LadingBanner3 } from "../../assets";
import {
  BannerMessageProps,
  BannerProps,
} from "../../interfaces/ladinPage.interface";

export const infoBanners: BannerProps[] = [
  {
    img: LadingBanner1,
    priceMessage: {
      price: "S/59.95",
      description: "Blusa con ribete",
      position: "top-[40%] left-[27%] z-20",
    },
    description: {
      title: "Nueva colección",
      subTitle: "Lino y estampados de primavera.",
      linkCollection: "",
    },
  },
  {
    img: LadingBanner2,
    priceMessage: {
      price: "S/109.00",
      description: "Polo camisero",
      position: "top-[31%] left-[71%] z-20",
    },
    description: {
      category: "PRIMAVERA",
      title: "Estilos ligeros",
      subTitle: "Looks frescos y sofisticados para la temporada.",
      linkCollection: "",
    },
  },
  {
    img: LadingBanner3,
    description: {
      title: "Halloween",
      subTitle:
        "Transfórmate en lo que más quieras con piezas divertidas y espeluznantes.",
      linkCollection: "",
    },
  },
];

export const infoBannerMessage: BannerMessageProps[] = [
  {
    bgColor: "bg-black",
    txtColor: "text-white",
    title: "Shorts desde S/79.95",
    promotions: [
      {
        name: "Mujer",
        borderColor: "border-white",
        route: "",
      },
      {
        name: "Hombre",
        borderColor: "border-white",
        route: "",
      },
      {
        name: "Bebé",
        borderColor: "border-white",
        route: "",
      },
      {
        name: "Niños",
        borderColor: "border-white",
        route: "",
      },
    ],
  },
  {
    bgColor: "bg-rose-300",
    txtColor: "text-black",
    title: "¡Participa para ir al evento de lanzamiento!​",
    description: "H&M Beauty llega a Perú​.",
    promotions: [
      {
        name: "Participa aquí",
        borderColor: "border-black",
        route: "",
      },
      {
        name: "Ver más",
        borderColor: "border-black",
        route: "",
      },
    ],
  },
];

export const lastBannerMessage: BannerMessageProps =   {
  bgColor: "bg-orange-50",
  txtColor: "text-red-500",
  title: "Suscríbete a Fashion News y recibe un 15% de dcto.",
  description: 'Novedades y descuentos exclusivos para ti.',
  promotions: [
    {
      name: "Únete ya",
      borderColor: "border-red-500",
      route: "",
    },
  ],
}