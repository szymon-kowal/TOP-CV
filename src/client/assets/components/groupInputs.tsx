import React, { useState } from "react";
import { type DBProps, type KeyDBProps } from "./interfaces";
import { keyToTitle } from "./helperFunctions";

interface GroupedInputProps {
  initialValues: Record<string, string>;
  id: string;
  keyDB: KeyDBProps;
  index: number;
  database: DBProps;
  onSave: (keyDB: KeyDBProps, updatedData: object, index: number) => void;
  onRemove: (keyDB: KeyDBProps, index: number) => void;
}

const GroupedInput: React.FC<GroupedInputProps> = ({
  database,
  index,
  id,
  initialValues,
  keyDB,
  onSave,
  onRemove,
}) => {
  const [formData, setFormData] =
    useState<Record<string, string>>(initialValues);

  const handleSetFormData = (key: string, value: string): void => {
    setFormData((currentData) => ({ ...currentData, [key]: value }));
  };

  const handleSaveClick = (index: number): void => {
    onSave(
      keyDB,
      { ...(database[keyDB][index] as object), ...formData },
      index,
    );
  };

  return (
    <div key={id} className="itemContainer flexCol">
      {Object.entries(formData)
        .filter(([key]) => key !== "id")
        .map(([key, valueItem]) => (
          <input
            key={id + key}
            type="text"
            name={id + key}
            value={formData[key] ?? valueItem}
            placeholder={keyToTitle(key)}
            required
            onChange={(e) => {
              handleSetFormData(key, e.target.value);
            }}
          />
        ))}
      <div className="buttonsCont">
        <button
          className="btn add"
          onClick={() => {
            handleSaveClick(index);
          }}
        >
          Save
        </button>
        <button
          className="btn remove"
          onClick={() => {
            onRemove(keyDB, index);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default GroupedInput;
