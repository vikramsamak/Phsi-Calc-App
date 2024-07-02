import React from "react";
import GenericPage from "@/components/GenericPage";
import { electricity } from "@/constants/Constants";

export default function Electricity() {
  return (
    <GenericPage
      heading={electricity.heading}
      desc={electricity.desc}
      cardHeading={electricity.cardHeading}
      cards={electricity.cards}
    />
  );
}
