import React from "react";
import { Box, Heading, ScrollView, Text, VStack } from "native-base";
import GenericForm from "./GenericForm";
import GenericFormCard from "./GenericFormCard";
import { GenericPageProps } from "@/constants/InterFaces";

export default function GenericPage({
  heading,
  desc,
  cardHeading,
  cards,
}: GenericPageProps) {
  return (
    <ScrollView width="100%" height="100%" bg="white" p={4}>
      <Box m={4}>
        <Heading size="xl" color="primary.500" mb={4}>
          {heading}
        </Heading>
        <Text fontSize="md" color="gray.700" textAlign={"justify"}>
          {desc}
        </Text>
      </Box>

      <Box m={4}>
        <Heading size="lg" color="primary.500" mb={4}>
          {cardHeading}
        </Heading>
        <VStack space={4}>
          {cards.map((card, index) => (
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
