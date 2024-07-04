import Electricity from "@/app/Electricity";
import Home from "@/app/Home";
import Electromagnetism from "@/app/Electromagnetism";
import Electrostatics from "@/app/Electrostatics";
import Errors from "@/app/Errors";
import FluidStatePhysics from "@/app/FluidStatePhysics";
import Mechanics from "@/app/Mechanics";
import QuantumMechanics from "@/app/QuantumMechanics";
import SolidStatePhysics from "@/app/SolidStatePhysics";
import Subatomic from "@/app/Subatomic";
import Thermodynamics from "@/app/Thermodynamics";
import Waves from "@/app/Waves";
import RateUs from "@/app/RateUs";
import Nlm from "@/app/Nlm";

export const drawerItems = [
  { name: "Home", component: Home, icon: "home", title: "Home" },
  {
    name: "Electricity",
    component: Electricity,
    icon: "flash",
    title: "Electricity",
  },
  {
    name: "Electromagnetism",
    component: Electromagnetism,
    icon: "magnet",
    title: "Electromagnetism",
  },
  {
    name: "Electrostatics",
    component: Electrostatics,
    icon: "flash-off",
    title: "Electrostatics",
  },
  { name: "Errors", component: Errors, icon: "alert", title: "Errors" },
  {
    name: "FluidStatePhysics",
    component: FluidStatePhysics,
    icon: "waves",
    title: "Fluid State Physics",
  },
  {
    name: "Mechanics",
    component: Mechanics,
    icon: "wrench",
    title: "Mechanics",
  },
  {
    name: "QuantumMechanics",
    component: QuantumMechanics,
    icon: "atom-variant",
    title: "Quantum Mechanics",
  },
  {
    name: "SolidStatePhysics",
    component: SolidStatePhysics,
    icon: "cube",
    title: "Solid State Physics",
  },
  {
    name: "Subatomic",
    component: Subatomic,
    icon: "molecule",
    title: "Subatomic",
  },
  {
    name: "Thermodynamics",
    component: Thermodynamics,
    icon: "thermometer",
    title: "Thermodynamics",
  },
  { name: "Waves", component: Waves, icon: "wave", title: "Waves" },
  { name: "Nlm", component: Nlm, icon: "chart-line", title: "NLM" },
  { name: "RateUs", component: RateUs, icon: "star", title: "Rate Us" },
];
