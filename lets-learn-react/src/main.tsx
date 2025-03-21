import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MiSuperComponente from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MiSuperComponente welcomeMessage="Bienvenidos" text="Heredia!"/>
  </StrictMode>
);

// Flujo da datos UNIDIRECCIONAL

// Componente padre -> Uno hijo
