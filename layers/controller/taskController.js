const srvc = require('../service/taskService');

const createTask = async (req, res, next) => {
  try {
    const task = req.body;
    const taskID = await srvc.taskCreate(task);

    return res.status(201).json({ taskID, task });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const searchTasks = async (_req, res, next) => {
  try {
    const tasks = await srvc.tasksSearch();
    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = req.body;
    await srvc.taskUpdate(id, task);

    return res.status(200).json({ updateTo: task });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const removeTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await srvc.taskRemove(id);

    return res.status(200)
      .json({ message: `task ${id} was removed successfully` });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = {
  createTask,
  searchTasks,
  updateTask,
  removeTask,
};
