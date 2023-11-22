import React, { useState } from "react";
import InputGroup from "./assets/components/inputGroup";
// import { keyToTitle } from "./assets/components/helperFunctions";
// todo - send data to db, clear data from inputs
interface DbProps {
  personalData: Array<Record<string, string>>;
  experienceData: Array<Record<string, string>>;
  educationData: Array<Record<string, string>>;
}

const App: React.FC = () => {
  const [db, setDb] = useState<DbProps>({
    personalData: [],
    experienceData: [],
    educationData: [],
  });

  const [personalData, setPersonalData] = useState<Record<string, string>>({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [experienceData, setExperienceData] = useState<Record<string, string>>({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [educationData, setEducationData] = useState<Record<string, string>>({
    school: "",
    description: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  // const [visibility, setVisibility] = useState<string>();

  function handlePersonalData(keyName: string, val: string): void {
    setPersonalData((prevData) => ({ ...prevData, [keyName]: val }));
  }

  function handleExperienceData(keyName: string, val: string): void {
    setExperienceData((prevData) => ({ ...prevData, [keyName]: val }));
  }

  function handleEducationData(keyName: string, val: string): void {
    setEducationData((prevData) => ({ ...prevData, [keyName]: val }));
  }

  /* <div>{keyToTitle(Object.keys(personalData)[0])}</div> */
  return (
    <>
      <InputGroup data={personalData} onChange={handlePersonalData} />
      <InputGroup data={experienceData} onChange={handleExperienceData} />
      <InputGroup data={educationData} onChange={handleEducationData} />
      <button></button>
    </>
  );
};

export default App;
