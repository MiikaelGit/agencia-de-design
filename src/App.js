import Rodape from "./componentes/Rodape";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Topo from "./componentes/Topo";
import './App.css';
import { useState } from "react";

export default function App() {

  const [temaEscuro, setTemaEscuro] = useState(true);

  const alterarTema = () => {
    setTemaEscuro(!temaEscuro);
  }

  return (
    <main>
      <Topo alterarTema={alterarTema} temaEscuro={temaEscuro} />
      <SecaoBanner temaEscuro={temaEscuro} />
      <SecaoExperienciaTrabalho temaEscuro={temaEscuro} />
      <Rodape temaEscuro={temaEscuro} />
    </main>
  );
}

