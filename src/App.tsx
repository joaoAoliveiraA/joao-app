import React from "react";
import TarefaListar from "./components/tarefa/tarefa-listar";
import TarefaListarnaoconcluidas from "./components/tarefa/listarnaoconcluida";
import TarefaListarconcluidas from "./components/tarefa/listarconcluidas";
import TarefaCadastrar from "./components/tarefa/tarefa-cadastrar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TarefaAlterar from "./components/tarefa/tarefa-alterar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tarefa/listar">Listar Tarefas</Link>
            </li>
            <li>
              <Link to="/tarefa/cadastrar">Cadastrar Tarefas</Link>
            </li>
            <li>
              <Link to="/tarefa/atualizar">Atualizar Tarefas</Link>
            </li>
            <li>
              <Link to="/tarefa/listarnaoconcluidas">Atualizar Tarefas</Link>
            </li>
            <li>
              <Link to="/tarefa/listarconcluidas">Atualizar Tarefas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TarefaListar />} />
          <Route path="/tarefa/listar" element={<TarefaListar />} />
          <Route
            path="/tarefa/cadastrar"
            element={<TarefaCadastrar />}
          />
          <Route
            path="/tarefa/alterar/:id"
            element={<TarefaAlterar />}
          />
        </Routes>
        <footer>
          <p>Desenvolvido por Joao Armstrong</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
