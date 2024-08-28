import z from "zod";
export interface FormField {
  label: string;
  placeholder: string;
  type?: "array";
  isTextarea?: boolean;
  isSelect?: boolean;
  inputType: "default" | "number-pad" | "email-address";
}

export interface GenericCard {
  cardTitle: string;
  formfields: FormField[];
  submitBtnText?: string;
  validation_schema: z.ZodTypeAny;
  apiFunction: (data: object) => Promise<any>;
}

export interface GenericPageProps {
  heading: string;
  desc: string;
  cardHeading: string;
  cards: GenericCard[];
}
