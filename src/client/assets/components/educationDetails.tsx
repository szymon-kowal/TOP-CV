// educationDetails.tsx
import React from "react";
import InputForm from "./inputForm";
import type { EducationData } from "./interfaces";

interface EducationDetailsProps {
  data: EducationData;
  onChange: (key: string, value: string) => void;
}

const EducationDetails: React.FC<EducationDetailsProps> = ({
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
      <InputForm
        fieldName="input5"
        value={data.input5}
        onChange={(key: string, value: string): void => {
          onChange(key, value);
        }}
      />
    </>
  );
};

export default EducationDetails;
