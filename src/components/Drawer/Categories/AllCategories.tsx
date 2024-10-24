import { Link } from "react-router-dom";
import { SidebarOption } from "../../../interfaces/sidebar.interface";

export const AllCategories = ({ option }: { option: SidebarOption }) => {
  return (
    <div className="my-4 space-y-3">
      <span className="font-medium txt-lg">Compra por producto</span>
      {option.allProducts.map((product) => (
        <Link
          key={product.name}
          to={product.route}
          className="pl-3 block text-xs "
        >
          {product.name}
        </Link>
      ))}
    </div>
  );
};
