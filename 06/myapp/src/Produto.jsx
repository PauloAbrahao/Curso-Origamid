import React from "react";
import { useLocation, useParams, Route, Routes, NavLink } from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

const Produto = () => {
  const params = useParams();
  const location = useLocation();

  // console.log(location);
  console.log(params);

  const search = new URLSearchParams(location.search);
  // console.log(search.get("q"));

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>

      <nav>
        <NavLink to="">Descricao</NavLink>
        <NavLink to="avaliacao">Avaliacao</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
