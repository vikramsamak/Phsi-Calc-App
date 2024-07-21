import React, { useState } from "react";
import {
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  TextArea,
  Slider,
  HStack,
  Text,
} from "native-base";
import GenericModal from "./GenericModal";
import { FormField } from "@/types/InterFaces";

interface GenericFormProps {
  fields: FormField[];
  submitBtnText: string | undefined;
  getResult: (formValues: Record<string, any>) => Promise<any>;
}

const GenericForm: React.FC<GenericFormProps> = ({
  fields,
  submitBtnText,
  getResult,
}) => {
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<{
    Definition: string;
    Given: Record<string, any>;
    Result: number;
  } | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChange = (
    value: any,
    fieldName: string,
    type: string | undefined
  ) => {
    switch (type) {
      case "array":
        const arrayValue = value.split(",").map((item: string) => item.trim());
        setFormValues((prevValues) => ({
          ...prevValues,
          [fieldName]: arrayValue,
        }));
        break;
      default:
        setFormValues((prevValues) => ({
          ...prevValues,
          [fieldName]: value,
        }));
        break;
    }
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
            <HStack
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <FormControl.Label>{field.label}</FormControl.Label>
              {field.isSelect && (
                <Text>
                  {formValues[field.label.replace(/\s+/g, "_").toLowerCase()]}
                </Text>
              )}
            </HStack>
            {field.isSelect ? (
              <Slider
                w="100%"
                minValue={0}
                maxValue={5}
                accessibilityLabel="ratings"
                step={1}
                value={
                  formValues[field.label.replace(/\s+/g, "_").toLowerCase()] ||
                  0
                }
                onChange={(value) => {
                  handleChange(
                    Number(value),
                    field.label.replace(/\s+/g, "_").toLowerCase(),
                    field.type
                  );
                }}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
            ) : field.isTextarea ? (
              <TextArea
                minH={"2"}
                placeholder={field.placeholder}
                value={
                  formValues[field.label.replace(/\s+/g, "_").toLowerCase()] ||
                  ""
                }
                onChangeText={(value) =>
                  handleChange(
                    value,
                    field.label.replace(/\s+/g, "_").toLowerCase(),
                    field.type
                  )
                }
                autoCompleteType={undefined}
              />
            ) : (
              <Input
                placeholder={field.placeholder}
                value={
                  formValues[field.label.replace(/\s+/g, "_").toLowerCase()] ||
                  ""
                }
                onChangeText={(value) =>
                  handleChange(
                    value,
                    field.label.replace(/\s+/g, "_").toLowerCase(),
                    field.type
                  )
                }
                keyboardType={field.inputType}
              />
            )}
          </FormControl>
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
