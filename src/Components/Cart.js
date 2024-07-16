import { useEffect, useState } from "react";

const Cart = ({ cartProducts, setCartProducts }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const removeProduct = (product) => {
    let newProducts = cartProducts.filter((prod) => prod !== product);
    setCartProducts(newProducts);
  };

  useEffect(() => {
    let total = 0;
    for (let product of cartProducts) {
      total += parseFloat(product.price);
    }

    setTotalPrice(total);
  }, [cartProducts]);

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cartProducts.map((product) => (
        <div className="cartProduct">
          <img
            className="cartProductImage"
            src={process.env.PUBLIC_URL + product.productImgSrc}
            alt={product.productImgAlt}
          />
          <div className="cartProductInfo">
            <h2>{product.name}</h2>
            <h3>£{product.price}</h3>
            <button onClick={() => removeProduct(product)}>
              Remove from cart
            </button>
          </div>
        </div>
      ))}
      <h3>Total price: £{totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
