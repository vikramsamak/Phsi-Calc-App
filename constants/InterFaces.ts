export interface FormField {
  label: string;
  placeholder: string;
  type?: "array";
  inputType: "default" | "number-pad";
}

export interface GenericCard {
  cardTitle: string;
  formfields: FormField[];
  apiFunction: (data: object) => Promise<any>;
}

export interface GenericPageProps {
  heading: string;
  desc: string;
  cardHeading: string;
  cards: GenericCard[];
}
