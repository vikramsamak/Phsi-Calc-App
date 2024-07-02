import { getapiResponse } from "@/helpers/GetapiResult";
import { GenericCard } from "./InterFaces";

const force: GenericCard = {
  cardTitle: "Force",
  formfields: [
    { label: "Mass", placeholder: "Enter Mass" },
    { label: "Acceleration", placeholder: "Enter Acceleration" },
  ],
  apiFunction: (data: object) => getapiResponse("/nlm/force", data),
};

const momentum: GenericCard = {
  cardTitle: "Momentum",
  formfields: [
    { label: "Mass", placeholder: "Enter Mass" },
    { label: "Velocity", placeholder: "Enter Velocity" },
  ],
  apiFunction: (data: object) => getapiResponse("/nlm/momentum", data),
};

const recoil_velocity: GenericCard = {
  cardTitle: "Recoil Velocity",
  formfields: [
    { label: "Mass of Bullet", placeholder: "Enter Mass of bullet" },
    { label: "Initial Velocity", placeholder: "Enter Initial Velocity" },
    { label: "Mass of Gun", placeholder: "Enter Mass of Gun" },
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
