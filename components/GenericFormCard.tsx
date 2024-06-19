import React from "react";
import { Box, Heading, Divider } from "native-base";

interface GenericFormCardProps {
  cardTitle: string;
  formComponent: React.ReactNode;
}

const GenericFormCard: React.FC<GenericFormCardProps> = ({
  cardTitle,
  formComponent,
}) => {
  return (
    <Box
      bg="white"
      shadow={2}
      rounded="md"
      p={4}
      mb={4}
      borderWidth={1}
      borderColor="gray.200"
    >
      <Heading size="md" mb={2} color="primary.500">
        {cardTitle}
      </Heading>
      <Divider my={2} />
      {formComponent}
    </Box>
  );
};

export default GenericFormCard;
