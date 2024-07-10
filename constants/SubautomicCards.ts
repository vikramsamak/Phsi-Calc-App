import { getapiResponse } from "@/helpers/GetapiResult";
import { GenericCard } from "./InterFaces";

const mass_energy_equivalence: GenericCard = {
  cardTitle: "Mass Energy Equivalence",
  formfields: [{ label: "Mass", placeholder: "Enter Mass" }],
  apiFunction: (data: object) =>
    getapiResponse("/subautomatic/mass_energy_equivalence", data),
};

const binding_energy: GenericCard = {
  cardTitle: "Binding Energy",
  formfields: [
    { label: "Mass Parent", placeholder: "Enter Mass Parent" },
    { label: "Mass Daughters", placeholder: "Enter Mass Daughters" },
  ],
  apiFunction: (data: object) =>
    getapiResponse("/subautomatic/binding_energy", data),
};

const de_broglie_wavelength: GenericCard = {
  cardTitle: "De Broglie Wavelength",
  formfields: [
    { label: "Momentum", placeholder: "Enter Momentum" },
    { label: "Mass", placeholder: "Enter Mass" },
  ],
  apiFunction: (data: object) =>
    getapiResponse("/subautomatic/de_broglie_wavelength", data),
};

const bohr_radius: GenericCard = {
  cardTitle: "Bohr Radius",
  formfields: [{ label: "Atomic Number", placeholder: "Enter Atomic Number" }],
  apiFunction: (data: object) =>
    getapiResponse("/subautomatic/bohr_radius", data),
};

const energy_level_hydrogen: GenericCard = {
  cardTitle: "Energy Level Hydrogen",
  formfields: [{ label: "N", placeholder: "Enter n" }],
  apiFunction: (data: object) =>
    getapiResponse("/subautomatic/energy_level_hydrogen", data),
};

const radioactive_decay: GenericCard = {
  cardTitle: "Radioactive Decay",
  formfields: [
    { label: "Initial Amount", placeholder: "Enter Initial Amount" },
    { label: "Decay Constant", placeholder: "Enter Decay Constant" },
    { label: "Time", placeholder: "Enter Time" },
  ],
  apiFunction: (data: object) =>
    getapiResponse("/subautomatic/radioactive_decay", data),
};

const half_life: GenericCard = {
  cardTitle: "Half Life",
  formfields: [
    { label: "Decay Constant", placeholder: "Enter Decay Constant" },
  ],
  apiFunction: (data: object) =>
    getapiResponse("/subautomatic/half_life", data),
};

export const subautomicCards: GenericCard[] = [
  {
    cardTitle: mass_energy_equivalence.cardTitle,
    formfields: mass_energy_equivalence.formfields,
    apiFunction: mass_energy_equivalence.apiFunction,
  },
  {
    cardTitle: binding_energy.cardTitle,
    formfields: binding_energy.formfields,
    apiFunction: binding_energy.apiFunction,
  },
  {
    cardTitle: de_broglie_wavelength.cardTitle,
    formfields: de_broglie_wavelength.formfields,
    apiFunction: de_broglie_wavelength.apiFunction,
  },
  {
    cardTitle: bohr_radius.cardTitle,
    formfields: bohr_radius.formfields,
    apiFunction: bohr_radius.apiFunction,
  },
  {
    cardTitle: energy_level_hydrogen.cardTitle,
    formfields: energy_level_hydrogen.formfields,
    apiFunction: energy_level_hydrogen.apiFunction,
  },
  {
    cardTitle: radioactive_decay.cardTitle,
    formfields: radioactive_decay.formfields,
    apiFunction: radioactive_decay.apiFunction,
  },
  {
    cardTitle: half_life.cardTitle,
    formfields: half_life.formfields,
    apiFunction: half_life.apiFunction,
  },
];
