import { useState } from "react";
import { Tarefa } from "../../../models/Tarefa";

function TarefaCadastrar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [categoria, setCategoria] = useState<Categoria[]>([])
  const [categoriaId, setCategoriaId] = useState<Categoria[]>([])

  function cadastrar(e: any) {
    e.preventDefault();
    const tarefa: Tarefa = {
        titulo: titulo,
      descricao: descricao,
      status: status
    };
    fetch("http://localhost:5000/api/tarefa/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => resposta.json())
      .then((tarefaCadastrado: Tarefa) => {
        console.log(tarefaCadastrado);
      });
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={cadastrar}>
        <label>titulo:</label>
        <input
          type="text"
          onChange={(e: any) => setTitulo(e.target.value)}
          required
        />{" "}
        <br />
        <label>Descrição:</label>
        <input
          type="text"
          onChange={(e: any) => setDescricao(e.target.value)}
        />{" "}
        <br />
        <label>Status:</label>
        <input
          type="text"
          onChange={(e: any) => setStatus(e.target.value)}
        />{" "}
        <select  onChange={(e: any) => setCategoriaId(.target.value)}>{categoria.map((categoria) => (
          <option value={categoria.id} key={categoria.id}>
          {categoria.nome}
          </option>
           ))}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default TarefaCadastrar;
