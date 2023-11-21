import React from "react";
import type { InputProps } from "./interfaces";

const InputForm: React.FC<InputProps> = ({ fieldName, value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(fieldName, e.target.value);
        }}
      />
    </div>
  );
};

export default InputForm;
