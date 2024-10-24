import { DepartarmentFilterBar } from "../../../components/Filter/DepartarmentFilterBar";
import { FilterBar } from "../../../components/Filter/FilterBar";
import { Description } from "../../../components/ListProductPage/Description";
import { ListProducts } from "../../../components/ListProductPage/ListProducts";

const ListProductPage = () => {
  return (
    <div className="space-y-4">
        <Description />
        <DepartarmentFilterBar />
        <FilterBar/>
        <ListProducts />
    </div>
  );
};

export default ListProductPage;
