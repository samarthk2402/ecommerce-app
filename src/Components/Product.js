

const Product = ({productImgSrc, productImgAlt}) => {
    return(
        <div className="product">
            <img className="productImage" src={productImgSrc} alt={productImgAlt} />
        </div>
    );
};

export default Product;