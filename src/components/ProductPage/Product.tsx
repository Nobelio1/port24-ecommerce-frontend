import { IoIosHeartEmpty } from "react-icons/io";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
} from "../../assets";

export const Product = () => {
  return (
    <div className="ml-8">
      <div className="grid grid-cols-3">
        <div className="col-span-2 relative">
          <div className="grid grid-cols-2 gap-1">
            <div>
              <img src={Product1} alt="Product1" />
            </div>
            <div>
              <img src={Product2} alt="Product2" />
            </div>
            <div>
              <img src={Product3} alt="Product3" />
            </div>
            <div>
              <img src={Product4} alt="Product4" />
            </div>
            <div>
              <img src={Product5} alt="Product5" />
            </div>
            <div>
              <img src={Product6} alt="Product6" />
            </div>
          </div>
          <div className="absolute top-0 left-0 bg-orange-100 px-2 py-1">
            <span className="text-xs font-medium">Precios + bajos</span>
          </div>
        </div>

        {/* Detalle del producto */}
        <div className="py-10 pl-6  ">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-medium">Blusa en mezcla de lino</span>
            <IoIosHeartEmpty size={28} className="ml-2" />
          </div>
          <div className="flex flex-col mb-4">
            <span className="font-semibold text-lg">S/ 69.95</span>
            <span className="text-sm font-medium">Contamos con pago en efectivo</span>
          </div>
          <div className="mb-4">
            <span>Blanco</span>
          </div>
          {/* Tipos de color */}
          <div>
            <div className="text-xs flex justify-between mb-4">
              <span className="font-medium">Tallas</span>
              <span>Guia de tallas</span>
            </div>
            <div className="grid grid-cols-3 gap-2 px-2 mb-4">
              <div className="border border-black px-4 py-2 flex justify-center items-center text-sm">
                <span >XS</span>
              </div>
              <div className="border border-black px-4 py-2 flex justify-center items-center text-sm">
                <span>S</span>
              </div>
              <div className="border border-black px-4 py-2 flex justify-center items-center text-sm">
                <span>M</span>
              </div>
              <div className="border border-black px-4 py-2 flex justify-center items-center text-sm">
                <span>L</span>
              </div>
              <div className="border border-black px-4 py-2 flex justify-center items-center text-sm">
                <span>XL</span>
              </div>
            </div>
            <div className="bg-black flex items-center justify-center py-3 mb-4">
              <span className="text-white text-sm">Agregar</span>
            </div>
            <div className="flex justify-center mb-8">
              <span className="text-sm font-medium">ENTREGA Y PAGO</span>
            </div>
          </div>
          <div className="text-xs">
            <p className="mb-6">
              Aprovecha envíos gratis en compras sobre S/190. En caso de querer
              devolver productos, las devoluciones son sin costo.
            </p>
            <span className="block mb-2 font-medium">Talla Modelo</span>
            <span>El/la modelo mide 177 cm y luce una talla M</span>
            <div className="mt-10 flex items-center gap-2">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <span>(0 comentarios)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
