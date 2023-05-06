import { useState } from "react";

import AddForm from "./components/AddForm";
import { Comida } from "./types";

export default function App() {
  // hook de estado para salvar a lista de comidas
  const [comidas, setComidas] = useState<Comida[]>([]);

  // função para adicionar uma comida a lista
  function adicionarComida(item: Comida) {
    setComidas([...comidas, item]);
  }

  return (
    <div style={{ padding: "15px" }}>
      {/* passar para o form a função de atualizar o estado */}
      <AddForm onSubmit={adicionarComida} />
      {/* exibir a lista de comidas com base no estado */}
      <table>
        <thead>
          <tr>
            <th>Comida</th>
            <th>Calorias</th>
          </tr>
        </thead>
        <tbody>
          {comidas.map((item) => (
            <tr>
              <td>{item.food}</td>
              <td>{item.kcal}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td>
              <b>
                {comidas.reduce((acc, item) => acc + Number(item.kcal), 0)}
              </b>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
