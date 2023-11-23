import React, { useState } from "react";
import InputGroup from "./assets/components/inputGroup";
import { clearValues } from "./assets/components/helperFunctions";
// import { keyToTitle } from "./assets/components/helperFunctions";
// todo - send data to db, clear data from inputs
interface DbProps {
  personalData: Array<Record<string, string>>;
  experienceData: Array<Record<string, string>>;
  educationData: Array<Record<string, string>>;
}
type setFncProps = (keyName: Record<string, string>) => void;
type BtnProps = null | "education" | "experience";

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

  const [buttonActive, setButtonActive] = useState<BtnProps>(null);

  function handlePersonalData(keyName: string, val: string): void {
    setPersonalData((prevData) => ({ ...prevData, [keyName]: val }));
  }

  function handleExperienceData(keyName: string, val: string): void {
    setExperienceData((prevData) => ({ ...prevData, [keyName]: val }));
  }

  function handleEducationData(keyName: string, val: string): void {
    setEducationData((prevData) => ({ ...prevData, [keyName]: val }));
  }

  function handleClearData(
    objParam: Record<string, string>,
    handleFnc: setFncProps,
  ): void {
    const objData = clearValues(objParam);
    handleFnc(objData);
  }

  function handleButtonActive(props: BtnProps): void {
    setButtonActive(() => props);
  }

  function handleSetDb(param: string, dataObj: Record<string, string>): void {
    setDb((prevData) => {
      switch (param) {
        case "personalData":
          return {
            ...prevData,
            personalData: [...prevData.personalData, dataObj],
          };
        case "experienceData":
          return {
            ...prevData,
            experienceData: [...prevData.experienceData, dataObj],
          };
        case "educationData":
          return {
            ...prevData,
            educationData: [...prevData.educationData, dataObj],
          };
        default:
          return prevData;
      }
    });
  }

  /* <div>{keyToTitle(Object.keys(personalData)[0])}</div> */
  return (
    <>
      <div className="personalDetialsCont">
        <h1>Personal Details</h1>
        <InputGroup data={personalData} onChange={handlePersonalData} />
      </div>

      <InputGroup data={experienceData} onChange={handleExperienceData} />
      <InputGroup data={educationData} onChange={handleEducationData} />

      <button
        onClick={() => {
          handleSetDb("personalData", { ...personalData });
        }}
      >
        push data
      </button>
      <button
        onClick={() => {
          handleSetDb("experienceData", { ...experienceData });
        }}
      >
        push data
      </button>
      <button
        onClick={() => {
          handleSetDb("educationData", { ...educationData });
        }}
      >
        push data
      </button>
      <button
        onClick={() => {
          handleButtonActive("education");
        }}
      >
        education
      </button>
      <button
        onClick={() => {
          handleClearData(educationData, setEducationData);
        }}
      >
        clear education
      </button>
      <button
        onClick={() => {
          handleButtonActive("experience");
        }}
      >
        expeirence
      </button>
      {buttonActive === "education" ? "education" : "noeducation"}
      <h5>{JSON.stringify(db)}</h5>
    </>
  );
};

export default App;
