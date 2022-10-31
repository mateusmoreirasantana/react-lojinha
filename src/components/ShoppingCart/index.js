import './ShoppingCart.css'


 function ShoppingCart({ totalPurchase })
{

    return (
        <div className="register">
        <b>Total da compra:</b>
        R$<span>{totalPurchase.toFixed(2)}</span>
      </div>
    )

    
}
export default ShoppingCart;