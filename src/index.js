import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './TodoItem';
import CountDisplay from './CountDisplay';

import './todo.css';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          todoTitle: 'pusheen1',
          completed: true,
        },
        {
          todoTitle: 'pusheen2',
          completed: false,
        },
        {
          todoTitle: 'pusheen3',
          completed: true,
        }
      ],
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleKeyPress(event) {
    console.log(this.state);
    if (event.key === 'Enter') {
      this.setState({
        text: '',
        todos: [...this.state.todos, {
          todoTitle: this.state.text,
          completed: false,
        }],
      });
    }
  }

  handleCheck(index) {
    return () => {
      const newTodos = [...this.state.todos];
      newTodos[index].completed = !newTodos[index].completed;
      this.setState({
        todos: newTodos
      });
    };
  }

  render() {
    let todoLeft = 0;
    for (let i = 0; i < this.state.todos.length; ++i) {
      if (!this.state.todos[i].completed) { todoLeft++; }
    }

    return (
	  <section className="todoapp">
  		<header className="header">
  			<h1>todos</h1>
  			<input className="new-todo"
               placeholder="What needs to be done?"
               autoFocus
               onChange={this.handleChange}
               onKeyPress={this.handleKeyPress}
               value={this.state.text} />
  		</header>
  		<section className="main">
  			<input className="toggle-all" type="checkbox" />
  			<label htmlFor="toggle-all">Mark all as complete</label>
  			<ul className="todo-list">
          {
            this.state.todos.map((todo, index) => (
              <TodoItem todoTitle={todo.todoTitle}
                        completed={todo.completed}
                        onToggle={this.handleCheck(index)} />
            ))           
          }
  			</ul>
  		</section>
      <CountDisplay count={todoLeft}/>
	  </section>
	);
  }
}


class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  tick() {
    // this.setState({
    //   count: this.state.count + 2
    // });
    this.setState({
      count: this.state.text
    });
  }

  render() {
    return (
      <div>
        <div>{'Hello ' + this.state.count }</div>
        <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)} />
        <button onClick={this.tick.bind(this)}>click</button>
      </div>
    );
  }
}

Hello.defaultProps = {
  text: 'World'
};

ReactDOM.render(
<TodoApp />,
document.getElementById('root')
 );


