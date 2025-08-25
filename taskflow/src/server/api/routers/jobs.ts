import { type Job, JobInputSchema } from "@/server/types";
import { router, publicProcedure } from "../trpc";

const createJob = (name: string, status: Job["status"] = "pending"): Job => ({
  id: Date.now().toString(),
  name,
  status,
  createdAt: new Date(),
});

export const jobsRouter = router({
  // Get All
  getAll: publicProcedure.query((): Job[] => {
    return [
      createJob("Process Image", "running"),
      createJob("Send Email", "completed"),
    ];
  }),
  // Create new job
  create: publicProcedure.input(JobInputSchema).mutation(({ input }) => {
    return createJob(input.name, "pending");
  }),
});
