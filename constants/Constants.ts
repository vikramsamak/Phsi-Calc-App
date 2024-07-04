import { electricityCards } from "./ElectricityCards";
import { GenericPageProps } from "./InterFaces";
import { nlmCards } from "./NlmCards";

export const apiBaseUrl = "https://phsipy-api.vercel.app";

export const features = [
  {
    title: "Physics Calculations",
    description:
      "Easily perform various physics calculations including electricity, mechanics, quantum mechanics, thermodynamics, and more.",
    icon: "calculator-outline",
  },
  {
    title: "Comprehensive Topics",
    description:
      "Explore detailed topics such as electromagnetism, electrostatics, fluid state physics, solid state physics, and subatomic physics.",
    icon: "book-outline",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Intuitive and easy-to-use interface designed to streamline your physics calculations and learning experience.",
    icon: "rocket-outline",
  },
];

export const electricity: GenericPageProps = {
  heading: "Electricity",
  desc: "Electricity is a form of energy that comes from charged particles.These particles can be positively charged protons, negatively charged electrons, or both. Electricity can flow through conductors like metals and can be harnessed to power various devices and systems in our everyday lives.",
  cardHeading: "Electricity Calculators",
  cards: electricityCards,
};

export const nlm: GenericPageProps = {
  heading: "Newton's Laws of Motion",
  desc: "Newton's Laws of Motion are three fundamental principles that describe the relationship between the motion of an object and the forces acting on it. These laws were formulated by Sir Isaac Newton in his work 'Philosophiæ Naturalis Principia Mathematica,' published in 1687.",
  cardHeading: "NLM Calculators",
  cards: nlmCards,
};
