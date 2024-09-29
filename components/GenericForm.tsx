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
import { GenericFormProps } from "@/types/InterFaces";
import z, { ZodError } from "zod";
import { useToast } from "native-base";

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

  const handleChange = (
    value: string | number,
    fieldName: string,
    type: string | undefined
  ) => {
    switch (type) {
      case "array":
        const arrayValue =
          typeof value === "string" &&
          value.split(",").map((item: string) => item.trim());
        setFormValues((prevValues: z.infer<typeof validation_schema>) => ({
          ...prevValues,
          [fieldName]: arrayValue,
        }));
        break;
      default:
        setFormValues((prevValues: z.infer<typeof validation_schema>) => ({
          ...prevValues,
          [fieldName]: value,
        }));
        break;
    }
  };

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
                tvParallaxProperties={undefined}
                onTextInput={undefined}
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
                    Number(value),
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
