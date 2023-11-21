import React from "react";

interface InputFieldProps {
  fieldName: string;
  value: string;
  onChange: (fieldname: string, value: string) => void;
}

const InputForm: React.FC<InputFieldProps> = ({
  fieldName,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(fieldName, event.target.value);
  };

  return (
    <div>
      <label htmlFor={fieldName}>{fieldName}:</label>
      <input type="text" id={fieldName} value={value} onChange={handleChange} />
    </div>
  );
};

export default InputForm;
