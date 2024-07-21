import { formspreeformId } from "@/constants/Constants";

export const sendRatingEmail = async (data: object): Promise<object> => {
  try {
    const response = await fetch(`https://formspree.io/f/${formspreeformId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { Result: "Thank you for your valuable feedback" };
    } else {
      return { Result: "Something went wrong..." };
    }
  } catch (error) {
    return { Result: "Something went wrong..." };
  }
};
