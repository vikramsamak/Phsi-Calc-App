import GenericPage from "@/components/GenericPage";
import { nlm } from "@/constants/Constants";
import React from "react";

export default function Nlm() {
  return (
    <GenericPage
      heading={nlm.heading}
      cardHeading={nlm.cardHeading}
      desc={nlm.desc}
      cards={nlm.cards}
    />
  );
}
