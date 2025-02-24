import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function listarTasks() {
  const db = conexao.db("taskfy_db");
  const colecao = db.collection("tasks");
  return colecao.find().toArray(); 
};

export async function criarTask(taskData) {
  const db = conexao.db("taskfy_db");
  const colecao = db.collection("tasks");
  return colecao.insertOne(taskData);
};

export async function atualizarTask(id, taskData) {
  const db = conexao.db("taskfy_db");
  const colecao = db.collection("tasks");
  const objID = ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:taskData});
};

export async function deletarTask(id) {
  const db = conexao.db("taskfy_db");
  const colecao = db.collection("tasks");
  const resultado = await colecao.deleteOne({ _id: new ObjectId(id) });
  return resultado;
};
