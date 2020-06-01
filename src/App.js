import React from "react";
import TodoItem from "./TodoItem";
/*import jokesData from "./jokesData";
import Joke from "./Joke";*/
import todosData from "./todosData";

class App extends React.Component {
  /*const jokeComponents = jokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));*/
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });   
      return { todos: updatedTodos };
    });

    console.log("changed!", id);
  }

  render() {
    const tasks = this.state.todos.map((item) => (
      <TodoItem
        id={item.id}
        completed={item.completed}
        text={item.text}
        handleChange={this.handleChange}
      />
    ));

    return (
      <div>
        <h3 className="To-Do-App">Hello</h3>
        {tasks}
      </div>
    );
  }
}

export default App;
