import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Saludo = (props: Props) => {
  return (
    <div style={{ border: "1px solid red", margin: 10, padding: 10 }}>
      <h2>Esta es mi aplicación de React</h2>
      <p>Que te parece?</p>
      {props.children}
    </div>
  );
};

export { Saludo };
