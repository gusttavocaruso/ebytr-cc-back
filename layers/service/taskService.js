const mdl = require('../models/taskModel');
const vldt = require('../../utils/validtFuncs');

const taskCreate = async (task) => {
  vldt.taskEntriesValidation(task);

  const taskID = await mdl.postTask(task);
  return taskID;
};

const tasksSearch = async () => {
  const tasks = await mdl.getTasks();
  return tasks;
};

const taskUpdate = async (id, task) => {
  vldt.taskEntriesValidation(task);

  await mdl.putTask(id, task);
};

const taskRemove = async (id) => {
  await mdl.deleteTask(id);
};

module.exports = {
  taskCreate,
  tasksSearch,
  taskUpdate,
  taskRemove,
};
