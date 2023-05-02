import { FormEvent, useState } from "react";

import AddButton from "../AddButton";
import InputCalorias from "../InputCalorias";
import InputComida from "../InputComida";
import { ComidaComCalorias } from "../../App";

type Props = {
  onSubmit: (item: ComidaComCalorias) => void;
};

export default function AddForm(props: Props) {
  const [comida, setComida] = useState("");
  const [calorias, setCalorias] = useState("");

  function reset() {
    setComida("");
    setCalorias("");
  }
  // criar função de submit
  function submit(e: FormEvent) {
    e.preventDefault();
    // // chamar a funcao adiciona item na list props.onSubmit
    props.onSubmit({ comida, calorias });
    // // resetar os campos
    reset();
  }

  return (
    // repassar a função de submit no onsubmit
    <form onSubmit={submit}>
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
