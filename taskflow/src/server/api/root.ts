import { router } from "./trpc";
import { jobsRouter } from "./routers/jobs";

export const appRouter = router({
  jobs: jobsRouter,
});

export type AppRouter = typeof appRouter;
