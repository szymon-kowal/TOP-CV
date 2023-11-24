import React from "react";
import type { DbProps } from "./interfaces";

const DisplaySide: React.FC<DbProps> = ({
  personalData,
  educationData,
  experienceData,
}) => {
  return (
    <div className="rightSide">
      <div className="cvCont">
        <div className="cvHeader">
          <div className="name">{personalData.fullName}</div>
          <div className="personalDataCont">
            <div className="">{personalData.email}</div>
            <div className="">{personalData.phoneNumber}</div>
            <div className="">{personalData.address}</div>
          </div>
        </div>
        <div className="cvContent">
          {educationData.length > 0 ? (
            <div className="education">
              <div className="title">Education</div>
              {educationData.map((item) => (
                <div className="content" key={item.school}>
                  <div>
                    <div className="strong">
                      {item.startDate}
                      <span> - </span>
                      {item.endDate}
                    </div>
                    <div>{item.location}</div>
                  </div>
                  <div>
                    <div className="strong">{item.school}</div>
                    <div>{item.degree}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {experienceData.length > 0 ? (
            <div className="experience">
              <div className="title">Professional Experience</div>
              {experienceData.map((item) => (
                <div className="content" key={item.companyName}>
                  <div>
                    <div className="strong">
                      {item.startDate}
                      <span> - </span>
                      {item.endDate}
                    </div>
                    <div>{item.location}</div>
                  </div>
                  <div>
                    <div className="strong">{item.companyName}</div>
                    <div>{item.positionTitle}</div>
                    <div>{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DisplaySide;
