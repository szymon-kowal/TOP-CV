import React, { useState } from "react";
import { type KeyDBProps } from "./interfaces";
import { v4 as uuidv4 } from "uuid";
import { keyToTitle } from "./helperFunctions";

interface DBFormProps {
  handleSubmit: (keyDB: KeyDBProps, valueDB: object) => void;
  keyDB: KeyDBProps;
  fieldsNames: string[];
}

const DBForm: React.FC<DBFormProps> = ({
  handleSubmit,
  keyDB,
  fieldsNames,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>(
    Object.fromEntries(fieldsNames.map((name) => [name, ""])),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((currData) => ({
      ...currData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSubmit(keyDB, { id: uuidv4(), ...formData });
    setFormData(Object.fromEntries(fieldsNames.map((name) => [name, ""])));
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexCol">
      <div className="title">{keyToTitle(keyDB)}</div>
      {fieldsNames.map((name, index) => (
        <input
          type="text"
          key={name + index}
          name={name}
          onChange={handleChange}
          value={formData[name] ?? ""}
          placeholder={keyToTitle(name)}
          required
        />
      ))}

      <button type="submit" className="btn submit">
        Submit
      </button>
    </form>
  );
};

export default DBForm;
