import { productList } from "../../shared/constants/listProducts";
import { ProductCard } from "./ProductCard";

export const ListProducts = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center my-6">
        <span className="text-xs font-medium">Mostrando 36 de 106</span>
      </div>
      <section className="grid grid-cols-3 gap-2">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
      <div className="flex justify-center my-10">
        <button className="uppercase bg-black text-white txt-sm px-6 py-3">Cargar más productos</button>
      </div>
    </div>
  );
};
