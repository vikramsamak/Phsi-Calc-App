import React, { useState } from "react";
import { VStack, FormControl, Input, Button, useToast } from "native-base";

interface FormField {
  label: string;
  placeholder: string;
}

interface GenericFormProps {
  fields: FormField[];
  onSubmit: (formValues: Record<string, any>) => void;
}

const GenericForm: React.FC<GenericFormProps> = ({ fields, onSubmit }) => {
  const toast = useToast();

  const [formValues, setFormValues] = useState<Record<string, any>>({});

  const handleChange = (value: any, fieldName: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formValues);
    toast.show({
      title: "Form submitted!",
    });
  };

  return (
    <VStack space={4} width="100%">
      {fields.map((field, index) => (
        <FormControl key={index}>
          <FormControl.Label>{field.label}</FormControl.Label>
          <Input
            placeholder={field.placeholder}
            value={formValues[field.label.toLowerCase()]}
            onChangeText={(value) =>
              handleChange(value, field.label.toLowerCase())
            }
          />
        </FormControl>
      ))}
      <Button onPress={handleSubmit}>Submit</Button>
    </VStack>
  );
};

export default GenericForm;
