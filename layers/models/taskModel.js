const { ObjectId } = require('mongodb');
const connect = require('./connection');

const postTask = async (task) => {
  const db = await connect();
  const { insertedId } = await db
    .collection('tasks')
    .insertOne({ task });
  return insertedId;
};

const getTasks = async () => {
  const db = await connect();
  const tasks = await db
    .collection('tasks')
    .find().toArray();
  return tasks;
};

const putTask = async (id, { taskName, priorityLevel, status }) => {
  const db = await connect();
  await db.collection('tasks')
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { task: { taskName, priorityLevel, status } } },
    );
};

const deleteTask = async (id) => {
  const db = await connect();
  await db.collection('tasks')
    .deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  postTask,
  getTasks,
  putTask,
  deleteTask,
};
