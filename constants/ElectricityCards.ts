import { getapiResponse } from "@/helpers/GetapiResult";
import { GenericCard } from "../types/InterFaces";

const force_electrostatics: GenericCard = {
  cardTitle: "Force Electrostatics",
  formfields: [
    {
      label: "Q1",
      placeholder: "Enter Magnitude (q1)",
      inputType: "number-pad",
    },
    {
      label: "Q2",
      placeholder: "Enter Magnitude (q2)",
      inputType: "number-pad",
    },
    {
      label: "Resistance",
      placeholder: "Enter Resistance",
      inputType: "number-pad",
    },
  ],
  apiFunction: async (data: object) =>
    await getapiResponse("/electricity/force_electrostatics", data),
};

const resistance: GenericCard = {
  cardTitle: "Resistance",
  formfields: [
    {
      label: "Voltage",
      placeholder: "Enter Voltage (V)",
      inputType: "number-pad",
    },
    {
      label: "Current",
      placeholder: "Enter Current (C)",
      inputType: "number-pad",
    },
  ],
  apiFunction: async (data: object) =>
    await getapiResponse("/electricity/resistance", data),
};

const current: GenericCard = {
  cardTitle: "Current",
  formfields: [
    {
      label: "Voltage",
      placeholder: "Enter Voltage (V)",
      inputType: "number-pad",
    },
    {
      label: "Resistance",
      placeholder: "Enter Resistance",
      inputType: "number-pad",
    },
  ],
  apiFunction: async (data: object) =>
    await getapiResponse("/electricity/current", data),
};

const voltage: GenericCard = {
  cardTitle: "Voltage",
  formfields: [
    { label: "Current", placeholder: "Enter Current", inputType: "number-pad" },
    {
      label: "Resistance",
      placeholder: "Enter Resistance",
      inputType: "number-pad",
    },
  ],
  apiFunction: async (data: object) =>
    await getapiResponse("/electricity/voltage", data),
};

const power: GenericCard = {
  cardTitle: "Power",
  formfields: [
    { label: "Voltage", placeholder: "Enter Voltage", inputType: "number-pad" },
    { label: "Current", placeholder: "Enter Current", inputType: "number-pad" },
  ],
  apiFunction: async (data: object) =>
    await getapiResponse("/electricity/power", data),
};

export const electricityCards: GenericCard[] = [
  {
    cardTitle: force_electrostatics.cardTitle,
    formfields: force_electrostatics.formfields,
    apiFunction: force_electrostatics.apiFunction,
  },
  {
    cardTitle: resistance.cardTitle,
    formfields: resistance.formfields,
    apiFunction: resistance.apiFunction,
  },
  {
    cardTitle: current.cardTitle,
    formfields: current.formfields,
    apiFunction: current.apiFunction,
  },
  {
    cardTitle: voltage.cardTitle,
    formfields: voltage.formfields,
    apiFunction: voltage.apiFunction,
  },
  {
    cardTitle: power.cardTitle,
    formfields: power.formfields,
    apiFunction: power.apiFunction,
  },
];
