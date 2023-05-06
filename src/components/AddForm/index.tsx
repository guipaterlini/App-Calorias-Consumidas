import { useState } from "react";

import InputComida from "../InputComida";
import { Comida } from "../../types";

type Props = {
  onSubmit: (item: Comida) => void;
};

export default function AddForm(props: Props) {
  const [comida, setComida] = useState("");

  function reset() {
    setComida("");
  }

  function adicionarComida(comida: Comida) {
    props.onSubmit(comida);
    reset();
  }

  return (
    // repassar a função de submit no onsubmit
    <form>
      <InputComida
        adicionarComida={adicionarComida}
        value={comida}
        onChange={setComida}
      />
    </form>
  );
}
