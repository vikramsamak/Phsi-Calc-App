import React from "react";
import GenericPage from "@/components/GenericPage";
import { rateus } from "@/constants/Constants";

export default function RateUs() {
  return (
    <GenericPage
      heading={rateus.heading}
      desc={rateus.desc}
      cardHeading={rateus.cardHeading}
      cards={rateus.cards}
    />
  );
}
