import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
