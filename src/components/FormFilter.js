import React, { useState } from "react";

const FormFilter = props => {
  const [term, setTerm] = useState("");
  const { setFilter } = props;

  return (
    <form>
      <input
        type="text"
        value={term}
        placeholder="Filter me"
        onChange={event => {
          setFilter(event.target.value);
          setTerm(event.target.value);
        }}
      ></input>
    </form>
  );
};

export default FormFilter;
