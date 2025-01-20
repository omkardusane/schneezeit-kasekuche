
import fastify from "fastify";


import { machinesCtr } from "./controllers/machines.js";

export async function buildApp() {
  const app = fastify({ logger: true });
  app.register(machinesCtr)
  return app
}