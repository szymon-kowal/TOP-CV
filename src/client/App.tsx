import React, { useState } from "react";
import PersonalDataForm from "./assets/components/personalDataForm";
import type { DBProps, KeyDBProps } from "./assets/components/interfaces";
import DBForm from "./assets/components/dbForm";

const App: React.FC = () => {
  const [db, setDb] = useState<DBProps>({
    educationData: [],
    experienceData: [],
  });

  const [personalData, setPersonalData] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    title: "",
    adress: "",
    phoneNumber: "",
    email: "",
    description: "",
  });

  function handleSetDB(keyDB: KeyDBProps, valueDB: object): void {
    setDb((currData) => ({
      ...currData,
      [keyDB]: [...currData[keyDB], valueDB],
    }));
  }

  function handlePersonalData(key: string, value: string): void {
    setPersonalData((currData) => ({ ...currData, [key]: value }));
  }

  const eduactionNames = [
    "startDate",
    "endDate",
    "location",
    "school",
    "degree",
  ];

  const experienceNames = [
    "startDate",
    "endDate",
    "location",
    "companyName",
    "positionTitle",
    "description",
  ];

  return (
    <div>
      <PersonalDataForm
        personalData={personalData}
        inputFnc={handlePersonalData}
      />

      <DBForm
        handleSubmit={handleSetDB}
        keyDB={"educationData"}
        fieldsNames={eduactionNames}
      />
      <DBForm
        handleSubmit={handleSetDB}
        keyDB={"experienceData"}
        fieldsNames={experienceNames}
      />
      {JSON.stringify(personalData, null, 2)}
      {JSON.stringify(db, null, 2)}
      <p>{personalData.name}</p>
    </div>
  );
};

export default App;
