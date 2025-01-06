import React from "react";
import GenericPage from "@/components/GenericPage";
import { mechanics } from "@/constants/Constants";

export default function Mechanics() {
  return (
    <GenericPage
      heading={mechanics.heading}
      cardHeading={mechanics.cardHeading}
      cards={mechanics.cards}
      desc={mechanics.desc}
    />
  );
}
