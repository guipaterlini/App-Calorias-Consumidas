import { useState } from "react";

import { Comida } from "./types";
import InputComida from "./components/InputComida";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [comidas, setComidas] = useState<Comida[]>([]);

  // função para adicionar uma comida a lista
  function adicionarComida(item: Comida) {
    setComidas([...comidas, item]);
    setInputValue("");
  }

  return (
    <div style={{ padding: "15px" }}>
      <InputComida
        adicionarComida={adicionarComida}
        value={inputValue}
        onChange={setInputValue}
      />
      <table>
        <thead>
          <tr>
            <th>Comida</th>
            <th>Categoria</th>
            <th>Calorias</th>
          </tr>
        </thead>
        <tbody>
          {comidas.map((item) => (
            <tr>
              <td>{item.food}</td>
              <td>{item.category}</td>
              <td>{item.kcal}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td />
            <td>
              <b>{comidas.reduce((acc, item) => acc + Number(item.kcal), 0)}</b>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
