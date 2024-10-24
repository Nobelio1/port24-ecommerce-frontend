import { Link } from "react-router-dom";
import { sectionFooter } from "../../shared/constants/footer";
import { HyMLogo2 } from "../../assets";

export const Footer = () => {
  return (
    <div className="bg-gray-200 text-gray-700 px-4 py-16 flex flex-col justify-center">
      <div className="grid grid-cols-4 mb-4">
        {sectionFooter.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-4">{section.title}</h3>
            <div className="flex flex-col gap-3">
              {section.links.map((link, index) => (
                <Link
                  key={index}
                  to={link.router}
                  className="text-sm mb-1 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div className="self-center mb-4">
        <span className="text-[10px] font-medium">
          El contenido de esta página web está protegido por copyright y es
          propiedad de H&M Hennes & Mauritz AB.
        </span>
      </div>
      <div className="self-center my-6">
        <img src={HyMLogo2} alt="H&M Logo" className="w-[80px] h-[40px] ml-6" />
      </div>
      <div className="self-center ml-5 mt-3 text-sm">
        <span><b>Perú</b> | S/.</span>
      </div>
    </div>
  );
};
