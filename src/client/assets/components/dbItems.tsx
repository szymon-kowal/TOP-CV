import React, { useState } from "react";
import type { KeyDBProps, DBProps } from "./interfaces";

interface DBItemsProps {
  database: DBProps;
  keyDB: KeyDBProps;
  onSave: (keyDB: KeyDBProps, updatedData: object, index: number) => void;
  onRemove: (keyDB: KeyDBProps, index: number) => void;
}

// todo: I have one state for all objects that i got from DB, need to adress it
const DBItems: React.FC<DBItemsProps> = ({
  database,
  keyDB,
  onRemove,
  onSave,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (key: string, value: string): void => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleSaveClick = (index: number): void => {
    onSave(
      keyDB,
      { ...(database[keyDB][index] as object), ...formData },
      index,
    );
    // Reset form data after saving
    setFormData({});
  };

  return (
    <div className={keyDB}>
      {database[keyDB].map((item: Record<string, string>, index) => (
        <div key={item.id} className="itemContainer">
          {Object.entries(item)
            .filter(([key]) => key !== "id")
            .map(([key, valueItem]) => (
              <div key={item.id} className="entryContainer">
                <span className="entryKey">{key}:</span>
                <input
                  type="text"
                  name={item.id + key}
                  value={formData[key] ?? valueItem}
                  required
                  onChange={(e) => {
                    handleInputChange(key, e.target.value);
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
      ))}
    </div>
  );
};

export default DBItems;
