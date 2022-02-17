const joi = require('@hapi/joi');
const errHandle = require('./errHandle');

const taskEntriesValidation = ({ taskName, priorityLevel, status }) => {
  const taskSchema = joi.object({
    taskName: joi.string().min(4).required(),
    priorityLevel: joi.string().required(),
    status: joi.string().required(),
  });
  const { error } = taskSchema.validate({ taskName, priorityLevel, status });
  if (error) throw errHandle(400, 'Invalid entries. Please, try again.');
};

module.exports = {
  taskEntriesValidation,
};
