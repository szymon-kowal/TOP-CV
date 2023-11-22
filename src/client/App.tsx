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
import dataBasic from "./assets/components/inputData";

const App: React.FC = () => {
  const [data, setData] = useState<DataObject>(dataBasic.data);

  const [educationData, setEducationData] = useState<EducationData>(
    dataBasic.education,
  );

  const [experienceData, setExperienceData] = useState<ExperienceData>(
    dataBasic.experience,
  );

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
      <h1>CV Maker</h1>
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
