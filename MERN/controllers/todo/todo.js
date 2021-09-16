const todo = require('../../models/todo/index');
const Todo = require('../../models/todo/index');

async function createTodo(req, res) {
    try {
        const { title } = req.body;

        const todo = new Todo({ title, owner: req.user.userId });

        await todo.save();

        res.status(201).json({ todo });

    } catch (error) {
        res.status(500).json({ message: 'При попытке сохранить задачу что-то пошло не так' })
    }
};

async function getTodos (req, res) {
    try {
        const todos = await Todo.find({ owner: req.user.userId });

        res.status(201).json(todos);

    } catch (error) {
        res.status(500).json({ message: 'Не удалось загрузить список todo' })
    }
};

async function updateTodoCompleted (req, res) {
    try {
        const { todoId } = req.body;
        const todo = await Todo.findOne({ _id: todoId, owner: req.user.userId });

        todo.completed = !todo.completed;

        await todo.save();

        res.json({ message: 'Вы успешно обновили статус completed' });

    } catch (error) {
        res.status(500).json({ message: 'Не удалось обновить статус completed' })
    }
};

async function updateTodoImportant (req, res) {
    try {
        const { todoId } = req.body;
        const todo = await Todo.findOne({ _id: todoId, owner: req.user.userId });

        todo.important = !todo.important;

        await todo.save();

        res.json({ message: 'Вы успешно обновили статус important' });

    } catch (error) {
        res.status(500).json({ message: 'Не удалось обновить статус important' })
    }
};

async function deleteTodo(req, res) {
    try {
        const { id } = req.body;
        const todos = await Todo.findByIdAndDelete({ _id: id, owner: req.user.userId });

        res.status(201).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Не удалось удалить задачу' })
    }
};



module.exports = { createTodo, getTodos, updateTodoCompleted, updateTodoImportant, deleteTodo }