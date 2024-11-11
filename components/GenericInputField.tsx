import React from "react";
import { GenericInputFieldProps } from "@/types/InterFaces";
import { FormControl, Input, TextArea, Slider } from "native-base";

function GenericInputField({
  field,
  formValues,
  setFormValues,
}: GenericInputFieldProps) {
  const handleChange = (
    value: string | number,
    fieldName: string,
    type: "array" | "string" | "number"
  ) => {
    switch (type) {
      case "array":
        const arrayValue =
          typeof value === "string" &&
          value.split(",").map((item: string) => item.trim());
        setFormValues((prevValues) => ({
          ...prevValues,
          [fieldName]: arrayValue,
        }));
        break;
      case "string":
        setFormValues((prevValues) => ({
          ...prevValues,
          [fieldName]: value,
        }));
        break;
      case "number":
        setFormValues((prevValues) => ({
          ...prevValues,
          [fieldName]: Number(value),
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

  return (
    <FormControl>
      <FormControl.Label>{field.label}</FormControl.Label>
      {field.isSelect ? (
        <Slider
          w="100%"
          minValue={0}
          maxValue={5}
          accessibilityLabel="ratings"
          step={1}
          value={
            formValues[field.label.replace(/\s+/g, "_").toLowerCase()] || 0
          }
          onChange={(value) => {
            handleChange(
              value,
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
            formValues[field.label.replace(/\s+/g, "_").toLowerCase()] || ""
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
            formValues[field.label.replace(/\s+/g, "_").toLowerCase()] || ""
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
  );
}

export default GenericInputField;
