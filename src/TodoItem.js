import React from 'react';

export default class TodoItem extends React.Component {
	render() {
		return(
			<li className={ this.props.completed ? 'completed' : '' }>
        <div className="view">
          <input className="toggle" type="checkbox" checked={ this.props.completed } onClick={this.props.onToggle}/>
          <label>{this.props.todoTitle }</label>
          <button className="destroy"></button>
        </div>
      </li>
    );
	}
}