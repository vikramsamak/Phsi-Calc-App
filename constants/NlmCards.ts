import { getapiResponse } from "@/helpers/GetapiResult";
import { GenericCard } from "../types/InterFaces";
import {
  force_schema,
  momentum_schema,
  recoil_velocity_schema,
} from "@/schemas/NlmSchemas";

const force: GenericCard = {
  cardTitle: "Force",
  formfields: [
    {
      label: "Mass",
      placeholder: "Enter Mass",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Acceleration",
      placeholder: "Enter Acceleration",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: force_schema,
  apiFunction: (data: typeof force_schema) =>
    getapiResponse("/nlm/force", data),
};

const momentum: GenericCard = {
  cardTitle: "Momentum",
  formfields: [
    {
      label: "Mass",
      placeholder: "Enter Mass",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Velocity",
      placeholder: "Enter Velocity",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: momentum_schema,
  apiFunction: (data: typeof momentum_schema) =>
    getapiResponse("/nlm/momentum", data),
};

const recoil_velocity: GenericCard = {
  cardTitle: "Recoil Velocity",
  formfields: [
    {
      label: "Mass of Bullet",
      placeholder: "Enter Mass of bullet",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Initial Velocity",
      placeholder: "Enter Initial Velocity",
      type: "number",
      inputType: "number-pad",
    },
    {
      label: "Mass of Gun",
      placeholder: "Enter Mass of Gun",
      type: "number",
      inputType: "number-pad",
    },
  ],
  validation_schema: recoil_velocity_schema,
  apiFunction: (data: typeof recoil_velocity_schema) =>
    getapiResponse("/nlm/recoil_velocity", data),
};

export const nlmCards: GenericCard[] = [force, momentum, recoil_velocity];
