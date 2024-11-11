import z from "zod";

export const force_schema = z.object({
  mass: z
    .number({
      message: "Mass must be number.",
    })
    .positive(),
  acceleration: z
    .number({
      message: "Acceleration must be number.",
    })
    .positive(),
});

export const momentum_schema = z.object({
  mass: z.number({
    message: "Mass must be number.",
  }),
  velocity: z.number({
    message: "Velocity must be number.",
  }),
});

export const recoil_velocity_schema = z.object({
  mass_of_bullet: z
    .number({
      message: "Mass of Bullet must be number.",
    })
    .positive(),
  initial_velocity: z
    .number({
      message: "Initial Velocity must be number.",
    })
    .positive(),
  mass_of_gun: z.number({ message: "Mass of Gun must be number." }).positive(),
});
