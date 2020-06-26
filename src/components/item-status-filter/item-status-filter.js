import React from 'react';
import './item-status-filter.css';


export default class ItemStatusFilter extends React.Component {
  constructor() {
    super()
    this.state = {
      filter: "All"
    }
    this.buttons = [
      { name: "All" },
      { name: "Active" },
      { name: "Done" }
    ]
  }
  render() {
    const { onFilter, filterStatus } = this.props

    const buttons = this.buttons.map(({ name }) => {
      let isActive = false;
      if (name === filterStatus) isActive = true
      return <button type="button"
        onClick={() => onFilter(name)}
        className={isActive ? "btn btn-info" : "btn btn-outline-secondary"}>{name}</button>
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
