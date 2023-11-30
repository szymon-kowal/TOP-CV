import React from "react";
import type { KeyDBProps, DBProps } from "./interfaces";
import GroupedInput from "./groupInputs";

interface DBItemsProps {
  database: DBProps;
  keyDB: KeyDBProps;
  onSave: (keyDB: KeyDBProps, updatedData: object, index: number) => void;
  onRemove: (keyDB: KeyDBProps, index: number) => void;
}

const DBItems: React.FC<DBItemsProps> = ({
  database,
  keyDB,
  onRemove,
  onSave,
}) => {
  return (
    <div className={keyDB}>
      {database[keyDB].map((item: Record<string, string>, index) => (
        <GroupedInput key={item.id} initialValues={item} id={item.id} keyDB={keyDB} index={index} database={database} onRemove={onRemove} onSave={onSave}/>
        ))}
    </div>
  );
};

export default DBItems;
