import FilterDropdown from "./Home/FilterDropdown";
import Product from "./Home/Product";
import { useEffect, useState } from "react";

const Home = ({ products }) => {
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
