export interface FormField {
  label: string;
  placeholder: string;
}

export interface ElectricityCard {
  cardTitle: string;
  formfields: FormField[];
  apiFunction: (data: any) => void;
}

export const electricityCards: ElectricityCard[] = [
  {
    cardTitle: "Resistance",
    formfields: [{ label: "Voltage", placeholder: "Enter voltage (V)" }],
    apiFunction: (data: any) => {
      console.log(data);
    },
  },
];
