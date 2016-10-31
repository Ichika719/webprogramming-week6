import React from 'react';

export default class CountDisplay extends React.Component{
	render(){
		return(
      <footer className="footer">
        <span className="todo-count">{this.props.count} todos left.</span>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
	}
}