import z from "zod";
export interface FormField {
  label: string;
  placeholder: string;
  type: "array" | "string" | "number";
  inputType: "default" | "number-pad" | "email-address";
  isTextarea?: boolean;
  isSelect?: boolean;
}

export interface GenericCard {
  cardTitle: string;
  formfields: FormField[];
  submitBtnText?: string;
  validation_schema: z.ZodTypeAny;
  apiFunction: (data: z.infer<z.ZodTypeAny>) => Promise<any>;
}

export interface GenericPageProps {
  heading: string;
  desc: string;
  cardHeading: string;
  cards: GenericCard[];
}

export interface GenericFormProps {
  fields: FormField[];
  submitBtnText: string | undefined;
  getResult: (formValues: Record<string, any>) => Promise<any>;
  validation_schema: z.ZodTypeAny;
}

export interface GenericInputFieldProps {
  field: FormField;
  formValues: Record<string, any>;
  setFormValues: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}
