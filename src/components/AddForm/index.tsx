import { useState } from "react";

import AddButton from "../AddButton";
import InputCalorias from "../InputCalorias";
import InputComida from "../InputComida";

export default function AddForm() {
    const [comida, setComida] = useState("");

  return (
    <form>
      <InputComida value={comida} onChange={setComida} />
      <InputCalorias />
      <AddButton title="adicionar" icon="+" />
    </form>
  );
}
