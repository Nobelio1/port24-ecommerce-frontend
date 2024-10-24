import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const DepartarmentFilterBar = () => {
  const [arrow, setArrow] = useState(false);

  const handleArrow = () => {
    setArrow(!arrow);
  }

  return (
    <div className="w-full bg-white px-4 py-3">
      <label
        htmlFor="filterDep"
        className="uppercase text-sm font-medium flex items-center gap-8"
      >
        <span>Departamentos</span>
        {!arrow ? <SlArrowDown /> : <SlArrowUp />}
      </label>
      <input type="checkbox" id="filterDep" className="hidden" onChange={handleArrow} />

      {
        arrow && (
          <div className="mt-4">
            <button className="text-xs uppercase hover:underline">Mujer(20)</button>
          </div>
        )
      }
    </div>
  );
};
