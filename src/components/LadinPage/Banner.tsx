import { Link } from "react-router-dom";
import { BannerProps } from "../../interfaces/ladinPage.interface";

export const Banner = ({banner}: {banner:BannerProps}) => {
  return (
    <div className="w-full relative mb-4">
      <div className="w-full ">
        <Link to="">
          <img
            src={banner.img}
            alt="banner-1"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
      {
        banner.priceMessage && (
          <div className={`absolute ${banner.priceMessage.position} w-[135px] underline px-2 py-3 rounded-md text-white text-xs flex flex-col bg-gray-900`}>
            <span>{banner.priceMessage.price}</span>
            <span>{banner.priceMessage.description}</span>
          </div>
        )
      }
      <div className="absolute text-white right-0 left-0 bottom-8 flex flex-col justify-center items-center">
        {banner.description.category && (
          <span className="uppercase text-md tracking-widest font-medium mb-2">
            {banner.description.category}
          </span>
        )}
        <span className="uppercase text-4xl font-medium mb-4">
          {banner.description.title}
        </span>
        <span className="mb-4">{banner.description.subTitle}</span>
        <div className="bg-white">
          <button className="text-black text-xs p-2 font-semibold">
            Ir a la colección
          </button>
        </div>
      </div>
    </div>
  );
};
