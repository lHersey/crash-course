import { useState } from "react";
import { Button } from "./Button";

const Contador = () => {
  const [contador, setContador] = useState(0); //[ valor, funcionQueModificaElValor ]
  const [textoContador, setTextoContador] = useState("");

  console.log("Me estoy renderizando de nuevo!");

  return (
    <div>
      <Button
        text={"Contador: " + contador}
        onClick={() => {
          setContador(contador + 1);
          setTextoContador("Contador: " + (contador + 1));
        }}
      />
      <input type="text" onChange={e => setTextoContador(e.target.value)} value={textoContador} />
    </div>
  );
};

export { Contador };
