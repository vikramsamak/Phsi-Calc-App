import { getapiResponse } from "@/helpers/GetapiResult";
import { GenericCard } from "../types/InterFaces";
import {
  binding_energy_schema,
  bohr_radius_schema,
  de_broglie_wavelength_schema,
  energy_level_hydrogen_schema,
  half_life_schema,
  mass_energy_equivalence_schema,
  radioactive_decay_schema,
} from "@/schemas/SubautomaticSchemas";

const mass_energy_equivalence: GenericCard = {
  cardTitle: "Mass Energy Equivalence",
  formfields: [
    {
      label: "Mass",
      placeholder: "Enter Mass",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: mass_energy_equivalence_schema,
  apiFunction: (data: typeof mass_energy_equivalence_schema) =>
    getapiResponse("/subautomatic/mass_energy_equivalence", data),
};

const binding_energy: GenericCard = {
  cardTitle: "Binding Energy",
  formfields: [
    {
      label: "Mass Parent",
      placeholder: "Enter Mass Parent",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Mass Daughters",
      placeholder: "Enter Mass Daughters (comma-seprated)",
      type: "array",
      inputType: "default",
    },
  ],
  validation_schema: binding_energy_schema,
  apiFunction: (data: typeof binding_energy_schema) =>
    getapiResponse("/subautomatic/binding_energy", data),
};

const de_broglie_wavelength: GenericCard = {
  cardTitle: "De Broglie Wavelength",
  formfields: [
    {
      label: "Momentum",
      placeholder: "Enter Momentum",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Mass",
      placeholder: "Enter Mass",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: de_broglie_wavelength_schema,
  apiFunction: (data: typeof de_broglie_wavelength_schema) =>
    getapiResponse("/subautomatic/de_broglie_wavelength", data),
};

const bohr_radius: GenericCard = {
  cardTitle: "Bohr Radius",
  formfields: [
    {
      label: "Atomic Number",
      placeholder: "Enter Atomic Number",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: bohr_radius_schema,
  apiFunction: (data: typeof bohr_radius_schema) =>
    getapiResponse("/subautomatic/bohr_radius", data),
};

const energy_level_hydrogen: GenericCard = {
  cardTitle: "Energy Level Hydrogen",
  formfields: [
    {
      label: "N",
      placeholder: "Enter n",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: energy_level_hydrogen_schema,
  apiFunction: (data: typeof energy_level_hydrogen_schema) =>
    getapiResponse("/subautomatic/energy_level_hydrogen", data),
};

const radioactive_decay: GenericCard = {
  cardTitle: "Radioactive Decay",
  formfields: [
    {
      label: "Initial Amount",
      placeholder: "Enter Initial Amount",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Decay Constant",
      placeholder: "Enter Decay Constant",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Time",
      placeholder: "Enter Time",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: radioactive_decay_schema,
  apiFunction: (data: typeof radioactive_decay_schema) =>
    getapiResponse("/subautomatic/radioactive_decay", data),
};

const half_life: GenericCard = {
  cardTitle: "Half Life",
  formfields: [
    {
      label: "Decay Constant",
      placeholder: "Enter Decay Constant",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: half_life_schema,
  apiFunction: (data: typeof half_life_schema) =>
    getapiResponse("/subautomatic/half_life", data),
};

export const subautomicCards: GenericCard[] = [
  mass_energy_equivalence,
  binding_energy,
  de_broglie_wavelength,
  bohr_radius,
  energy_level_hydrogen,
  radioactive_decay,
  half_life,
];
