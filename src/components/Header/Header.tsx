import { SlBasket, SlHeart, SlMagnifier, SlMenu, SlUser } from "react-icons/sl";
import { HyMLogo } from "../../assets";

export const Header = ({
  setShoppingCart,
}: {
  setShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full h-[70px] fixed top-0 left-0 z-30 bg-white">
      <div className="flex justify-between items-center h-full px-4">
        <div className="flex items-center">
          <button onClick={() => setShoppingCart((state) => (state = false))}>
            <label htmlFor="my-drawer">
              <SlMenu size={22} />
            </label>
          </button>
          <img
            src={HyMLogo}
            alt="H&M Logo"
            className="w-[100px] h-[50px] ml-6"
          />
        </div>
        <div className="flex items-center gap-8 mr-16">
          <button>
            <SlUser size={22} />
          </button>
          <button>
            <SlMagnifier size={22} />
          </button>
          <button>
            <SlHeart size={22} />
          </button>
          <button onClick={() => setShoppingCart((state) => (state = true))}>
            <label htmlFor="my-drawer">
              <SlBasket size={22} />
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};
