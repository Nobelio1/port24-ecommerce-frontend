import { SlUser } from "react-icons/sl";
import {
  sidebarOptions,
  siderbarOtherOptions,
} from "../../shared/constants/sidenavLinks";
import { Categories } from "./Categories/Categories";

export const Drawer = () => {
  return (
    <div className="w-full">
      <div className="h-14 bg-red-100 flex items-center px-4">
        <SlUser size={20} />
      </div>
      <div className="mt-6 px-4 space-y-8">
        {sidebarOptions.map((sidebarOption, index) => (
          <>
            <Categories key={index} sidebarOption={sidebarOption} />
          </>
        ))}
      </div>
      <div className="mt-8 px-4 space-y-5">
        {siderbarOtherOptions.map((sidebarOtherOption) => (
          <div
            key={sidebarOtherOption.name}
            className="flex justify-between items-center px-2"
          >
            <p className="text-xs cursor-pointer">{sidebarOtherOption.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
