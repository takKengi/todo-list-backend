import express from "express";
import routes from "./src/routes/crudRoutes.js";

const app = express();
app.use(express.json("tasks"))
routes(app);

app.listen(3000, () =>{
  console.log("Servidor escutando...");
  console.log("Rodando em http://localhost:3000");
});