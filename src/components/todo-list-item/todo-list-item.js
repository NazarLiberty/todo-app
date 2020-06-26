import React from 'react';

import './todo-list-item.css';


export default class TodoListItem extends React.Component {

  render() {
    const { label, onDeleted, important, done, onToggleDone, onToggleImportant } = this.props
    let elClass = "todo-list-item"
    if (done) elClass += " done"
    if (important) elClass += " important"

    return (
      <span className={elClass}>
        <span
          onClick={onToggleDone}
          className="todo-list-item-label">
          {label}
        </span>

        <button type="button"
          onClick={onToggleImportant}
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          onClick={onDeleted}
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}


