import { GenericCard } from "./InterFaces";

export const RateUsCard: GenericCard[] = [
  {
    cardTitle: "Rate us",
    formfields: [
      {
        label: "Your Name",
        placeholder: "Enter your name",
      },
      {
        label: "Email",
        placeholder: "Enter your email",
      },
      {
        label: "Your Rating",
        placeholder: "Enter your rating (1-5)",
        inputType: "number-pad",
      },
      {
        label: "Comments",
        placeholder: "Share your feedback",
      },
    ],
    apiFunction: (data) => {
      console.log(data);
      return Promise.resolve("ok");
    },
  },
];
