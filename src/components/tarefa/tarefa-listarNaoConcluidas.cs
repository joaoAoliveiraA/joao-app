import { useEffect, useState } from "react";
import { Tarefa } from "../../../models/Tarefa";
import { Link } from "react-router-dom";
import axios from "axios";

function TarefaListarnaoconcluidas() {
  const [tarefa, setTarefa] = useState<Tarefa[]>([]);
 
  useEffect(() => {
    console.log("Executar algo ao carregar o componente...");
    carregarTarefas();
  }, []);

  function carregarTarefas() {
    fetch("http://localhost:5000/api/tarefas/naoconcluidas")
      .then((resposta) => resposta.json())
      .then((tarefas: Tarefa[]) => {
        setTarefa(tarefas);
        console.table(tarefas);
      })
      .catch((erro) => {
        console.log("Deu erro!");
      });
  }

  return (
    <div>
      <h1>Listar Tarefas concluidas</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Desrição</th>
            <th>Status</th>
            <th>criadoEm</th>
            <th>cateagoria</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id}>
              <td>{tarefa.id}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.status}</td>
              <td>{tarefa.criadoEm}</td>
              <td>{tarefa.cateagoria}</td>
              <td>
              </td>
              <td>
                <Link to={`/tarefa/alterar/${tarefa.id}`}>
                  Alterar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TarefaListarnaoconcluidas;
