import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SidebarOption } from "../../../interfaces/sidebar.interface";
import { Link } from "react-router-dom";

export const SubCategories = ({ option }: { option: SidebarOption } ) => {
  const [first, setfirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  return (
    <div className="mb-8 mt-4">
      <div
        onClick={() => setfirst(!first)}
        className="flex justify-between items-center cursor-pointer mb-5"
      >
        <div className="flex items-center gap-3">
          <p className="hover:text-red-500">Nuevos productos</p>
        </div>
        <div className="pr-2">
          <SlArrowRight size={14} />
        </div>
      </div>

      {
        first && (
          <div className="pb-10">
            <div className="space-y-3">
              {option.newProducts.map((product) => (
                <Link
                  key={product.name}
                  to={product.route}
                  className="pl-3 block text-xs "
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
        )
      }

      <div
        onClick={() => setSecond(!second)}
        className="flex justify-between items-center cursor-pointer mb-5"
      >
        <div className="flex items-center gap-3">
          <p className="hover:text-red-500">Inspiración</p>
        </div>
        <div className="pr-2">
          <SlArrowRight size={14} />
        </div>
      </div>

      {
        second && (
          <div className="pb-10">
            <div className="space-y-3">
              {option.inspiration.map((product) => (
                <Link
                  key={product.name}
                  to={product.route}
                  className="pl-3 block text-xs "
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
        )
      }


      <div
        onClick={() => setThird(!third)}
        className="flex justify-between items-center cursor-pointer mb-5"
      >
        <div className="flex items-center gap-3">
          <p className="hover:text-red-500">Mejores precios</p>
        </div>
        <div className="pr-2">
          <SlArrowRight size={14} />
        </div>
      </div>

      {
        third && (
          <div className="">
            <div className="space-y-3">
              {option.bestPrices.map((product) => (
                <Link
                  key={product.name}
                  to={product.route}
                  className="pl-3 block text-xs "
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
        )
      }
    </div>
  );
};
