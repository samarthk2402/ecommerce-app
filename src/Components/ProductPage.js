const ProductPage = ({ product, onAdd }) => {
  return (
    <div className="productPage">
      <img
        className="productPageImage"
        src={process.env.PUBLIC_URL + "/" + product.productImgSrc}
        alt={product.productImgAlt}
      />
      <div className="productPageInfo">
        <h2>{product.name}</h2>
        <h3>£{product.price}</h3>
        <button
          onClick={() => {
            onAdd(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
