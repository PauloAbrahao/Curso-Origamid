import React from "react";
import styles from './Produtos.module.css'
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProdutos(json))
  }, []);

  // console.log(produtos);

  if (produtos === null) return null
  return (
    <div className={styles.produtos}>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <img src={produto.fotos[0].src} />
        </Link>
      ))}
    </div>
  );
};

export default Produtos;
