import { Link } from "react-router-dom";

const Product = ({ name, price, productImgSrc, productImgAlt }) => {
  return (
    <div className="product">
      <Link to={"/" + name}>
        <img className="productImage" src={productImgSrc} alt={productImgAlt} />
        <p>{name}</p>
        <p>£{price}</p>
      </Link>
    </div>
  );
};

export default Product;
