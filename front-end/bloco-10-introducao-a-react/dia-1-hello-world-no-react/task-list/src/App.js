import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const getListItems = () => {
  const taskList = ['Estudar', 'Aperfeiçoar projetos', 'Arrumar a casa'];
  return taskList.map((taskName) => Task(taskName));
}

class App extends React.Component {
  render() {
    return (
      <>
      <h1>Lista de Tarefas</h1>
        <ol>{getListItems()}</ol>
      </>
    );
  }
}

export default App;
