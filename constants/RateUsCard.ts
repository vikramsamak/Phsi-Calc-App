import { sendRatingEmail } from "@/helpers/sendRatingEmail";
import { GenericCard } from "../types/InterFaces";

export const RateUsCard: GenericCard[] = [
  {
    cardTitle: "Your Feedback Matters",
    formfields: [
      {
        label: "Your Name",
        placeholder: "Enter your name",
        inputType: "default",
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        inputType: "email-address",
      },
      {
        label: "Your Rating",
        placeholder: "Enter your rating (1-5)",
        inputType: "number-pad",
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
