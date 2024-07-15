import Product from "./Product";

const Home = () => {
    const products = [
        {name: "shirt", price: "10", productImgSrc: "blueshirt.jpg", productImgAlt: "blue shirt"},
        {name: "shirt", price: "10", productImgSrc: "brownpants.jpg", productImgAlt: "brown pants"},
        {name: "shirt", price: "10", productImgSrc: "chainshirt.jpg", productImgAlt: "white shirt"},
        {name: "shirt", price: "10", productImgSrc: "navyshirt.jpg", productImgAlt: "navy shirt"},
        {name: "shirt", price: "10", productImgSrc: "oldmoneyshirt.jpg", productImgAlt: "brown shirt"},
        {name: "shirt", price: "10", productImgSrc: "pinkshirt.jpg", productImgAlt: "pink shirt"},
        {name: "shirt", price: "10", productImgSrc: "weirdpants.jpg", productImgAlt: "fluffy trousers"},
        {name: "shirt", price: "10", productImgSrc: "whiteshirt.jpg", productImgAlt: "white shirt"}

    ]
    
    return(
        <>
        <h1>Home</h1>
        
        <div className="container">
            <div className="filterMenu">
                <p>Filter: </p>
            </div>

            <div className="container">
            <div className="productsContainer">
                {products.map((product, index) => (
                    <Product name={product.name} price={product.price} productImgSrc={product.productImgSrc} productImgAlt={product.productImgAlt}/>
                ))}
            </div>
            </div>
        </div>
        </>
    );
};

export default Home;