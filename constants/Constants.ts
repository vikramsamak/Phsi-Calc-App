import { electricityCards } from "./ElectricityCards";
import { GenericPageProps } from "./InterFaces";
import { nlmCards } from "./NlmCards";
import { RateUsCard } from "./RateUsCard";
import { subautomicCards } from "./SubautomicCards";

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

export const subatomic: GenericPageProps = {
  heading: "Subautomic",
  desc: "Subatomic refers to the realm of physics that deals with particles smaller than atoms. These particles, such as electrons, protons, and neutrons, are the fundamental constituents of matter and energy. Understanding subatomic particles is crucial in exploring quantum mechanics, particle physics, and the fundamental forces that shape the universe. Researchers study subatomic particles through experiments in particle colliders like the Large Hadron Collider (LHC), aiming to discover new particles and understand their properties. Applications of subatomic research include advancements in technology, such as semiconductors and medical imaging devices, and contributions to our understanding of cosmology, including dark matter and dark energy.",
  cardHeading: "Subautomic Calculators",
  cards: subautomicCards,
};

export const rateus: GenericPageProps = {
  heading: "We Value Your Feedback",
  desc: "Please take a moment to rate your experience and share your feedback with us. Your input helps us improve our services.",
  cardHeading: "Rate Us",
  cards: RateUsCard,
};
