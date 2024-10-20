import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { Drawer } from "../../components/Drawer/Drawer";
import { DrawerCartShopping } from "../../components/Drawer/DrawerCartShopping";

const LayoutPage = () => {
  const [shoppingCart, setShoppingCart] = useState(false)

  return (
    <div>
      <div className={`drawer ${shoppingCart ? 'drawer-end' : ''}`}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header setShoppingCart={setShoppingCart} />
          <Outlet />
        </div>
        <aside className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="bg-white min-h-full w-[450px] ">
            {
              !shoppingCart ? (
                <Drawer />
              ) : (
                <DrawerCartShopping />
              )
            }
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LayoutPage;
