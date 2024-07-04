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
  { name: "Home", component: Home, icon: "home" },
  { name: "Electricity", component: Electricity, icon: "flash" },
  {
    name: "Electromagnetism",
    component: Electromagnetism,
    icon: "magnet",
  },
  {
    name: "Electrostatics",
    component: Electrostatics,
    icon: "flash-off",
  },
  { name: "Errors", component: Errors, icon: "alert" },
  {
    name: "FluidStatePhysics",
    component: FluidStatePhysics,
    icon: "waves",
  },
  { name: "Mechanics", component: Mechanics, icon: "wrench" },
  {
    name: "QuantumMechanics",
    component: QuantumMechanics,
    icon: "atom-variant",
  },
  {
    name: "SolidStatePhysics",
    component: SolidStatePhysics,
    icon: "cube",
  },
  { name: "Subatomic", component: Subatomic, icon: "molecule" },
  {
    name: "Thermodynamics",
    component: Thermodynamics,
    icon: "thermometer",
  },
  { name: "Waves", component: Waves, icon: "wave" },
  { name: "Nlm", component: Nlm, icon: "chart-line" },
  { name: "RateUs", component: RateUs, icon: "star" },
];
