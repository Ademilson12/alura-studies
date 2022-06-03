import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./Lista.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

// function Lista({
//   tarefas,
// }: //listaTarefas,
// {
//   tarefas: ITarefa[]; // Forma 1 de indicar que é um array
//   //listaTarefas: Array<ITarefa>; // Forma 2 de indicar que é um array
// });

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
