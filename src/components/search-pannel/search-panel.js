import React from 'react';
import './search-panel.css';

const SearchPanel = ({ onSearch }) => {
  const actionSearch = (ev) => {
    onSearch(ev.target.value)
  }
  return (
    <input type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={actionSearch} />
  );
};

export default SearchPanel;
