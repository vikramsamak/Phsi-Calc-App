export interface FormField {
  label: string;
  placeholder: string;
  type?: "array";
  inputType: "default" | "number-pad" | "email-address";
}

export interface GenericCard {
  cardTitle: string;
  formfields: FormField[];
  submitBtnText?: string;
  apiFunction: (data: object) => Promise<any>;
}

export interface GenericPageProps {
  heading: string;
  desc: string;
  cardHeading: string;
  cards: GenericCard[];
}
