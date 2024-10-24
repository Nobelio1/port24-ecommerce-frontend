import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { ProductList } from "../../interfaces/listProduct.interface";

export const ProductCard = ({ product }: { product: ProductList }) => {

  return (
    <div className="mb-5">
      <div className="relative">
        <div className="w-full h-auto">
          <img src={product.image} alt="imagen-modelo" />
        </div>
        {product.promotion && (
          <div className="absolute left-0 bottom-[3%] bg-orange-100 px-2 py-1">
            <span className="text-xs font-medium">Precios + bajos</span>
          </div>
        )}
        <button className="absolute right-2 bottom-[3%]" >
          {
            product.favorite ? <IoMdHeart size={24} fill="#ff0000" /> : <IoIosHeartEmpty size={24} />
          }
        </button>
      </div>
      <div className="flex flex-col">
        <span className="text-xs my-2">{product.title}</span>
        <span className="mb-2">{product.price}</span>
        <div className="flex gap-1 mb-2">
          {product.colors.map((color, index) => (
            <div key={index} style={{ background: color }} className="w-2 h-2 rounded-full"></div>
          ))}
        </div>
        <span className="text-xs">Novedades</span>
      </div>
    </div>
  );
};
