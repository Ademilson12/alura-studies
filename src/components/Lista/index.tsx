import React from "react";

function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "03:00:00",
    },
  ];
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        <li>
          <h3>
            {tarefas.map((item, index) => (
              <li>
                <h3>{item.tarefa}</h3>
                <span>{item.tempo}</span>
              </li>
            ))}
          </h3>
        </li>
      </ul>
    </aside>
  );
}

export default Lista;
