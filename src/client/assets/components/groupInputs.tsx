import React, { useState } from "react";
import {type DBProps, type KeyDBProps } from "./interfaces";

interface GroupedInputProps {
  initialValues: Record<string, string>;
  id: string;
  keyDB: KeyDBProps;
  index: number;
  database: DBProps
  onSave: (keyDB: KeyDBProps, updatedData: object, index: number) => void;
  onRemove: (keyDB: KeyDBProps, index: number) => void;
}

const GroupedInput:React.FC<GroupedInputProps> = ({database, index, id, initialValues, keyDB, onSave, onRemove}) => {
    
    const [formData, setFormData] = useState<Record<string, string>>(initialValues)
    
    const handleSetFormData = (key:string, value: string):void => {
        setFormData((currentData) => ({...currentData, [key]:value}))
    }

    const handleSaveClick = (index: number): void => {
        onSave(
          keyDB,
          { ...(database[keyDB][index] as object), ...formData },
          index,
        );
      };

    return (
    <div key={id} className="itemContainer">
    {Object.entries(formData)
      .filter(([key]) => key !== "id")
      .map(([key, valueItem]) => (
        <div key={id} className="entryContainer">
          <span className="entryKey">{key}:</span>
          <input
            type="text"
            name={id + key}
            value={formData[key] ?? valueItem}
            required
            onChange={(e) => {
                handleSetFormData(key, e.target.value);
            }}
          />
        </div>
      ))}
    <button
      onClick={() => {
        onRemove(keyDB, index);
      }}
    >
      Remove
    </button>
    <button
      onClick={() => {
        handleSaveClick(index);
      }}
    >
      Save
    </button>
  </div>
)}

export default GroupedInput;
