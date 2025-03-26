import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories(categories => [ inputValue,...categories ])
    setInputValue("");
    onNewCategory(inputValue.trim());
  };
  return (
    <form style={{ width: "90%" }} onSubmit={onSubmit} aria-label="form">
      <input
        value={inputValue}
        type="text"
        placeholder="Buscar gifs"
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
