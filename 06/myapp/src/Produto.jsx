import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Produto = () => {
  const params = useParams();
  const location = useLocation();

  // console.log(location);

  const search = new URLSearchParams(location.search);
  // console.log(search.get("q"));

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  );
};

export default Produto;
