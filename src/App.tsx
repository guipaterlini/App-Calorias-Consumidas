import { useState } from "react";

import AddForm from "./components/AddForm";

type ComidaComCaloria = {
  comida: string;
  calorias: string;
};

export default function App() {
  // hook de estado para salvar a lista de comidas
  const [comidas, setComidas] = useState<ComidaComCaloria[]>([]);

  // função para adicionar uma comida a lista
  function adicionarComida(item: ComidaComCaloria) {
    setComidas([...comidas, item]);
  }

  return (
    <div style={{ padding: "15px" }}>
      {/* passar para o form a função de atualizar o estado */}
      <AddForm />
      {/* exibir a lista de comidas com base no estado */}
      <table>
        <thead>
          <tr>
            <th>Comida</th>
            <th>Calorias</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stephen Curry</td>
            <td>27</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
