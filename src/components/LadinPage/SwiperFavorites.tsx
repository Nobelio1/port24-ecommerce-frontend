import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../css/swiper.css";
import { productList } from "../../shared/constants/listProducts";
import { ProductCard } from "../ListProductPage/ProductCard";

const favoritesCategory = [
  {
    id: 1,
    name: "Mujer",
    active: true,
  },
  {
    id: 2,
    name: "Hombre",
    active: false,
  },
  {
    id: 3,
    name: "Niño",
    active: false,
  },
  {
    id: 4,
    name: "Bebé",
    active: false,
  },
  {
    id: 5,
    name: "H&M Home",
    active: false,
  },
  {
    id: 6,
    name: "Sport",
    active: false,
  },
];

export const SwiperFavorites = () => {
  return (
    <div className="mb-4 pt-2">
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-4">Favoritos</h3>
        <div className="flex gap-4">
          {favoritesCategory.map((category, index) => (
            <button
              key={index}
              className={`text-xs rounded-full px-5 py-3 ${
                !category.active ? "border border-black" : "text-white bg-red-600 border border-red-7600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-full"
      >
        {productList.map((product, index) => (
          <SwiperSlide key={index} className="mb-6">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
