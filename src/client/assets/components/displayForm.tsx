import React from "react";
import type { DisplayProps } from "./interfaces";

const DisplayVal: React.FC<DisplayProps> = ({ data }) => {
  let i = 0;

  const inputKeys = Object.entries(data).filter(([key]) =>
    key.startsWith("input"),
  );

  return (
    <div className="outputContainer">
      {inputKeys.map(([key, value]) => (
        <div key={key}>
          <div className="titleData">{data.names[i++]}</div>
          {value}
        </div>
      ))}
    </div>
  );
};

export default DisplayVal;
