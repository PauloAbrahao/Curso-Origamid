import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Produto from './Produto';
import Home from "./Home";
import Sobre from "./Sobre";
import Header from "./Header";
import Footer from "./Footer";
import NaoEncontrada from "./NaoEncontrada";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="produto/:id" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
