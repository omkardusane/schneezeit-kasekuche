import { buildApp } from "./src/app.js";

(async () => {
  try {
    const app = await buildApp();
    // Start server
    const PORT = process.env.PORT || 3000;
    await app.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
})();
