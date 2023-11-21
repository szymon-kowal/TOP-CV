// PersonalDetails.tsx
import React from "react";
import InputForm from "./inputForm";
import type { DataObject } from "./interfaces";

interface PersonalDetailsProps {
  data: DataObject;
  onChange: (key: string, value: string) => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  data,
  onChange,
}) => {
  return (
    <>
      <InputForm
        fieldName="input1"
        value={data.input1}
        onChange={(key: string, value: string): void => {
          onChange(key, value);
        }}
      />
      <InputForm
        fieldName="input2"
        value={data.input2}
        onChange={(key: string, value: string): void => {
          onChange(key, value);
        }}
      />
      <InputForm
        fieldName="input3"
        value={data.input3}
        onChange={(key: string, value: string): void => {
          onChange(key, value);
        }}
      />
      <InputForm
        fieldName="input4"
        value={data.input4}
        onChange={(key: string, value: string): void => {
          onChange(key, value);
        }}
      />
    </>
  );
};

export default PersonalDetails;
