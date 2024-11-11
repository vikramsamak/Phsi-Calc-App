import React, { useState } from "react";
import { VStack, Button, Center } from "native-base";
import GenericModal from "./GenericModal";
import { GenericFormProps } from "@/types/InterFaces";
import z, { ZodError } from "zod";
import { useToast } from "native-base";
import GenericInputField from "./GenericInputField";

const GenericForm: React.FC<GenericFormProps> = ({
  fields,
  submitBtnText,
  getResult,
  validation_schema,
}) => {
  const [formValues, setFormValues] = useState<
    z.infer<typeof validation_schema>
  >({});
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<{
    Definition: string;
    Given: Record<string, any>;
    Result: number;
  } | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const toast = useToast();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const isBodyValid = validation_schema.parse(formValues);
      if (isBodyValid) {
        const res = await getResult(formValues);
        setResult(res);
        setShowModal(true);
      }
    } catch (e) {
      if (e instanceof ZodError) {
        const errorMessages = e.errors
          .map((error: any) => error.message)
          .join(", ");
        toast.show({ description: errorMessages });
      } else {
        console.error(e);
      }
    } finally {
      setLoading(false);
      setFormValues({});
    }
  };

  return (
    <Center>
      <VStack space={4} width="100%">
        {fields.map((field, index) => (
          <GenericInputField
            key={index}
            field={field}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        ))}
        <Button onPress={handleSubmit} isLoading={loading}>
          {submitBtnText ? submitBtnText : "Calculate"}
        </Button>
      </VStack>
      <GenericModal
        result={result}
        setShowModal={setShowModal}
        showModal={showModal}
      ></GenericModal>
    </Center>
  );
};

export default GenericForm;
