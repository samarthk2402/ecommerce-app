const ProductPage = ({ product, onAdd }) => {
  return (
    <div className="productPage">
      <img
        className="productPageImage"
        src={process.env.PUBLIC_URL + product.productImgSrc}
        alt={product.productImgAlt}
      />
      <div className="productPageInfo">
        <h2>{product.name}</h2>
        <h3>£{product.price}</h3>
        <button
          className="button"
          onClick={() => {
            onAdd(product);
            window.alert(product.name + " has been added to your cart");
          }}
        >
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
