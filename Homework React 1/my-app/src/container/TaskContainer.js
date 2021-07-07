import React from 'react';
import { connect } from 'react-redux';

import { actionCreateTodo, getTodosThunk, actionGetTodosLocalStorage, actionRemoveAllTodos } from '../store/todos';
import { actionShowModal, actionHideModal } from '../store/modals';
import { getTasks } from '../store/todos/selectors';

import { Task } from '../components/Task';

const enums = {
    tasks: 'tasks'
};

class TaskContainer extends React.Component {
    constructor() {
        super()
    };

    state = {
        localState: ''
    };

    changeInput = (event) => {
        this.setState({ localState: event.target.value })
    };

    addToMyList = () => {
        const data = {
            title: this.state.localState,
            id: Date.now()
        };
        if (!this.state.localState) {
            return console.log("Поле пустое")
        }
        this.props.addToMyList(data);
        this.setState({ localState: '' });

    };

    deleteFromMyList = (idFromRemoved, titleToDo) => {
        this.props.actionShowModal({ name: 'modalDeleteTask', id: idFromRemoved, title: titleToDo })
    };

    saveToLocalStorage = () => {
        window.localStorage.setItem(enums.tasks, JSON.stringify(this.props.myList))
    };

    getFromLocalStorage = () => {
        const savedTasks = window.localStorage.getItem(enums.tasks)
        const resultJSON = JSON.parse(savedTasks)
        resultJSON && this.props.getFromLocalStorage(resultJSON.task)
    };

    deleteFromLocalStorage = () => {
        window.localStorage.removeItem(enums.tasks)
        this.props.deleteFromLocalStorage()
    };

    componentDidMount() {
        this.getFromLocalStorage()
        // this.props.getTodosThunk()
    };

    showEditTaskModal = (taskId) => {
        this.props.actionShowModal({ name: 'modalEditTask', taskId })
    };

    render() {
        return <Task
            localState={this.state.localState}
            myList={this.props.myList}
            addToMyList={this.addToMyList}
            changeInput={this.changeInput}
            deleteFromMyList={this.deleteFromMyList}
            saveToLocalStorage={this.saveToLocalStorage}
            deleteFromLocalStorage={this.deleteFromLocalStorage}
            showEditTaskModal={this.showEditTaskModal} />
    }
};

const mapStateToProps = (state) => {
    return { myList: getTasks(state) }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToMyList: (data) => dispatch(actionCreateTodo(data)),
        getTodosThunk: () => dispatch(getTodosThunk()),
        getFromLocalStorage: (data) => dispatch(actionGetTodosLocalStorage(data)),
        deleteFromLocalStorage: () => dispatch(actionRemoveAllTodos()),
        actionShowModal: (data) => dispatch(actionShowModal(data)),
        actionHideModal: () => dispatch(actionHideModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)