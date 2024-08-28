import z from "zod";

export const force_electrostatics_schema = z.object({
  q1: z
    .number({
      message: "Q1 must be number.",
    })
    .positive(),
  q2: z
    .number({
      message: "Q2 must be number.",
    })
    .positive(),
  resistance: z
    .number({
      message: "Resistance must be number.",
    })
    .positive(),
});

export const resistance_schema = z.object({
  voltage: z
    .number({
      message: "Voltage must be number.",
    })
    .positive(),
  current: z
    .number({
      message: "Current must be number.",
    })
    .positive(),
});

export const current_schema = z.object({
  voltage: z
    .number({
      message: "Voltage must be number.",
    })
    .positive(),
  resistance: z
    .number({
      message: "Resistance must be number.",
    })
    .positive(),
});

export const voltage_schema = z.object({
  current: z
    .number({
      message: "Current must be number.",
    })
    .positive(),
  resistance: z
    .number({
      message: "Resistance must be number.",
    })
    .positive(),
});

export const power_schema = z.object({
  voltage: z
    .number({
      message: "Voltage must be number.",
    })
    .positive(),
  current: z
    .number({
      message: "Current must be number.",
    })
    .positive(),
});
