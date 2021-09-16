const { Router } = require('express');
const { authMiddleware } = require('../../middleware/auth.middleware');
const { getTodos, createTodo, updateTodoCompleted, updateTodoImportant, deleteTodo } = require('../../controllers/todo/todo');

const router = Router();

router.post('/create', authMiddleware, async (req, res) => createTodo (req, res));
router.get('/all', authMiddleware, async (req, res) => getTodos (req, res));
router.put('/completed', authMiddleware, async (req, res) => updateTodoCompleted (req, res));
router.put('/important', authMiddleware, async (req, res) => updateTodoImportant (req, res));
router.delete('/remove', authMiddleware, async (req, res) =>  deleteTodo (req, res));

module.exports = router;`
`