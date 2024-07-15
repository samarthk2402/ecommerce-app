import Product from "./Product";
import { useEffect, useState } from "react";

const Home = () => {
  const products = [
    {
      name: "shirt",
      price: "10",
      productImgSrc: "blueshirt.jpg",
      productImgAlt: "blue shirt",
      category: "shirt",
    },
    {
      name: "shirt",
      price: "10",
      productImgSrc: "brownpants.jpg",
      productImgAlt: "brown pants",
      category: "trousers",
    },
    {
      name: "shirt",
      price: "10",
      productImgSrc: "chainshirt.jpg",
      productImgAlt: "white shirt",
      category: "shirt",
    },
    {
      name: "shirt",
      price: "10",
      productImgSrc: "navyshirt.jpg",
      productImgAlt: "navy shirt",
      category: "shirt",
    },
    {
      name: "shirt",
      price: "10",
      productImgSrc: "oldmoneyshirt.jpg",
      productImgAlt: "brown shirt",
      category: "shirt",
    },
    {
      name: "shirt",
      price: "10",
      productImgSrc: "pinkshirt.jpg",
      productImgAlt: "pink shirt",
      category: "shirt",
    },
    {
      name: "shirt",
      price: "10",
      productImgSrc: "weirdpants.jpg",
      productImgAlt: "fluffy trousers",
      category: "trousers",
    },
    {
      name: "shirt",
      price: "10",
      productImgSrc: "whiteshirt.jpg",
      productImgAlt: "white shirt",
      category: "shirt",
    },
  ];

  const [category, setCategory] = useState([]);

  const handleCategorySelect = (newCategory) => {
    let selectedCategories = [...category];
    if (category.includes(newCategory)) {
      selectedCategories = selectedCategories.filter(
        (cat) => cat !== newCategory
      );
    } else {
      selectedCategories = [...selectedCategories, newCategory];
    }

    setCategory(selectedCategories);
  };

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    console.log(category);
    if (category.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => category.includes(product.category))
      );
    } // eslint-disable-next-line
  }, [category]);

  return (
    <>
      <h1>Home</h1>
      <div className="homeContainer">
        <div className="filterMenu">
          <p>Filter: </p>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul className="dropdown-menu">
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleCategorySelect("shirt")}
                />
                Shirts
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleCategorySelect("trousers")}
                />
                Trousers
              </li>
            </ul>
          </div>
        </div>

        <div className="productsContainer">
          {filteredProducts.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              productImgSrc={product.productImgSrc}
              productImgAlt={product.productImgAlt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
