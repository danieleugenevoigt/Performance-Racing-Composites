import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from './pages/Contact';
import CustomShop from './pages/CustomShop'
import Home from './pages/Home';
import News from './pages/News';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/custom-shop" element={<CustomShop />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
