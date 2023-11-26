export interface DbProps {
  personalData: Record<string, string>;
  experienceData: Array<Record<string, string>>;
  educationData: Array<Record<string, string>>;
}

export interface PersonalData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface ExperienceData {
  startDate: string;
  endDate: string;
  location: string;
  companyName: string;
  positionTitle: string;
  description: string;
}

export interface DBProps {
  educationData: [];
  experienceData: [];
}
export type KeyDBProps = "educationData" | "experienceData";
