import React, { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITarefa } from "../types/tarefa";
import style from "./app.module.scss";

function App() {
  // const [tarefas, setTarefas] = useState([
  //   {
  //     tarefa: "React",
  //     tempo: "02:00:00",
  //   },
  //   {
  //     tarefa: "Javascript",
  //     tempo: "01:00:00",
  //   },
  //   {
  //     tarefa: "Typescript",
  //     tempo: "03:00:00",
  //   },
  // ]); Dados para teste

  const [tarefas, setTarefas] = useState<ITarefa[]>([]); // informando que pode ter um array de tarefas ou vazio
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro />
    </div>
  );
}

export default App;
