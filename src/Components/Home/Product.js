

const Product = ({name, price, productImgSrc, productImgAlt}) => {
    return(
        <div className="product">
            <img className="productImage" src={productImgSrc} alt={productImgAlt} />
            <p>{name}</p>
            <p>£{price}</p>
        </div>
    );
};

export default Product;