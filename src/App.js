import React from 'react';
import './App.css';
import AddButton from './components/common/Button/AddButton/AddButton';
import TextInput from './components/common/TextInput/TextInput';
import Todolist from './components/Todolist/Todolist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskCounter: 0,
      tasks: [],
      text: '',
    }
  }
  addTask = (text) => {
    const task = {
      id: this.state.taskCounter,
      data: text,
      isChecked: false,
    }
    let tasks = this.state.tasks;
     tasks.push(task);
    this.setState({
      tasks: tasks,
      taskCounter: this.state.taskCounter + 1,
      text:''
    });
  }
  removeTask = (id) => {
    const curState = this.state.tasks;
    let newTasks = curState.filter(task => task.id != id);
    this.setState({ tasks: newTasks });
  }

  changeTaskState = (id) => {
    let tasks = this.state.tasks;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == id) {
        tasks[i].isChecked = !tasks[i].isChecked;
        break;
      }
    }
    this.setState({ tasks: tasks });
  }
  onTextChange = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }
  onAdd = () => {
    if (this.state.text.length > 0) {
      this.addTask(this.state.text);
    }
  }
  render() {
    return (
      <div className='App'>
        <div className='titleRow'>
          <TextInput onTextChange={this.onTextChange}  value={this.state.text}/>
          <AddButton onAdd={this.onAdd} />
        </div>
        <Todolist
          tasks={this.state.tasks}
          changeTaskState={(id) => { this.changeTaskState(id) }}
          removeTask={(id) => { this.removeTask(id) }}
        />
      </div>
    );
  }
}
export default App;
