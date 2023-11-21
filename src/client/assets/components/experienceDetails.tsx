// PersonalDetails.tsx
import React from "react";
import InputForm from "./inputForm";
import type { ExperienceData } from "./interfaces";

interface ExperienceDetailsProps {
  data: ExperienceData;
  onChange: (key: string, value: string) => void;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
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
      <InputForm
        fieldName="input6"
        value={data.input6}
        onChange={(key: string, value: string): void => {
          onChange(key, value);
        }}
      />
    </>
  );
};

export default ExperienceDetails;
