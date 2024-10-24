import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SidebarOption } from "../../../interfaces/sidebar.interface";
import { AllCategories } from "./AllCategories";
import { SubCategories } from "./SubCategories";

export const Categories = ({
  sidebarOption,
}: {
  sidebarOption: SidebarOption;
}) => {
  const [fistType, setFistType] = useState(false);
  return (
    <div>
      <div
        onClick={() => setFistType(!fistType)}
        key={sidebarOption.type}
        className="flex justify-between items-center px-2 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-full"
            src={sidebarOption.icon}
            alt="logo-item-sidebar"
          />
          <p className="text-lg hover:text-red-500">{sidebarOption.title}</p>
        </div>
        <div>
          <SlArrowRight size={14} />
        </div>
      </div>
      {fistType && (
        <div className="pl-8">
          <SubCategories option={sidebarOption} />
          <AllCategories option={sidebarOption} />
        </div>
      )}
    </div>
  );
};
