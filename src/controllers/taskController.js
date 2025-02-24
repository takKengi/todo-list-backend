import { listarTasks, criarTask, atualizarTask, deletarTask } from "../models/taskModels.js";

export async function listarTask(req, res) {
  const tasks = await listarTasks();
  res.status(200).json(tasks);
};

export async function newTasks(req, res) {
  const newTask = req.body;
  try {
    const createdTask = await criarTask(newTask); 
    res.status(200).json(createdTask); 
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  };
};

export async function tasksId(req, res) {
  const id = req.params;
  const updateData = req.body;

  try {
    const result = await atualizarTask(id, updateData);
    if (result.modifiedCount === 0) {
      return res.status(404).json({"Erro":"Tarefa não encontrada"});
    }
    res.status(200).json({"Sucesso":"Tarefa atualizada com sucesso"});
  } catch (erro) {
    res.status(500).json({"Erro":"Falha na requisição"});
  }
};

export async function delTasks(req, res) {
  const { id } = req.params;

  try {
    const result = await deletarTask(id); 
    if (result.deletedCount === 0) {
      return res.status(404).json({"Erro":"Tarefa não encontrada"});
    }
    res.status(200).json({"Sucesso":"Tarefa removida com sucesso" });
  } catch (erro) {
    res.status(500).json({"Erro":"Falha na requisição"});
  };
};