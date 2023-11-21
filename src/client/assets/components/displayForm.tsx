import React from "react";

interface DisplayValues {
  inputValues: Record<string, string>;
}

const DisplayVal: React.FC<DisplayValues> = ({ inputValues }) => {
  return (
    <div className="displayForm">
      <h2>Input Values:</h2>
      <ul>
        {Object.entries(inputValues).map(([fieldName, value]) => (
          <li key={fieldName}>
            {fieldName}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayVal;
