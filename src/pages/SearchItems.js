import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const SearchItems = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data: items } = useFetch(url);
  return (
    <div>
      <h1>Resultado da consulta</h1>
      <ul>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>R$ - {item.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchItems;
