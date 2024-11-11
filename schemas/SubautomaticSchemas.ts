import z from "zod";

export const mass_energy_equivalence_schema = z.object({
  mass: z.number({
    message: "Mass must be number.",
  }),
});

export const binding_energy_schema = z.object({
  mass_parent: z.number({
    message: "Mass Parent must be number",
  }),
  mass_daughters: z
    .array(
      z.string().refine((item) => !isNaN(Number(item)), {
        message: "Each Mass Daughter must be a valid number",
      })
    )
    .refine((val) => val.length > 0, {
      message: "At least one Mass Daughter is required",
    }),
});

export const de_broglie_wavelength_schema = z.object({
  momentum: z.number({
    message: "Momentum must be number",
  }),
  mass: z.number({
    message: "Mass must be number",
  }),
});

export const bohr_radius_schema = z.object({
  atomic_number: z.number({
    message: "Atomic Number must be number",
  }),
});

export const energy_level_hydrogen_schema = z.object({
  n: z.number({
    message: "N Number must be number",
  }),
});

export const radioactive_decay_schema = z.object({
  initial_amount: z.number({
    message: "Initial Amount must be number",
  }),
  decay_constant: z.number({
    message: "Decay Constant must be number",
  }),
  time: z.number({
    message: "Time must be number",
  }),
});

export const half_life_schema = z.object({
  decay_constant: z.number({
    message: "Decay Constant must be number",
  }),
});
