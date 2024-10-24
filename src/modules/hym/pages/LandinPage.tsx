import { Link } from "react-router-dom";
import { Banner } from "../../../components/LadinPage/Banner";
import { infoBanners, infoBannerMessage, lastBannerMessage } from "../../../shared/constants/landinPage";
import { BannerMessage } from "../../../components/LadinPage/BannerMessage";
import { SwiperFavorites } from "../../../components/LadinPage/SwiperFavorites";

const LandinPage = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 text-xs mb-4">
        <div className="flex justify-center items-center">
          <Link to="" className="hover:underline">
            Envios gratis sobre S/190
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="" className="hover:underline">
            Suscríbete a Fashion News
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="" className="hover:underline">
            Devoluciones sin costo
          </Link>
        </div>
      </div>
      
      <Banner banner={infoBanners[0]} />
      <Banner banner={infoBanners[1]} />
      {
        infoBannerMessage.map((banner, index) => (
          <BannerMessage key={index} banner={banner} />
        ))
      }
      <Banner banner={infoBanners[2]} />
      <SwiperFavorites />
      <BannerMessage  banner={lastBannerMessage} />
    </div>
  );
};

export default LandinPage;
