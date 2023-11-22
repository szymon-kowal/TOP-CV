// InputField.tsx
import React from "react";

interface InputFieldProps {
  value: string;
  fieldName: string;
  onChange: (keyName: string, val: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  fieldName,
  onChange,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => {
        onChange(fieldName, event.target.value);
      }}
    />
  );
};

export default InputField;
