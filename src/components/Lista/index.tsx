import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./Lista.module.scss";

// function Lista({
//   tarefas,
// }: //listaTarefas,
// {
//   tarefas: ITarefa[]; // Forma 1 de indicar que é um array
//   //listaTarefas: Array<ITarefa>; // Forma 2 de indicar que é um array
// });

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
