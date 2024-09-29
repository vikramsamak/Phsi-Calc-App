import z from "zod";

export const rate_us_schema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(4, { message: "Name must be at least 4 characters long." }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email address." }),
  rating: z
    .number({ message: "Rating is required." })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating cannot exceed 5." }),
  comments: z
    .string({ message: "Comment is required." })
    .min(10, { message: "Comment must be at least 10 characters long." }),
});
