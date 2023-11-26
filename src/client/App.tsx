import React, { useState } from "react";
import PersonalDataForm from "./assets/components/personalDataForm";
import type { DBProps, KeyDBProps } from "./assets/components/interfaces";
import DBForm from "./assets/components/dbForm";
import DBItems from "./assets/components/dbItems";

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
    "school",
    "location",
    "degree",
    "startDate",
    "endDate",
  ];

  const experienceNames = [
    "companyName",
    "location",
    "positionTitle",
    "startDate",
    "endDate",
    "description",
  ];

  const itemSave = (
    keyDB: KeyDBProps,
    updatedData: object,
    index: number,
  ): void => {
    setDb((currData) => ({
      ...currData,
      [keyDB]: currData[keyDB].map((item, i) =>
        i === index ? updatedData : item,
      ),
    }));
  };

  const itemRemove = (keyDB: KeyDBProps, index: number): void => {
    setDb((currData) => ({
      ...currData,
      [keyDB]: currData[keyDB].filter((_, i) => i !== index),
    }));
  };

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
      <DBItems
        database={db}
        keyDB={"educationData"}
        onRemove={itemRemove}
        onSave={itemSave}
      />
      {JSON.stringify(personalData, null, 2)}
      {JSON.stringify(db, null, 2)}
      <p>{personalData.name}</p>
    </div>
  );
};

export default App;
