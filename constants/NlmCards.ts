import { getapiResponse } from "@/helpers/GetapiResult";
import { GenericCard } from "../types/InterFaces";

const force: GenericCard = {
  cardTitle: "Force",
  formfields: [
    { label: "Mass", placeholder: "Enter Mass", inputType: "number-pad" },
    {
      label: "Acceleration",
      placeholder: "Enter Acceleration",
      inputType: "number-pad",
    },
  ],
  apiFunction: (data: object) => getapiResponse("/nlm/force", data),
};

const momentum: GenericCard = {
  cardTitle: "Momentum",
  formfields: [
    { label: "Mass", placeholder: "Enter Mass", inputType: "number-pad" },
    {
      label: "Velocity",
      placeholder: "Enter Velocity",
      inputType: "number-pad",
    },
  ],
  apiFunction: (data: object) => getapiResponse("/nlm/momentum", data),
};

const recoil_velocity: GenericCard = {
  cardTitle: "Recoil Velocity",
  formfields: [
    {
      label: "Mass of Bullet",
      placeholder: "Enter Mass of bullet",
      inputType: "number-pad",
    },
    {
      label: "Initial Velocity",
      placeholder: "Enter Initial Velocity",
      inputType: "number-pad",
    },
    {
      label: "Mass of Gun",
      placeholder: "Enter Mass of Gun",
      inputType: "number-pad",
    },
  ],
  apiFunction: (data: object) => getapiResponse("/nlm/recoil_velocity", data),
};

export const nlmCards: GenericCard[] = [
  {
    cardTitle: force.cardTitle,
    formfields: force.formfields,
    apiFunction: force.apiFunction,
  },
  {
    cardTitle: momentum.cardTitle,
    formfields: momentum.formfields,
    apiFunction: momentum.apiFunction,
  },
  {
    cardTitle: recoil_velocity.cardTitle,
    formfields: recoil_velocity.formfields,
    apiFunction: recoil_velocity.apiFunction,
  },
];
