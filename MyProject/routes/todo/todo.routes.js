const { Router } = require('express');
const { check } = require('express-validator');
const { authMiddleware } = require('../../middleware/auth.middleware');
const { getTodos, createTodo, updateTodoCompleted, updateTodoImportant, deleteTodo } = require('../../controllers/todo/todo');

const router = Router();

router.post('/create', [
    check('title', 'Title is too long').isLength({ max: 30 })
], authMiddleware,  async (req, res) => createTodo (req, res));

router.get('/all', authMiddleware, async (req, res) => getTodos (req, res));
router.put('/completed', authMiddleware, async (req, res) => updateTodoCompleted (req, res));
router.put('/important', authMiddleware, async (req, res) => updateTodoImportant (req, res));
router.delete('/delete', authMiddleware, async (req, res) =>  deleteTodo (req, res));

module.exports = router;`
`