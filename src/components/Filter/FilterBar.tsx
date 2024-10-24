import { SlArrowDown, SlEqualizer } from "react-icons/sl";

export const FilterBar = () => {
  return (
    <div className="w-full flex bg-white items-center justify-around py-3">
      <div className="flex items-center gap-2">
        <SlEqualizer className="rotate-90" size={13} />
        <button className="uppercase font-semibold text-xs">Todos los filtros</button>
      </div>

      <div className="flex items-center gap-2">
        <button className="uppercase font-semibold text-xs">Ordenar Por</button>
        <SlArrowDown size={13} />
      </div>

      <div className="text-xs flex gap-2">
        <button className="text-red-500 border-b border-red-500">Modelo</button>
        <button>Producto</button>
      </div>
    </div>
  );
};
