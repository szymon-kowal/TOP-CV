import React, { useState } from "react";
import PersonalDataForm from "./assets/components/personalDataForm";
import type { DBProps, KeyDBProps } from "./assets/components/interfaces";
import DBForm from "./assets/components/dbForm";
import DBItems from "./assets/components/dbItems";

const App: React.FC = () => {
  const [db, setDb] = useState<DBProps>({
    educationData: [
      {
        school: "school",
        location: "loc",
        degree: "def",
        startDate: "start",
        endDate: "end",
      },
    ],
    experienceData: [
      {
        companyName: "compName",
        location: "location",
        positionTitle: "position",
        startDate: "start",
        endDate: "end",
        description: "description",
      },
    ],
  });

  const [personalData, setPersonalData] = useState<Record<string, string>>({
    firstName: "sz",
    lastName: "ko",
    title: "it",
    adress: "wro",
    phoneNumber: "555",
    email: "interia",
    description: "programmer",
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
    <div className="container">
      <div className="header">CV Maker</div>
      <div className="mainContent">
        <div className="leftSide">
          <PersonalDataForm
            personalData={personalData}
            inputFnc={handlePersonalData}
          />

          <DBForm
            handleSubmit={handleSetDB}
            keyDB={"educationData"}
            fieldsNames={eduactionNames}
          />
          <DBItems
            database={db}
            keyDB={"educationData"}
            onRemove={itemRemove}
            onSave={itemSave}
          />
          <DBForm
            handleSubmit={handleSetDB}
            keyDB={"experienceData"}
            fieldsNames={experienceNames}
          />

          <DBItems
            database={db}
            keyDB={"experienceData"}
            onRemove={itemRemove}
            onSave={itemSave}
          />
        </div>
        <div className="rightSide">
          <div className="cvContent">
            <div className="cvHeader">
              <div className="textLeft">
                <div className="textName">
                  <p className="nameText">
                    {personalData.firstName + " "}
                    {personalData.lastName}
                  </p>
                </div>
                <div className="textTitle">{personalData.title}</div>
              </div>
              <div className="textRight">
                <div className="personalText adress">{personalData.adress}</div>
                <div className="personalText phoneNumber">
                  {personalData.phoneNumber}
                </div>
                <div className="personalText email">{personalData.email}</div>
              </div>
            </div>
            <div className="verticalLine"></div>
            <div className="personalText description">
              {personalData.description}
            </div>
            <div className="cvText">
              <div className="titleCV">Education</div>
              <div className="itemDB education">
                <div className="titleItem">{db.educationData[0].degree}</div>
                <div className="dbText">
                  <strong>{db.educationData[0].school}</strong>
                  {" - " +
                    db.educationData[0].location +
                    " | " +
                    db.educationData[0].startDate +
                    " - " +
                    db.educationData[0].endDate}
                </div>
              </div>

              <div className="titleCV">Experience</div>
              <div className="itemDB experience">
                <div className="experienceTitle">
                  <div className="titleItem">
                    {db.experienceData[0].positionTitle}
                  </div>
                  <div className="titleExperience">
                    {db.experienceData[0].companyName +
                      " " +
                      db.experienceData[0].location +
                      " | " +
                      db.experienceData[0].startDate +
                      db.experienceData[0].endDate}
                  </div>
                </div>
                <div className="experienceCont">
                  {db.experienceData[0].description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">Made by Szymon Kowal (github)</div>
    </div>
  );
};

export default App;
