import { SlHome } from "react-icons/sl";

export const Breadcrumbs = () => {
  return (
    <div className="flex justify-center mb-4">
      <div className="breadcrumbs text-sm">
        <ul className="text-xs">
          <li>
            <a>
              <SlHome />
            </a>
          </li>
          <li>
            <span>MUJER</span>
          </li>
          <li>
            <span>BLUSAS Y CAMISAS</span>
          </li>
          <li>
            <span>blouses</span>
          </li>
          <li>
            <span>Blusa en mezcla de lino</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
