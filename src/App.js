import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import ProductPage from "./Components/ProductPage";
import { useState } from "react";

function App() {
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

  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            }
          />
          {products.map((product) => (
            <Route
              key={product.name}
              path={"/" + product.name}
              element={
                <ProductPage product={product} onAdd={handleAddToCart} />
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
