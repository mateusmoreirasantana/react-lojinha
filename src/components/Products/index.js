
import { productsList } from "./products";

import Product from "../Product";

  
function Products(props) {
  const { updateTotalPurchase } = props;

  function buildProductsList() {
    return productsList.map(product => {
        const { name, icon, price } = product;
      return (
        <Product
        name={name}
        icon={icon}
        price={price}
        updateTotalPurchase={(price) => updateTotalPurchase(price)}
      />
      )
    })


  }

  const products = buildProductsList();
  return (
    <div className="Products">
      {products}
    </div>
  )
}

export default Products;