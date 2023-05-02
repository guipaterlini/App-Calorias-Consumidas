import { useState } from "react";

import AddButton from "../AddButton";
import InputCalorias from "../InputCalorias";
import InputComida from "../InputComida";

export default function AddForm() {
  const [comida, setComida] = useState("");
  const [calorias, setCalorias] = useState("");

  function reset() {
    setComida("");
    setCalorias("");
  }
  // função de submit

  return (
    // repassar a função de submit
    <form>
      <InputComida value={comida} onChange={setComida} />
      <InputCalorias value={calorias} onChange={setCalorias} />
      <div className="row">
        <div className="column">
          <AddButton title="adicionar" icon="+ " />
        </div>
        <div className="column">
          <button type="button" onClick={reset}>
            Resetar
          </button>
        </div>
      </div>
      <p>
        Calorias: {calorias}
        <br />
        Comida: {comida}
      </p>
    </form>
  );
}
