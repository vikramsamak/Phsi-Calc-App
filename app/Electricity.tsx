import React from "react";
import { Box, Heading, ScrollView, Text, VStack } from "native-base";
import GenericFormCard from "@/components/GenericFormCard";
import GenericForm from "@/components/GenericForm";
import { electricityCards } from "@/constants/ElectricityCards";

export default function Electricity() {
  return (
    <ScrollView width="100%" height="100%" bg="white" p={4}>
      <Box m={4}>
        <Heading size="lg" color="primary.500" mb={4}>
          Electricity
        </Heading>
        <Text fontSize="md" color="gray.700" textAlign={"justify"}>
          Electricity is a form of energy that comes from charged particles.
          These particles can be positively charged protons, negatively charged
          electrons, or both. Electricity can flow through conductors like
          metals and can be harnessed to power various devices and systems in
          our everyday lives.
        </Text>
      </Box>

      <Box m={4}>
        <Heading size="xl" color="primary.500" mb={4}>
          Electricity Calculators
        </Heading>
        <VStack space={4}>
          {electricityCards.map((card, index) => (
            <GenericFormCard
              key={index}
              cardTitle={card.cardTitle}
              formComponent={
                <GenericForm
                  fields={card.formfields}
                  getResult={card.apiFunction}
                />
              }
            />
          ))}
        </VStack>
      </Box>
    </ScrollView>
  );
}
