import { z } from "zod";

export const JobSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(["pending", "running", "completed", "failed"]),
  createdAt: z.date(),
  completedAt: z.date().optional(),
});

export const JobInputSchema = z.object({
  name: z.string(),
  type: z.enum(["image_processing", "email", "data_export"]).optional(),
});

// Derive TypeScript types from Zod schemas
export type Job = z.infer<typeof JobSchema>;
export type JobInput = z.infer<typeof JobInputSchema>;
