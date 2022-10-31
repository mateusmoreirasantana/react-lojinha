
import { useState } from "react";
import Products from "../Products";
import ShoppingCart from "../ShoppingCart";


export default function App() {
  const [totalPurchase, setTotal] = useState(0);
  return (
    <> 
    <ShoppingCart  totalPurchase = {totalPurchase}/>
<Products updateTotalPurchase ={(price) => setTotal(totalPurchase + price)}/>

    </>
  );
}

function Product(props) {
  const { name, icon, price } = props;
  const adjustedPrice = price.toFixed(2).toString().replace(".", ",");

  return (
    <div className="product">
      {icon} {name} - R$ {adjustedPrice}
    </div>
  );
}