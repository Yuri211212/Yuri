const todo = require('../../models/todo/index');
const Todo = require('../../models/todo/index');

async function createTodo(req, res) {
    try {
        const { title, description } = req.body;

        const todo = new Todo({ title, description, owner: req.user.userId });

        await todo.save();

        res.status(201).json({ todo });

    } catch (error) {
        res.status(500).json({ message: 'Smth went wrong during creating task' })
    }
};

async function getTodos (req, res) {
    try {
        const todos = await Todo.find({ owner: req.user.userId });

        res.status(201).json(todos);

    } catch (error) {
        res.status(500).json({ message: 'Smth went wrong during downloading your tasks' })
    }
};

async function updateTodoCompleted (req, res) {
    try {
        const { todoId } = req.body;
        const todo = await Todo.findOne({ _id: todoId, owner: req.user.userId });

        todo.completed = !todo.completed;

        await todo.save();

        res.json({ message: 'You successfully marked task as completed' });

    } catch (error) {
        res.status(500).json({ message: 'Smth went wrong during changing task status' })
    }
};

async function updateTodoImportant (req, res) {
    try {
        const { todoId } = req.body;
        const todo = await Todo.findOne({ _id: todoId, owner: req.user.userId });

        todo.important = !todo.important;

        await todo.save();

        res.json({ message: 'You successfully marked task as important' });

    } catch (error) {
        res.status(500).json({ message: 'Smth went wrong during changing task status' })
    }
};

async function deleteTodo(req, res) {
    try {
        const { id } = req.body;
        const todos = await Todo.findByIdAndDelete({ _id: id, owner: req.user.userId });

        res.status(201).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Smth went wrong during removing task' })
    }
};



module.exports = { createTodo, getTodos, updateTodoCompleted, updateTodoImportant, deleteTodo }