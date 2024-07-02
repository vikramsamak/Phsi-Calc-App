import { electricityCards } from "./ElectricityCards";
import { GenericPageProps } from "./InterFaces";
import { nlmCards } from "./NlmCards";

export const apiBaseUrl = "https://phsipy-api.vercel.app";

export const electricity: GenericPageProps = {
  heading: "Electricity",
  desc: "Electricity is a form of energy that comes from charged particles.These particles can be positively charged protons, negatively charged electrons, or both. Electricity can flow through conductors like metals and can be harnessed to power various devices and systems in our everyday lives.",
  cardHeading: "Electricity Calculators",
  cards: electricityCards,
};

export const nlm: GenericPageProps = {
  heading: "",
  desc: "",
  cardHeading: "NLM Calculators",
  cards: nlmCards,
};
