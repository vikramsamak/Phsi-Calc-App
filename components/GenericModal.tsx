import React from "react";
import { Modal, Text, VStack, HStack } from "native-base";

interface GenericModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  result: {
    Definition: string;
    Given: Record<string, any>;
    Result: number;
  } | null;
}

const GenericModal: React.FC<GenericModalProps> = ({
  showModal,
  setShowModal,
  result,
}) => {
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>
          {result?.Given ? "Calculation Result" : "Thanks..."}
        </Modal.Header>
        <Modal.Body>
          {result ? (
            <VStack space={4}>
              {result.Given ? (
                <>
                  <Text fontSize="lg" bold>
                    Given:
                  </Text>
                  {Object.entries(result.Given).map(([key, value]) => (
                    <HStack key={key} justifyContent="space-between">
                      <Text>{key}:</Text>
                      <Text>
                        {Array.isArray(value) ? value.join(",") : value}
                      </Text>
                    </HStack>
                  ))}
                  <HStack justifyContent={"space-between"}>
                    <Text bold>Result:</Text>
                    <Text>{result.Result}</Text>
                  </HStack>
                </>
              ) : (
                <Text>{result.Result}</Text>
              )}
            </VStack>
          ) : (
            <Text>No result available</Text>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default GenericModal;
