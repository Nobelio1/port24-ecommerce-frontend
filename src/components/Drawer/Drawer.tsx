import { SlArrowRight, SlUser } from "react-icons/sl";
import {
  sidebarOptions,
  siderbarOtherOptions,
} from "../../shared/constants/sidenavLinks";

export const Drawer = () => {
  return (
    <div className="w-full">
      <div className="h-14 bg-red-100 flex items-center px-4">
        <SlUser size={20} />
      </div>
      <div className="mt-6 px-4 space-y-8">
        {sidebarOptions.map((sidebarOption) => (
          <div
            key={sidebarOption.type}
            className="flex justify-between items-center px-2 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={sidebarOption.icon}
                alt="logo-item-sidebar"
              />
              <p className="text-lg hover:text-red-500">
                {sidebarOption.title}
              </p>
            </div>
            <div>
              <SlArrowRight size={14} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 px-4 space-y-5">
        {siderbarOtherOptions.map((sidebarOtherOption) => (
          <div
            key={sidebarOtherOption.name}
            className="flex justify-between items-center px-2"
          >
            <p className="text-xs cursor-pointer">
              {sidebarOtherOption.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
