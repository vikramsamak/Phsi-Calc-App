import { getapiResponse } from "@/helpers/GetapiResult";
import { GenericCard } from "../types/InterFaces";
import {
  current_schema,
  force_electrostatics_schema,
  power_schema,
  resistance_schema,
  voltage_schema,
} from "@/schemas/ElectricitySchemas";

const force_electrostatics: GenericCard = {
  cardTitle: "Force Electrostatics",
  formfields: [
    {
      label: "Q1",
      placeholder: "Enter Magnitude (q1)",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Q2",
      placeholder: "Enter Magnitude (q2)",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Resistance",
      placeholder: "Enter Resistance",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: force_electrostatics_schema,
  apiFunction: async (data: typeof force_electrostatics_schema) =>
    await getapiResponse("/electricity/force_electrostatics", data),
};

const resistance: GenericCard = {
  cardTitle: "Resistance",
  formfields: [
    {
      label: "Voltage",
      placeholder: "Enter Voltage (V)",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Current",
      placeholder: "Enter Current (C)",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: resistance_schema,
  apiFunction: async (data: typeof resistance_schema) =>
    await getapiResponse("/electricity/resistance", data),
};

const current: GenericCard = {
  cardTitle: "Current",
  formfields: [
    {
      label: "Voltage",
      placeholder: "Enter Voltage (V)",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Resistance",
      placeholder: "Enter Resistance",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: current_schema,
  apiFunction: async (data: typeof current_schema) =>
    await getapiResponse("/electricity/current", data),
};

const voltage: GenericCard = {
  cardTitle: "Voltage",
  formfields: [
    {
      label: "Current",
      placeholder: "Enter Current",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Resistance",
      placeholder: "Enter Resistance",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: voltage_schema,
  apiFunction: async (data: typeof voltage_schema) =>
    await getapiResponse("/electricity/voltage", data),
};

const power: GenericCard = {
  cardTitle: "Power",
  formfields: [
    {
      label: "Voltage",
      placeholder: "Enter Voltage",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Current",
      placeholder: "Enter Current",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: power_schema,
  apiFunction: async (data: typeof power_schema) =>
    await getapiResponse("/electricity/power", data),
};

export const electricityCards: GenericCard[] = [
  force_electrostatics,
  resistance,
  current,
  voltage,
  power,
];
