const { Router } = require('express');
const ctrll = require('./layers/controller/taskController');
const router = Router();

router.get('/tasks', ctrll.searchTasks);
router.post('/tasks/new', ctrll.createTask);
router.put('/task/:id', ctrll.updateTask);
router.delete('/task/:id', ctrll.removeTask);

module.exports = router;
