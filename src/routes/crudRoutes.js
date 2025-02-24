import express from "express";
import { listarTask, newTasks, tasksId, delTasks } from "../controllers/taskController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200  
};

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions))
  app.get("/tasks", listarTask);
  app.post("/tasks", newTasks);
  app.put("/tasks/:id", tasksId);
  app.delete("/tasks/:id", delTasks);
};

export default routes;