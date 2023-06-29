import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Info = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  const { data: item, loading, error } = useFetch(url);
  return (
    <div>
      {error && <p>Ocooreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {item && (
        <div>
          <h2>{item.name}</h2>
          <p>R$ - {item.price}</p>
        </div>
      )}
    </div>
  );
};

export default Info;
