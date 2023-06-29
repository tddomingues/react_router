import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

import "./Produtos.css";

const Produtos = () => {
  const url = "http://localhost:3000/products";

  const { data: items } = useFetch(url);
  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>R$ - {item.price}</p>
              <Link to={`/info/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Produtos;
