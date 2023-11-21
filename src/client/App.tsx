import React, { useState } from "react";
import "./assets/styles/styles.css";
import PersonalDetails from "./assets/components/personalDetails";
import EducationDetails from "./assets/components/educationDetails";
import ExperienceDetails from "./assets/components/experienceDetails";
import DisplayVal from "./assets/components/displayForm";
import type {
  DataObject,
  EducationData,
  ExperienceData,
} from "./assets/components/interfaces";

const App: React.FC = () => {
  const [data, setData] = useState<DataObject>({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    names: ["Full name", "Email", "Phone number", "Adress"],
  });

  const [educationData, setEducationData] = useState<EducationData>({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    names: ["School", "Degree", "Start Date", "End Date", "Location"],
  });

  const [experienceData, setExperienceData] = useState<ExperienceData>({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    names: [
      "Company Name",
      "Position Title",
      "Start Date",
      "End Date",
      "Location",
      "Description",
    ],
  });
  function handleSetData(key: string, value: string): void {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  function handleSetEducationData(key: string, value: string): void {
    setEducationData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  function handleSetExperienceData(key: string, value: string): void {
    setExperienceData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  return (
    <>
      <h1>Hello World</h1>
      <PersonalDetails data={data} onChange={handleSetData} />
      <EducationDetails
        data={educationData}
        onChange={handleSetEducationData}
      />
      <ExperienceDetails
        data={experienceData}
        onChange={handleSetExperienceData}
      />
      <DisplayVal data={data} />
      <DisplayVal data={educationData} />
      <DisplayVal data={experienceData} />
    </>
  );
};

export default App;
