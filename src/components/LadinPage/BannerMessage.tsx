import { Link } from "react-router-dom";
import { BannerMessageProps } from "../../interfaces/ladinPage.interface";

export const BannerMessage = ({ banner }: { banner: BannerMessageProps }) => {
  return (
    <div
      className={`w-full h-[400px] flex flex-col justify-center items-center ${banner.bgColor} ${banner.txtColor} ${banner.bgColor === 'bg-orange-50' ? '': 'mb-4' }`}
    >
      <h3 className="text-2xl font-medium">{banner.title}</h3>
      {banner.description && <p>{banner.description}</p>}
      <div className="flex gap-2 text-xs mt-2">
        {banner.promotions.map((promotion, index) => (
          <div key={index} className={`border p-2 ${promotion.borderColor} `}>
            <Link to={promotion.route}>{promotion.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
