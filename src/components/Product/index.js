import { useState } from "react";
import './Product.css'
function Product(props) {
    const { name, icon, price ,updateTotalPurchase} = props;
    const adjustedPrice = price.toFixed(2).toString().replace(".", ",");
    const [selected, setSelected] = useState(false);
 

  function handleSelect() {
    const isSelected = !selected;
    if (isSelected) updateTotalPurchase(price);
    else updateTotalPurchase(price * -1)

    setSelected(isSelected)
  }

  // let classes = ["product"];
  // if (selected) {
  //   classes.push("selected");
  // }

  function checkSelected() {
    let classes = "product";
    if (selected) {
      classes = "product selected";
    }
    return classes;
  }
    return (
      <div  className={checkSelected()} onClick={handleSelect}>
        {icon} {name} - R$ {adjustedPrice}
      </div>
    );
  }
  
export default Product;