import "./App.css";
// import { Button } from "./Button";
import { Contador } from "./Contador";
// import { Saludo } from "./Saludo";

// SON INMUTABLES
// NO SE PUEDEN MODIFICAR
type Props = {
  text?: string;
  welcomeMessage: string;
};

const App = (props: Props) => {
  return (
    <div>
      <h1>
        {/*  */}
        {props.welcomeMessage}, bienvenido {props.text ?? "Soy por defecto"}
      </h1>
      <Contador />
      {/* <Saludo>
        <p>Soy un children del componente saludo</p>
        <Button text="Soy el primero" onClick={() => alert("Presionaste el primero")} />
        <Button text="Segundo!" onClick={() => console.log("Estoy oculto!")} />
        <button className="button">Click me</button>
      </Saludo>
      <Saludo>
        <Saludo>
          <Saludo />
        </Saludo>
      </Saludo> */}
    </div>
  );
};

export default App;
