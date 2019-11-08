import React, { useState } from "react";

const FormFilter = props => {
  const [term, setTerm] = useState("");
  const { setFilter } = props;

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setFilter(term);
      }}
    >
      <input
        type="text"
        value={term}
        placeholder="filter me"
        onChange={event => {
          setTerm(event.target.value);
        }}
      ></input>

      <input className="submit" type="submit" value="goFilter!"></input>
    </form>
  );
};

export default FormFilter;
