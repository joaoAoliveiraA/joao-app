import { useEffect, useState } from "react";
import { Tarefa } from "../../../models/tarefa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function TarefaAlterar() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("");

 
  

  function salvar(e: any) {
    e.preventDefault();
    const tarefa: Tarefa = {
        titulo: titulo,
      descricao: descricao,
      status: status
      
    };
    axios
      .put<Tarefa>(
        `http://localhost:5000/api/tarefa/alterar/${id}`,
        tarefa
      )
      .then((tarefaAlterado) => {
        navigate("/tarefa/listar");
      });
  }

  return (
    <div>
      <h1>Alterar Tarefa</h1>
      <form onSubmit={salvar}>
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
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default TarefaAlterar;
