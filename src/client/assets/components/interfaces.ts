export interface DataObject {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  names: string[];
}

export interface InputProps {
  fieldName: string;
  value: string;
  onChange: (key: string, value: string) => void;
}

export interface DisplayProps {
  data: DataObject;
}

export interface EducationData extends DataObject {
  input5: string;
}

export interface ExperienceData extends DataObject {
  input5: string;
  input6: string;
}
