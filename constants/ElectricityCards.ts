import { getapiResult } from "@/helpers/getapiResult";

export interface FormField {
  label: string;
  placeholder: string;
}

export interface ElectricityCard {
  cardTitle: string;
  formfields: FormField[];
  apiFunction: (data: any) => Promise<any>;
}

const force_electrostatics = {
  cardTitle: "Force Electrostatics",
  formfields: [
    { label: "Q1", placeholder: "Enter Magnitude q1" },
    { label: "Q2", placeholder: "Enter Magnitude q2" },
    { label: "Resistance", placeholder: "Enter Resistance" },
  ],
  apiFunction: async (data: object) =>
    await getapiResult("/electricity/force_electrostatics", data),
};

export const electricityCards: ElectricityCard[] = [
  {
    cardTitle: force_electrostatics.cardTitle,
    formfields: force_electrostatics.formfields,
    apiFunction: force_electrostatics.apiFunction,
  },
];
