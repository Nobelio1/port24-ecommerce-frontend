import { Accordion } from "../../../components/ProductPage/Accordion"
import { Breadcrumbs } from "../../../components/ProductPage/Breadcrumbs"
import { OtherProduct } from "../../../components/ProductPage/OtherProduct"
import { Product } from "../../../components/ProductPage/Product"

const ProductPage = () => {
  return (
    <div className="w-full">
      <Breadcrumbs />
      <Product />
      <Accordion />
      <OtherProduct />
    </div>
  )
}

export default ProductPage