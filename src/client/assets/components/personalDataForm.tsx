import React from "react";
import { keyToTitle } from "./helperFunctions";

interface PersonalDataFormProps {
  personalData: Record<string, string>;
  inputFnc: (key: string, value: string) => void;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({
  personalData,
  inputFnc,
}) => {
  return (
    <form className="personalForm">
      {Object.keys(personalData).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          placeholder={keyToTitle(key)}
          onChange={(e) => {
            inputFnc(key, e.target.value);
          }}
        />
      ))}
    </form>
  );
};

export default PersonalDataForm;
