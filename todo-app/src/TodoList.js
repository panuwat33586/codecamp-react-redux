import React from 'react'
import Todo from './components/Todo'
import NewTodo from "./components/NewTodo"
import styles from './TodoList.module.css'


class TodoList extends React.Component {
  state = {
    todos:[{ticked:false,name:"Mash"}],
     textValue:""
  }
  handleAdd = () => {
    if (!this.state.textValue) return
    this.setState(
      state => ({
        todos: state.todos.concat({ ticked: false, name: state.textValue })
      }),
      () => {
        this.setState({ textValue: '' })
      }
    )
  }
  handleValue=(e)=>{
       console.log(e.target.value)
       this.setState({
         textValue:e.target.value
       })
  }
  handleTick = (idx) => {
    this.setState(state => ({
      todos: state.todos.map((todo, todoIdx) =>
        todoIdx === idx ? { ...todo, ticked: !todo.ticked } : todo
      )
    }))
  }
  handleDelete = (idx) => {
    this.setState(state => ({
      todos: state.todos.filter((todo, todoIdx) => todoIdx !== idx)
    }))
  }
  render = () => {
    return <div className={styles.Root}>
      <NewTodo value={this.state.textValue} onValue={this.handleValue} onAdd={this.handleAdd} />
      {this.state.todos.map((todo,idx)=>(
        <Todo key={idx} ticked={todo.ticked} name={todo.name} id={idx} onDelete={() => this.handleDelete(idx)} onTick={() => this.handleTick(idx)} />
      ))}
    </div>
  }
}

export default TodoList


