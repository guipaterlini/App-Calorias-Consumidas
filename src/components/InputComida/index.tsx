import axios from "axios";
import { Comida } from "../../types";
import { useQuery } from "react-query";

type Props = {
  value: string;
  onChange: (value: string) => void;
  adicionarComida: (comida: Comida) => void;
};

const pesquisarComida = async (query: string): Promise<Comida[]> => {
  const response = await axios.get(
    `https://foods-json-server.onrender.com/foods?q=${query}`
  );
  return response.data;
};

export default function InputComida(props: Props) {
  const { data, isLoading } = useQuery(
    ["pesquisaDeComida", props.value],
    () => pesquisarComida(props.value),
    { enabled: props.value.length > 4 }
  );

  return (
    <div>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        type="text"
        name="comida"
        placeholder="Comida"
      />
      {isLoading && <p>Carregando ...</p>}
      {data?.map((comida) => (
        <div className="row" key={comida.food}>
          <div className="column">
            <p>
              {comida.food} - Calorias: {comida.kcal}
            </p>
          </div>
          <div className="column">
            <button
              type="button"
              className="button-outline"
              onClick={() => props.adicionarComida(comida)}
            >
              adicionar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
