import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import "./MultiSelect.css";
export const MultiSelects = () => {
  const [values, setValues] = useState([]);
  const allOptions = {
    options: [
      { name: "value default", id: 1 },
      { name: "value 2", id: 3 },
      { name: "value 3", id: 4 },
      { name: "value 4", id: 5 },
      { name: "value 5", id: 6 },
      { name: "value 6", id: 7 },
      { name: "value 7", id: 8 },
      { name: "value 8", id: 9 },
      { name: "value 9", id: 10 },
      { name: "value 10", id: 11 },
      { name: "value 11", id: 12 },
      { name: "value 12", id: 13 },
      { name: "value 13", id: 14 },
      { name: "value 14", id: 15 },
    ],
  };
  function onSelectValue(value) {
    setValues(value);
    console.log(values, "values");
  }
  function onRemoveValue(value) {
    setValues(value);
    console.log(values, "values");
  }
  return (
    <>
      <div className="multi-select-container">
        <div>
          <h1>MultiSelect</h1>
          <Multiselect
            options={allOptions.options}
            onSelect={onSelectValue}
            onRemove={onRemoveValue}
            displayValue="name"
          />
        </div>
      </div>
    </>
  );
};
