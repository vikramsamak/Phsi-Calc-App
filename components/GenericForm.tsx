import React, { useState } from "react";
import { VStack, FormControl, Input, Button, Center, Modal } from "native-base";
import GenericModal from "./GenericModal";

interface FormField {
  label: string;
  placeholder: string;
}

interface GenericFormProps {
  fields: FormField[];
  getResult: (formValues: Record<string, any>) => Promise<any>;
}

const GenericForm: React.FC<GenericFormProps> = ({ fields, getResult }) => {
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<{
    Definition: string;
    Given: Record<string, any>;
    Result: number;
  } | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChange = (value: any, fieldName: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await getResult(formValues);
      setResult(res);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setFormValues({});
    }
  };

  return (
    <Center>
      <VStack space={4} width="100%">
        {fields.map((field, index) => (
          <FormControl key={index}>
            <FormControl.Label>{field.label}</FormControl.Label>
            <Input
              placeholder={field.placeholder}
              value={
                formValues[field.label.replace(/\s+/g, "").toLowerCase()] || ""
              }
              onChangeText={(value) =>
                handleChange(
                  value,
                  field.label.replace(/\s+/g, "").toLowerCase()
                )
              }
              keyboardType={"number-pad"}
            />
          </FormControl>
        ))}
        <Button onPress={handleSubmit} isLoading={loading}>
          Calculate
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
