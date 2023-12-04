import React from "react";

interface CVContentProps {
  personalData: Record<string, string>;
  educationData: Array<Record<string, string>>;
  experienceData: Array<Record<string, string>>;
}

const CVContent: React.FC<CVContentProps> = ({
  personalData,
  educationData,
  experienceData,
}) => {
  return (
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
          <div className="personalText adress">{personalData.address}</div>
          <div className="personalText phoneNumber">
            {personalData.phoneNumber}
          </div>
          <div className="personalText email">{personalData.email}</div>
        </div>
      </div>
      <div className="verticalLine"></div>
      <div className="personalText description">{personalData.description}</div>
      <div className="cvText">
        <div className="titleCV">Education</div>
        {educationData.map((eduItem, index) => (
          <div key={index} className="itemDB education">
            <div className="titleItem">{eduItem.degree}</div>
            <div className="dbText">
              <strong>{eduItem.school}</strong>
              {" - " +
                eduItem.location +
                " | " +
                eduItem.startDate +
                " - " +
                eduItem.endDate}
            </div>
          </div>
        ))}

        <div className="titleCV">Experience</div>
        {experienceData.map((expItem, index) => (
          <div key={index} className="itemDB experience">
            <div className="experienceTitle">
              <div className="titleItem">{expItem.positionTitle}</div>
              <div className="titleExperience">
                {expItem.companyName +
                  " " +
                  expItem.location +
                  " | " +
                  expItem.startDate +
                  expItem.endDate}
              </div>
            </div>
            <div className="experienceCont">{expItem.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVContent;
