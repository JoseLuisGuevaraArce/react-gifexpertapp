import React, { useState } from 'react'
import GifExpertApp from '../GifExpertApp';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(categoria => [inputValue, ...categoria]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );

}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}