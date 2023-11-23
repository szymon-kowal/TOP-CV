import React from "react";
import InputField from "./inputField";
import { keyToTitle } from "./helperFunctions";

interface InputGroupProps {
  data: Record<string, string>;
  onChange: (keyName: string, val: string) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ data, onChange }) => {
  return (
    <>
      {Object.entries(data).map(([fieldName, val]) => (
        <div key={fieldName} className={`${fieldName} item`}>
          <label>{keyToTitle(fieldName)}</label>
          <InputField value={val} fieldName={fieldName} onChange={onChange} />
        </div>
      ))}
    </>
  );
};

export default InputGroup;
