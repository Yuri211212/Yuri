import React from 'react';
import { connect } from 'react-redux';

import { actionCreateTodo, getTodosThunk, actionGetTodosLocalStorage, actionRemoveAllTodos } from '../store/todos';
import { actionShowModal, actionHideModal } from '../store/modals';

import { Profile } from '../components/Profile';

class ProfileContainer extends React.Component {
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
        }
        this.props.addToMyList(data);
        this.setState({ localState: '' });
    };

    deleteFromMyList = (idFromRemoved, titleToDo) => {
        this.props.actionShowModal({ name: 'modalDelete', id: idFromRemoved, title:titleToDo, })
    };

    saveToLocalStorage = () => {
        window.localStorage.setItem('tasks', JSON.stringify(this.props.myList))
    };

    getFromLocalStorage = () => {
        const savedTasks = window.localStorage.getItem('tasks')
        const resultJSON = JSON.parse(savedTasks)
        resultJSON && this.props.getFromLocalStorage(resultJSON.task)
    };

    deleteFromLocalStorage = () => {
        window.localStorage.removeItem('tasks')
        this.props.deleteFromLocalStorage()
    };

    componentDidMount() {
        this.getFromLocalStorage()
        // this.props.getTodosThunk()
    };

    render() {
        return <Profile
            localState={this.state.localState}
            myList={this.props.myList}
            addToMyList={this.addToMyList}
            changeInput={this.changeInput}
            deleteFromMyList={this.deleteFromMyList}
            saveToLocalStorage={this.saveToLocalStorage}
            deleteFromLocalStorage={this.deleteFromLocalStorage} />
    }
};

const mapStateToProps = (state) => {
    return { myList: state.taska }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToMyList: (data) => dispatch(actionCreateTodo(data)),
        getTodosThunk: () => dispatch(getTodosThunk()),
        getFromLocalStorage: (data) => dispatch(actionGetTodosLocalStorage(data)),
        deleteFromLocalStorage: () => dispatch(actionRemoveAllTodos()),
        actionShowModal:(data) => dispatch(actionShowModal(data)),
        actionHideModal:() => dispatch(actionHideModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)