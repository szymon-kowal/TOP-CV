import React, { useState } from "react";
import "./assets/styles/styles.css";
import InputForm from "./assets/components/inputForm";
import DisplayVal from "./assets/components/displayForm";

const App: React.FC = () => {
  const [inputValues, setInputValues] = useState<Record<string, string>>({
    input1: "",
    input2: "",
  });

  function handleChange(fieldname: string, value: string): void {
    setInputValues((prevVal) => ({
      ...prevVal,
      [fieldname]: value,
    }));
  }

  return (
    <>
      <h1>Hello World</h1>
      <InputForm
        fieldName="input1"
        value={inputValues.input1}
        onChange={handleChange}
      />
      <InputForm
        fieldName="input2"
        value={inputValues.input2}
        onChange={handleChange}
      />
      <DisplayVal inputValues={inputValues} />
    </>
  );
};

export default App;
