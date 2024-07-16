import FilterDropdown from "./Home/FilterDropdown";
import Product from "./Home/Product";
import { useEffect, useState } from "react";

const Home = () => {
  const products = [
    {
      name: " Smart blue button Shirt",
      price: "20.00",
      productImgSrc: "blueshirt.jpg",
      productImgAlt: "blue shirt",
      category: "Shirts",
      colour: "blue",
    },
    {
      name: "Oversized brown pants",
      price: "25.00",
      productImgSrc: "brownpants.jpg",
      productImgAlt: "brown pants",
      category: "Trousers",
      colour: "brown",
    },
    {
      name: "White design shirt",
      price: "12.50",
      productImgSrc: "chainshirt.jpg",
      productImgAlt: "white shirt",
      category: "Shirts",
      colour: "white",
    },
    {
      name: "Navy crewneck shirt",
      price: "10.00",
      productImgSrc: "navyshirt.jpg",
      productImgAlt: "navy shirt",
      category: "Shirts",
      colour: "blue",
    },
    {
      name: "Brown shirt with white collar",
      price: "15.00",
      productImgSrc: "oldmoneyshirt.jpg",
      productImgAlt: "brown shirt",
      category: "Shirts",
      colour: "brown",
    },
    {
      name: "Pink crewneck shirt",
      price: "10.00",
      productImgSrc: "pinkshirt.jpg",
      productImgAlt: "pink shirt",
      category: "Shirts",
      colour: "pink",
    },
    {
      name: "Black and white oversized fluffy pants",
      price: "30",
      productImgSrc: "weirdpants.jpg",
      productImgAlt: "fluffy trousers",
      category: "Trousers",
      colour: "white",
    },
    {
      name: "White patterned shirt",
      price: "14.00",
      productImgSrc: "whiteshirt.jpg",
      productImgAlt: "white shirt",
      category: "Shirts",
      colour: "white",
    },
  ];

  const [category, setCategory] = useState([]);
  const [colour, setColour] = useState([]);

  const handleFilterSelect = (filter, setFilter, newFilter) => {
    let selectedFilters = [...filter];

    if (filter.includes(newFilter)) {
      selectedFilters = selectedFilters.filter((fil) => fil !== newFilter);
    } else {
      selectedFilters = [...selectedFilters, newFilter];
    }

    setFilter(selectedFilters);
  };

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) =>
          (category.length === 0 || category.includes(product.category)) &&
          (colour.length === 0 || colour.includes(product.colour))
      )
    );
  }, [category, colour]); // eslint-disable-line
  return (
    <>
      <h1>Home</h1>
      <div className="homeContainer">
        <div className="filterMenu">
          <p>Filter: </p>

          <FilterDropdown
            filter={category}
            setFilter={setCategory}
            filterName={"Category"}
            options={["Shirts", "Trousers"]}
            onFilter={handleFilterSelect}
          />

          <FilterDropdown
            filter={colour}
            setFilter={setColour}
            filterName={"Colour"}
            options={["blue", "brown", "white", "pink"]}
            onFilter={handleFilterSelect}
          />
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
