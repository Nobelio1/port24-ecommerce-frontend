export interface BannerProps {
  img: string;
  priceMessage?: {
    price: string;
    description: string;
    position: string;
  };
  description: {
    category?: string;
    title: string;
    subTitle: string;
    linkCollection: string;
  };
}

export interface BannerMessageProps {
  bgColor: string;
  txtColor: string;
  title: string;
  description?: string;
  promotions: Array<{
    borderColor: string;
    name: string;
    route: string;
  }>;
}
