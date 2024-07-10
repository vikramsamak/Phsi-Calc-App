import { Box, Center, Heading, Text, VStack } from "native-base";
import React from "react";

export default function GenericPlaceholder() {
  return (
    <Center flex={1} px="3" bg="white">
      <VStack space={3} alignItems="center">
        <Heading size="lg">Coming Soon</Heading>
        <Text fontSize="md" color="coolGray.600" textAlign="center">
          We are working hard to bring you this feature. Stay tuned for more
          updates!
        </Text>
        <Text fontSize="sm" color="coolGray.400" textAlign="center">
          Thank you for your patience.
        </Text>
      </VStack>
    </Center>
  );
}
