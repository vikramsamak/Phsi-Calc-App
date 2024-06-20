import React, { useState } from "react";
import { VStack, FormControl, Input, Button } from "native-base";

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
  const [result, setResult] = useState<string | null>(null);

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
    } catch (error) {
      console.error(error);
      setResult("An error occurred while calculating.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack space={4} width="100%">
      {fields.map((field, index) => (
        <FormControl key={index}>
          <FormControl.Label>{field.label}</FormControl.Label>
          <Input
            placeholder={field.placeholder}
            value={formValues[field.label.toLowerCase()] || ""}
            onChangeText={(value) =>
              handleChange(value, field.label.toLowerCase())
            }
            keyboardType={"number-pad"}
          />
        </FormControl>
      ))}
      <FormControl>
        <FormControl.Label>Result</FormControl.Label>
        <Input value={result ? result : ""} />
      </FormControl>
      <Button onPress={handleSubmit} isLoading={loading}>
        Calculate
      </Button>
    </VStack>
  );
};

export default GenericForm;
