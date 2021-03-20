import React from 'react';
import './App.scss';
import ToDoGenerator from "./components/ToDoGenerator";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
        <ToDoGenerator />
        <ToDoList />
    </div>
  );
}

export default App;
