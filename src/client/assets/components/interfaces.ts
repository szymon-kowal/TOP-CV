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

export interface DBProps {
  educationData: Array<Record<string, string>>;
  experienceData: Array<Record<string, string>>;
}
export type KeyDBProps = "educationData" | "experienceData";
