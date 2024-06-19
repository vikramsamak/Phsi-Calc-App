import Electricity from "@/app/Electricity";
import Home from "../app/Home";
import Settings from "../app/Settings";
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

export const drawerItems = [
  { name: "Home", component: Home, icon: "home-outline" },
  { name: "Settings", component: Settings, icon: "settings-outline" },
  { name: "Electricity", component: Electricity, icon: "flash-outline" },
  {
    name: "Electromagnetism",
    component: Electromagnetism,
    icon: "magnet-outline",
  },
  {
    name: "Electrostatics",
    component: Electrostatics,
    icon: "flash-off-outline",
  },
  { name: "Errors", component: Errors, icon: "warning-outline" },
  {
    name: "FluidStatePhysics",
    component: FluidStatePhysics,
    icon: "water-outline",
  },
  { name: "Mechanics", component: Mechanics, icon: "construct-outline" },
  {
    name: "QuantumMechanics",
    component: QuantumMechanics,
    icon: "nuclear-outline",
  },
  {
    name: "SolidStatePhysics",
    component: SolidStatePhysics,
    icon: "cube-outline",
  },
  { name: "Subatomic", component: Subatomic, icon: "electron-outline" }, // Assuming custom electron icon
  {
    name: "Thermodynamics",
    component: Thermodynamics,
    icon: "thermometer-outline",
  },
  { name: "Waves", component: Waves, icon: "wave-outline" }, // Assuming custom wave icon
];
