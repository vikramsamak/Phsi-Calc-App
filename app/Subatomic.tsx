import React from "react";
import GenericPage from "@/components/GenericPage";
import { subatomic } from "@/constants/Constants";

export default function Subatomic() {
  return (
    <GenericPage
      heading={subatomic.heading}
      desc={subatomic.desc}
      cardHeading={subatomic.heading}
      cards={subatomic.cards}
    />
  );
}
