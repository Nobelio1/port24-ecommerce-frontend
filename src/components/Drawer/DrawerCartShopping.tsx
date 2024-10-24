import { GoX } from "react-icons/go";
import { ShoppingFooter } from "./CarShopping/ShoppingFooter";

export const DrawerCartShopping = () => {
  return (
    <div className="w-full">
      <div className="h-[44px] border-b flex justify-between items-center px-4">
        <label htmlFor="my-drawer" className="cursor-pointer">
          <GoX size={30} />
        </label>

        <p className="text-lg mr-6">Shopping Bag</p>
      </div>
      <div></div>
      <div>
        <ShoppingFooter />
      </div>
    </div>
  );
};
