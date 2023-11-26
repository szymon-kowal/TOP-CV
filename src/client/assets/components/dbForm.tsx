import React, { useState } from "react";
import { type KeyDBProps } from "./interfaces";
import { v4 as uuidv4 } from "uuid";

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
    <div className="formContainer">
      <form onSubmit={handleFormSubmit}>
        {fieldsNames.map((name, index) => (
          <input
            type="text"
            key={name + index}
            name={name}
            onChange={handleChange}
            value={formData[name] ?? ""}
            required
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DBForm;
