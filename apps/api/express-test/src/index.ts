import express, { Request, Response } from "express";

const app = express();

// Middleware (example)
app.use(express.json());

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

// Export the app for testing or reuse
export default app;

// Only start server if run directly (e.g., via ts-node-dev)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
}
