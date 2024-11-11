import { sendRatingEmail } from "@/helpers/SendRatingEmail";
import { GenericCard } from "../types/InterFaces";
import { rate_us_schema } from "@/schemas/RateUsSchema";

export const RateUsCard: GenericCard[] = [
  {
    cardTitle: "Your Feedback Matters",
    formfields: [
      {
        label: "Name",
        placeholder: "Enter your name",
        inputType: "default",
        type: "string",
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        inputType: "email-address",
        type: "string",
      },
      {
        label: "Rating",
        placeholder: "Enter your rating (1-5)",
        isSelect: true,
        inputType: "default",
        type: "number",
      },
      {
        label: "Comments",
        placeholder: "Share your feedback",
        inputType: "default",
        isTextarea: true,
        type: "string",
      },
    ],
    validation_schema: rate_us_schema,
    submitBtnText: "Submit",
    apiFunction: async (data: typeof rate_us_schema) =>
      await sendRatingEmail(data),
  },
];
