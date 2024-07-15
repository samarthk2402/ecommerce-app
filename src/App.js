import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
      </ul>
      </nav>  

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </ div>
    </Router>
  );
}

export default App;
