import { sendRatingEmail } from "@/helpers/SendRatingEmail";
import { GenericCard } from "../types/InterFaces";

export const RateUsCard: GenericCard[] = [
  {
    cardTitle: "Your Feedback Matters",
    formfields: [
      {
        label: "Name",
        placeholder: "Enter your name",
        inputType: "default",
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        inputType: "email-address",
      },
      {
        label: "Rating",
        placeholder: "Enter your rating (1-5)",
        isSelect: true,
        inputType: "default",
      },
      {
        label: "Comments",
        placeholder: "Share your feedback",
        inputType: "default",
        isTextarea: true,
      },
    ],
    apiFunction: async (data: object) => await sendRatingEmail(data),
    submitBtnText: "Submit",
  },
];
